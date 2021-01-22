const { findMap } = require('../functions/util')
const { MessageEmbed } = require('discord.js')

module.exports.info = {
  name: 'getmap',
  usage: '$getmap [key or hash]',
  example: '$getmap e8c8',
}

module.exports.run = async (bot, message, args) => {
  const mid = args[1]

  if (!mid) return message.channel.send('Please provide the key or hash of a map!')

  const map = await findMap(mid)

  if (map) {
    const embed = new MessageEmbed()
      .setTitle(map.metadata.songName)
      .setColor('GREY')
      .setThumbnail('https://beatsaver.com' + map.coverURL)
      .setDescription(`Author: ${map.metadata.levelAuthorName}\nDownloads: ${map.stats.downloads}\nVotes: ${map.stats.upVotes}/${map.stats.downVotes} (${(map.stats.rating * 100).toFixed(2)}%)\nBPM: ${map.metadata.bpm}`)
      .addField('Description', map.description)
      .setURL(`https://beatsaver.com/beatmap/${map.key}`)
      .setFooter(`Uploaded: ${map.uploaded.split('T')[0]}`)

    console.log(map)

    message.channel.send(embed)
  } else {
    message.channel.send('There was no map found with the key/hash.')
  }
}