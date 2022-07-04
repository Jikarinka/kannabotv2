let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Ｔｉｄａｋ ａｄａ ａｂｓｅｎ ｂｅｒｌａｎｇｓｕｎｇ ｄｉｇｒｕｐ ｉｎｉ！*_\n\n*${usedPrefix}ᴍᴜʟᴀɪᴀʙꜱᴇɴ* - ᴜɴᴛᴜᴋ ᴍᴇᴍᴜʟᴀɪ ᴀʙꜱᴇɴ`
    delete conn.absen[id]
    m.reply(`Done!`)
}
handler.help = ['hapusabsen']
handler.tags = ['group']
handler.command = /^(delete|del|hapus)absen$/i
handler.group = true
handler.admin = true
export default handler