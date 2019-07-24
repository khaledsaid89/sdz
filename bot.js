const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("603596381302816799")
setInterval(function() {
channel.send(`Khaled 70kg`);
}, 30)
})

client.login(process.env.BOT_TOKEN);