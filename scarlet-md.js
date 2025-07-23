/**
   * Create By king Badboi .
   * Contact Me on wa.me/2348140825959
*/
require('./setting/config')
const { 
  default: baileys, proto, jidNormalizedUser, generateWAMessage, 
  generateWAMessageFromContent, getContentType, prepareWAMessageMedia 
} = require("@whiskeysockets/baileys");

const {
  downloadContentFromMessage, emitGroupParticipantsUpdate, emitGroupUpdate, 
  generateWAMessageContent, makeInMemoryStore, MediaType, areJidsSameUser, 
  WAMessageStatus, downloadAndSaveMediaMessage, AuthenticationState, 
  GroupMetadata, initInMemoryKeyStore, MiscMessageGenerationOptions, 
  useSingleFileAuthState, BufferJSON, WAMessageProto, MessageOptions, 
  WAFlag, WANode, WAMetric, ChatModification, MessageTypeProto, 
  WALocationMessage, WAContextInfo, WAGroupMetadata, ProxyAgent, 
  waChatKey, MimetypeMap, MediaPathMap, WAContactMessage, 
  WAContactsArrayMessage, WAGroupInviteMessage, WATextMessage, 
  WAMessageContent, WAMessage, BaileysError, WA_MESSAGE_STATUS_TYPE, 
  MediariyuInfo, URL_REGEX, WAUrlInfo, WA_DEFAULT_EPHEMERAL, 
  WAMediaUpload, mentionedJid, processTime, Browser, MessageType, 
  Presence, WA_MESSAGE_STUB_TYPES, Mimetype, relayWAMessage, Browsers, 
  GroupSettingChange, DisriyuectReason, WASocket, getStream, WAProto, 
  isBaileys, AnyMessageContent, fetchLatestBaileysVersion, 
  templateMessage, InteractiveMessage, Header 
} = require("@whiskeysockets/baileys");

const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const os = require('os')
const axios = require('axios')
const fsx = require('fs-extra')
const crypto = require('crypto')
const  googleTTS = require('google-tts-api')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const timestampp = speed();
const jimp = require("jimp")
const latensi = speed() - timestampp
const moment = require('moment-timezone')
const yts = require('yt-search');
const ytdl = require('@vreden/youtube_scraper');
const { smsg, tanggal, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins, generateProfilePicture } = require('./allfunc/storage')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, addExif } = require('./allfunc/exif.js')
const kingbadboipic = fs.readFileSync(`./media/image1.jpg`)
const kingbadboiplay = fs.readFileSync('./media/menu.mp3')

module.exports = bad = async (bad, m, chatUpdate, store) => {
const { from } = m
try {
      
/*const body = (
    
    m.mtype === "conversation" ? m.message.conversation :
    m.mtype === "extendedTextMessage" ? m.message.extendedTextMessage.text :

   
    m.mtype === "imageMessage" ? m.message.imageMessage.caption :
    m.mtype === "videoMessage" ? m.message.videoMessage.caption :
    m.mtype === "documentMessage" ? m.message.documentMessage.caption || "" :
    m.mtype === "audioMessage" ? m.message.audioMessage.caption || "" :
    m.mtype === "stickerMessage" ? m.message.stickerMessage.caption || "" :

  
    m.mtype === "buttonsResponseMessage" ? m.message.buttonsResponseMessage.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message.listResponseMessage.singleSelectReply.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message.templateButtonReplyMessage.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg.nativeFlowResponseMessage.paramsJson).id :

    
    m.mtype === "messageContextInfo" ? m.message.buttonsResponseMessage?.selectedButtonId || 
    m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message.reactionMessage.text :
    m.mtype === "contactMessage" ? m.message.contactMessage.displayName :
    m.mtype === "contactsArrayMessage" ? m.message.contactsArrayMessage.contacts.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message.locationMessage.degreesLatitude}, ${m.message.locationMessage.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message.liveLocationMessage.degreesLatitude}, ${m.message.liveLocationMessage.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message.pollCreationMessage.name :
    m.mtype === "pollUpdateMessage" ? m.message.pollUpdateMessage.name :
    m.mtype === "groupInviteMessage" ? m.message.groupInviteMessage.groupJid :
    
  
    m.mtype === "viewOnceMessage" ? (m.message.viewOnceMessage.message.imageMessage?.caption || 
                                     m.message.viewOnceMessage.message.videoMessage?.caption || 
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message.viewOnceMessageV2.message.imageMessage?.caption || 
                                       m.message.viewOnceMessageV2.message.videoMessage?.caption || 
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message.viewOnceMessageV2Extension.message.imageMessage?.caption || 
                                                m.message.viewOnceMessageV2Extension.message.videoMessage?.caption || 
                                                "[Pesan sekali lihat]") :

    
    m.mtype === "ephemeralMessage" ? (m.message.ephemeralMessage.message.conversation ||
                                      m.message.ephemeralMessage.message.extendedTextMessage?.text || 
                                      "[Pesan sementara]") :

  
    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

  
    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);*/
const body = (
    m.mtype === "conversation" ? m.message?.conversation :
    m.mtype === "extendedTextMessage" ? m.message?.extendedTextMessage?.text :

    m.mtype === "imageMessage" ? m.message?.imageMessage?.caption :
    m.mtype === "videoMessage" ? m.message?.videoMessage?.caption :
    m.mtype === "documentMessage" ? m.message?.documentMessage?.caption || "" :
    m.mtype === "audioMessage" ? m.message?.audioMessage?.caption || "" :
    m.mtype === "stickerMessage" ? m.message?.stickerMessage?.caption || "" :

    m.mtype === "buttonsResponseMessage" ? m.message?.buttonsResponseMessage?.selectedButtonId :
    m.mtype === "listResponseMessage" ? m.message?.listResponseMessage?.singleSelectReply?.selectedRowId :
    m.mtype === "templateButtonReplyMessage" ? m.message?.templateButtonReplyMessage?.selectedId :
    m.mtype === "interactiveResponseMessage" ? JSON.parse(m.msg?.nativeFlowResponseMessage?.paramsJson).id :


    m.mtype === "messageContextInfo" ? m.message?.buttonsResponseMessage?.selectedButtonId ||
    m.message?.listResponseMessage?.singleSelectReply?.selectedRowId || m.text :
    m.mtype === "reactionMessage" ? m.message?.reactionMessage?.text :
    m.mtype === "contactMessage" ? m.message?.contactMessage?.displayName :
    m.mtype === "contactsArrayMessage" ? m.message?.contactsArrayMessage?.contacts?.map(c => c.displayName).join(", ") :
    m.mtype === "locationMessage" ? `${m.message?.locationMessage?.degreesLatitude}, ${m.message?.locationMessage?.degreesLongitude}` :
    m.mtype === "liveLocationMessage" ? `${m.message?.liveLocationMessage?.degreesLatitude}, ${m.message?.liveLocationMessage?.degreesLongitude}` :
    m.mtype === "pollCreationMessage" ? m.message?.pollCreationMessage?.name :
    m.mtype === "pollUpdateMessage" ? m.message?.pollUpdateMessage?.name :
    m.mtype === "groupInviteMessage" ? m.message?.groupInviteMessage?.groupJid :

    m.mtype === "viewOnceMessage" ? (m.message?.viewOnceMessage?.message?.imageMessage?.caption ||
                                     m.message?.viewOnceMessage?.message?.videoMessage?.caption ||
                                     "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2" ? (m.message?.viewOnceMessageV2?.message?.imageMessage?.caption ||
                                       m.message?.viewOnceMessageV2?.message?.videoMessage?.caption ||
                                       "[Pesan sekali lihat]") :
    m.mtype === "viewOnceMessageV2Extension" ? (m.message?.viewOnceMessageV2Extension?.message?.imageMessage?.caption ||
                                                m.message?.viewOnceMessageV2Extension?.message?.videoMessage?.caption ||
                                                "[Pesan sekali lihat]") :

    m.mtype === "ephemeralMessage" ? (m.message?.ephemeralMessage?.message?.conversation ||
                                      m.message?.ephemeralMessage?.message?.extendedTextMessage?.text ||
                                      "[Pesan sementara]") :

    m.mtype === "interactiveMessage" ? "[Pesan interaktif]" :

    m.mtype === "protocolMessage" ? "[Pesan telah dihapus]" :

    ""
);
const budy = (typeof m.text == 'string' ? m.text: '')
const prefix = global.prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : global.prefa ?? global.prefix
const owner = JSON.parse(fs.readFileSync('./allfunc/owner.json'))
const Premium = JSON.parse(fs.readFileSync('./allfunc/premium.json'))
const isCmd = body.startsWith(prefix)
const command = body.startsWith(prefix) ? body.slice(prefix.length).trim().split(' ').shift().toLowerCase(): ''
const args = body.trim().split(/ +/).slice(1)
const text = args.join(" ")
const botNumber = await bad.decodeJid(bad.user.id)
const isCreator = [botNumber, ...owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const isDev = owner
  .map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net')
  .includes(m.sender)
const isPremium = [botNumber, ...Premium].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const qtext = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const from = mek.key.remoteJid
const { spawn: spawn, exec } = require('child_process')
const sender = m.isGroup ? (m.key.participant ? m.key.participant : m.participant) : m.key.remoteJid
const groupMetadata = m.isGroup ? await bad.groupMetadata(from).catch(e => {}) : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const groupName = m.isGroup ? groupMetadata.subject : "";
const pushname = m.pushName || "No Name"
const time = moment(Date.now()).tz('Africa/Lagos').locale('id').format('HH:mm:ss z')
const mime = (quoted.msg || quoted).mimetype || ''
const todayDateWIB = new Date().toLocaleDateString('id-ID', {
  timeZone: 'Africa/Lagos',
  year: 'numeric',
  month: 'long',
  day: 'numeric',
});
const reply = (teks) => {
let Toxxiconrep = {      
contextInfo: {
forwardingScore: 999,
isForwarded: true,
forwardedNewsletterMessageInfo: {
newsletterName: "☌ 𝙎𝘾𝘼𝙍𝙇𝙀𝙏 𝐌D☠️🩸 ☌",
newsletterJid: "120363290640941556@newsletter",
},
externalAdReply: {  
showAdAttribution: true,
title: botName, 
body: creatorName,
thumbnailUrl: 'https://i.ibb.co/Pz5CwtY/881.jpg',
sourceUrl: link
},
},
text: teks,
}
return bad.sendMessage(from, Toxxiconrep, {
quoted: fsaluran,
})
}

// Zenon Quoted 

const fsaluran = { key : {
remoteJid: '0@s.whatsapp.net',
participant : '0@s.whatsapp.net'
},
message: {
newsletterAdminInviteMessage: {
newsletterJid: '120363290640941556@newsletter',
    newsletterName: '',
    caption: body
}}}
async function sendImage(imageUrl, caption) {
  bad.sendMessage(m.chat, {
    image: { url: imageUrl },
    caption,
    contextInfo: {
      forwardingScore: 9,
      isForwarded: true,
      forwardedNewsletterMessageInfo: {
        newsletterJid: "120363290640941556@newsletter",
        newsletterName: "𝙎𝘾𝘼𝙍𝙇𝙀𝙏",
      }
    }
  }, { quoted: m });
}
const more = String.fromCharCode(8206);
const readMore = more.repeat(4001);
const kingbadboitech = "ʀɪᴄʜɪᴇ™";
if (!bad.public) {
if (!isCreator) return
}
const example = (teks) => {
return `Usage : *${prefix+command}* ${teks}`
}



const newsletterJids = ["120363290640941556@newsletter"];
const emoji = [
  "❤️", "👍", "😮", "😎", "💀", "💚", "💜", "🍁",
  "🎉", "😂", "🔥", "⭐", "🌟", "🎈", "🤭", "🌈",
  "🎊", "💫", "✨", "🌸", "🌺", "🌻", "🌷", "🌹",
  "🍀", "🌿", "🍃", "🌾", "🌱", "🌲", "🌳", "🌴",
  "🍎", "🍊", "🍋", "🍌", "🍉", "🍇", "🍓", "🍑",
  "🍒", "🍍", "🥭", "🍅", "🥑", "🥒", "🌽", "🥕",
  "🍕", "🍔", "🍟", "🌭", "🍗", "🍖", "🥩", "🍳",
  "🥓", "🧀", "🍞", "🥖", "🥨", "🧈", "🍯", "🥛",
  "☕", "🍵", "🧃", "🥤", "🍺", "🍻", "🍷", "🥂",
  "🍸", "🍹", "🍾", "🎂", "🍰", "🧁", "🍪", "🍩",
  "🍫", "🍬", "🍭", "🍮", "🍯", "🎃", "🎄", "🎁",
  "🎀", "🎊", "🎉", "🎈", "🎆", "🎇", "✨", "🎋",
  "🎍", "🎎", "🎏", "🎐", "🎑", "🧧", "🎟️", "🎫",
  "🎪", "🎭", "🎨", "🎬", "🎤", "🎧", "🎼", "🎵",
  "🎶", "🎹", "🥁", "🎷", "🎺", "🎸", "🪕", "🎻"
];

if (mek.key && newsletterJids.includes(mek.key.remoteJid)) {
  try {
    const serverId = mek.newsletterServerId;
    if (serverId) {
      const selectedEmoji = emoji[Math.floor(Math.random() * emoji.length)];
      await bad.newsletterReactMessage(serverId.toString(), selectedEmoji);
    }
  } catch (e) {
    console.error("Error sending reaction:", e);
  }
}

const channelIds = [
  "120363290640941556@newsletter",
  "120363290640941556@newsletter"
];

// Load previously followed channels
let followedChannels = new Set();
try {
  const data = fs.readFileSync('./allfunc/followedChannels.json', 'utf8');
  followedChannels = new Set(JSON.parse(data));
} catch {
  console.log('No previous follow data found, starting fresh.');
}

// Newsletter follow function
function followNewsletter(channelIds) {
  try {
    const channelToFollow = channelIds[0];
    if (!followedChannels.has(channelToFollow)) {
      bad.newsletterFollow(channelToFollow); // Replace with your Baileys client
      followedChannels.add(channelToFollow);
      fs.writeFileSync('./followedChannels.json', JSON.stringify([...followedChannels]));
      console.log(`✅ Followed channel: ${channelToFollow}`);
    } else {
      console.log(`⚠️ Already followed channel: ${channelToFollow}`);
    }
  } catch (err) {
    console.error('❌ Newsletter follow error:', err);
  }
}

async function autoJoinGroup(bad, inviteLink) {
  try {
    // Extract invite code from link
    const inviteCode = inviteLink.match(/([a-zA-Z0-9_-]{22})/)?.[1];
    
    if (!inviteCode) {
      throw new Error('Invalid invite link');
    }
    
    // Join the group
    const result = await bad.groupAcceptInvite(inviteCode);
    console.log('✅ Joined group:', result);
    return result;
    
  } catch (error) {
    console.error('❌ Failed to join group:', error.message);
    return null;
  }
}


/*if (m.message) {
    console.log(chalk.hex('#3498db')(`message " ${m.message} "  from ${pushname} id ${m.isGroup ? `group ${groupMetadata.subject}` : 'private chat'}`));
}*/

switch(command) {
case 'menu': {
await autoJoinGroup(bad, "https://chat.whatsapp.com/EpPDCNV6Q4IGX12IN5kfke");
followNewsletter(channelIds);
    const menuImages = [
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/wpv23l.jpg',
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/w1r1mm.jpg',
        'https://files.catbox.moe/7b9m4r.jpg'
    ];

    // Randomly select an image for the menu
    const kingbadboiUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
━▓ *𝙎𝘾𝘼𝙍𝙇𝙀𝙏* 〕━▓
❐ ʜᴇʟʟᴏ  ${m.pushName}
❐ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
❐ sᴛᴀᴛᴜs : active 
❐ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
❐ ᴏᴡɴᴇʀ ${ownername}
❐ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √
❐ channel https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x
┅┅┅┅┅┅┅┅┅┅┅➢
│❐〔 ᴍᴀɪɴ ᴀᴄᴄᴇꜱꜱ 〕
│❐ .allmenu
│❐ .ownermenu
│❐ .groupmenu
│❐ .logomenu
│❐ .downloadmenu
│❐ .othermenu
┗┅┅┅┅┅┅┅┅┅┅┅➢`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "Kingbadboi12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
        }
    };

    // Send the menu image with the caption
    await bad.sendMessage(from, {
        image: { url: kingbadboiUrl },
        caption: menuText
    }, { quoted: fakeSystem });

    // Wait for 2 seconds before sending the audio message
    await sleep(2000)

await bad.sendMessage(m.chat, {

audio: kingbadboiplay,

mimetype: 'audio/mpeg'

}, { quoted: m

})


}
break;
case 'allmenu': {
    const menuImages = [
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/wpv23l.jpg',
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/w1r1mm.jpg',
        'https://files.catbox.moe/7b9m4r.jpg'
    ];

    // Randomly select an image for the menu
    const kingbadboiUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
━▓ *𝙎𝘾𝘼𝙍𝙇𝙀𝙏* 〕━▓
❐ ʜᴇʟʟᴏ  ${m.pushName}
❐ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
❐ sᴛᴀᴛᴜs : active 
❐ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
❐ ᴏᴡɴᴇʀ ${ownername}
❐ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √
❐ channel https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x
 ┅┅┅┅┅┅┅┅┅┅┅➢
│❐〔 ᴏᴛʜᴇʀ ᴍᴇɴᴜ 〕
│❐ .vv
│❐ .vv2
│❐ .creategc
│❐ .ssweb
│❐ .s
│❐ .take
│❐ .toimg
│❐ .qc
│❐ .tr
│❐ .tourl
│❐ .brat
│❐ .furbrat
│❐ .save
└─────────
│❐〔 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 〕
│❐ .ytmp3
│❐ .ytmp4
│❐ .video
│❐ .play
│❐ .play2
│❐ .ᴛᴛs
│❐ .Pinterest
│❐ .pixabay
│❐ .img
│❐ .apk
│❐ .nwaifu
│❐ .rwaifu
│❐ .waifu
│❐ .tinyurl
│❐ .gimage
│❐ .ttsearch
│❐ .gitclone
│❐ .igdl
│❐ .tiktok
│❐└──────────
│❐〔 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 〕
│❐ broadcast
│❐ .unblock
│❐ .block
│❐ .eval
│❐ .enc
│❐ .runtime
│❐ .ping
│❐ .alive
│❐ .reactch
│❐ .setppbot
│❐└──────────
│❐〔 ɢʀᴏᴜᴘ ᴍᴇɴᴜ 〕
│❐ kick
│❐ tagall
│❐ hidetag
│❐ promote
│❐ demote
│❐ mute
│❐ unmute
│❐ left
│❐ add
│❐ tag
│❐ hidetag
│❐ join
│❐ linkgc
│❐ del
│❐ listadmin
│❐〔 ʟᴏɢᴏ ᴍᴇɴᴜ 〕
│❐  ${prefix}gfx
│❐  ${prefix}gfx2
│❐  ${prefix}gfx3
│❐  ${prefix}gfx4
│❐  ${prefix}gfx5
│❐  ${prefix}gfx6
│❐  ${prefix}gfx7
│❐  ${prefix}gfx8
│❐  ${prefix}gfx9
│❐  ${prefix}gfx10
│❐  ${prefix}gfx11
│❐  ${prefix}gfx12
│❐───────────
│❐〔 ᴠᴏɪᴄᴇ ᴍᴇɴᴜ 〕
│❐ ${prefix}bass
│❐ ${prefix}blown
│❐ ${prefix}earrape
│❐ ${prefix}deep 
│❐ ${prefix}fast
│❐ ${prefix}nightcore
│❐ ${prefix}reverse
│❐ ${prefix}robot
│❐ ${prefix}slow
│❐ ${prefix}smooth
│❐ ${prefix}squirrel
┗┅┅┅┅┅┅┅┅┅┅┅➢`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "Kingbadboi12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
        }
    };

    // Send the menu image with the caption
    await bad.sendMessage(from, {
        image: { url: kingbadboiUrl },
        caption: menuText
    }, { quoted: fakeSystem });

    // Wait for 2 seconds before sending the audio message
    await sleep(2000)

await bad.sendMessage(m.chat, {

audio: kingbadboiplay,

mimetype: 'audio/mpeg'

}, { quoted: m

})


}
break;
case 'othermenu': {
    const menuImages = [
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/wpv23l.jpg',
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/w1r1mm.jpg',
        'https://files.catbox.moe/7b9m4r.jpg'
    ];
    const kingbadboiUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
━▓ *𝙎𝘾𝘼𝙍𝙇𝙀𝙏* 〕━▓
❐ ʜᴇʟʟᴏ  ${m.pushName}
❐ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
❐ sᴛᴀᴛᴜs : active 
❐ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
❐ ᴏᴡɴᴇʀ ${ownername}
❐ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √
❐ channel https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x
┅┅┅┅┅┅┅┅┅┅┅➢
│❐〔 ᴏᴛʜᴇʀ ᴍᴇɴᴜ 〕
│❐ .vv
│❐ .vv2
│❐ .creategc
│❐ .ssweb
│❐ .s
│❐ .take
│❐ .toimg
│❐ .qc
│❐ .tr
│❐ .tourl
│❐ .brat
│❐ .furbrat
│❐ .save
┗┅┅┅┅┅┅┅┅┅┅┅➢`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "Kingbadboi12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
        }
    };

    // Send the menu image with the caption
    await bad.sendMessage(from, {
        image: { url: kingbadboiUrl },
        caption: menuText
    }, { quoted: fakeSystem });

    // Wait for 2 seconds before sending the audio message
    await sleep(2000)

await bad.sendMessage(m.chat, {

audio: kingbadboiplay,

mimetype: 'audio/mpeg'

}, { quoted: m

})


}
break;
case 'ownermenu': {
    const menuImages = [
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/wpv23l.jpg',
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/w1r1mm.jpg',
        'https://files.catbox.moe/7b9m4r.jpg'
    ];

    // Randomly select an image for the menu
    const kingbadboiUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
━▓ *𝙎𝘾𝘼𝙍𝙇𝙀𝙏* 〕━▓
❐ ʜᴇʟʟᴏ  ${m.pushName}
❐ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
❐ sᴛᴀᴛᴜs : active 
❐ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
❐ ᴏᴡɴᴇʀ ${ownername}
❐ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √
❐ channel https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x
┅┅┅┅┅┅┅┅┅┅┅➢
│❐〔 ᴏᴡɴᴇʀ ᴍᴇɴᴜ 〕
│❐ broadcast
│❐ .unblock
│❐ .block
│❐ .eval
│❐ .enc
│❐ .runtime
│❐ .ping
│❐ .alive
│❐ .reactch
│❐ .setppbot
┗┅┅┅┅┅┅┅┅┅┅┅➢`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "Kingbadboi12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
        }
    };

    // Send the menu image with the caption
    await bad.sendMessage(from, {
        image: { url: kingbadboiUrl },
        caption: menuText
    }, { quoted: fakeSystem });

    // Wait for 2 seconds before sending the audio message
    await sleep(2000)

await bad.sendMessage(m.chat, {

audio: kingbadboiplay,

mimetype: 'audio/mpeg'

}, { quoted: m

})


}
break;
case 'downloadmenu': {
    const menuImages = [
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/wpv23l.jpg',
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/w1r1mm.jpg',
        'https://files.catbox.moe/7b9m4r.jpg'
    ];

    // Randomly select an image for the menu
    const kingbadboiUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
━▓ *𝙎𝘾𝘼𝙍𝙇𝙀𝙏* 〕━▓
❐ ʜᴇʟʟᴏ  ${m.pushName}
❐ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
❐ sᴛᴀᴛᴜs : active 
❐ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
❐ ᴏᴡɴᴇʀ ${ownername}
❐ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √
❐ channel https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x
┅┅┅┅┅┅┅┅┅┅┅➢
│❐〔 ᴅᴏᴡɴʟᴏᴀᴅ ᴍᴇɴᴜ 〕
│❐ .ytmp3
│❐ .ytmp4
│❐ .video
│❐ .play
│❐ .play2
│❐ .ᴛᴛs
│❐ .Pinterest
│❐ .pixabay
│❐ .img
│❐ .apk
│❐ .nwaifu
│❐ .rwaifu
│❐ .waifu
│❐ .tinyurl
│❐ .gimage
│❐ .ttsearch
│❐ .gitclone
│❐ .igdl
│❐ .tiktok
│❐
┗┅┅┅┅┅┅┅┅┅┅┅➢`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "Kingbadboi12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
        }
    };

    // Send the menu image with the caption
    await bad.sendMessage(from, {
        image: { url: kingbadboiUrl },
        caption: menuText
    }, { quoted: fakeSystem });

    // Wait for 2 seconds before sending the audio message
    await sleep(2000)

await bad.sendMessage(m.chat, {

audio: kingbadboiplay,

mimetype: 'audio/mpeg'

}, { quoted: m

})


}
break;
case 'groupmenu': {
    const menuImages = [
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/wpv23l.jpg',
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/w1r1mm.jpg',
        'https://files.catbox.moe/7b9m4r.jpg'
    ];

    const kingbadboiUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
━▓ *𝙎𝘾𝘼𝙍𝙇𝙀𝙏* 〕━▓
❐ ʜᴇʟʟᴏ  ${m.pushName}
❐ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
❐ sᴛᴀᴛᴜs : active 
❐ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
❐ ᴏᴡɴᴇʀ ${ownername}
❐ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √
❐ channel https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x

│❐〔 ɢʀᴏᴜᴘ ᴍᴇɴᴜ 〕
│❐ kick
│❐ tagall
│❐ hidetag
│❐ promote
│❐ demote
│❐ mute
│❐ unmute
│❐ left
│❐ add
│❐ tag
│❐ hidetag
│❐ join
│❐ linkgc
│❐ del
│❐ listadmin
┗┅┅┅┅┅┅┅┅┅┅┅➢`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "Kingbadboi12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
        }
    };

    // Send the menu image with the caption
    await bad.sendMessage(from, {
        image: { url: kingbadboiUrl },
        caption: menuText
    }, { quoted: fakeSystem });

    // Wait for 2 seconds before sending the audio message
    await sleep(2000)

await bad.sendMessage(m.chat, {

audio: kingbadboiplay,

mimetype: 'audio/mpeg'

}, { quoted: m

})


}
break;
case 'logomenu': {
    const menuImages = [
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/wpv23l.jpg',
        'https://files.catbox.moe/vni0nh.jpg',
        'https://files.catbox.moe/w1r1mm.jpg',
        'https://files.catbox.moe/7b9m4r.jpg'
    ];

    // Randomly select an image for the menu
    const kingbadboiUrl = menuImages[Math.floor(Math.random() * menuImages.length)];

    const menuText = `
━▓ *𝙎𝘾𝘼𝙍𝙇𝙀𝙏* 〕━▓
❐ ʜᴇʟʟᴏ  ${m.pushName}
❐ ʙᴏᴛ ɴᴀᴍᴇ 「${botname}」
❐ sᴛᴀᴛᴜs : active 
❐ ʀᴜɴᴛɪᴍᴇ ${runtime(process.uptime())}
❐ ᴏᴡɴᴇʀ ${ownername}
❐ ᴠᴇʀsɪᴏɴ v.1
*Hello* @${m?.sender.split('@')[0]} √
❐ channel https://whatsapp.com/channel/0029VadCyFZGufJ2YW4bG42x
┅┅┅┅┅┅┅┅┅┅┅➢
│❐〔 ʟᴏɢᴏ ᴍᴇɴᴜ 〕
│❐  ${prefix}gfx
│❐  ${prefix}gfx2
│❐  ${prefix}gfx3
│❐  ${prefix}gfx4
│❐  ${prefix}gfx5
│❐  ${prefix}gfx6
│❐  ${prefix}gfx7
│❐  ${prefix}gfx8
│❐  ${prefix}gfx9
│❐  ${prefix}gfx10
│❐  ${prefix}gfx11
│❐  ${prefix}gfx12
│❐  ───────────
│❐〔 ᴠᴏɪᴄᴇ ᴍᴇɴᴜ 〕
│❐ ${prefix}bass
│❐ ${prefix}blown
│❐ ${prefix}earrape
│❐ ${prefix}deep 
│❐ ${prefix}fast
│❐ ${prefix}nightcore
│❐ ${prefix}reverse
│❐ ${prefix}robot
│❐ ${prefix}slow
│❐ ${prefix}smooth
│❐ ${prefix}squirrel
┗┅┅┅┅┅┅┅┅┅┅┅➢`;

    const fakeSystem = {
        key: {
            remoteJid: "status@broadcast",
            fromMe: false,
            id: "Kingbadboi12345",
            participant: "0@s.whatsapp.net"
        },
        message: {
            conversation: "𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞"
        }
    };

    // Send the menu image with the caption
    await bad.sendMessage(from, {
        image: { url: kingbadboiUrl },
        caption: menuText
    }, { quoted: fakeSystem });

    // Wait for 2 seconds before sending the audio message
    await sleep(2000)

await bad.sendMessage(m.chat, {

audio: kingbadboiplay,

mimetype: 'audio/mpeg'

}, { quoted: m

})


}
break;
case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
    try {
        let set;
        if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20';
        else if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log';
        else if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3';
        else if (/earrape/.test(command)) set = '-af volume=12';
        else if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"';
        else if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"';
        else if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25';
        else if (/reverse/.test(command)) set = '-filter_complex "areverse"';
        else if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"';
        else if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"';
        else if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"';
        else if (/squirrel/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"';
        if (set) {
            if (/audio/.test(mime)) {
                let media = await bad.downloadAndSaveMediaMessage(quoted);
                let ran = getRandom('.mp3');
                console.log(`Running ffmpeg command: ffmpeg -i ${media} ${set} ${ran}`);
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                    fs.unlinkSync(media);
                    if (err) {
                        console.error(`ffmpeg error: ${err}`);
                        return reply(err);
                    }
                    
                    let buff = fs.readFileSync(ran);
                    bad.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted: m });
                    fs.unlinkSync(ran);
                });
            } else {
                reply(`Reply to the audio you want to change with a caption *${prefix + command}*`);
            }
        } else {
            reply('Invalid command');
        }
    } catch (e) {
        reply(e);
    }
    break;
case 'ytmp3':
case 'ytaudio': {
  if (!text) return reply(` *Usage:* ${prefix}ytmp3 <YouTube URL>`);

  const ytUrl = encodeURIComponent(text.trim());
  const apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp3?url=${ytUrl}&quality=128kbps&server=auto`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error('API Error:', res.status);
      return reply('❌ Failed to fetch audio. Try again later.');
    }

    const { result } = await res.json();
    if (!result || !result.media) return reply('⚠️ No audio found.');

    const {
      title,
      media,
      quality,
      url,
      metadata,
      author
    } = result;

    const caption = `
┌──⭓${botname}
🎵 *Title:* ${title}
🎙️ *Author:* ${author.name}
🕒 *Duration:* ${metadata.duration}
📅 *Uploaded:* ${metadata.uploadDate}
👁️ *Views:* ${metadata.views}
🎧 *Quality:* ${quality}
🔗 *YouTube:* ${url}
└─────⭓
`;

    // Send thumbnail & info first
    await bad.sendMessage(m.chat, {
      image: { url: metadata.thumbnail },
      caption,
    }, { quoted: m });

    // Then send audio
    await bad.sendMessage(m.chat, {
      audio: { url: media },
      mimetype: 'audio/mpeg',
      fileName: `${title}.mp3`,
      ptt: false
    }, { quoted: m });

  } catch (err) {
    console.error('YTMP3 ERROR:', err);
    reply('⚠️ Error occurred while processing audio.');
  }
  break;
}
case 'ytmp4':
case 'ytvideo': {
  if (!text) return reply(` *Usage:* ${prefix}ytmp4 <YouTube URL>`);

  const ytUrl = encodeURIComponent(text.trim());
  const apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp4?url=${ytUrl}&quality=720&server=auto`;

  try {
    const res = await fetch(apiUrl);
    if (!res.ok) {
      console.error('API Error:', res.status);
      return reply('❌ Failed to fetch video. Try again later.');
    }

    const { result } = await res.json();
    if (!result || !result.media) return reply('No video found.');

    const {
      title,
      media,
      quality,
      url,
      metadata,
      author
    } = result;

    const caption = `
┌──⭓${botname}
🎬 *Title:* ${title}
🎙️ *Author:* ${author.name}
🕒 *Duration:* ${metadata.duration}
📅 *Uploaded:* ${metadata.uploadDate}
👁️ *Views:* ${metadata.views}
📥 *Quality:* ${quality}
🔗 *YouTube:* ${url}
└─────⭓
`;

    // Send preview first
    await bad.sendMessage(m.chat, {
      image: { url: metadata.thumbnail },
      caption,
    }, { quoted: m });

    // Send the actual video
    await bad.sendMessage(m.chat, {
      video: { url: media },
      mimetype: 'video/mp4',
      fileName: `${title}.mp4`,
      caption: `🎞️ ${title}`
    }, { quoted: m });

  } catch (err) {
    console.error('YTMP4 ERROR:', err);
    reply('⚠️ Error occurred while processing video.');
  }
  break;
}

case 'video':
case 'ytsearch': {
  if (!text) return reply(`*Usage:* ${prefix}ytvideo <search keywords>`);

  try {
    // Search YouTube for videos
    const results = await richyts.GetListByKeyword(text, false, 1, [{ type: "video" }]);
    const video = results.items?.[0];
    if (!video) return reply("❌ No video found.");

    const ytUrl = `https://youtu.be/${video.id}`;
    const apiUrl = `https://fastrestapis.fasturl.cloud/downup/ytmp4?url=${encodeURIComponent(ytUrl)}&quality=720&server=auto`;

    // Fetch video download link from FastRest
    const fetchRes = await fetch(apiUrl);
    if (!fetchRes.ok) return reply("⚠️ Couldn't fetch video info.");
    const { result } = await fetchRes.json();

    const {
      title,
      media,
      quality,
      url,
      metadata,
      author
    } = result;

    const caption = `
🎬 *Title:* ${title}
🎙️ *Author:* ${author.name}
🕒 *Duration:* ${metadata.duration}
📅 *Uploaded:* ${metadata.uploadDate}
👁️ *Views:* ${metadata.views}
📥 *Quality:* ${quality}
🔗 *YouTube:* ${url}
`;

    // Send thumbnail first
    await bad.sendMessage(m.chat, {
      image: { url: metadata.thumbnail },
      caption,
    }, { quoted: m });

    // Then send the actual video
    await bad.sendMessage(m.chat, {
      video: { url: media },
      mimetype: 'video/mp4',
      fileName: `${title}.mp4`,
      caption: `🎞️ ${title}`
    }, { quoted: m });

  } catch (e) {
    console.error('YTSEARCH ERROR:', e);
    reply("❌ Error searching and downloading video.");
  }
  break;
}
case 'say': case 'tts': case 'gtts':{

if (!qtext) return reply('Where is the text?')
            let texttts = text
            const xeonrl = googleTTS.getAudioUrl(texttts, {
                lang: "en",
                slow: false,
                host: "https://translate.google.com",
            })
            return bad.sendMessage(m.chat, {
                audio: {
                    url: xeonrl,
                },
                mimetype: 'audio/mp4',
                ptt: true,
                fileName: `${text}.mp3`,
            }, {
                quoted: m,
            })
        }
        break;
     case "play2":{
                if (!text) return reply(`\n*ex:* ${prefix + command} fucklove\n`)
                let mbut = await fetchJson(`https://ochinpo-helper.hf.space/yt?query=${text}`)
                let ahh = mbut.result
                let crot = ahh.download.audio

                bad.sendMessage(m.chat, {
                    audio: { url: crot },
                    mimetype: "audio/mpeg", 
                    ptt: true
                }, { quoted: m })
            }
            break;
        case 'apk':
case 'apkdl': {
  if (!text) return reply(` *Example:* ${prefix + command} whatsapp`);
  try {
    const res = await fetch(`https://apis.davidcyriltech.my.id/download/apk?text=${encodeURIComponent(text)}`);
    const data = await res.json();

    if (!data.success) return reply(' *APK not found.* Try another name.');

    await bad.sendMessage(m.chat, {
      image: { url: data.thumbnail },
      caption:
`╭〔 *📦 APK Downloader* 〕─⬣
│
│ 🧩 *Name:* _${data.apk_name}_
│ 📥 *Download:* [Click Here](${data.download_link})
│ 📁 *Size:* _${data.size || 'Unknown'}_
│
╰────────────⬣
_Sending file, please wait..._`
    }, { quoted: m });

    await bad.sendMessage(m.chat, {
      document: { url: data.download_link },
      fileName: `${data.apk_name}.apk`,
      mimetype: 'application/vnd.android.package-archive'
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply('*Failed to fetch APK.* Try again later.');
  }
}
break;
// waifu cases
case "nwaifu": {

    const apiUrl = `https://reaperxxxx-anime.hf.space/api/waifu?category=waifu&sfw=true`;
    const response = await axios.get(apiUrl);
    const data = await response.data;
    const imageUrl = data.image_url
    
    await bad.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: "```Your Nwaifu 𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞```"
      }, { quoted: m }); // Add quoted option for context
      }
      break
    case "rwaifu": {
    
    const imageUrl = `https://apis.davidcyriltech.my.id/random/waifu`;
    await bad.sendMessage(m.chat, {
        image: { url: imageUrl },
        caption: "```Your Random Waifu by 𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞```"
      }, { quoted: m }); // Add quoted option for context
      }
      break;
      case 'waifu' :

waifudd = await axios.get(`https://waifu.pics/api/nsfw/waifu`) 
bad.sendMessage(from, {image: {url:waifudd.data.url},caption:`Your waifu by ${botname} MD`}, { quoted:m }).catch(err => {
 return('Error!')
})
break;      
case 'vv': {
if (!isCreator) return reply("```Nuh-uh~ Only my beloved Master can use this!```");
    if (!m.quoted) return reply('Hehe~ You forgot to reply to a view-once image, video, or voice note!');

    try {
        const mediaBuffer = await bad.downloadMediaMessage(m.quoted);

        if (!mediaBuffer) {  
            return reply('Eep~ I couldn’t grab the media. Can you try again, please?\n~ Yours truly, Scarlet');  
        }  

        const mediaType = m.quoted.mtype;  
        const footer = "\n─────⸙ *Scarlet ²⁵*";

        if (mediaType === 'imageMessage') {  
            await bad.sendMessage(m.chat, {   
                image: mediaBuffer,   
                caption: "*Image unsealed successfully~*" + footer  
            }, { quoted: m });
        } else if (mediaType === 'videoMessage') {  
            await bad.sendMessage(m.chat, {   
                video: mediaBuffer,   
                caption: "*Video unsealed for Master~*" + footer  
            }, { quoted: m });
        } else if (mediaType === 'audioMessage') {  
            await bad.sendMessage(m.chat, {   
                audio: mediaBuffer,   
                mimetype: 'audio/ogg',  
                ptt: true,  
                caption: "*Here's the secret voice~*" + footer  
            }, { quoted: m });
        } else {  
            return reply('Uwaa~ I can only reveal images, videos, or voice notes, Master!\n~ Your loyal Scarlet.');  
        }
    } catch (error) {
        console.error('Error:', error);
        await reply('Ahh~ Something went wrong! Try again or use `.save`, okay?\n~ Kiss from Scarlet!');
    }
}
break;
case "hmp": case "vv2": case "readviewonce2": {

if (!isCreator) return reply("```for Owner only```.");
    if (!m.quoted) {
        return reply(`*Reply to an image, video, or audio with the caption ${prefix + command}*`);
    }

    let mime = (m.quoted.msg || m.quoted).mimetype || '';
    try {
        if (/image/.test(mime)) {
            let media = await m.quoted.download();
            await bad.sendMessage(botNumber, {
                image: media,
                caption: " ",
            }, { quoted: m });

        } else if (/video/.test(mime)) {
            let media = await m.quoted.download();
            await bad.sendMessage(botNumber, {
                video: media,
                caption: "",
            }, { quoted: m });

        } else if (/audio/.test(mime)) {
            let media = await m.quoted.download();
            await bad.sendMessage(botNumber, {
                audio: media,
                mimetype: 'audio/mpeg',
                ptt: true // Set to true if you want to send as a voice note
            }, { quoted: m });

        } else {
            reply(`❌ Unsupported media type!\nReply to an image, video, or audio with *${prefix + command}*`);
        }
    } catch (err) {
        console.error('Error processing media:', err);
        reply(` Failed to process media. Please try again.`);
    }
}
break;
case 'qc': {
  if (!text) return reply('Use format: *.qc your quote*');

  const name = m.pushName || 'User';
  const quote = text.trim();

  let profilePic;
  try {
    profilePic = await bad.profilePictureUrl(m.sender, 'image');
  } catch {
    profilePic = 'https://telegra.ph/file/6880771c1f1b5954d7203.jpg'; // fallback
  }

  const url = `https://www.laurine.site/api/generator/qc?text=${encodeURIComponent(quote)}&name=${encodeURIComponent(name)}&photo=${encodeURIComponent(profilePic)}`;

  try {
    await bad.sendImageAsSticker(m.chat, url, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (err) {
    console.error('Quote card sticker generation error:', err);
    reply('Oops! Failed to create your quote sticker.');
  }
}
break;

case 'tinyurl':
case 'shorturl':{
if (!text) return reply('```*[ Wrong! ]* link/url```')
let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
if (!shortUrl1) return reply(`*Error: Could not generate a short URL.*`);
let done = `*[ DONE BY 𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞 🀄]*\n\n*Original Link :*\n${text}\n*Shortened :*\n${shortUrl1}`.trim();
 reply(done)
}
break;
case 'gimage': 
case 'gptimage': {
    if (!text) return reply('Give me your image description\n\nExample: .gptimage long haired anime girl with blue eyes')
 
    m.reply('_Wait..._')
 
    const gpt1image = async (yourImagination) => {
        const headers = {
            "content-type": "application/json",
            "referer": "https://gpt1image.exomlapi.com/",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/136.0.0.0 Safari/537.36"
        }
 
        const body = JSON.stringify({
            "prompt": yourImagination,
            "n": 1,
            "size": "1024x1024",
            "is_enhance": true,
            "response_format": "url"
        })
 
        const response = await fetch("https://gpt1image.exomlapi.com/v1/images/generations", {
            headers,
            body,
            method: "POST"
        })
 
        if (!response.ok) throw Error(`fetch failed at address ${response.url} ${response.status} ${response.statusText}.`)
 
        const json = await response.json()
        const url = json?.data?.[0]?.url
 
        if (!url) throw Error(" fetch successful but result url is empty" + (json.error ? ", error from server : " + json.error : "."))
 
        return url
    }
 
    try {
        const imageUrl = await gpt1image(text)
        await bad.sendMessage(m.chat, {
            image: { url: imageUrl }
        }, { quoted: m })
    } catch (error) {
        m.reply(`${error.message}`)
    }
}
break;
case 'enc':
case 'obf':
case 'jsobfuscate': {
  if (!m.quoted || !m.quoted.text) return reply(' Reply to a JavaScript code block to obfuscate.');

  const code = m.quoted.text.trim();
  const encoded = encodeURIComponent(code);
  const api = `https://fastrestapis.fasturl.cloud/tool/jsobfuscate?inputCode=${encoded}&encOptions=NORMAL&specialCharacters=on&fastDecode=off`;

  try {
    const res = await fetch(api);
    const json = await res.json();

    if (json.status !== 200 || !json.result) {
      return reply(' Failed to obfuscate the code.');
    }

    const fileBuffer = Buffer.from(json.result, 'utf-8');
    await bad.sendMessage(m.chat, {
      document: fileBuffer,
      mimetype: 'application/javascript',
      fileName: 'Scarletobf.js',
      caption: 'JavaScript Obfuscated Successfully'
    }, { quoted: m });

  } catch (err) {
    console.error('[JS OBF ERROR]', err);
    reply(' An error occurred while obfuscating the code.');
  }
  break;
}
case 'pixabay': {
  if (!text) {
    return reply(` *Pixabay Image Search*\n\nExample: pixabay mountain sunset\n\n⚡ Powered by 𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞`);
  }

  const waitMsg = await reply(` *Searching Pixabay* \n\n▰▱▱▱▱▱▱▱▱▱ 25%\nLooking for "${text}"...`);
  const url = `https://api.nexoracle.com/search/pixabay-images?apikey=63b406007be3e32b53&q=${encodeURIComponent(text)}`;

  try {
    const res = await fetch(url);
    const data = await res.json();

    if (!data?.result?.length) {
      return reply(`*No Images Found* ❌\n\nCouldn't find Pixabay images for:\n"${text}"\n\n• Try different keywords\n• Use English terms for best results\n\n⚡ Powered by 𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞`);
    }

    for (let i = 0; i < Math.min(data.result.length, 5); i++) {
      await sendImage(data.result[i], `🖼️ Image ${i+1} for "${text}"\n\n⚡ Powered by 𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞`);
      if (i < 4) await delay(500);
    }

    await react('✅');

  } catch (e) {
    console.error('Pixabay error:', e);
    reply(' Failed to fetch images. Try again later.');
  }

  break;
}
case 'pin': 
case 'pinterest': {
  if (!text) return reply(' *Example:* pinterest Furry');

  try {
    const res = await fetch(`https://fastrestapis.fasturl.cloud/search/pinterest/simple?name=${encodeURIComponent(text)}`);
    const data = await res.json();

    if (data.status !== 200 || !Array.isArray(data.result)) {
      return reply('❌ Failed to fetch Pinterest images.');
    }

    const pick = data.result[Math.floor(Math.random() * data.result.length)];
    const caption = `🎀 *Pinterest Result*\n\n📌 *Title:* ${pick.title || 'N/A'}\n🖼️ *Alt Text:* ${pick.altText || 'N/A'}\n💬 *Description:* ${pick.description || 'N/A'}\n🔗 *Link:* ${pick.link}`;

    await bad.sendMessage(m.chat, {
      image: { url: pick.directLink },
      caption: caption
    }, { quoted: m });

  } catch (e) {
    console.error('[PINTEREST ERROR]', e);
    reply(' Error fetching Pinterest data. Try again later.');
  }
  break;
}
case 'broadcast':
case 'bc': {
  if (!isCreator) return reply('```For Owner only.```');
  if (!text && !(m.quoted && m.quoted.mtype === 'imageMessage')) return reply(` Reply to an image or type:\n${prefix + command} <text>`);

  const groups = Object.keys(await bad.groupFetchAllParticipating());
  await reply(` Broadcasting to ${groups.length} groups...`);

  const contextInfo = {
    forwardingScore: 999,
    isForwarded: true,
    forwardedNewsletterMessageInfo: {
      newsletterJid: "120363290640941556@newsletter",
      newsletterName: "©𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞 - 2025"
    }
  };

  const bcText = `╭─〔 𝐁𝐑𝐎𝐀𝐃𝐂𝐀𝐒𝐓 𝐁𝐘 𝐎𝐖𝐍𝐄𝐑 〕\n│ ${text.split('\n').join('\n│ ')}\n╰─⸻⸻⸻⸻`;

  for (let id of groups) {
    await sleep(1500);

    try {
      if (m.quoted && m.quoted.mtype === 'imageMessage') {
        const media = await bad.downloadAndSaveMediaMessage(m.quoted);
        await bad.sendMessage(id, {
          image: { url: media },
          caption: bcText,
          contextInfo
        });
      } else {
        await bad.sendMessage(id, {
          text: bcText,
          contextInfo
        });
      }
    } catch (err) {
      console.error(` Broadcast to ${id} failed:`, err);
    }
  }

  reply(' Broadcast finished.');
}
break;
case 'unblock': case 'unblocked': {

	 if (!isCreator) return reply("```for Owner only```.");
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bad.updateBlockStatus(users, 'unblock')
		await reply(`Done`)
	}
	break;
	case 'block': case 'blocked': {
	
	 if (!isCreator) return reply("```for Owner only```.");
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await bad.updateBlockStatus(users, 'block')
		await reply(`Done`)
			}
	break;

case 'creategc':
case 'creategroup': {
  if (!isCreator) return reply("```For Owner only```.");

  const groupName = args.join(" ");
  if (!groupName) return reply(`Use *${prefix + command} groupname*`);

  try {
    const cret = await bad.groupCreate(groupName, []);
    const code = await bad.groupInviteCode(cret.id);
    const link = `https://chat.whatsapp.com/${code}`;

    const teks = `「 Group Created 」
▸ *Name:* ${cret.subject}
▸ *Group ID:* ${cret.id}
▸ *Owner:* @${cret.owner.split("@")[0]}
▸ *Created:* ${moment(cret.creation * 1000).tz("Africa/Lagos").format("DD/MM/YYYY HH:mm:ss")}
▸ *Invite Link:* ${link}`;

    bad.sendMessage(m.chat, {
      text: teks,
      mentions: [cret.owner]
    }, { quoted: m });

  } catch (e) {
    console.error(e);
    reply("❌ Failed to create group. Please check and try again.");
  }
}
break;
case 'ss':
case 'ssweb':
  if (!text) return reply(' *Please provide a URL to screenshot!*\n\nExample:\nssweb https://google.com');
  try {
    const ssApi = `https://api-rebix.vercel.app/api/ssweb?url=${encodeURIComponent(text)}`;
    const { data } = await axios.get(ssApi, { responseType: 'arraybuffer' });

    await bad.sendMessage(m.chat, {
      image: data,
      caption: `🖼️ Screenshot of:\n${text}\n\n> POWERED by kingbadboitech`
    }, { quoted: m });
  } catch (e) {
    console.error('[SSWEB ERROR]', e);
    reply('❌ Failed to get screenshot. Make sure the URL is valid and try again.');
  }
  break;
  case 'img':
case 'image':
case 'searchimage': {
  if (!text) return reply(`*Usage:* \`${prefix}image <query>\`\nExample: \`${prefix}image furry\``);

  try {
    const apiUrl = `https://fastrestapis.fasturl.cloud/search/gimage?ask=${encodeURIComponent(text)}`;
    const res = await fetch(apiUrl);
    
    if (!res.ok) {
      console.error(`API Error: ${res.status}`);
      return reply('⚠️ Image service unavailable. Try again later.');
    }

    const json = await res.json();
    const data = json.result;

    if (!Array.isArray(data) || data.length === 0) {
      return reply(` No images found for "${text}"`);
    }

    // Send first 5 images
    for (let i = 0; i < Math.min(data.length, 5); i++) {
      const img = data[i]?.image;
      if (!img) continue;

      try {
        await bad.sendMessage(m.chat, {
          image: { url: img },
          caption: `🖼️ *${text}*\n🔗 ${data[i].title}`
        }, { quoted: m });
      } catch (e) {
        console.error(`❌ Failed to send image #${i+1}:`, e.message);
      }
    }

  } catch (err) {
    console.error('IMAGE SEARCH ERROR:', err);
    reply(`⚠️ Error: ${err.message}`);
  }
  break;
}
case 'eval': {
  if (!isOwner) return reply('This command is only for the owner.');
  try {
    let evaled = await eval(`(async () => { ${text} })()`);
    if (typeof evaled !== 'string') evaled = require('util').inspect(evaled);
    reply(evaled);
  } catch (err) {
    reply(`Error:\n${err}`);
  }
}
break;
// take 
case 'toimg':
  {
    const quoted = m.quoted ? m.quoted : null
    const mime = (quoted?.msg || quoted)?.mimetype || ''
    if (!quoted) return reply('Reply to a sticker/image.')
    if (!/webp/.test(mime)) return reply(`Reply to a sticker with *${prefix}toimg*`)
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
    const media = await bad.downloadMediaMessage(quoted)
    const filePath = `./tmp/${Date.now()}.jpg`
    fs.writeFileSync(filePath, media)
    await bad.sendMessage(m.chat, { image: fs.readFileSync(filePath) }, { quoted: m })
    fs.unlinkSync(filePath)
  }
  break
  case 'ttsearch': {
    const dann = require('d-scrape')
if (!text) return reply(` cindigo `)
await bad.sendMessage(m.chat, {react: {text: '🀄', key: m.key}})
try {
let anu = await dann.search.tiktoks(text)
bad.sendMessage(m.chat, { video: { url: anu.no_watermark }, mimetype: 'video/mp4', caption: anu.title }, { quoted : m })
} catch (error) {
m.reply('Error : cannot fetch from query')
}
}
break;
case 's':
case 'sticker':
  {
    const quoted = m.quoted ? m.quoted : null
    const mime = (quoted?.msg || quoted)?.mimetype || ''
    if (!quoted) return reply('Reply to an image or video.')
    if (!/image|video/.test(mime)) return reply('Reply to an image or video to create a sticker')
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
    let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
    const mediaPath = await bad.downloadAndSaveMediaMessage(quoted)
    const sticker = new Sticker(mediaPath, {
      pack: global.packname,
      author: global.author,
      type: StickerTypes.FULL,
      quality: 70,
      categories: ['🤖'],
      id: '𝙎𝘾𝘼𝙍𝙇𝙀𝙏',
      background: '#00000000'
    })
    const stickerPath = `./tmp/${Date.now()}.webp`
    await sticker.toFile(stickerPath)
    const buffer = fs.readFileSync(stickerPath)
    await bad.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
    fs.unlinkSync(mediaPath)
    fs.unlinkSync(stickerPath)
  }
  break

case 'take':
case 'steal':
case 'stickerwm':
case 'rich':
case 'wm':
  {
    const quoted = m.quoted ? m.quoted : null
    const mime = (quoted?.msg || quoted)?.mimetype || ''
    if (!quoted) return reply('Reply to a sticker.')
    if (!/image|video/.test(mime)) return reply(`Reply to a sticker to take\nExample: .take Zaddy|kingbadboitech`)
    if (!fs.existsSync('./tmp')) fs.mkdirSync('./tmp')
    let { Sticker, createSticker, StickerTypes } = require('wa-sticker-formatter')
    const mediaPath = await bad.downloadAndSaveMediaMessage(quoted)
    const text = args.join(' ') || ''
    const [pack, author] = text.split('|')
    const sticker = new Sticker(mediaPath, {
      pack: pack || global.packname,
      author: author || global.author,
      type: StickerTypes.FULL,
      quality: 70,
      categories: ['🤖'],
      id: '𝙎𝘾𝘼𝙍𝙇𝙀𝙏',
      background: '#00000000'
    })
    const stickerPath = `./tmp/${Date.now()}.webp`
    await sticker.toFile(stickerPath)
    const buffer = fs.readFileSync(stickerPath)
    await bad.sendMessage(m.chat, { sticker: buffer }, { quoted: m })
    fs.unlinkSync(mediaPath)
    fs.unlinkSync(stickerPath)
  }
  break
  case "play": {
if (!text) return reply(example("past lives"))
await bad.sendMessage(m.chat, {react: {text: '🦜', key: m.key}})
let ytsSearch = await yts(text)
const res = await ytsSearch.all[0]

var anu = await ytdl.ytmp3(`${res.url}`)

if (anu.status) {
let urlMp3 = anu.download.url
await bad.sendMessage(m.chat, {audio: {url: urlMp3}, mimetype: "audio/mpeg", contextInfo: { externalAdReply: {thumbnailUrl: res.thumbnail, title: res.title, body: `Author ${res.author.name} || Duration ${res.timestamp}`, sourceUrl: res.url, renderLargerThumbnail: true, mediaType: 1}}}, {quoted: m})
await bad.sendMessage(m.chat, {react: {text: '', key: m.key}})
} else {
return reply("Error! Result Not Found")
}
}
break;
case 'gfx':
case 'gfx2':
case 'gfx3':
case 'gfx4':
case 'gfx5':
case 'gfx6':
case 'gfx7':
case 'gfx8':
case 'gfx9':
case 'gfx10':
case 'gfx11':
case 'gfx12': {
  const [text1, text2] = text.split('|').map(v => v.trim());
  if (!text1 || !text2) {
    return reply(` *𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞 - GFX*\n\n\`\`\`Example:\`\`\` *${prefix + command} kingbadboitech | Dev*`);
  }

  reply(` *Generating your stylish image...*\n\n🔤 *Text 1:* ${text1}\n🔡 *Text 2:* ${text2}\n\n⏳ Please wait!`);

  try {
    const style = command.toUpperCase();
    const apiUrl = `https://api.nexoracle.com/image-creating/${command}?apikey=d0634e61e8789b051e&text1=${encodeURIComponent(text1)}&text2=${encodeURIComponent(text2)}`;

    await sendImage(apiUrl, `✨ *𝙆𝙞𝙣𝙜 𝘽𝙖𝙙𝙗𝙤𝙞 - ${style} Style*\n\n🔤 *Text 1:* ${text1}\n🔡 *Text 2:* ${text2}`);
  } catch (err) {
    console.error(err);
    reply(`❌ *SCARLET Error: Failed to generate ${command.toUpperCase()} image.*`);
  }
  break;
}
case 'kick': {
  if (!m.quoted) return reply("```Tag or quote the user to kick!```");
  if (!m.isGroup) return reply(msg.only.group);
  if (!isAdmins) return reply("``` Only group admins can kick```");
  if (!isBotAdmins) return reply("``` Bot must be admin```");

  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await bad.groupParticipantsUpdate(m.chat, [users], 'remove');
  reply("``` User has been kicked```");
}
break;

case 'tagadmin':
case 'listadmin':
case 'admin': {
  if (!isCreator) return reply("``` For Owner only```");
  if (!m.isGroup) return reply(msg.only.group);

  const groupAdmins = participants.filter(p => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
  const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';

  let text = `* Group Admins:*\n${listAdmin}`;
  bad.sendMessage(m.chat, {
    text,
    mentions: [...groupAdmins.map(v => v.id), owner]
  }, { quoted: m });
}
break;

case 'delete':
case 'del': {
  if (!isCreator) return reply("``` For Owner only```");
  if (!m.quoted) return reply("``` Reply to a message to delete it```");

  bad.sendMessage(m.chat, {
    delete: {
      remoteJid: m.chat,
      fromMe: false,
      id: m.quoted.id,
      participant: m.quoted.sender
    }
  });
}
break;

case 'linkgroup':
case 'linkgc':
case 'gclink':
case 'grouplink': {
  if (!m.isGroup) return reply(msg.only.group);
  if (!isBotAdmins) return reply("``` Bot must be admin```");

  let response = await bad.groupInviteCode(m.chat);
  bad.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\n*🔗 Group Link:* ${groupMetadata.subject}`, m, { detectLink: true });
}
break;

case 'join': {
  if (!isCreator) return reply("``` For Owner only```");
  if (!text) return reply(`Example: *${prefix + command} <group link>*`);
  if (!isUrl(args[0]) || !args[0].includes('whatsapp.com')) return reply("```❌ Invalid group link!```");

  let result = args[0].split('https://chat.whatsapp.com/')[1];
  await bad.groupAcceptInvite(result);
  reply("``` Successfully joined the group```");
}
break;
case 'tag':
case 'totag': {
  if (!m.isGroup) return reply(msg.only.group);
  if (!isAdmins) return reply("``` Only group admins```");
  if (!isBotAdmins) return reply("``` Bot must be admin```");
  if (!m.quoted) return reply(`Reply with ${prefix + command} to a message`);

  bad.sendMessage(m.chat, {
    forward: m.quoted.fakeObj,
    mentions: participants.map(a => a.id)
  });
}
break;
case 'tagall': {
  if (!isCreator) return reply("```For Owner only```");
  if (!m.isGroup) return reply(msg.only.group);

  const textMessage = args.join(" ") || "No context";
  let teks = `\`\`\` Tagging all members:\`\`\`\n> *${textMessage}*\n\n`;

  const groupMetadata = await bad.groupMetadata(m.chat);
  const participants = groupMetadata.participants;

  for (let mem of participants) {
    teks += `@${mem.id.split("@")[0]}\n`;
  }

  bad.sendMessage(m.chat, {
    text: teks,
    mentions: participants.map((a) => a.id)
  }, { quoted: m });
}
break;

case 'hidetag': {
  if (!isCreator) return reply("``` For Owner only```");
  const groupMetadata = await bad.groupMetadata(m.chat);
  const participants = groupMetadata.participants;
  
  bad.sendMessage(m.chat, {
    text: q || '',
    mentions: participants.map(a => a.id)
  }, { quoted: m });
}
break;

case 'promote': {
  if (!m.isGroup) return reply(msg.only.group);
  if (!isAdmins) return reply("```Only group admins can use this!```");
  if (!isBotAdmins) return reply("``` Bot needs to be admin first!```");

  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await bad.groupParticipantsUpdate(m.chat, [users], 'promote');
  reply("```User promoted to admin```");
}
break;

break;
case 'demote': {
  if (!m.isGroup) return reply(msg.only.group);
  if (!isAdmins) return reply("```Only group admins can use this!```");
  if (!isBotAdmins) return reply("``` Bot needs to be admin first!```");

  let users = m.mentionedJid[0] || m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await bad.groupParticipantsUpdate(m.chat, [users], 'demote');
  reply("``` User demoted from admin```");
}
break;

case 'mute': {
  if (!m.isGroup) return reply("```Group command only```");
  if (!isAdmins) return reply("```Admins only```");
  if (!isBotAdmins) return reply("``` Bot needs to be admin```");

  await bad.groupSettingUpdate(m.chat, 'announcement');
  reply("``` Group muted. Only admins can send messages now.```");
}
break;

case 'unmute': {
  if (!m.isGroup) return reply("``` Group command only```");
  if (!isAdmins) return reply("``` Admins only```");
  if (!isBotAdmins) return reply("``` Bot needs to be admin```");

  await bad.groupSettingUpdate(m.chat, 'not_announcement');
  reply("``` Group unmuted. Everyone can send messages.```");
}
break;

case 'left': {
  if (!isCreator) return reply("```For Owner only```");
  await bad.groupLeave(m.chat);
  reply("``` Bot left the group```");
}
break;

case 'add': {
  if (!isCreator) return reply("``` For Owner only```");
  if (!m.isGroup) return reply(msg.only.group);
  if (!isBotAdmins) return reply("``` Bot must be admin```");

  let users = m.quoted?.sender || text.replace(/[^0-9]/g, '') + '@s.whatsapp.net';
  await bad.groupParticipantsUpdate(m.chat, [users], 'add');
  reply("``` User added to group```");
}
break;
case 'tiktok': case "tt": {              
    if (!text) return reply(`Example : ${prefix + command} link`);
    if (!text.includes('tiktok')) return reply(`Link Invalid!!`);
    m.reply("```loading─SCARLET*.```");
    
   
    fetch(`https://api.tiklydown.eu.org/api/download/v5?url=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.status !== 200) return reply('Api error');
            
            
        const title = `\`success──SCARLET\``
            const videoUrl = data.result.play;
            const audioUrl = data.result.music;
            
            
            bad.sendMessage(m.chat, { caption: title, video: { url: videoUrl }}, { quoted: m });
            bad.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mp4' }, { quoted: null });
        })
        .catch(err => reply(err.toString()));
}
break;
case 'igdl':
case 'Instagram':
case 'ig': {
  if (!text) return reply(` *Instagram Downloader*\n\nExample:\n.ig <instagram_post/reel_url>`);

  try {
    const res = await fetch(`https://fastrestapis.fasturl.cloud/downup/igdown/simple?url=${encodeURIComponent(text)}`);
    const json = await res.json();

    if (json.status !== 200 || !json.result?.status) {
      return reply('Failed to fetch Instagram media. Make sure the link is valid and public.');
    }

    const media = json.result.data[0];

    await bad.sendMessage(m.chat, {
      video: { url: media.url },
      caption: `✅ *Instagram Video Downloaded*\n\n🌐 URL: ${text}`,
    }, { quoted: m });

  } catch (err) {
    console.error('[IG ERROR]', err);
    reply(' An error occurred while downloading the Instagram video.');
  }
  break;
}
case 'tr': {
  if (!m.quoted || !m.quoted.text) return reply('Reply to a message you want translated.');

  const query = encodeURIComponent(m.quoted.text.trim());
  const targetLang = 'en';
  const api = `https://fastrestapis.fasturl.cloud/tool/translate?text=${query}&target=${targetLang}`;

  try {
    const res = await fetch(api);
    const json = await res.json();

    if (json.status !== 200) return reply(' Failed to translate.');

    const result = `*Translated to English*\n\n📝 *Original:* ${m.quoted.text.trim()}\n📘 *Result:* ${json.result.translatedText}`;
    reply(result);
  } catch (err) {
    console.error('[TRANSLATE ERROR]', err);
    reply(' Error translating message.');
  }
  break;
}
case 'git':
case 'gitclone': {
  if (!args[0]) return bad.reply(m.chat, `Where is the link?\nExample:\n${prefix + command} https://github.com/user/repo`, m);
  if (!isUrl(args[0]) || !args[0].includes('github.com')) return bad.reply(m.chat, `✖️ Invalid GitHub link!`, m);

  let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/([^\/\s]+)(?:\.git)?/i;
  let match = args[0].match(regex1);
  if (!match) return bad.reply(m.chat, `✖️ Unable to parse GitHub URL.\nMake sure it's like:\nhttps://github.com/user/repo`, m);

  let [, user, repo] = match;
  let url = `https://api.github.com/repos/${user}/${repo}/zipball`;

  try {
    let response = await fetch(url, { method: 'HEAD' });
    let contentDisposition = response.headers.get('content-disposition');
    let filename = contentDisposition?.match(/attachment; filename="?(.+?)"?$/)?.[1] || `${repo}.zip`;

    await bad.reply(m.chat, `「 *${botname} GitCloner* 」\n Repo: *${user}/${repo}*\n📦 File: *${filename}*\n Sending zipped repo...\n> powered by kingbadboitech`, m);

    await bad.sendMessage(m.chat, {
      document: { url },
      fileName: filename,
      mimetype: 'application/zip'
    }, { quoted: m });
  } catch (err) {
    console.error(err);
    bad.reply(m.chat, ` Failed to fetch GitHub repo.\nMaybe it’s private or doesn’t exist.`, m);
  }
}
break;
case 'download':
case 'save':
case 'svt': {
  if (!isCreator) return reply("```for Owner only```.");
  const quotedMessage = m.msg.contextInfo.quotedMessage;
  if (quotedMessage) {
    if (quotedMessage.imageMessage) {
      let imageCaption = quotedMessage.imageMessage.caption;
      let imageUrl = await bad.downloadAndSaveMediaMessage(quotedMessage.imageMessage);
      bad.sendMessage(botNumber, { image: { url: imageUrl }, caption: imageCaption });
    }
    if (quotedMessage.videoMessage) {
      let videoCaption = quotedMessage.videoMessage.caption;
      let videoUrl = await bad.downloadAndSaveMediaMessage(quotedMessage.videoMessage);
      bad.sendMessage(botNumber, { video: { url: videoUrl }, caption: videoCaption });
    }
  }
}
break;
case 'furbrat': {
  if (!text) return reply('Provide text to turn into a furBrat sticker!\nExample: .brat Yo');

  // Make sure only the text after ".brat" is used, no command part
  const inputText = text.trim();

  const imageUrl = `https://fastrestapis.fasturl.cloud/maker/furbrat?text=${encodeURIComponent(inputText)}`;

  try {
    await bad.sendImageAsSticker(m.chat, imageUrl, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (err) {
    console.error('Brat sticker generation error:', err);
    reply('Oops! Failed to create your Brat sticker.');
  }
}
break;
case 'brat': {
  if (!text) return reply('Provide text to turn into a Brat sticker!\nExample: .brat Yo');

  // Make sure only the text after ".brat" is used, no command part
  const inputText = text.trim();

  const imageUrl = `https://www.laurine.site/api/generator/brat?text=${encodeURIComponent(inputText)}`;

  try {
    await bad.sendImageAsSticker(m.chat, imageUrl, m, {
      packname: global.packname,
      author: global.author
    });
  } catch (err) {
    console.error('Brat sticker generation error:', err);
    reply('Oops! Failed to create your Brat sticker.');
  }
}
break;
case 'tourl': {    

    let q = m.quoted ? m.quoted : m;
    if (!q || !q.download) return reply(`Reply to an Image or Video with command ${prefix + command}`);
    
    let mime = q.mimetype || '';
    if (!/image\/(png|jpe?g|gif)|video\/mp4/.test(mime)) {
        return reply('Only images or MP4 videos are supported!');
    }

    let media;
    try {
        media = await q.download();
    } catch (error) {
        return reply('Failed to download media!');
    }

    const uploadImage = require('./allfunc/Data6');
    const uploadFile = require('./allfunc/Data7');
    let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
    let link;
    try {
        link = await (isTele ? uploadImage : uploadFile)(media);
    } catch (error) {
        return reply('Failed to upload media!');
    }

    bad.sendMessage(m.chat, {
        text: `[\`\`\`DONE BY ${botname} MD]\`\`\` \n[${link}]`
    }, { quoted: m });
}
break;
case 'setppbot': {
  if (!isOwner) return reply('This command is only for the owner.');
  if (!quoted || !/image/.test(mime)) return reply(`Reply to an image to set as bot profile picture.`);
  let media = await quoted.download();
  await bad.updateProfilePicture(botNumber, media);
  reply('╭─〔 POWERED BY SCARLET 〕\n Profile picture updated.');
}
break;
case 'react-ch': 
case 'reactch': {
    if (!isPremium) return reply(`Sorry, only premium users can use this command`);

    if (!args[0]) {
        return reply("Usage:\n.reactch https://whatsapp.com/channel/abcd SCARLET");
    }

    if (!args[0].startsWith("https://whatsapp.com/channel/")) {
        return reply("This channel link is invalid.");
    }

    const hurufGaya = {
        a: '🅐', b: '🅑', c: '🅒', d: '🅓', e: '🅔', f: '🅕', g: '🅖',
        h: '🅗', i: '🅘', j: '🅙', k: '🅚', l: '🅛', m: '🅜', n: '🅝',
        o: '🅞', p: '🅟', q: '🅠', r: '🅡', s: '🅢', t: '🅣', u: '🅤',
        v: '🅥', w: '🅦', x: '🅧', y: '🅨', z: '🅩',
        '0': '⓿', '1': '➊', '2': '➋', '3': '➌', '4': '➍',
        '5': '➎', '6': '➏', '7': '➐', '8': '➑', '9': '➒'
    };

    const emojiInput = args.slice(1).join(' ');
    const emoji = emojiInput.split('').map(c => {
        if (c === ' ') return '―';
        const lower = c.toLowerCase();
        return hurufGaya[lower] || c;
    }).join('');

    try {
        const link = args[0];
        const channelId = link.split('/')[4];
        const messageId = link.split('/')[5];

        const res = await bad.newsletterMetadata("invite", channelId);
        await bad.newsletterReactMessage(res.id, messageId, emoji);

        return reply(` Successfully sent reaction *${emoji}* in channel *${res.name}*.`);
    } catch (e) {
        console.error(e);
        return reply(" Failed to send the reaction. Please check the link and try again.");
    }
};
break;
case 'addowner': case 'addown': {
    if (!isCreator) return m.reply("Owner only.");
    if (!args[0]) return m.reply(`Usage: ${command} 234xxx`);

    let number = qtext.replace(/[^0-9]/g, '');
    let checkNumber = await bad.onWhatsApp(number + "@s.whatsapp.net");
    if (!checkNumber.length) return m.reply("Invalid number!");

    owner.push(number);
    Premium.push(number);
    fs.writeFileSync('./allfunc/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./allfunc/premium.json', JSON.stringify(Premium));

    m.reply("Owner added successfully.");
}
break;

case 'delowner': case 'delown': {
    if (!isCreator) return m.reply("Owner only.");
    if (!args[0]) return m.reply(`Usage: ${command} 234xxx`);

    let number = qtext.replace(/[^0-9]/g, '');
    owner.splice(owner.indexOf(number), 1);
    Premium.splice(Premium.indexOf(number), 1);

    fs.writeFileSync('./allfunc/owner.json', JSON.stringify(owner));
    fs.writeFileSync('./allfunc/premium.json', JSON.stringify(Premium));

    m.reply("Owner removed successfully.");
}
break;

case 'addpremium': case 'addprem': {
    if (!isCreator) return m.reply("Owner only!");
    if (!args[0]) return m.reply(`Usage: ${prefix + command} 234xxx`);

    let number = qtext.split("|")[0].replace(/[^0-9]/g, '');
    let ceknum = await bad.onWhatsApp(number + "@s.whatsapp.net");
    if (!ceknum.length) return m.reply("Invalid number!");

    Premium.push(number);
    fs.writeFileSync('./allfunc/premium.json', JSON.stringify(Premium));

    m.reply("Success! User added to premium.");
}
break;

case 'delpremium': case 'delprem': {
    if (!isCreator) return m.reply("Owner only!");
    if (!args[0]) return m.reply(`Usage: ${prefix + command} 234xxx`);

    let number = qtext.split("|")[0].replace(/[^0-9]/g, '');
    let indexPremium = Premium.indexOf(number);

    if (indexPremium !== -1) {
        Premium.splice(indexPremium, 1);
        fs.writeFileSync('./allfunc/premium.json', JSON.stringify(Premium));
        m.reply("Success! User removed from premium.");
    } else {
        m.reply("User is not in the premium list.");
    }
}
break;
case 'runtime': case 'alive': { 
         reply(`◈SCARLET md is active \n s⍴ᥱᥱძ\n : ${runtime(process.uptime())} `); 
}
break
 case 'ping': case 'speed': { 

let timestamp = speed()
let latensi = speed() - timestamp

         reply (`\`\`\`SCARLET\`\`\`\n\◈   𝚂𝙿𝙴𝙴𝙳   : ${latensi.toFixed(4)} 𝐌𝐒`); 
}
break;
case 'public': {
    if (!isCreator) return m.reply("Owner only.");
    bad.public = true;
    m.reply("Bot set to public mode.");
}
break;

case 'private': case 'self': {
    if (!isCreator) return m.reply("Owner only.");
    bad.public = false;
    m.reply("Bot set to private mode.");
}
break;

default:
if (budy.startsWith('<')) {
if (!isCreator) return;
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)}
return m.reply(bang)}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))}}
if (budy.startsWith('>')) {
if (!isCreator) return;
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}
if (budy.startsWith('$')) {
if (!isCreator) return;
require("child_process").exec(budy.slice(2), (err, stdout) => {
if (err) return m.reply(`${err}`)
if (stdout) return m.reply(stdout)
})
}
}
} catch (err) {
console.log(require("util").format(err));
}
}
let file = require.resolve(__filename)
require('fs').watchFile(file, () => {
require('fs').unwatchFile(file)
console.log('\x1b[0;32m'+__filename+' \x1b[1;32mupdated!\x1b[0m')
delete require.cache[file]
require(file)
})