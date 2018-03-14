exports.run = (client, message, args) => {

    const config = require("../config.json");
    var prefix_msg;
    let prefix = config.prefix;

    if (config.prefix == "!") {
        prefix_msg = `\nType \'${prefix}prefix\' to change the prefix command from \'${prefix}' to something else. For example, \'${prefix}prefix/' will change the command syntax from \'${prefix}prefix to /prefix`;
    } else {
        prefix_msg = `\nType \'${prefix}prefix\' to change the prefix command from \'${prefix}' to something else. For example, \'${prefix}prefix !' will change the command syntax from \'${prefix}prefix to !prefix`;
    }
    message.channel.send(`Here's the help menu, ya filthy animal: \
        \nTyping \'${prefix}help\' brings up this menu \
        \nTyping \'${prefix}rtd\' will have me roll some dice. First param will be the dice number, second will be the number of rolls you need. For example to roll a d20 twice, type \'${prefix}rtd d20 2\' \
        \n\tI will only roll a d4, d6, ,d8, d12, d20 for now. I'll assume any characters after the number are typos. I'll also assume you'll only want one roll unless told otherwise.  \
        ${prefix_msg} \
        \nThere are also commands that only ${config.owner_name} can use.`
    )

}