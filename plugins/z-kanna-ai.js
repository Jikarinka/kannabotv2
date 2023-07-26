import fs from 'fs'
import fetch from 'node-fetch'
import axios from'axios'

let handler  = async (m, { Func, text, conn, usedPrefix: _p, usedPrefix }) => {
  if (!text) Func.exampleAi(null, m, 'Reply Pesan Ini Untuk Berinteraksi Dengan Ai')
  
let url = `https://mfarels.my.id/api/openai?text=$t{text}`
let res = await axios.get(url)

await conn.reply(m.chat, Func.exampleAi(null, 'kai', res.result), m, { contextInfo: { externalAdReply: {title: global.wm, body: 'Yaw? ada apa kak?', sourceUrl: sgc, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
handler.customPrefix = /^(kai)$/i
handler.command = new RegExp

export default handler