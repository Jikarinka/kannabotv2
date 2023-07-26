import fetch from 'node-fetch'
import processing from '@xct007/photo-enhance'
import fs from 'fs'
import uploadImage from '../lib/uploadImage.js'
let handler = async (m, {
	conn,
	usedPrefix,
	command,
	text
}) => {
	let q = m.quoted ? m.quoted : m
	let mime = (q.msg || q).mimetype || ''
	if (!mime) return m.reply('*[ ⚠️ ] Usage*\n!hd <balas imagenya>\n\n*Hikari 🍁*')
	let media = await q.download()
	let url = await uploadImage(media)
    let x = await processing(url, 'enhance')
    conn.sendFile(m.chat, x, '', null, m)
}
handler.help = ['enhance / hd <balas foto>']
handler.tags = ['tools']
handler.command = ['enhance', 'hd']
handler.limit = true

export default handler