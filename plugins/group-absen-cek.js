let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Ｔｉｄａｋ ａｄａ ａｂｓｅｎ ｂｅｒｌａｎｇｓｕｎｇ ｄｉｇｒｕｐ ｉｎｉ！*_\n\n*${usedPrefix}ᴍᴜʟᴀɪᴀʙꜱᴇɴ* - ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀʙꜱᴇɴ`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.reply(m.chat, `*「 ABSEN 」*

Tanggal: ${date}
${conn.absen[id][2]}

┌ *𝕐ᴀɴɢ ꜱᴜᴅᴀʜ ᴀʙꜱᴇɴ:*
│ 
│ T͎o͎t͎a͎l͎: ${absen.length}
${list}
│ 
└────

${global.wm}`, m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['group']
handler.command = /^cekabsen$/i
handler.group = true
export default handler
