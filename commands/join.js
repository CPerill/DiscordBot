exports.run = (client, message, args) => {
    //if message is not from a guild, we ignore the fecker
    if (!message.guild) return;

    const lettuceMP3 = 'C:/Users/Connor/Documents/GitHub/DiscordBot/lettuce.mp3';
    //const dispatcher = connection.playFile('C:/Users/Connor/Documents/GitHub/DiscordBot/lettuce.mp3');

    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
            .then(connection => {
                message.reply("I'm here!");
                if (args[0] == "lettuce") {
                    return connection.playFile('C:/Users/Connor/Documents/GitHub/DiscordBot/lettuce.mp3'); //will change to relative pass after
                }
            })
            .then(dispatcher => {
                dispatcher.on('error', console.error);
            })
            .catch(console.error);
    } else {
        message.reply("Stop fucking around, you need to be in a voice channel first!");
    }
}