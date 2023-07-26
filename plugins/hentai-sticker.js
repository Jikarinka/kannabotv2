import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'
let { MessageType } = (await import('@adiwajshing/baileys')).default

let handler = async(m, { conn }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)


  let res = await fetch('https://api.waifu.pics/nsfw/blowjob')
  let json = await res.json()
  let stiker = await sticker(null, json.url, global.packname, global.author)
  if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, false, { asSticker: true })
  throw stiker.toString()
}
handler.help = ['henstick']
handler.tags = ['hentai']
handler.command = /^henstick$/i
handler.limit = true
handler.premium = true

export default handler