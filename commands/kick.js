exports.run = (client, message, [mention, ...reason]) => {
    const modRole = message.guild.roles.find("name", "Mods");
    if(!modRole) {
        return console.log("Mod role dosen't exist");
    }

    if(!mesage.member.roles.has(modRole.id)) {
        return message.reply("You don't have permission to use that");
    }

    if(message.mentions.members.size === 0) {
        return message.reply("You need to meantion a user if you want to kick someone");
    }

    if(!message.guild.me.hasPermissions("KICK_MEMBERS")) {
        return message.reply("");
    }

    const kickMember = message.mentions.members.first();

    kickMember.kick(reason.join(" ").then(member => {
        message.reply(`Successfully kicked ${member.user.username}`);
    }));
}