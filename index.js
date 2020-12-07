const Discord = require('discord.js')
const bot = new Discord.Client()
const fs = require('fs')
const { token, prefix } = require('./config.json')

bot.login(token)

bot.on('ready', () => {
  // Load commands
  fs.readdirSync('./commands/').forEach(command => {
    console.log(`Loading command: ${command}`)
  
    let props = require(`./commands/${command}`)
    bot.commands.set(command.replace('.js', ''), props)
  })

  console.log('SaberBot is up and running!')
})

bot.on('message', (message) => {
  if (message.author.bot) return
  if (!message.content.startsWith(prefix)) return

  const args = message.content.split(' '),
        command = bot.commands.get(args[0].split(prefix)[1])

  if(command) command.run(bot, message, args)
})