const fs = require('fs')

global.owner = "234" //owner number
global.footer = "Kingbadboi" //footer section
global.status = false //"self/public" section of the bot
global.prefa = ['','!','.',',','🐤','🗿']
global.owner = ['234']
global.xprefix = '.'
global.gambar = "https://files.catbox.moe/w1r1mm.jpg"
global.OWNER_NAME = "@kingbadboi" //
global.DEVELOPER = ["8175327171"] //
global.BOT_NAME = "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD"
global.bankowner = "alaba adebisi adeboyejo"
global.creatorName = "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
global.ownernumber = '2348140825959'  //creator number
global.location = "Nigeria, Ogun-state, ilese"
global.prefa = ['','!','.','#','&']
//================DO NOT CHANGE OR YOU'LL GET AN ERROR=============\
global.footer = "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞" //footer section
global.link = "https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x"
global.autobio = true//auto update bio
global.botName = "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD"
global.version = "𝙑𝟭"
global.botname = "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD"
global.author = "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
global.themeemoji = '👑'
global.wagc = 'https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x'
global.thumbnail = 'https://files.catbox.moe/w1r1mm.jpg'
global.richpp = ' '
global.packname = "Sticker By kingbadboi"
global.author = "\n\n\n\n\nCreate by KingBadBoi\ntelegram : @kingbadboi"
global.creator = "2348140825959@s.whatsapp.net"
global.ownername = '𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞' 
global.onlyowner = `𝘴𝘰𝘳𝘳𝘺 𝘰𝘯𝘭𝘺 𝘧𝘰𝘳  𝘰𝘸𝘯𝘦𝘳𝘴
𝘤𝘰𝘯𝘵𝘢𝘤𝘵 kingbadboi 𝘵𝘰 𝘣𝘦 𝘢𝘯 𝘰𝘸𝘯𝘦𝘳`
  // reply 
global.database = `𝘛𝘰 𝘣𝘦 𝘪𝘯  𝘥𝘢𝘵𝘢𝘣𝘢𝘴𝘦 𝘣𝘢𝘴𝘦 𝘤𝘰𝘯𝘵𝘢𝘤𝘵 kingbadboi*`
  global.mess = {
wait: "```WAIT FOR 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD```",
   success: "𝑺𝒖𝒄𝒄𝒆𝒔𝒔 𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞",
   on: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD active bro", 
   prem: "FOR PREMIUM USERS ONLY ADD YOUR NUMBER TO DATABASE TO ACCESS PREMIUM", 
   off: "Scarlet off",
   query: {
       text: "Where's the text, man?",
       link: "Where's the link, bro?",
   },
   error: {
       fitur: "Sorry, bro, the feature has error. Please chat with the Bot Developer so it can be fixed immediately.",
   },
   only: {
       group: "Sorry bro, This Feature Can Only Be Used In Groups only",
private: "Sorry bro, This Feature Can Only Be Used In Private Chats",
       owner: "Sorry bro, This Feature Can Only Be Used by Kingbadboi",
       admin: " Sorry, this feature can only be used by Bot Admins",
       badmin: "Sorry, bro, It Looks Like You Can't Use This Feature Because the Bot is Not yet Group Admin",
       premium: "This feature is specifically for Kingbadboi beloved Premium users",
   }
}

global.onlyowner = `\`[ 👑 ] 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD \` \n*

    🚫 *Access Denied!* 🚫
Wow! You're not my owner🗣️
    Sorry, you don't have the necessary permissions to use this command`
  
global.database = `\`[ 👑 ] 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD \` \n*

    🚫 *Access Denied!* 🚫

    Sorry, you don't have the necessary permissions to use this command.

    *Only users in our database can access.* 😎
*contact king pussy or king badboi for database* 
*Whatsapp contact* : *@2348140825959*
*Whatsapp contact* : *@2349136616989*
*Whatsapp Channel* : *https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x*
  *THANK FOR USING 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 MD CRASHER*`

global.hituet = 0
//false=disable and true=enable
global.autoRecording = true //auto recording
global.autoTyping = true //auto typing
global.autorecordtype = true //auto typing + recording
global.autoread = false //auto read messages
global.autobio = true //auto update bio
global.anti92 = true //auto block +92 
global.autoswview = true //auto view status/story

let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
  require('fs').unwatchFile(file)
  console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
  delete require.cache[file]
  require(file)
})
