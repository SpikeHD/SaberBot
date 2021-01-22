const { MessageEmbed } = require('discord.js')

module.exports.run = (bot, message, args) => {
  const embed = new MessageEmbed()
    .setTitle('Help & Commands')
    .setColor('RED')
    .setThumbnail(bot.user.avatarURL())

  bot.commands.forEach(c => {
    if (!c.info) return

    embed.addField(c.info.name, `Usage: \`${c.info.usage}\`\nExample: \`${c.info.example}\``)
  })

  message.channel.send(embed)
}