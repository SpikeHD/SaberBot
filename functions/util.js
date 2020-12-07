const { getPlayer, searchPlayers } = require('node-scoresaber')

module.exports.getOrFindUser = async (user) => {
  let scores = null, player = null

  if (parseInt(user)) {
    // Get by ID
    player = await getPlayer(user)
    scores = await player.getTopScores()
  } else {
    // Search
    const players = await searchPlayers(user)

    // More than one result?
    if (players && players.length === 1) {
      console.log('One result')
      player = await players[0].get()
      scores = await player.getTopScores()
    }
  }

  return { scores, player }
}