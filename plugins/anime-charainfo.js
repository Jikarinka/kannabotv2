import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async(m, { conn, text }) => {
  if (!text) throw `Masukkan query!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/character', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { name, alternative_names, url, image_url, type, synopsis } = json.results[0]
let charaingfo = `💬 ɴᴀᴍᴇ: ${name}
📚 ɴɪᴄᴋɴᴀᴍᴇ: ${alternative_names}
👤 ᴄʜᴀʀᴀᴄᴛᴇʀ ᴛʏᴘᴇ: ${type}`

  conn.sendHydrated(m.chat, `*${htki} ᴄʜᴀʀᴀ ɪɴꜰᴏ ${htka}*`, charaingfo, image_url, url, '🌎 ʟ ɪ ɴ ᴋ', null, null, [[null,null],[null,null],[null,null]], m)

}
handler.help = ['character <nama>']
handler.tags = ['anime']
handler.command = /^(chara|character)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler
