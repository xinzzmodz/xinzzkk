const fs = require('fs')
const chalk = require('chalk')

//aumto functioner
global.autoTyping = false //auto tying in gc (true to on, false to off)
global.autoRecord = false //auto recording (true to on, false to off)

//documents variants
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'

//owmner v card
global.vcardowner = ['558582385190'] //ur owner number
global.ownername = "Risky Ofc" //ur owner name
global.developer = "Risky Ofc" //nama lu
global.ytname = "YT: Risky Ofc" //ur yt chanel name
global.socialm = "https://instagram.com/david.sousz" //ur github or insta name
global.sgc = "https://bit.ly/malia-md"
global.location = "Brasil" //ur location

//bot bomdy 
global.owner = ['558582385190'] //ur number
global.ownernomer = "558582385190" //ur number
global.ownertag = '558582385190' //ur tag number
global.premium = ['558582385190','554791368075','554792498923'] //ur premium number
global.botname = '𝘔𝘢𝘭𝘪𝘢-𝘔𝘥' //ur bot name
global.ownername = "𝘋𝘦𝘷 𝘙𝘪𝘴𝘬𝘺"
global.linkz = " " //your theme url which will be displayed on whatsapp
global.dana = "558582385190"
global.pulsa = "558582385190"
global.websitex = " " //ur website to be displayed
global.websitex1 = " "
global.botscript = ' ' //script link
global.themeemoji = "🦄" //ur theme emoji
global.packname = "Sticker By" //ur sticker watermark packname
global.author = "Malia Bot" //ur sticker watermark author
global.wm = "Risky Ofc" //ur watermark

// Other
global.sessionName = 'Session'
global.prefa = ['','!','.','#','&']
global.sp = ''
global.mess = {
    success: 'Feito!',
    admin: '𝘗𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘱𝘰𝘳 𝘢𝘥𝘮𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳𝘦𝘴 𝘥𝘰 𝘨𝘳𝘶𝘱𝘰!!',
    botAdmin: '𝘗𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘴𝘦 𝘢 𝘣𝘰𝘵 𝘧𝘰𝘳 𝘶𝘮 𝘢𝘥𝘮𝘪𝘯𝘪𝘯𝘪𝘴𝘵𝘳𝘢𝘥𝘰𝘳',
    premime: '𝘗𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘱𝘰𝘳 𝘶𝘴𝘶𝘢𝘳𝘪𝘰𝘴 𝘱𝘳𝘦𝘮𝘪𝘶𝘮!',
    owner: '𝘗𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘱𝘦𝘭𝘰 𝘮𝘦𝘶 𝘋𝘦𝘴𝘦𝘯𝘷𝘰𝘭𝘷𝘦𝘥𝘰𝘳!',
    group: '𝘗𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘦𝘮 𝘨𝘳𝘶𝘱𝘰𝘴!',
    private: '𝘗𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘯𝘰 𝘱𝘳𝘪𝘷𝘢𝘥𝘰!',
    bot: '𝘗𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘱𝘦𝘭𝘰 𝘉𝘰𝘵!',
    wait: '𝘗𝘳𝘰𝘤𝘦𝘴𝘴𝘢𝘯𝘥𝘰.......',    linkm: 'Cadê o link?',
    endLimit: '𝘚𝘦𝘶 𝘭𝘪𝘮𝘪𝘵𝘦 𝘢𝘤𝘢𝘣𝘰𝘶! 𝘈𝘨𝘶𝘢𝘳𝘥𝘦 𝘮𝘦𝘪𝘰 𝘥𝘪𝘢.',
    nsfw: '𝘌𝘴𝘴𝘦 𝘳𝘦𝘤𝘶𝘳𝘴𝘰 𝘱𝘰𝘥𝘦 𝘴𝘦𝘳 𝘶𝘵𝘪𝘭𝘪𝘻𝘢𝘥𝘰 𝘢𝘱𝘦𝘯𝘢𝘴 𝘴𝘦 𝘶𝘮 𝘥𝘰𝘴 𝘢𝘥𝘮𝘪𝘯𝘴 𝘱𝘦𝘳𝘮𝘪𝘵𝘪𝘳 𝘢𝘵𝘪𝘷𝘪𝘢𝘳 𝘰 𝘮𝘰𝘥𝘰 𝘕𝘚𝘍𝘞!',
}
global.limitawal = {
    premium: "Infinity",
    free: 25
}
global.thum = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.log0 = fs.readFileSync("./Media/theme/jarot.jpg") //ur logo pic
global.err4r = fs.readFileSync("./Media/theme/jarot.jpg") //ur error pic
global.thumb = fs.readFileSync("./Media/theme/jarot.jpg") //ur thumb pic
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//module api
module.exports = {
api:{
     removebg: ['zNKnayDFH1nugtA81fkPMzXn','5CyygkXiT5vrki2Z6ZsUCE8u','Mz4yJkagrCLotdgsr4Ms39ud','vEeWnzQws9kJoYNMYKhbT1s6','2arViktax9HUdMqy9U7wFLKT','sfZpRHNwVPAG57nZVHijYZ9v','oqVVyQ2rBDYdUrxThg4GdjhA','rGp4axHpQ56Y5tRLX7J789QC','NfPx6NgTkpVYLnKUZHCAM1P3'],//https://remove.bg/api
     unscreen: ['N6J4Bjbyh2V4eqhAPTWYtFER','fcKJkPstNXp4pjntYt3bR38E'],
     upscaling: '1255173112',
     imgsuper: ['198f69d4b2msh0021bb0690669a6p1f3a80jsn9cab1ae485cc','85731a45bbmshf7bd86f09b300c2p14e544jsncd18a8d5dba2'],//https://super-image1.p.rapidapi.com/
     speechtotext: ['897beebb3ac74ceeaa6f8d0903b2297a']
   }
   }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
