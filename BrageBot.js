const Discord = require("discord.js");
const bot = new Discord.Client({intents: Discord.Intents.ALL});

let wordCount = {};

bot.on("ready", () => {
    console.log(Logged in as ${bot.user.username});
});

bot.login("MTA2Nzc0OTgzOTI4NDIxMTc5Mg.GIa4fM.0psh0QtFq7Je-NT0nJOL_cRp3yNr9b-oGt2Vsw");
