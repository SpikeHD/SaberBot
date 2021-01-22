# SaberBot
Discord bot for interfacing with Scoresaber and Beatsaver

Invite link: https://discord.com/api/oauth2/authorize?client_id=785384457481355294&permissions=67584&scope=bot

# Usage

* `$user [name or id]` - Get scoresaber user information on a player using their ID or name. Will throw an error if there is more than one user with a given name
* `$scores [name or id]` - Get scoresaber leaderboard information on a player using their ID or name. Will throw an error if there is more than one user with a given name
* `$findmaps [search query]` - Search for Beatsaver maps using a query.
* `$getmap [hash or key]` - Get information on a Beatsaver map using its hash or ID.

The Scoresaber and Beatsaver API wrappers used in this project were both written by me, you can check them out here:
* [ScoreSaber](https://www.npmjs.com/package/node-scoresaber)
* [Beatsaver](https://www.npmjs.com/package/beatsaver)

# Setup

* Clone the repo (`git clone https://github.com/SpikeHD/SaberBot.git`)
* Set up a bot user [here](https://discord.com/developers/applications)
* Invite the bot to your server (use the OAuth section to generate a link by selecting the "bot" checkbox)
* Create a copy of the example configuration and fill in the values (`cp example.config.json config.json`)
* `npm install` to install dependancies
* `node index`

# Contributing

Issues, PRs, etc. all welcome!
