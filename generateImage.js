const Canvas = require("canvas");
const Discord = require("discord.js");
const background =
  "https://drive.google.com/file/d/1_VWUKkH_vlOGZyQhmpeDM8Gn5zIs6AH4/view?usp=sharing";

const dim = {
  height: 675,
  width: 1200,
  margin: 50,
};

const av = {
  size: 256,
  x: 480,
  y: 170,
};

const generateImage = async (member) => {
  let username = member.user.username;
  let discriminator = member.user.discriminator;
  let avatarURL = member.user.displayAvatarURL({
    format: "png",
    dynamic: false,
    size: av.size,
  });
  const canvas = Canvas.createCanvas(dim.width, dim.height);
  const ctx = canvas.getContext("2d");

  const backgroundImage = await Canvas.loadImage(background);
  ctx.drawImage(backgroundImage, 0, 0, canvas.width, canvas.height);
  //draw black rectangle

  ctx.fillStyle = "rgba(0, 0, 0, 0.5)";
  ctx.fillRect(
    dim.margin,
    dim.margin,
    dim.width - dim.margin * 2,
    dim.height - dim.margin * 2
  );
  const avatar = await Canvas.loadImage(avatarURL);
  ctx.save();
  ctx.beginPath();
  ctx.arc(
    (av.x + av.y) / 2,
    (av.y + av.size) / 2,
    av.size / 2,
    0,
    Math.PI * 2,
    true
  );
  ctx.closePath();
  ctx.clip();
  ctx.drawImage(avatar, av.x, av.y);
  ctx.restore();

  //write in text
  ctx.fillStyle = "white";
  ctx.textAlign = "center";

  ctx.font = "bold 50px Roboto";

  const attachment = new Discord.MessageAttachment(
    canvas.toBuffer(),
    "welcome-image.png"
  );
  return attachment;
};

module.exports = generateImage;
