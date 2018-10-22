const Discord = require('discord.js');
const client = new Discord.Client();
const { prefix, token } = require('./config.json');
// const fs = require('fs');
// const ffmpeg = require('ffmpeg');

client.on('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if(message.content.startsWith(`${prefix}server`)) {
		message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	}
	else if(message.content.startsWith(`${prefix}user-info`)) {
		message.channel.send(`Your username is: ${message.author.username}\nYour ID is: ${message.author.id}`);
	}
});

client.login(token);