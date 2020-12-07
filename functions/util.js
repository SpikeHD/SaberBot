const { getPlayer, searchPlayers } = require('node-scoresaber')
const { getByHash, getByKey } = require('beatsaver')

module.exports.getOrFindUser = async (user) => {
  let scores, player

  if (parseInt(user)) {
    // Get by ID
    player = await getPlayer(user)
    scores = await player.getTopScores()
  } else {
    // Search
    const players = await searchPlayers(user)

    // More than one result?
    if (players && players.length === 1) {
      player = await players[0].get()
      scores = await player.getTopScores()
    }
  }

  return { scores, player }
}

module.exports.findMap = async (hashOrKey) => {
  if (hashOrKey.length > 6) {
    // Asssume hash
    return await getByHash(hashOrKey)
  } else {
    // Assume key
    return await getByKey(hashOrKey)
  }
}