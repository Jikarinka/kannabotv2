let handler = async (m, { command, usedPrefix, text }) => {
    let which = command.replace(/del/i, '')
    if (!text) throw `Gunakan *${usedPrefix}list${which}* untuk melihat daftar nya`
    let msgs = global.db.data.msgs
    if (!text in msgs) throw `'${text}' tidak terdaftar di daftar pesan`
    delete msgs[text]
    m.reply(`Berhasil menghapus pesan di daftar pesan dengan nama '${text}'`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker', 'gif'].map(v => 'del' + v + ' <teks>')
handler.tags = ['database']
handler.command = /^del(vn|msg|video|audio|img|stic?ker|gif)$/

handler.premium = true

export default handler