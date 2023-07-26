import axios from 'axios'
import cheerio from 'cheerio'

// let handler = async(m, { conn, text, usedPrefix:p }) => {  
  
  const url = 'https://www.bilibili.tv/id/anime';
  
    const response = await axios.get(url);
    const $ = cheerio.load(response.data);
  
    const asd = []
  
    const titles = [];
    const images = [];
    const link = [];
    
    $('.scroll-wrap__list__item .bstar-video-card--row a.bstar-video-card__title-text').each((index, element) => {
      titles.push($(element).text());
    });
  
    $('.scroll-wrap__list__item .bstar-video-card a').each((index, element) => {
    link.push($(element).attr('href'));
  });
    
    $('.scroll-wrap__list__item .bstar-video-card--row img.bstar-image__img').each((index, element) => {
      images.push($(element).attr('src'));
    });
  
    asd.push({ titles, images,link })
  let fix = titles.map((e,i) => {
  return {titles: e, images: images[i], link: 'https:' + link[i *2]} 
  })

  console.log(fix)

// let row = []
// let no = 0
// for (let v of fix) {
//     no += 1
//     row.push({
//       title: `Anime Ke - ${no}`,
//       description: v.titles,
//       rowId: `.bsdtail ${v.link}`
//     })
//    }
//   conn.sendListM2(m.chat,  '*BSTATION ONGOING*', 'Terdapat *' + no + '* Anime', null, '🍁 Tap di sini kak 🍁', null, row, m)
// }
// handler.help = ['bs', 'bstation']
// handler.tags = ['anime']
// handler.command = /^bstation|bs$/i

// export default handler