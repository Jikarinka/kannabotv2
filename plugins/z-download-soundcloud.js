import fetch from 'node-fetch'
import fs from 'fs'

let handler = async (m, {conn, text, usedPrefix, command }) => {
    
     if (!text) throw `Masukan Linknya Kak`
     let url = await fetch(`https://api.zacros.my.id/downloader/scdl?link=${text}`)
     let hm = await url.json().catch(_ => "Error")
     if (hm == "Error") throw "*Not Found*\n*📮 ᴛɪᴘs :* err"
     let chat = global.db.data.chats[m.chat]
 
     await conn.reply(m.chat, 'SEDANG MENGUNDUH.....', 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 1,
    title: hm.title, 
    sourceUrl: hm.link, 
    thumbnail: await(await fetch(`${hm.thumb}`)).buffer()
      }}
     })
    
    await conn.sendFile(m.chat, hm.link, hm.title, '', null, false, { asDocument: chat.useDocument, mimetype: 'audio/mp3' })
    
}    
handler.help = ['soundcloud', 'sonc']
handler.tags = ['downloader']
handler.command = /^soundcloud|sonc$/i
handler.register = false
handler.limit = true

export default handler