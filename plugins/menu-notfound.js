import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇ Maaf Command Tidak Ditemukan

`.trim()// Tambah sendiri kalo mau
await conn.reply(m.chat, list, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 3,
    title: '— 「 ᴋ ᴀ ɴ ɴ ᴀ 」—', 
    body: '— 𝙳 𝙰 𝚃 𝙰 𝙱 𝙰 𝚂 𝙴 —',  
    sourceUrl: sgc, 
    thumbnail: fs.readFileSync('./bunga.gif')
      }}
     })
}    
handler.help = ['']
handler.tags = ['']
handler.command = /^$/i

export default handler