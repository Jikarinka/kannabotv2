/*import trans from '@vitalets/google-translate-api'

let handler = async (m, { args, usedPrefix, command }) => {
	let lang, text
	if (args.length >= 2) {
		lang = args[0] ? args[0] : 'id', text = args.slice(1).join(' ')
	} else if (m.quoted && m.quoted.text) {
		lang = args[0] ? args[0] : 'id', text = m.quoted.text
	} else throw `*「 ❗ 」Gagal*\nContoh : *#translate id hello i am robot*`
	let res = await trans(text, { to: lang, autoCorrect: true }).catch(_ => null)
	if (!res) throw `*「 ❗ 」Gagal*\nBahasa *"${lang}"* Tidak di dukung`
	m.reply(`*「 🗣️ 」› Translate*\n*Terdeteksi Bahasa :* ${res.from.language.iso}\n*Ke Bahasa :* ${lang}\n\n*Terjemahan :* ${res.text}`.trim())
}
handler.help = ['translate / tr'].map(v => v + ' <bahasa> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i

export default handler*/

import fetch from 'node-fetch'

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let lang = args[0]
    let text = args.slice(1).join(' ')
    if ((args[0] || '').length !== 2) {
        lang = 'id'
        text = args.join(' ')
    }
    if (!text && m.quoted && m.quoted.text) text = m.quoted.text
    if (!text) throw `Gunakan format ${usedPrefix}${command} <lang/kode bahasa> <teks>\nContoh penggunaan:\n\n${usedPrefix}${command} id i love you\n\nDaftar bahasa yang didukung: https://cloud.google.com/translate/docs/languages`
    let res = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=' + lang + '&dt=t&q=' + encodeURIComponent(text))
    const data = await res.json();
    conn.reply(m.chat, data[0][0][0], m)
}
handler.help = ['translate'].map(v => v + ' <lang> <teks>')
handler.tags = ['tools']
handler.command = /^(tr(anslate)?)$/i


export default handler