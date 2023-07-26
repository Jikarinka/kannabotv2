import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, {conn, text, usedPrefix, command }) => {
    let [tgl, bulan, tahun] = text.split ` `
    
     if (!tgl) throw `Masukan Tanggalnya Kak`
     if (!bulan) throw `Masukan Bulannya Kak`
     if (!tahun) throw `Masukan Tahunnya Kak`
     let url = await fetch(`https://restapi.frteam.xyz/countdown?tanggal=${tgl}&bulan=${bulan}&tahun=${tahun}&apikey=gamanaufal`)
     let hm = await url.json().catch(_ => "Error")
     if (hm == "Error") throw "*Not Found*\n*📮 ᴛɪᴘs :* err"
     
     let hasil = `
⏳Membutuhkan waktu ${hm.result}📮` 

     await conn.reply(m.chat, hasil, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: '— 「 ᴋ ᴀ ɴ ɴ ᴀ 」—', 
    body: '— 𝙳 𝙰 𝚃 𝙴 —',  
    sourceUrl: sig, 
    thumbnail: fs.readFileSync('./new-thumbnail.jpg')
      }}
     })
}    
handler.help = ['hitungmundur <tanggal> <bulan> <tahun>']
handler.tags = ['internet']
handler.command = /^hm|count|hitungmundur$/i
handler.register = false
handler.limit = true

export default handler