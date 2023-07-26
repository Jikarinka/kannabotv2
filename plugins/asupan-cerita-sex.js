import fs from 'fs'
import fetch from 'node-fetch'

async function fetchJson(url) {
let ffs = await fetch(url)
let js = await ffs.json()
return js
}

let handler = async (m, { conn, args, command }) => {
    
let ss = await fetchJson('https://leyscoders-api.herokuapp.com/api/cersex?apikey=MIMINGANZ')

 await conn.sendButton(m.chat, `💌 Cerita :\n\n ┅━━━━━═┅═❏ *CERITA SEX* ❏═┅═━━━━━┅ ${ss.result}\n\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     `,wm + '\n\n' + botdate, ss.gambar, [['Cerita Lain','.cersex']], m, {
contextInfo: { externalAdReply :{
                        mediaUrl: '',
                        mediaType: 2,
                        description: 'anu',
                        title: 'Ini Kak Cerita Sexs Nya😉',
                        body: 'Ini Kak Cerita Sexs Nya😉',          previewType: 0,
                        thumbnail: fs.readFileSync("./new-thumbnail.jpg"),
                        sourceUrl: sgc
                      }}
})
}

handler.help = ['cersex']
handler.tags = ['nsfw', 'nulis', 'fun']
handler.command = ['cersex']
export default handler