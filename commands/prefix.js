exports.run = (client, message, args) => {
    let newPrefix = message.content.split(" ").slice(1, 2)[0];
    config.prefix = newPrefix;

    fs.writeFile("./config.json", JSON.stringify(config), (err) => console.error);
}