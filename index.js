const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token, owner } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

/**
 * Dynamic command reading, handy way to add commands in future
 */
const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {

	if(!message.content.startsWith(prefix) || message.author.bot || message.author.id !== owner) return;

	// Get args from user
	const args = message.content.slice(prefix.length).split(/ +/);
	const commandName = args.shift().toLocaleLowerCase();

	if(!client.commands.has(commandName)) return;

	const command = client.commands.get(commandName);

	if(command.guildOnly && message.channel.type !== 'test') {
		return message.reply('I can\'t execute that command inside a DM!');
	}

	if(command.args && !args.length) {
		let reply = `You didn't provide any arguments, ${message.author}`;

		if(command.usage) {
			reply += `The proper usage would be: '${prefix}${command.name} ${command.usage}'`;
		}

		return message.channel.send(reply);
	}

	try {
		command.execute(message, args);
	}
	catch (error) {
		console.error(error);
		message.reply('We\'d an issue opening that command!');
	}

});

client.login(token);