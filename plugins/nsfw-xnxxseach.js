let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)

    if (!text) throw `text nya mana?\n\ncontoh:\n${usedPrefix + command} jepang`
    let res = await fetch(API('lol', '/api/xnxxsearch', { query: text }, 'apikey'))
    if (!res.ok) return await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let capt = `
*XNXX Search*

${json.result.map(v => `*${v.title}*\npenonton: ${v.views}\nDurasi: ${v.duration}\nUploader: ${v.uploader}\nLink: ${v.link}\nThumbnail: ${v.thumbnail}`).join`\n\n`}
    `.trim()
    conn.sendFile(m.chat, json.result[0].thumbnail, '', capt, m)
}
handler.help = ['xnxxsearch'].map(v => v + ' <teks>')
handler.tags = ['nsfw']
handler.command = /^xnxxsearch$/i
handler.register = true

module.exports = handler