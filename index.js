const Discord = require("discord.js");
const generateImage = require("./generateImage");
require("dotenv").config();
const TOKEN = process.env.DISCORD_TOKEN;

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_MEMBERS"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.content === "Hi") {
    message.reply("Welcome to SLIIT FOSS Community Discord Server");
  } else if (message.content === "hi") {
    message.reply("Welcome to SLIIT FOSS Community Discord Server");
  } else if (message.content === "miyuru") {
    message.reply("Miyuru Balliyek");
  } else if (message.content === "akalanka") {
    message.reply("He likes cats");
  }
});

const welcomeChannelId = process.env.WELCOME_CHANNEL_ID;

client.on("guildMemberAdd", async (member) => {
  const img = await generateImage(member);
  member.guild.channels.cache.get(welcomeChannelId).send({
    content: `${member} Welcome to SLIIT FOSS Community Discord Server `,
    files: [img],
  });
});

client.login(TOKEN);
