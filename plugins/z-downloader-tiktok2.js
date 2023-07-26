import {
    tiktok
} from '@xct007/frieren-scraper'

async function handler(m, {
    conn,
    args
}) {
   if (!args) throw 'Link tiktok nya mana kak ?' 
    m.reply(wait)
    const obj = await tiktok.v1(args[0]);
    await conn.sendFile(m.chat, obj.play, '', 'Nih kak Videonya', m);
};
handler.help = ['tiktok2 / tt2 <url>']
handler.tags = ['downloader']
handler.command = /^(tiktok2|tt2)$/i
handler.register = true
handler.limit = true

export default handler 

/*
Halo kk Gama :V
*/


/*
import fetch from 'node-fetch'

let handler = async (m, { 
    Func,
    conn, 
    args, 
    usedPrefix,
    text, 
    command
}) => {
   if (!text) throw 'Link tiktok nya mana kak ?' 
      m.reply(wait)
try {
    let url = 'https://developers.tiklydown.me/api/download?url='
    let res = await fetch(url + text)
        .then((e) => e.json())
        .then((x) => x.video)
        .then((c) => c.noWatermark)
        
         conn.sendFile(m.chat, res, '', 'Nih kak videonya', m)
} catch (e) {
m.reply('Ops..! Terjadi kesalahan pada plugins')
}
}
handler.help = ['tiktok2 / tt2 <url>']
handler.tags = ['downloader']
handler.command = /^(tiktok2|tt2)$/i
handler.register = true
handler.limit = true
export default handler
*/