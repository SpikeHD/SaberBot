const { getPlayer, searchPlayers } = require('node-scoresaber')
const { MessageEmbed, Message } = require('discord.js')
const diffMap = {
  1: 'Easy',
  3: 'Normal',
  5: 'Hard',
  7: 'Expert',
  9: 'Expert+'
}

module.exports.run = async (bot, message, args) => {
  const ssid = args[1]
  let scores, player

  if (!ssid) return message.channel.send('You must provide a user ID or username to get the scores of!')

  if (parseInt(ssid)) {
    // Get by ID
    player = await getPlayer(ssid).catch(e => {
      return message.channel.send('There was an error processing that. Was the ID valid?')
    })

    scores = await player.getTopScores()
  } else {
    // Search
    const players = await searchPlayers(ssid).catch(e => {
      return message.channel.send('There was an error processing that. Try using a more specific username')
    })

    // More than one result?
    if (player && players.length > 1) {
      const embed = new MessageEmbed()
        .setTitle('Player Results')

      for (let i = 0; i <= 10; i++) {
        const p = players[i]
      }

      message.channel.send(embed)
    } else if (player) {
      player = await players[0].get()
      scores = await player.getTopScores()
    }
  }

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
  }
}