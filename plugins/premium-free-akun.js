import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇       *「 AKUN 」*
┣━━━━━━━━━━━━━━━━━━━━┅
┃ ❖ • MINECRAFT (XBOX)
┃ 
┃ ❖ • 1. Username : nikitasf@gmail.com
┃          Password : tasfel13
┃ ❖ • 2. Username : icudxiii@gmail.com
┃          Password : Spencer13
┃ ❖ • 3. Username : jackall04@gmail.com
┃          Password : Foxtail19
┃ ❖ • 4. Username : zaitsev2020@gmail.com
┃          Password : sniperm4n
┃ ❖ • 5. Username : joker2019@gmail.com
┃          Password : legendversion2007
┃ ❖ • 6. Username : coronaman1@gmail.com
┃          Password : virusboosted1
┃ ❖ • 7. Username : externable@gmail.com
┃          Password : remote12
┃ ❖ • 8. Username : drstrange01@hotmail.com
┃          Password : 3569851426
┃ ❖ • 9. Username : radiostanciq225@gmail.com
┃          Password : stenli123
┃ ❖ • 10. Username : majorking5@gmail.com
┃           Password : 55major55
┗━━━━━━━━━━━━━━━━━━━━┅
`.trim()// Tambah sendiri kalo mau
await conn.reply(m.chat, list, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'Ini Aku Saranin Kak',  
    sourceUrl: snh, 
    thumbnail: fs.readFileSync('./thumbnail.jpg')
      }}
     })
}    
handler.help = ['freeakun']
handler.tags = ['premium', 'main']
handler.command = /^freeakun$/i

handler.premium = true

export default handler 