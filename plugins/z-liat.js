import uploadFile from '../lib/uploadFile.js'
import uploadImage from '../lib/uploadImage.js'
import fetch from 'node-fetch'

let handler = async (m) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  if (!mime) throw 'No media found'
  let media = await q.download()
  let isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime)
  let link = await (isTele ? uploadImage : uploadFile)(media)
  await conn.reply(m.chat, 'Supaya Tidak Menguras Memory', m, { render: true, thum: link, body: '📮 P R E V I E W' })
}
handler.help = ['liat (Reply Medianya)', 'lihat (Reply Medinya)', 'Preview (Reply Medinya)']
handler.tags = ['tools']
handler.command = /^(liat|lihat|preview)$/i

export default handler