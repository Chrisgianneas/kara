const Discord = require("discord.js");


module.exports.run = async (bot,message,args) => {
   let helpembed = new Discord.RichEmbed()
   .setColor("#33ff33")
   .setTitle("In public places:")
    .addField('Never carry large amounts of cash or valuable objects; leave them in the hotel safe','Never buy counterfeit goods')
    .addField('In a crowd, beware of pickpockets','Keep an eye on your belongings (bags, mobile phone')
    .addField('Protect your identification papers: make copie of them','Protect your belongings: dont leave anything in view')
    


    message.channel.send(helpembed);
}

module.exports.help = {
    name: "advice"
  }