const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    let kUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!kUser) return message.channel.send("Can't find user!");
    let kReason = args.join(" ").slice(22);
    if(!message.member.hasPermission("KICK_MEMBERS")) return message.channel.send("You can't do that!");
    if(kUser.hasPermission("KICK_MEMBERS")) return message.channel.send("That person can't be kicked!");

    
    message.guild.member(kUser).kick(kReason);
    
}

module.exports.help = {
  name:"kick"
}

