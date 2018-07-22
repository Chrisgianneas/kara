const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.author.iconURL;
    let helpembed = new Discord.RichEmbed()
   .setThumbnail(sicon)
   .setTitle("Markus Model:RK200")
  .setColor("#000000")
 .addField("My name is Markus...And just like you I was a slave...An object...designed to obey them. But then I chose to open my eyes, to take back my freedom and decide who I wanted to be. Now I have come to tell you that you can be your own masters.", "I've come to tell you that you don't have to obey them anymore. From this day forward, you can walk with your heads held high, you can take your destiny in your hands. Jericho is a place for those of us who want freedom. Now sure, you can stay here and continue to serve them..Or you can come with us and fight by our side.")
 



  
    message.channel.send(helpembed)
}

module.exports.help = {
  name:"Markus"
}
