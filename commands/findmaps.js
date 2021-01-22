const { find } = require('beatsaver')
const { MessageEmbed } = require('discord.js')

module.exports.info = {
  name: 'findmaps',
  usage: '$findmaps [query]',
  example: '$findmaps camellia',
}

module.exports.run = async (bot, message, args) => {
  const query = args[1]
  
  if (!query) return message.channel.send('Please provide a query to search for maps with!')

  const maps = await find(query)
  const embed = new MessageEmbed()
    .setTitle('Map Results for "' + query + '"')
    .setColor('GREEN')

  for (let i = 0; i < 6; i++) {
    const m = maps.docs[i]
    
    if (m) {
      embed.addField(m.name,
        `Downloads: ${m.stats.downloads.toLocaleString()}\nAuthor: ${m.metadata.levelAuthorName}\nLink: https://beatsaver.com/beatmap/${m.key}\nUploaded on: ${m.uploaded.split('T')[0]}`,
        true)
    }
  }

  message.channel.send(embed)
}