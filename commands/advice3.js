const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {
   let helpembed = new Discord.RichEmbed()
   .setColor("#ff3333")
   .setTitle("Dont forget")
    .addField('Before going to sea or to the mountains, check the weather forecast and inform others of your itinerary', 'Always take the equipment best suited')
    
    


    message.channel.send(helpembed);
}

module.exports.help = {
    name: "advice3"
  }