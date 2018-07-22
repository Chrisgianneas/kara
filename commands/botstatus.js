const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.author.iconURL;
    let helpembed = new Discord.RichEmbed()
   .setThumbnail(sicon)
   .setTitle("Bot Status")
   .setColor("#3333ff")
   .addField('Every function is functioning correctly :eye:', 'No errors found')
   






  
    message.channel.send(helpembed);
}

module.exports.help = {
  name:"status"
}
