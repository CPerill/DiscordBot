exports.run = (client, message, args) => {
    let textToSay = args.slice(0).join(" ");
        message.delete();
        message.channel.send(textToSay);
}