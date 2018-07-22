const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

    message.channel.sendMessage({
        "embed": {
            
                title: 'This guy right below me is probably like 60 so you guys should be aware of.... HACKERMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN',
                url: 'https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg',
                "image": {
                "url": "https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg",
                
            }
            }
        });
  
    message.channel.send(helpembed);
}

module.exports.help = {
  name:"hackerman"
}
