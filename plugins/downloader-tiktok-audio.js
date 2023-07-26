import fetch from 'node-fetch'
import axios from 'axios'
import fs from 'fs'

let handler = async (m, { conn, args }) => {
  if (!args[0]) throw 'Uhm...url nya mana?'
  let chat = global.db.data.chats[m.chat]
  m.reply(wait)
  await conn.reply(m.chat, `Downloading media from Tiktok`, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        mediaUrl: '',
        mediaType: 2,
        description: sgc,
        title: global.wm,
        body: 'Nih Kak', //`${fileSizeH}`,
        sourceUrl: snh,
        thumbnail: fs.readFileSync('./thumbnail.jpg')
      }
    }
  })
  let res = await fetch(`https://malesin.xyz/tiktok?url=${args[0]}`)
  let json = await res.json()
  const {title, author} = json
  let txt = `🚀 *Link:* ${await (await axios.get(`https://tinyurl.com/api-create.php?url=${args[0]}`)).data}`
  await conn.sendFile(m.chat, json.audio, 'tiktokaudio.mp3', `
┏┉━━━━━━━━━━━❏
┆ *TIKTOK MP3*
├┈┈┈┈┈┈┈┈┈┈┈
┆• *Judul: ${title}* 
│• *Type:* MP3
┆• *📥 Ukuran File:* 
└❏
`.trim(), m, null, {
    document: { url: json.audio }, mimetype: 'audio/mpeg', fileName: `${title}.mp3`, conntextInfo: {
      externalAdReply: {
        title: '▶︎ ━━━━━━━•────────────────── ',
        body: 'Now Playing...',
        description: 'Now Playing...',
        mediaType: 2,
        thumbnail: await (await fetch('https://telegra.ph/file/9e323ad1f4b2d52579416.jpg')).buffer(),
        mediaUrl: `https://youtu.be/E1nLzgkOH8A`
      }
    }
  })
}
handler.tags = ['downloader']
handler.command = /^(tt|tiktok)(a(udio)?|mp3|sound)(dl)?(download(er)?)?$/i

handler.limit = true

export default handler