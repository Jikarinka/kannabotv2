import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `ᴜꜱᴇ ᴇxᴀᴍᴘʟᴇ ${usedPrefix}ɪᴍᴀɢᴇ ꜰɪʟʟᴏ ᴄʜᴀɴ`
    const res = await googleImage(text)
    let image = res.getRandom()
    let link = image
    conn.sendHydrated(m.chat,`
*${htki} KANNA IMAGE ${htka}*
🔎 *Result:* ${text}
🌎 *Source:* ᴋᴀɴɴᴀ.ᴄᴀʀᴇ
⛩ *ɴᴀᴍᴇ ᴜꜱᴇʀ:* ${conn.getName(m.sender)}
`, wm, link, link, '🔗 URL', null, null, [['Next', `.image ${text}`],[null,null],[null,null]],m)
}
handler.help = ['gimage <query>', 'image <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image)$/i

export default handler