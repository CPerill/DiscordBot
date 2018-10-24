module.exports = {
	name: 'role',
	description: 'Gives user their roles',
	args: true,
	usage: '<user> <role>',
	execute(message, args) {
		return message.channel.send('This command is WIP');
	},
};