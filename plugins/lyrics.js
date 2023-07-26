/*import { lyrics, lyricsv2 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : ''
    if (!teks) throw `Use example ${usedPrefix}${command} hallo`
    const result = await lyricsv2(teks).catch(async _ => await lyrics(teks))
    m.reply(`
Lyrics *${result.title}*
Author ${result.author}


${result.lyrics}


Url ${result.link}
`.trim())
}

handler.help = ['lirik'].map(v => v + ' <Apa>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics|lyric)$/i
handler.register = true
export default handler*/


import finder from 'lyrics-finder'
let handler = async (m, { text, usedPrefix, command }) => {
  if (!text) return m.reply(`uhm.. cari apa?\n\ncontoh:\n${usedPrefix + command} dandelions`)
  let res = await finder("", text)
  if (!res) throw 'Maaf Lirik Tidak Ditemukan'

  m.reply(res)
}
handler.help = ['lirik'].map(v => v + ' <teks>')
handler.tags = ['internet']
handler.command = /^(lirik|lyrics?)$/i

export default handler