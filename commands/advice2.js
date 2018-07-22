const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {
   let helpembed = new Discord.RichEmbed()
   .setColor("#3333ff")
   .setTitle("By Car")
    .addField('Remember to lock your car doors both when driving and when you stop' , 'In town, always keep your windows up')
    
    


    message.channel.send(helpembed);
}

module.exports.help = {
    name: "advice2"
  }