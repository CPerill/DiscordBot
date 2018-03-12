const Discord = require("discord.js");
const config = require("./config.json");
const fs = require("fs");

const client = new Discord.Client();

client.login(config.token);
const prefix = config.prefix;

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (message) => {

    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/g);
    const command = args.shift().toLowerCase();

    if(command === 'help') {

        var prefix_msg;
        if(prefix == "!") {
            prefix_msg = "\nType \'" + prefix + "prefix\' to change the prefix command from \'" + prefix + "' to something else. For example, \'" + prefix + "prefix /' will change the command syntax from \'" + prefix + "prefix \
            to /prefix"
        } else {
            prefix_msg = "\nType \'" + prefix + "prefix\' to change the prefix command from \'" + prefix + "' to something else. For example, \'" + prefix + "prefix !' will change the command syntax from \'" + prefix + "prefix \
            to !prefix"
        }
        message.channel.send("Here's the help menu, ya filthy animal: \
        \nTyping \'" + prefix + "help\' brings up this menu \
        \nTyping \'" + prefix + "ping\' will have me reply with \'pong!\' back \
        \nTyping \'" + prefix + "foo\' will have me reply with \'bar!\' back \
        \nTyping \'" + prefix + "rtd\' will have me roll some dice. First param will be the dice number, second will be the number of rolls you need. For example to roll a d20 once, type \'" + prefix + "rtd d20 1\'. \
        \n\tTo roll a d20 and a d6 once each, type \'" + prefix + "rtd d20 1 d6 1\' \
        \n"
        + prefix_msg)

    } else if (command == "rtd") {
        
        message.channel.send("I'll roll the dice later");
        //const args = message.content.slice(prefix.length).trim().split(/ +/g);
        //const command = args.shift().toLowerCase();
    } else if (command == "prefix" && message.author.id == config.owner){
        let newPrefix = message.content.split(" ").slice(1, 2)[0];
        config.prefix = newPrefix;

        fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
    } else {
        message.channel.send("Sorry. I am unable to recognise " + command + " as a command. Did you try typing " + prefix + "help?");
    }
});