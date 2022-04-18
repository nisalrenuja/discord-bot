const Discord = require("discord.js");

const TOKEN = "OTY1NDg1ODYzNzU0NjgyNDM4.Ylz4xw.1NXvYLmbMdyv3QmqoOIJGcAQK1c";

const client = new Discord.Client({
  intents: ["GUILDS", "GUILD_MESSAGES"],
});

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("messageCreate", (message) => {
  if (message.content === "ping") {
    message.reply("Welcome to SLIIT FOSS Community Discord Server");
  }
});

client.login(TOKEN);
