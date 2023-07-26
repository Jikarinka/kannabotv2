import instagramGetUrl from 'instagram-url-direct'
import fetch from 'node-fetch'
let handler = async (m, { Func, conn, text, command, usedPrefix }) => {
  if (!text) throw Func.example(usedPrefix, m, "Balas Pesan Ini menggunakan LINK Instagram")
let response = await instagramGetUrl(text)

for (let data of response.url_list) {
await conn.sendHydrated('120363046611601668@g.us', `${htki} ɪɴꜱᴛᴀɢʀᴀᴍ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ ${conn.getName(m.sender)}`, await (await fetch(data)).buffer(),
        data, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
        ['ᴅᴏɴᴀꜱɪ', `.donasi`],
        ['ᴍᴇɴᴜ', `.menu`],
        [null, null]], m)
conn.reply(m.chat, 'Done', m)
}
}

handler.command = ['oig']
handler.owner = true

export default handler