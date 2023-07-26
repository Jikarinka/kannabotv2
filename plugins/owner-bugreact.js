let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix}) => {

let [number, kanna] = text.split `|`

let korban = `${number}`

if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)
    if (!kanna) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)

const mes = await conn.reply(korban + '@s.whatsapp.net', kanna, null)
       conn.sendMessage(korban + '@s.whatsapp.net', { react: {
 text: "☠️",
 key: mes.key
}}).then(msg => conn.reply(korban + '@s.whatsapp.net', kanna, msg))
}

handler.command = /^(bugreact)$/i

handler.owner = true

export default handler