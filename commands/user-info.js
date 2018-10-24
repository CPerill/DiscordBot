module.exports = {
	name: 'user-info',
	description: 'Gives info about the user who asks the command',
	execute(message) {
		message.channel.send(`Your username is: ${message.author.username}\nYour ID is: ${message.author.id}`);
	},
};