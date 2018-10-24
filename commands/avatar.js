module.exports = {
	name: 'avatar',
	description: 'Displays avatar of users meantioned',
	execute(message) {
		if(!message.mentions.users.size) {
			return message.reply(`Your avatar: ${message.author.displayAvatarURL}`);
		}

		const avatarList = message.mentions.users.map(user => {
			return `${user.username}'s avatar: ${user.displayAvatarURL}`;
		});

		message.channel.send(avatarList);
	},
};