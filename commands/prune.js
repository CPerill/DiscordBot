module.exports = {
	name: 'prune',
	description: 'Delete old messages',
	execute(message, args) {
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
	},
};