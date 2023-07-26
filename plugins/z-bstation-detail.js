import fetch from 'node-fetch'
import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text, usedPrefix:p }) => {


let url = text
if (!text) throw 'Linknya Mana?'

let response = await axios.get(url)
    let html = response.data;
    let $ = cheerio.load(html);

    let asd = []

    let titl = [] 
    let desc = []
    let namaAsli = []
    let jenis = []
    let tempat = []
    let rilis = []
    let img = []

    $('.bstar-meta__title').each((index, element) => {
        titl.push($(element).text());
      });


    $('div.bstar-meta__desc').each((index, element) => {
        desc.push($(element).text());
      });


    $('div.bstar-meta__origin-name-content').each((index, element) => {
        namaAsli.push($(element).text());
      });


    $('div.bstar-meta__type').each((index, element) => {
        jenis.push($(element).text());
      });


    $('div.bstar-meta__area').each((index, element) => {
        tempat.push($(element).text());
      });


    $('div.bstar-meta__create-time').each((index, element) => {
        rilis.push($(element).text().replace('Waktu rilis:', ' '));
      });

      
    $('meta[property="og:image"]').each((i, elem) => {
        let image = $(elem).attr('content').replace('@1200w_630h_1e_1c_1f.webp', '');
        img.push(image);
      });

      


    //console.log(`Title: ${title}`);
    //console.log(`Description: ${description}`);
    //console.log(`Video URL: ${videoUrl}`);

    asd.push({ titl, desc, namaAsli, jenis, rilis })
  let fix = titl.map((e,i) => {
  return {titl: e, desc: desc[i], namaAsli: namaAsli[i], jenis: jenis[i], rilis: rilis[i], img: img[i]} 
  })

await conn.reply(m.chat, `${desc[0]}\n\nType: ${jenis[0]}\nRelease:${rilis[0]}`, 0, {
    contextInfo: {
	forwardingScore: 999,
	externalAdReply: {
    body: namaAsli[0],
    containsAutoReply: false,
    mediaType: 1,
    mediaUrl: img,
    renderLargerThumbnail: true,    
    title: titl[0],
    showAdAttribution: true,
    sourceUrl: url, 
    thumbnail: await (await fetch(img[0])).buffer(),
    thumbnailUrl: img[0]
      }}
     })
}
handler.command = /^bsdtail$/i

export default handler