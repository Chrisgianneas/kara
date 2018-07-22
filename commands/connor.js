const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.author.iconURL;
    let helpembed = new Discord.RichEmbed()
   .setThumbnail(sicon)
   .setTitle("Connor Model:RK800")
  .setColor("#0344ad")
 .addField("I have no side, I was designed to stop deviants and that's what I intend to do.", "Connor is one of the three protagonists in Detroit: Become Human. Built as an advanced prototype, he is designed to assist human law enforcement; specifically in investigating cases involving deviant androids.")





  
    message.channel.send(helpembed);
}

module.exports.help = {
  name:"Connor"
}
