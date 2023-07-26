import fetch from 'node-fetch'
let handler = async function (m, { text, isPrems, isOwner }) {
    if (!text) throw '_Cari Apa Kak?_'
await m.reply(global.wait)
  let res = await fetch('https://ardhixsquerpants.herokuapp.com/api/kuso?q=' + encodeURIComponent(text))
let json= await res.json()
  const kanna =  `*judul:* "${json.title}"\n\n*info:* ${json.info}\n\n*sinopsis:* ${json.sinopsis}\n\n*link download:* ${json.link_dl}`
     
     conn.sendHydrated(m.chat, kanna, wm, json.thumb, `${json.link_dl}`, '🔗Link', null, null, [['Menu', '.menu'], [null, null], [null, null]], m)
}
handler.help = ['kusonime <judul>']
handler.tags = ['anime']
handler.command = /^kusonime$/i
handler.group = false
handler.premium = true

export default handler