const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
// const fs = require('fs');
// const ffmpeg = require('ffmpeg');

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

	if(command === 'server') {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	else if(command === 'user-info') {
		message.channel.send(`Your username is: ${message.author.username}\nYour ID is: ${message.author.id}`);
	}
	else if (command === 'args-info') {
		if(!args.length) {
			return message.channel.send(`You didn't include any arguments, ${message.author}`);
		} else if(args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	}
	else if (command === 'avatar') {
		if(!message.mentions.users.size) {
			return message.reply(`Your avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	}
	else if (command === 'prune') {
		const amount = parseInt(args[0]) + 1;

		if(isNaN(amount)) {
			return message.reply('You did not enter a valid number!');
		}
		else if(amount < 2 || amount > 3) {
			return message.reply('You need to input a number between 1 and 2');
		}

		message.channel.bulkDelete(amount).catch(err => {
			console.error(err);
			message.channel.send('Error while trying to prune messages on this channel!');
		});
	}
});

client.login(token);