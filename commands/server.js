module.exports = {
	name: 'server',
	description: 'Gives server info',
	execute(message) {
		return message.channel.send(`Server name: ${message.guild.name}\nTotal members: ${message.guild.memberCount}`);
	},
};