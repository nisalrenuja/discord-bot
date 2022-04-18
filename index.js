const Discord = require("discord.js");
const { Client, Intents } = require('discord.js');
require("dotenv").config();

const generateImage = require("./generateImage");

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.content == "hi") {
    message.reply("Welcome to the server!");
  } else if (message.content == "miyuru") {
    message.reply("Miyuru playboy");
  } else if (message.content == "akalanka") {
    message.reply("Podi eka");
  } else if (message.content == "nisal") {
    message.reply("Good Boy");
  } else if (message.content == "sithum") {
    message.reply("Go deyyo");
  }
});

const welcomeChannelId = process.env.WELCOME_CHANNEL_ID;

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `${member} Welcome to the  SLIIT FOSS Community server!`,
    files: [img],
  });
});

client.login(process.env.DISCORD_TOKEN);
