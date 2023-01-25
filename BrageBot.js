const Discord = require("discord.js");
const bot = new Discord.Client({intents: Discord.Intents.ALL});

let wordCount = {};

bot.on("ready", () => {
    console.log(Logged in as ${bot.user.username});
});

bot.login("bot token her");