exports.run = (client) => {
    console.log(`Ready to serve on ${client.channels.size} channel(s) on ${client.guilds.size} server(s), for a total of ${client.users.size} user(s).`);
}