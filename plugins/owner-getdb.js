import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, { conn, text }) => {

let pp = await conn.profilePictureUrl(m.sender).catch(_ => './src/avatar_contact.png')
	let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: '— 𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴 —', 
  jpegThumbnail: await(await fetch(pp)).buffer(),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })

let adReply = {
contextInfo: {
    forwardingScore: 9999,
    externalAdReply: {
      showAdAttribution: true,
      title: '— 「 *K A N N A* 」—',
      body: '▶︎ 𝗧𝗜𝗠𝗘 : 19 ʜ, 40 ᴍ, 45 s',
      mediaUrl: 'https://bit.ly/3xPAowZ',
      description: '',
      previewType: 'PHOTO',
      thumbnail: await(await fetch(thumb)).buffer(),
      sourceUrl: sig
    }
  }
}

      conn.reply(m.chat, '*Succes*', m)
.then(
conn.sendFile(m.chat, fs.readFileSync('./database.json'), 'database.json', '', 0, 0, { mimetype: 'application/json', quoted: fdoc, contextInfo: adReply.contextInfo })
)
}
handler.help = ['getdb']
handler.tags = ['owner']
handler.command = /^(getdb)$/i

handler.owner = true

export default handler