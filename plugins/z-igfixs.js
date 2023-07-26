/*import instagramGetUrl from 'instagram-url-direct'
import fetch from 'node-fetch'
let handler = async (m, { Func, conn, text, command, usedPrefix }) => {
  if (!text) throw Func.example(usedPrefix, m, "Balas Pesan Ini menggunakan LINK Instagram")
let response = await instagramGetUrl(text)

for (let data of response.url_list) {
await conn.sendHydrated(m.chat, `${htki} ɪɴꜱᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${conn.getName(m.sender)}`, await (await fetch(data)).buffer(),
        data, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
        ['ᴅᴏɴᴀꜱɪ', `.donasi`],
        ['ᴍᴇɴᴜ', `.menu`],
        [null, null]], m)
}
}

handler.help = ['instagram <url>']
handler.tags = ['downloader']
handler.command = /^i(nsta)?g(ram)?(dl)?$/i
handler.register = false

export default handler*/

import { instagram } from '@xct007/frieren-scraper'
import fetch from 'node-fetch'

let handler = async (m, { Func, conn, text, command, usedPrefix }) => {
  if (!text) throw Func.example(usedPrefix, m, "Balas Pesan Ini menggunakan LINK Instagram")

let res = await instagram.v1(text)
let rest = res.url

for (let i of res) {

   await conn.sendFile(m.chat, await (await fetch(i.url)).buffer(), '', '', m)

/*await conn.sendButton(m.chat, `${htki} ɪɴꜱᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${conn.getName(m.sender)}`, await (await fetch(i.url)).buffer(),
      [['ᴅᴏɴᴀꜱɪ', `.donasi`], ['ᴍᴇɴᴜ', `.menu`] ], m)*/
  }
}
handler.help = ['instagram <url>']
handler.tags = ['downloader']
handler.command = /^i(nsta)?g(ram)?(dl)?$/i
handler.register = false

export default handler