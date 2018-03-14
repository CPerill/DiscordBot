exports.run = (client, message, args) => {
    //check if user forgot to meantion what dice to roll
    if (args[0] == null) {
        message.channel.send("You need to include what type of dice you want to roll...");
    } else {
        console.log(args[0] + "\t" + args[1]);

        let dice = args[0].replace(/\D/g, '');
        let rolls = args[1].replace(/\D/g, '');
        let results = [];

        if (rolls != null) {
            for (let i = 1; i <= rolls; i++) {
                results.push(Math.floor((Math.random() * dice) + 1));
            }
            console.log(results);
        } else {
            results.push(Math.floor((Math.random() * dice) + 1));
        }


        if (dice == 4 || dice == 6 || dice == 8 || dice == 12 || dice == 20) {
            if (rolls == 1) {
                message.channel.send(`Ok, from rolling one d${dice} just the once I got ${results[0]}`);
            } else {
                message.channel.send(`Ok, from rolling one d${dice}, ${rolls} times I got the following\n`);
                let count = 1;
                results.forEach(function (result) {
                    message.channel.send(`Roll ${count}:\t${result}`);
                    count++;
                });
            }
        } else {
            message.channel.send("That is not a valid choice. Pick a d4, d6, d8, d12, or d20");
        }
    }
}