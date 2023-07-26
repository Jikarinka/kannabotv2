import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { Func, conn, text, args, command, usedPrefix}) => {
if (!text) throw Func.example(usedPrefix, m, 'Balas Pesan Ini Menggunakan Link Tiktok Image')

let url = `https://dlpanda.com/id?url=${text}&token=G7eRpMaa`

let response = await axios.get(url)
    const html = response.data;
    const $ = cheerio.load(html);

    let asd = []
    let imgSrc = []
    let creator = 'Jikarinka'

$('div.col-md-12 > img').each((index, element) => {
      imgSrc.push($(element).attr('src'));
    });

    asd.push({ creator, imgSrc })
  let fix = imgSrc.map((e,i) => {
  return {img: e, creator: creator[i] } 
  })

m.reply(wait)
for (let i of asd[0].imgSrc) {
     conn.sendFile(m.chat, i, '', null, m)
     }
}

handler.help = ['tiktokimg / ttimg <url>']
handler.tags = ['downloader']
handler.command = /^(ttimg|tiktokimg)$/i
handler.register = true
handler.limit = true

export default handler




/*import fetch from'node-fetch'

let handler = async(m, { 
    conn, 
    text, 
    args, 
    command
}) => {
   if (!args[0]) throw `Usage : !tiktokimage *url / link*\n\nFitur ini untuk mengunduh *Foto* dari *Tiktok*`
      m.reply(wait)
   let url = 'https://developers.tiklydown.me/api/download/v2?url='
   let res = await fetch(url + `${args[0]}`).then((e) => e.json());
   let x = res.result
   for (let i of x) {
       conn.sendFile(m.chat, i, '', null, m)
   }
}
handler.help = ['tiktokimg / ttimg <url>']
handler.tags = ['downloader']
handler.command = /^(ttimg|tiktokimg)$/i
handler.register = true
handler.limit = true

export default handler*/