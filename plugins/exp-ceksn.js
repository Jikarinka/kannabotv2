import { createHash } from 'crypto'

let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { conn, text, usedPrefix }) {
  let sn = createHash('md5').update(m.sender).digest('hex')
 let quoted = await m.reply(`*📮 SN:* ${await conn.getName(m.sender)}`)
  conn.reply(m.chat, sn, quoted)
/* conn.sendMessage(m.chat, {
  text: `*📮 SN:* ${await conn.getName(m.sender)}`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Salin Serial Number`,
      url: 'https://www.whatsapp.com/otp/copy/' + sn
    }
  }],
  footer: wm
})*/
}
handler.help = ['ceksn']
handler.tags = ['xp']
handler.command = /^(ceksn)$/i
handler.register = true
export default handler