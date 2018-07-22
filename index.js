const Discord = require("discord.js")
const settings = require("./settings.json")
const bot = new Discord.Client();
const fs = require("fs");

bot.commands = new Discord.Collection();

bot.on("ready", async () => {
    console.log(`${bot.user.username} is in ${bot.guilds.size} servers`);
    bot.user.setActivity("with Alice", {type: "PLAYING"});
  
  });

   bot.on('message', (message) => {

if(message.content == 'hello')
    message.reply('hi human!')


else if(message.content == 'bacon nudes')
  message.reply('https://media.giphy.com/media/w9S0lkkp7aLu/giphy.gif')

  else if(message.content == 'No u')
   message.reply('no u')
 
   else if(message.content == 'no u')
   message.reply('no u')

   if(message.content.includes('hax')) {
    message.reply('YOU MEAN HACKERMAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAN https://i.ytimg.com/vi/KEkrWRHCDQU/maxresdefault.jpg')
  }



});
   



   fs.readdir("./commands/", (err, files) => {

    if(err) console.log(err);
    let jsfile = files.filter(f => f.split(".").pop() === "js")
    if(jsfile.length <= 0){
      console.log("Couldn't find commands.");
      return;
    }
  
    jsfile.forEach((f, i) =>{
      let props = require(`./commands/${f}`);
      console.log(`${f} loaded!`);
      bot.commands.set(props.help.name, props);
    });
  });


bot.on("message", async message => {
    if(message.author.bot) return;
    if(message.channel.type === "dm") return;
  
    let prefix = settings.prefix;
    let messageArray = message.content.split(" ");
    let cmd = messageArray[0];
    let args = messageArray.slice(1);
    let commandfile = bot.commands.get(cmd.slice(prefix.length));
    if(commandfile) commandfile.run(bot,message,args);
    });

    const version = "3.2.8"
    const token = "HIDDEN"
    const game = "with Alice"
    const status = "invisible"

    const embedRed = 0xff0000
const embedOrange = 0xff790c
const embedYellow = 0xffff00
const embedGreen = 0x00ff00
const embedBlue = 0x0064ff
const embedPurple = 0x6a00b0
const embedMagenta = 0x9600ff
const embedPink = 0xff00ff
const embedBlack = 0x000000
const embedWhite = 0xffffff
const embedGray = 0x777777

var x = [
  1,
  2,
  3,
  4,
  5,
]































    bot.login(settings.token); 

