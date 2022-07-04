import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {
  let res = await fetch('https://katanime.vercel.app/api/getrandom?limit=1')
  if (!res.ok) throw await res.text()
  let json = await res.json()
  if (!json.result[0]) throw json
  let { indo, character, anime } = json.result[0]
  let katanimek = `
📚 *Qᴜᴏᴛᴇ:* ${indo}\n\n▢ *ɴᴀᴍᴀ:* ${character} ▢\n▢ *ᴀɴɪᴍᴇ:* ${anime} ▢`

  conn.sendHydrated(m.chat, `*${htki} ᴋᴀᴛᴀ ᴀɴɪᴍᴇ ${htka}*`, katanimek, null, null, [[null, null], [null, null], [null, null]], m)

}
handler.help = ['katanime']
handler.tags = ['anime']
handler.command = /^(katanime|kataanime)$/i
handler.limit = false

export default handler
