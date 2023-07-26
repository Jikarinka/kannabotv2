import fetch from 'node-fetch'
import moment from 'moment-timezone'
import fs from 'fs'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler  = async (m, { conn, command, args, usedPrefix, DevMode }) => {
  let type = (args[0] || '').toLowerCase()
  let _type = (args[0] || '').toLowerCase()

//------- NOMOR
  let nowner = `${nomorown.split`@`[0]}@s.whatsapp.net`
  let teksnomor = `${htki} *EMPORIA PLAZA* ${htka}

*ɢᴀᴍɪꜱ ᴇᴀꜱᴛ ɪɴᴅɪᴇꜱ ᴋᴏʀᴇᴀ ᴘᴀᴛᴛᴇʀɴ* 
> ʙᴀʜᴀɴ = ᴋᴀᴛᴜɴ
> ᴍᴏᴛɪꜰ = ʟᴀɪɴɴʏᴀ

ᴅɪᴋɪʀɪᴍ ᴅᴀʀɪ
ᴋᴏᴛᴀ ᴋᴇᴅɪʀɪ - ᴍᴏᴊᴏʀᴏᴛᴏ, ᴊᴀᴡᴀ ᴛɪᴍᴜʀ, ɪɴᴅᴏɴᴇꜱɪᴀ


🛍 • *ꜱʜᴏᴏᴘᴇᴇ:* https://bit.ly/3q8Yazt
`

//------------ BIO
let pp = 'https://cdn.shopify.com/s/files/1/0614/8007/5451/files/Untitled_400_x_160_px_400x160.png?v=1649831757' 
let gms = 'https://telegra.ph/file/614919ed091d8d87166b8.jpg'
let ame = 'https://cf.shopee.co.id/file/15a3b47afdfa883f6c65fdecd6a91b64'
let teksblouse = `${htki} *EMPORIA PLAZA* ${htka}

*E M P O R I A  P L A Z A  S T O R E*
🧩 • *ᴡᴇʙ ᴇᴍᴘᴏʀɪᴀ:* https://emporiaplaza.com/


*S O S M E D  I N F O*
🛍 • *ꜱʜᴏᴘᴇᴇ:* https://shopee.co.id/dgsnnt75cs
🎬 • *ʏᴏᴜᴛᴜʙᴇ:* https://www.youtube.com/channel/UCkwa9zDf3-hm1FdwZa1DCSQ
🎶 • *ɪɴꜱᴛᴀɢʀᴀᴍ:* https://instagram.com/suryatama_media/
🍿 • *ᴛɪᴋᴛᴏᴋ:* https://www.tiktok.com/@emporiaplaza.store

*C O N T A C T  P E R S O N*
🪀 • *ᴡʜᴀᴛꜱᴀᴘᴘ:* https://wa.me/6281237561088

`
let ameela = `${htki} *EMPORIA PLAZA* ${htka}


*ᴀᴍᴇᴇʟᴀ ʙʟᴏᴜꜱᴇ ᴘʀᴇᴍɪᴜᴍ* 
> ʙᴀʜᴀɴ = ᴋᴀᴛᴜɴ
> ᴍᴏᴛɪꜰ = ʟᴀɪɴɴʏᴀ

ᴅɪᴋɪʀɪᴍ ᴅᴀʀɪ
ᴋᴏᴛᴀ ᴋᴇᴅɪʀɪ - ᴍᴏᴊᴏʀᴏᴛᴏ, ᴊᴀᴡᴀ ᴛɪᴍᴜʀ, ɪɴᴅᴏɴᴇꜱɪᴀ

*S O S M E D  I N F O*
🧩 • *ᴡᴇʙ ᴇᴍᴘᴏʀɪᴀ:* https://emporiaplaza.com/
🛍 • *ꜱʜᴏᴘᴇᴇ:* https://shopee.co.id/dgsnnt75cs
🎬 • *ʏᴏᴜᴛᴜʙᴇ:* youtube.com/channel/UCtAja3gj9gdDLkCFQgve0EQ
🎶 • *ɪɴꜱᴛᴀɢʀᴀᴍ:* https://www.instagram.com/thestudioskapsa/
🍿 • *ᴛɪᴋᴛᴏᴋ:* https://www.tiktok.com/@thestudioskapsa

*C O N T A C T  P E R S O N*
🪀 • *ᴡʜᴀᴛꜱᴀᴘᴘ:* https://wa.me/6281237561088

`

  let teks = ' '
const sections = [
   {
	title: `${htjava}  EMPORIA PLAZA  –––––––·•`,
	rows: [
	    {title: `📢${pmenus} INFO ABOUT EMPORIA PLAZA`, rowId: ".ep blouse", description: "THIS IS DIGITAL MARKETING"},
        {title: `🎪${pmenus} GROUP WhatsAPP EMPORIA PLAZA`, rowId: ".ep gc", description: "THIS IS A GROUP WhatsAPP"},
        ]
      },
    ]

let _mpt
    if (process.send) {
      process.send('uptime')
      _mpt = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }
    let mpt = clockString(_mpt)
    
let usrs = db.data.users[m.sender]
let tek = `*${ucapan()} ${conn.getName(m.sender)}*
• *ᴛɪᴍᴇ:* ${moment.tz('Asia/Jakarta').format('HH')} H  ${moment.tz('Asia/Jakarta').format('mm')} M  ${moment.tz('Asia/Jakarta').format('ss')} S

*U S E R  I N F O*
• *ɴᴀᴍᴇ:* ${usrs.registered ? usrs.name : conn.getName(m.sender)}
• *ᴛᴀɢs:* @${m.sender.split`@`[0]}
• *sᴛᴀᴛᴜs:* *O N L I N E*

`
const listMessage = {
  text: tek,
  footer: '🛒🛍 *EMPORIA PLAZA*\nIntroduce customers to your shop with lifestyle and product imagery',
  mentions: await conn.parseMention(tek),
  title: `${htki} *EMPORIA PLAZA* ${htka}`,
  buttonText: `CLICK HERE ⎙`,
  sections
}

const ftoko = {
       key: {
                   participant : '622150996855@s.whatsapp.net'},
               message: {
                   "productMessage": {
                       "product": {
                           "productImage":{
                               "mimetype": "image/jpeg",
                               "jpegThumbnail": fs.readFileSync('./thumbnail.jpg') //Gambarnye
                           },
                           "title": 'E M P O R I A  P L A Z A', //Kasih namalu 
                           "description": '🛒🛍 *EMPORIA PLAZA*\nIntroduce customers to your shop with lifestyle and product imagery', 
                           "currencyCode": "USD",
                           "priceAmount1000": "20000000",
                           "retailerId": "Ghost",
                           "productImageCount": 1
                       },
                           "businessOwnerJid": `0@s.whatsapp.net`
               }
           }
       }

  let buttonMessage= {
'document':{'url':'https://chat.whatsapp.com/JFQLb6a51KZ0cfkzBst7uj'},
'mimetype':global.ddocx,
'fileName':'E M P O R I A  P L A Z A',
'fileLength':fsizedoc,
'pageCount':fpagedoc,
'contextInfo':{
'forwardingScore':555,
'isForwarded':true,
'externalAdReply':{
'mediaUrl':'https://instagram.com/suryatama_media?igshid=YmMyMTA2M2Y=',
'mediaType':2,
'previewType':'pdf',
'title':'🛒 ┊ E M P O R I A  P L A Z A',
'body':'🛒 ┊ E M P O R I A  P L A Z A',
'thumbnail':await(await fetch('https://telegra.ph/file/cbdbf3af957aec8770354.jpg')).buffer(),
'sourceUrl':sgc}},
'caption':teksblouse,
'footer':botdate,
'buttons':[
{'buttonId':'.ep gc','buttonText':{'displayText':'ɢʀᴏᴜᴘ ᴡʜᴀᴛꜱᴀᴘᴘ'},'type':1},
],
'headerType':6}


  try {
    if (/(emporia|ep|emporiaplaza)/i.test(command)) {
      const count = args[1] && args[1].length > 0 ? Math.min(99999999, Math.max(parseInt(args[1]), 1)) : !args[1] || args.length < 3 ? 1 : Math.min(1, count)
        switch (type) {
            case 'blouse':
          //await conn.sendButton(m.chat, teksblouse, botdate, await conn.resize(pp, 300, 160), ['EMPORIA PLAZA', `.ep`], m, { asLocation: true, contextInfo: { mentions: conn.parseMention(teksblouse) } })
            /*await conn.reply(m.chat, teksblouse, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: 'https://instagram.com/thestudioskapsa?igshid=YmMyMTA2M2Y=',
    mediaType: 2,
    previewType: 'pdf',
    title: 'E M P O R I A  P L A Z A', 
    body: 'Introduce customers to your shop with lifestyle and product imagery',  
    sourceUrl: 'https://chat.whatsapp.com/JFQLb6a51KZ0cfkzBst7uj', 
    thumbnail: await(await fetch('https://telegra.ph/file/cbdbf3af957aec8770354.jpg')).buffer()
      }}
     })*/
             await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
            break
             case 'gc':
              await conn.reply(m.chat, 'Silahkan bergabung WhatsAPP *E M P O R I A  P L A Z A*', 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: '🛒 ┊ E M P O R I A  P L A Z A', 
    body: '— GOOD DAY IS TODAY —',  
    sourceUrl: 'https://chat.whatsapp.com/JFQLb6a51KZ0cfkzBst7uj', 
    thumbnail: await(await fetch('https://telegra.ph/file/d06e73b9ade7fca18ceaa.jpg')).buffer()
      }}
     })
             break
            
          default:
            return await conn.sendMessage(m.chat, listMessage, { quoted: m, contextInfo: { mentionedJid: [m.sender] }})
        }
    } else if (/aoaooaoaooaoa/i.test(command)) {
      const count = args[2] && args[2].length > 0 ? Math.min(99999999, Math.max(parseInt(args[2]), 1)) : !args[2] || args.length < 4 ? 1 :Math.min(1, count)
      switch (_type) {
        case 'g':
             case 'g':
          break
        case '':
          break

        default:
          return conn.sendButton( m.chat, caption, wm, null, [`⋮☰ Menu`, `.menu`], m)
      }
    }
  } catch (err) {
    m.reply("Error\n\n\n" + err.stack)
  }
}

handler.help = ['emporia', 'ep', 'emporiaplaza']
handler.tags = ['main', 'info']
handler.command = /^(emporia|ep|emporiaplaza)/i

export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, ' H ', m, ' M ', s, ' S '].map(v => v.toString().padStart(2, 0)).join('')
}
function clockStringP(ms) {
  let ye = isNaN(ms) ? '--' : Math.floor(ms / 31104000000) % 10
  let mo = isNaN(ms) ? '--' : Math.floor(ms / 2592000000) % 12
  let d = isNaN(ms) ? '--' : Math.floor(ms / 86400000) % 30
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000) % 24
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [ye, ' *Years 🗓️*\n',  mo, ' *Month 🌙*\n', d, ' *Days ☀️*\n', h, ' *Hours 🕐*\n', m, ' *Minute ⏰*\n', s, ' *Second ⏱️*'].map(v => v.toString().padStart(2, 0)).join('')
}
function ucapan() {
  const time = moment.tz('Asia/Jakarta').format('HH')
  let res = "Hiii 😀"
  if (time >= 4) {
    res = "Good Morning 🌄"
  }
  if (time >= 10) {
    res = "Good Afternoon ☀️"
  }
  if (time >= 15) {
    res = "Good Afternoon 🌇"
  }
  if (time >= 18) {
    res = "Good Night 🌙"
  }
  return res
}

