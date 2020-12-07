
const {MessageEmbed} = require('discord.js')

module.exports.run = async (bot, message, args) => {
  const ssid = args[1]
  let { scores, player } = await getOrFindUser(ssid).catch(e => {})

  if (player) {
    
  }
}