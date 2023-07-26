import { sticker } from '../lib/sticker.js'
const { MessageType } = (await import('@adiwajshing/baileys')).default
import fetch from 'node-fetch'

let handler = async (m, { conn, args, text, usedPrefix, command }) => {
if (!args[0]) throw 'Contoh penggunaan:\n\n*.emojimix 😭&🥰*'
   	let [emoji1, emoji2] = text.split`&`
		let anu = await (await fetch(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)).json()
                 for (let res of anu.results) {
		let stek = await sticker(false, res.url, global.packname, global.stickauth)
  conn.sendFile(m.chat, stek, '', '', m)
		}
}
handler.tags = ['tools', 'maker']
handler.help = ['emojimix <emoji1>&<emoji2>']
handler.command = /^((se|emoji)mix)$/i
export default handler





// (`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)