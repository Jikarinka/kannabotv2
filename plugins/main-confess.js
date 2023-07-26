import crypto from "crypto"
import fs from 'fs'

let handler = async(m, { conn, text, usedPrefix, command }) => {
  conn.menfess = conn.menfess ? conn.menfess : {}

  let type = text.split(" ")[0].toLowerCase()
  let argumen = text.split(" ").slice(1).join(" ")

  if(type == "send" || type == "kirim") {
    let [nomor] = argumen.split("|")
    nomor = nomor.replace(/[^0-9]/g, "")
    let jid = nomor + "@s.whatsapp.net"
    let teks = argumen.split("|").slice(1).join("|")
    let id = crypto.randomBytes(5).toString("hex")

    if(!argumen || !nomor || !teks) return m.reply(`example: ${usedPrefix}${command} kirim ${global.owner[0][0]}|hai`)
    
    if(!(await conn.onWhatsApp(jid))[0]) return m.reply("Nomor tidak ada di WhatsApp!\n\nPastikan nomor di awali 628 bukan 08")
    //if(jid == m.sender) return m.reply("Tidak dapat mengirim pesan ke diri sendiri :|")
    if(jid == conn.user.jid) return await conn.reply(m.chat, "Tidak dapat mengirim pesan ke bot :|", 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: botdate,  
    sourceUrl: sig, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
    if(jid == "0@s.whatsapp.net") return await conn.reply(m.chat, "Tidak dapat mengirim pesan ke Official WhatsApp :|", 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: botdate,  
    sourceUrl: sig, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })

    m.reply("Pesan sudah dikirim ke nomor yg dituju\n\nID : " + id)
    conn.copyLink(jid, `\nHai Kamu Menerima pesan *Rahasia* nih\n\n*Dari:* _Secret_\n*Pesan :* ${teks}\n`, author, `${usedPrefix}${command} balas ${id}|text`, "Balas")

    if(!conn.menfess[jid]) conn.menfess[jid] = {}
    conn.menfess[jid][id] = {
      from: m.sender,
      at: m.messageTimestamp.low * 1000 + (1000*60*60*7),
      message: teks
    }
  } else if(type == "get" || type == "lihat") {
    if(!(Object.keys(conn.menfess[m.sender] || {}))[0]) return m.reply("Tidak ada yg mengirim confess kepada Anda :|")

    let id = argumen
    let search = conn.menfess[m.sender][id]

    if(!search) return m.reply("Pesan tidak ditemukan!")

    let _at = new Date(search.at)
    let at = (_at.getFullYear() + "-" + (_at.getMonth() + 1) + "-" + _at.getDate()).split("-").map(v => v.padStart(2, "0")).join("-")
    at += ", "
    at += (_at.getHours() + ":" + _at.getMinutes() + ":" + _at.getSeconds()).split(":").map(v => v.padStart(2, "0")).join(":")

    conn.copyLink(m.chat, `\n*Waktu :* ${at}\n*Pesan :* ${search.message}\n`, author, `${usedPrefix}${command} balas ${id}|text`, "Balas")
  } else if(type == "reply" || type == "balas") {
    if(!(Object.keys(conn.menfess[m.sender] || {}))[0]) return m.reply("Tidak ada yg mengirim confess kepada Anda :|")

    let id = argumen.split("|")[0]
    let teks = argumen.split("|").slice(1).join("|")
    let search = conn.menfess[m.sender][id]

    if(!search) return m.reply("Pesan tidak ditemukan!")

    m.reply(`\n@${m.sender.split("@")[0]} Telah membalas pesan anda!\n\n*Balasan :* ${teks}\n`, search.from, { mentions: [m.sender] })
    m.reply("Berhasil membalas ke id " + id)

    delete conn.menfess[m.sender][id]
  } else if(type == "list") {
    if(!(Object.keys(conn.menfess[m.sender] || {}))[0]) return m.reply("Tidak ada yg mengirim confess kepada Anda :|")

// MADE BY RIZXYU  FIXED BY MUHAMMADRESTU999
// github: carlxjoe
    let menfess = conn.menfess[m.sender]
    let str = "\n[ *List Confess* ]\n\n" + "-".repeat(50) + "\n"
    for(let i in menfess) {
      let _at = new Date(menfess[i].at)
      let at = (_at.getFullYear() + "-" + (_at.getMonth() + 1) + "-" + _at.getDate()).split("-").map(v => v.padStart(2, "0")).join("-")
      at += ", "
      at += (_at.getHours() + ":" + _at.getMinutes() + ":" + _at.getSeconds()).split(":").map(v => v.padStart(2, "0")).join(":")
      str += `*ID :* ${i}\n*Waktu :* ${at}`
      str += "\n" + "-".repeat(50) + "\n"
    }
    m.reply(str)
  } else return await conn.reply(m.chat, `\n[ *PESAN BERSIFAT RAHASIA* ]\n\nMengirim pesan ke orang\n> ${usedPrefix}${command} send 628XXXXXXXXXX|Halo\n> ${usedPrefix}${command} kirim 628XXXXXXXXXX|Hello\n\nMelihat pesan dari id\n> ${usedPrefix}${command} get id\n> ${usedPrefix}${command} lihat id\n\nMembalas pesan lewat id\n> ${usedPrefix}${command} reply id|text\n> ${usedPrefix}${command} balas id|text\n\nMelihat semua pesan\n> ${usedPrefix}${command} list\n`, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'PESAN BERSIFAT RAHASIA',  
    sourceUrl: sig, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
}
handler.help = ["confess", "confes"]
handler.tags = ["main"]

handler.command = /^(confess|confes|menfess|menfes)$/i

export default handler