import fetch from 'node-fetch'

let handler = async(m, { conn, text }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)

    if (!text) return m.reply('Contoh : .pornhub Japan')
    let res = await fetch(`https://betabotz-api.herokuapp.com/api/search/pornhub?query=${text}&apikey=BetaBotz`)
    if (!res.ok) throw await res.text()
    let json = await res.json()
    let porn = json.result.results.map((v, i) => `
*➻ ${i + 1}*.
*➻ Title :* ${v.title}
*➻ Author :* ${v.author}
*➻ Views :* ${v.views}
*➻ Link :* ${v.link}
•─────────•°•°•─────────•\n`).join('\n') 
    if (json.status) m.reply(porn)
    else throw json
}
handler.help = ['pornhub <query>']
handler.tags = ['nsfw']
handler.command = /^(pornhub)$/i

export default handler