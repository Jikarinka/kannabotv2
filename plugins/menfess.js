const { MessageType } = require('@adiwajshing/baileys')
let fetch = require('node-fetch')
let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Penggunaan .chat nomor|pesan untuknya\nContoh : .chat 628xxxxxxxxxx|hai owner', m, {quoted: m, thumbnail: await (await fetch('https://i.postimg.cc/8zCXVkyY/ce6ffeea35742410166301aede74af0d.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Ya Kak', sourceUrl: 'http://wa.me/6288269131506?text=.chat 6288269131506|Hallo 🌹', body: 'Takina Bot By Dim', thumbnail: await (await fetch('https://i.postimg.cc/g01ZNptQ/2581c5803ef77dfad121830c07873129.jpg')).buffer(),}}})
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m, {quoted: m, thumbnail: await (await fetch('https://i.postimg.cc/8zCXVkyY/ce6ffeea35742410166301aede74af0d.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Ya Kak', sourceUrl: 'http://wa.me/6288269131506?text=.chat 6288269131506|Hallo 🌹', body: 'Takina Bot By Dim', thumbnail: await (await fetch('https://i.postimg.cc/g01ZNptQ/2581c5803ef77dfad121830c07873129.jpg')).buffer(),}}})
    if (text > 700) return conn.reply(m.chat, 'Teks Kepanjangan!', m, {quoted: m, thumbnail: await (await fetch('https://i.postimg.cc/8zCXVkyY/ce6ffeea35742410166301aede74af0d.jpg')).buffer(),
        contextInfo: { forwardingScore: 999, isForwarded: true, externalAdReply: {title: 'Gunakan Dengan Bijak Ya Kak', sourceUrl: 'http://wa.me/6288269131506?text=.chat 6288269131506|Hallo 🌹', body: 'Takina Bot By Dim', thumbnail: await (await fetch('https://i.postimg.cc/g01ZNptQ/2581c5803ef77dfad121830c07873129.jpg')).buffer(),}}})

    let chat = `${number}`
    var nomor = m.sender
    let chat1 = `Hi Ada Yang Kirim Pesan Ke Kamu Nih
Seseorang Temanmu
(Pengirim Rahasia)

⬡──⬡─────────⬡──⬡

💌 Pesan : ${pesan}

⬡──⬡─────────⬡──⬡

Maaf Anda Belum Bisa Membalas ke Pengirim`

let haori = `▮PENGIRIM RAHASIA 」 
Anda Ingin Mengirimkan Pesan ke pacar/sahabat/teman/doi/
mantan?, tapi Tidak ingin tau siapa Pengirimnya?
Kamu bisa menggunakan Bot ini
Contoh Penggunaan: .chat nomor|pesan untuknya

Contoh: #chat 628xxxxxxxxxx|hai owner`

    
    let logs = `BOT AKAN BLOKIR KONTAKMU?
    
≫ Spam
≫ Chat Aneh Aneh
≫ Berantem`

 let haori1 = `Sukses Mengirim Pesan
👥 Dari : wa.me/${nomor.split("@s.whatsapp.net")[0]}

⬡──⬡─────────⬡──⬡

Isi Pesan : ${pesan}

⬡──⬡─────────⬡──⬡`
handler.help = ['menfess <nomor|pesan>']
handler.tags = ['main']
handler.command = /^(chat|menfess)$/i
handler.mods = false
handler.premium = false
handler.group = false
handler.private = true

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler
