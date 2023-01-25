const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === '!hello') {
        msg.reply(`Hello, my name is ${client.user.tag}!`);
    }
});

client.login('your_token_here');
