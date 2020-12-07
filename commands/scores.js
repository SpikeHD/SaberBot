const { getOrFindUser } = require('../functions/util')
const { MessageEmbed } = require('discord.js')
const diffMap = {
  1: 'Easy',
  3: 'Normal',
  5: 'Hard',
  7: 'Expert',
  9: 'Expert+'
}

module.exports.run = async (bot, message, args) => {
  const ssid = args[1]
  let { scores, player } = await getOrFindUser(ssid).catch(e => {})

  if (player) {
    const embed = new MessageEmbed()
      .setTitle('Top Scores for ' + player.name)
      .setThumbnail(player.avatar_url)
      .setColor('BLUE')

    scores.map(s => {
      embed.addField(`${s.songName} (${s.songAuthorName}) - ${s.levelAuthorName}`,
        `Difficulty: ${diffMap[s.difficulty]}\nScore: ${s.score.toLocaleString()}\nRank: ${s.rank}\nPP: ${s.pp}`, true)
    })

    message.channel.send(embed)
  } else {
    message.channel.send('There was an error getting scores for that user.')
  }
}