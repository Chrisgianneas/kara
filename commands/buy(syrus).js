const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.author.iconURL;
    let helpembed = new Discord.RichEmbed()
   .setThumbnail(sicon)
   .setTitle("How to buy Syrus:")
   .setColor("#3333ff")
   .addField('Click here to download', 'https://bit.ly/2zafSuJ')
   






  
    message.channel.send(helpembed);
}

module.exports.help = {
  name:"buy"
}
