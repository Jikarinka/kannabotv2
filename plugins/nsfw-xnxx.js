let fetch = require('node-fetch')

let handler = async (m, { conn, text, usedPrefix, command }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)

    if (!text) throw `url nya mana?\n\ncontoh:\n${usedPrefix + command} https://www.xnxx.com/video-wdsipd3/jealous_mother_blows_son_uncensored`
    if (!/^https?:\/\/(www\.)?xnxx\.com/.test(text)) throw `url salah!\n\ncontoh:\n${usedPrefix + command} https://www.xnxx.com/video-wdsipd3/jealous_mother_blows_son_uncensored`
    let res = await fetch(API('lol', '/api/xnxx', { url: text }, 'apikey'))
    if (!res.ok) return await res.text()
    let json = await res.json()
    if (json.status != 200) throw json
    let { title, thumbnail, duration, view, rating, like, dislike, comment, tag, description, link } = json.result
    conn.sendFile(m.chat, thumbnail, thumbnail, `
tunggu video lagi dikirim
Judul: ${title}
Durasi: ${duration}
Penonton: ${view}
Rating: ${rating}
Suka: ${like}
Gk suka: ${dislike}
Total Komen: ${comment}
Tag: ${tag}
Deskripsi: ${description}
Link:
${link.map((v, i) => `${i + 1}. ${v.link} (${v.type})`).join`\n`}
    `.trim(), m)
    conn.sendFile(m.chat, link[1].link, '', 'Waduh', m)
}
handler.help = ['xnxx'].map(v => v + ' <url>')
handler.tags = ['nsfw']
handler.command = /^xnxx$/i
handler.register = true

module.exports = handler
