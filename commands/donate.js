const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {

    let sicon = message.author.iconURL;
    let helpembed = new Discord.RichEmbed()
   .setThumbnail(sicon)
   .setTitle("Donate")
   .setColor('#3333ff')
   .addField('Feel free to donate :)', 'paypal.me/chrisgianneas')




  
    message.author.send(helpembed);
}

module.exports.help = {
    name: "donate"
  }