const { getOrFindUser } = require('../functions/util')
const { MessageEmbed } = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const ssid = args[1]
  let { player } = await getOrFindUser(ssid).catch(e => {
    return { player: null }
  })

  if (player) {
    const embed = new MessageEmbed()
      .setTitle('ScoreSaber information for ' + player.name)
      .setThumbnail(player.avatar_url)
      .setColor('ORANGE')
      .setDescription(`Global Rank: #${player.rank}\nCountry Rank: #${player.countryRank} (${player.country})\nTotal PP: ${player.pp.toLocaleString()}\nTotal Ranked Score: ${player.totalRankedScore.toLocaleString()}\nAccuracy: ${player.averageRankedAccuracy.toFixed(2)}%`)
  
    message.channel.send(embed)
  }
}