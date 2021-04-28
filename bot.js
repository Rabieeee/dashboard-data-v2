const Discord = require('discord.js');
const client = new Discord.Client();


client.on('ready', () => {
console.log(`Logged in as ${client.user.tag}!`);
console.log("Streamstatus by DayZoonHD")

client.user.setActivity(`🍥 Rabieeeeeeer `, {
type: "PLAYING",
url: "https://www.twitch.tv/loltyler1"})
    .then(presence => console.log(`Your Status has been set to  ${presence.game ? presence.game.none : 'none'}`))
    .catch(console.error);
});

client.login(process.env.BOT_TOKEN);
