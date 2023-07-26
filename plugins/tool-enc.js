
// 🐰 MADE BY KORONEOFC (JANGAN DIHAPUS !!!)

import obs from 'obfuscator'

let handler = async (m, { conn, text }) => {
	if (!text) throw 'Mana text nya?'
	let enc = await obs.utils.hex(text)
	conn.sendMessage(m.chat, {
  text: `🪀 *${await conn.getName(m.sender)}* Ini Kak Encrypt Nya`,
  templateButtons: [{
    index: 1,
    urlButton: {
      displayText: `Encrypt`,
      url: 'https://www.whatsapp.com/otp/copy/' + enc
    }
  }],
  footer: wm
})
}
handler.help = ['enc', 'encrypt'].map(v => v + ' <text>')
handler.tags = ['tools']
handler.command = /^(enc(rypt)?)$/i

export default handler