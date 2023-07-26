import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `ᴜꜱᴇ ᴇxᴀᴍᴘʟᴇ ${usedPrefix}ɪᴍᴀɢᴇ ꜰɪʟʟᴏ ᴄʜᴀɴ`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    let tx = `*${htki} KANNA IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* ᴋᴀɴɴᴀ.ᴄᴀʀᴇ
⛩ *ɴᴀᴍᴇ ᴜꜱᴇʀ:* ${conn.getName(m.sender)}`
    conn.sendFile(m.chat, link, '', tx, m)
/*
    conn.sendFile(m.chat, link, `*${htki} KANNA IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* ᴋᴀɴɴᴀ.ᴄᴀʀᴇ
⛩ *ɴᴀᴍᴇ ᴜꜱᴇʀ:* ${conn.getName(m.sender)}
`, '',m)
*/

}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

export default handler