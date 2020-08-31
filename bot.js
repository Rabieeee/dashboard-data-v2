const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
client.user.setActivity(`🍥 Rabieeeeeeee`)
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by DayZoonHD")


client.login(process.env.BOT_TOKEN);
