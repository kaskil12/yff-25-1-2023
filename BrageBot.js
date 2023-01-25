const Discord = require("discord.js");
const bot = new Discord.Client({intents: Discord.Intents.ALL});

let wordCount = {};

bot.on("ready", () => {
    console.log(Logged in as ${bot.user.username});
});
client.on('message',
function (messages) {         
if(messages.content.toLocaleLowerCase()==='hello'
   messages.channel.send('hello' + ''- + messages.author.username);
bot.login("bot token her");
