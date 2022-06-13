import fetch from 'node-fetch'
import cheerio from 'cheerio'
let handler = async(m, { conn, text }) => {
  if (!text) throw `ᴍᴀꜱᴜᴋᴋᴀɴ ᴊᴜᴅᴜʟ!`
  let res = await fetch(global.API('https://api.jikan.moe', '/v3/search/manga', { q: text }))
  if (!res.ok) throw await res.text()
  let json = await res.json()
  let { title, synopsis, chapters, url, volumes, score, image_url } = json.results[0]
  let ingfonya = `✨️ *Title:* ${title}
🔥 Chapters: ${chapters}
🎇 Volumes: ${volumes}
❤️ Score: ${score}
💚️ Synopsis: ${synopsis}
`
 conn.sendHydrated(m.chat, `*${htki} ᴍᴀɴɢᴀ ɪɴꜰᴏ ${htka}*`, ingfonya, image_url, url, '🌎 ʟ ɪ ɴ ᴋ', null, null, [[null,null],[null,null],[null,null]], m)

}
handler.help = ['mangainfo <judul>']
handler.tags = ['anime']
handler.command = /^(manga|mangainfo)$/i
//kyaa jangan biarkan wabot-aq terbengkalai sampai nurutomo kembali
// Command - Re Edited -- TOXIC-DEVIL == || Character Type ||
export default handler
