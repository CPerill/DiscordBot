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
    console.log("Args are " + args);
    const command = args.shift().toLowerCase();
    console.log("Command is " + command);

    if(command === 'help') {

        var prefix_msg;
        if(prefix == "!") {
            prefix_msg = `\nType \'${prefix}prefix\' to change the prefix command from \'${prefix}' to something else. For example, \'${prefix}prefix/' will change the command syntax from \'${prefix}prefix to /prefix`;
        } else {
            prefix_msg = `\nType \'${prefix}prefix\' to change the prefix command from \'${prefix}' to something else. For example, \'${prefix}prefix !' will change the command syntax from \'${prefix}prefix to !prefix`;
        }
        message.channel.send(`Here's the help menu, ya filthy animal: \
        \nTyping \'${prefix}help\' brings up this menu \
        \nTyping \'${prefix}ping\' will have me reply with \'pong!\' back \
        \nTyping \'${prefix}foo\' will have me reply with \'bar!\' back \
        \nTyping \'${prefix}rtd\' will have me roll some dice. First param will be the dice number, second will be the number of rolls you need. For example to roll a d20 twice, type \'${prefix}rtd d20 2\' \
        \n\tI will only roll a d4, d6, ,d8, d12, d20 for now. I'll assume any characters after the number are typos. I'll also assume you'll only want one roll unless told otherwise.  \
        ${prefix_msg} \
        \nThere are also commands that only ${config.owner_name} can use.`
    )

    } else if (command == "rtd") {
        //check if user forgot to meantion what dice to roll
        if(args[0] == null) {
            message.channel.send("You need to include what type of dice you want to roll...");
        } else {
            console.log(args[0] + "\t" + args[1]);

            let dice = args[0].replace(/\D/g,'');
            let rolls = args[1].replace(/\D/g,'');
            let results = [];

            if(rolls != null) {
                for(let i = 1; i <= rolls; i++) {
                    results.push(Math.floor((Math.random() * dice) + 1));
                }
                console.log(results);
            } else {
                results.push(Math.floor((Math.random() * dice) + 1));
            }


            if(dice == 4 || dice == 6 || dice == 8 || dice == 12 || dice == 20) {
                if(rolls == 1) {
                    message.channel.send(`Ok, from rolling one d${dice} just the once I got ${results[0]}`);
                } else {
                    message.channel.send(`Ok, from rolling one d${dice}, ${rolls} times I got the following\n`);
                    let count = 1;
                    results.forEach(function(result) {  
                    message.channel.send(`Roll ${count}:\t${result}`);
                    count++;
                    });
                }
            } else {
                 message.channel.send("That is not a valid choice. Pick a d4, d6, d8, d12, or d20");
            }
        }
    } else if (command == "say") {
        let textToSay = args.slice(0).join(" ");
        message.delete();
        message.channel.send(textToSay);
    } else if (message.author.id == config.owner){
        if(command == "prefix") {
            let newPrefix = message.content.split(" ").slice(1, 2)[0];
            config.prefix = newPrefix;

            fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
        } else if (command == "kick"){
            let member = message.mentions.members.first();
            let reason = args.slice(1).join(" ");

            console.log(`Kicking ${member} as per owners request`);
            member.kick(reason);
        }
        
    } else {
        message.channel.send(`Sorry. I am unable to recognise ${command}" + command + " as a command. Did you try typing ${prefix}help?`);
    }
});