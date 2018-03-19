exports.run = (client, message, args) => {
    //if message is not from a guild, we ignore the fecker
    if (!message.guild) return;
    if (message.member.voiceChannel) {
        message.member.voiceChannel.join()
            .then(connection => {
                message.reply("I'm here!");
            })
            .catch(console.error);
    } else {
        message.reply("Stop fucking around, you need to be in a voice channel first!");
    }
}