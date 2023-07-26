let handler = async (m, { 
    text, 
    usedPrefix, 
    args,
    command
}) => {

let [x, xx] = text.split` `
let gagal = `Usage : *!jarak daerah 1 | daerah 2*\n\nExample : *!jarak Kalimantan Barat | Jawa Barat*`
if (!x) throw gagal
if (!xx) throw gagal
try {
    m.reply(wait)
    
let v = await jarak(x, xx)
    console.log(v)
let res = v.result
    await conn.reply(m.chat, res.desc, m, { render: true, thum: res.img, source: sgh, iklan: true, body: 'K A N N A  B O T  M A P S' })

} catch (e) {
m.reply('E R O R')
  }
}
handler.help = ['jarak <kata>']
handler.tags = ['internet']
handler.command = /^(jarak)$/i

handler.limit = true

export default handler 

import axios from 'axios'
import cheerio from 'cheerio'

async function jarak(dari, ke) {
  let url = `https://www.google.com/search?q=${encodeURIComponent("jarak " + dari + " ke " + ke)}&hl=id`
  let { data } = await axios(url)
  let $ = cheerio.load(data)
  let img = data.split("var s=\'")[1].split("\'")[0]
  let res = {
   result: {
    img: /^data:.*?\/.*?;base64,/i.test(img) ? Buffer.from(img.split`,`[1], 'base64') : '',
    desc: $("div.BNeawe.deIvCb.AP7Wnd").text()
    }
  }
  return res
}