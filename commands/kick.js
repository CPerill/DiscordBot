module.exports = {
	name: 'kick',
	description: 'Kicks a user',
	args: false,
	guideOnly: true,
	usage: '@<username>',
	execute(message) {

		if(!message.mentions.users.size) {
			return message.channel.send('You never gave a user to kick!');
		}

		const taggedUser = message.mentions.users.first();

		return message.channel.send(`You wanted to kick ${taggedUser}`);
	},
};