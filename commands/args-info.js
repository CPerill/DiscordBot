module.exports = {
	name:'args-info',
	description: 'For testing arguments callback',
	execute(message, args, command) {
		if(!args.length) {
			return message.channel.send(`You didn't include any arguments, ${message.author}`);
		} 
		else if (args[0] === 'foo') {
			return message.channel.send('bar');
		}

		message.channel.send(`Command name: ${command}\nArguments: ${args}`);
	},
};