const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let sicon = message.author.iconURL;
    let helpembed = new Discord.RichEmbed()
   .setThumbnail(sicon)
   .setTitle("Commands")
 .addField("doggo", "Sends a picture of a dog ")
 .setColor("#3333ff")
 .addField("mute", "Mutes the mentioned user for as long as you told it to")
 .addField("ban", "Bans the mentioned user")
.addField("kick", "Kicks the mentioned user")
.addField("purge", "Deletes the amount of message you told it to")
.addField("addrole", "Adds a role to the mentioned user")
.addField('removerole', "Removes a role from the mentioned user")
.addField("serverinfo", "Shows server's info")
.addField("botinfo", "Shows bot's info")
.addField('say', "Bot will reply with the message you told it to say")
.addField("Overwatch", 'say !(Overwatch hero name) to display info for the specific hero) ex: !tracer')
.addField("advice", "Shows some random advices")
.addField('Detroit', 'ex: !Kara')




  
    message.author.send(helpembed);
}

module.exports.help = {
  name:"cmds"
}
