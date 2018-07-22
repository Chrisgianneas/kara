const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.author.iconURL;
    let helpembed = new Discord.RichEmbed()
   .setThumbnail(sicon)
   .setTitle("Kara Model:AX400 android")
  .setColor("#e21a04")
 .addField("Alice needs me. And I need her. It's as simple as that. --Kara", "Kara is one of the three protagonists in Detroit: Become Human. She is a common housemaid android serving in the home of her owner Todd Williams and caring for his daughter Alice Williams.")





  
    message.channel.send(helpembed);
}

module.exports.help = {
  name:"Kara"
}
