const { memberNicknameMention } = require("@discordjs/builders");
const Discord = require("discord.js");
const { type } = require("os");
const { intersection } = require("zod");

const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]
});

Client.login(process.env.TOKEN)

const prefix = "$";

Client.on("ready", () => {
    console.log("Modération opérationnel")
    Client.user.setActivity("la modérations" , {type: 'COMPETING' });
});