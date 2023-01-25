import discord
from discord.ext import commands

bot = commands.Bot(command_prefix='-', intents=discord.Intents.all())

@bot.event
async def on_ready():
    print('Logged in as {0.name}'.format(bot.user))

@bot.command()


@bot.event
async def on_message(message):
    if message.author == bot.user:
        return
    if message.author.id == 933785791581290507:

        await message.channel.send('fuck deg')

        return

bot.run('bot token her')
