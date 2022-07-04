import { sticker } from '../lib/sticker.js'
import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import { webp2png } from '../lib/webp2mp4.js'

let handler = async (m, { conn, text, usedPrefix, command }) => {
let stiker = false

let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/g.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download?.()
    let url = await uploadImage(img)
    var meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
    stiker = await sticker(false, meme, global.packname, global.stickauth)
    if (stiker) conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
}
//lo mau apa??
handler.help = ['smeme (caption|reply media)', 'smm <url>', 'sm(caption|reply media)']
handler.tags = ['sticker']
handler.command = /^(smeme|sm|smm)$/i

export default handler

const isUrl = (text) => {
  return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)(jpe?g|gif|png)/, 'gi'))
}