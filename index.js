const fs = require('fs');
const Discord = require('discord.js');
const { prefix, token } = require('./config.json');

const client = new Discord.Client();
client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);

	client.commands.set(command.name, command);
}

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(!message.content.startsWith(prefix) || message.author.bot) return;

	// Get args from user
	const args = message.content.slice(prefix.length).split(/ +/);
	const command = args.shift().toLocaleLowerCase();
	// TODO remove for testing
	console.log(command);

	if(command === 'args-info') {
		client.commands.get('args-info').execute(message, args);
	}
	else if (command === 'avatar') {
		client.commands.get('avatar').execute(message);
	}
	else if (command === 'ping') {
		client.commands.get('ping').execute(message);
	}
	else if (command === 'prune') {
		client.commands.get('prune').execute(message, args);
	}
	else if (command === 'server') {
		client.commands.get('server').execute(message);
	} else if (command === 'user-info') {
		client.commands.get('user-info').execute(message);
	}

});

client.login(token);