import axios from 'axios'
import cheerio from 'cheerio'

let handler = async(m, { conn, text, usedPrefix }) => {  

if (!text) throw 'Masukan Judul Animenya Kak :)'


  let url = 'https://www.bilibili.tv/id/search-result?q=' + text
  
    let response = await axios.get(url);
    let $ = cheerio.load(response.data);
  
    let asd = []
    
    let title = []
    let link = []
    let img = []
    let genre = []
    
    $('div.ogv__content p.highlights').each((i, el) => {
      title.push($(el).text())
    })
    
    $('div.ogv__content a').each((i, el) => {
      link.push($(el).attr('href'))
    })
    
    $('div.ogv__cover img.ogv__cover-img').each((i, el) => {
      img.push($(el).attr('src').replace('@600w_800h_1e_1c_1f.webp', ''))
    })
    
    $('div.meta__tags a').each((i, el) => {
      genre.push($(el).text())
    })
    
    let Links = link.filter((link, index) => {
  if (index % 6 === 0) {
    return true;
  }
  return false;
});

    asd.push({ title, img, Links })
  let fix = title.map((e,i) => {
  return {title: e, img: img[i], link: 'https://www.bilibili.tv/id' + Links[i] + '?bstar_from=bstar-web.anime-tab.timeline.all'} 
  })
  
   let listSections = []
	Object.values(fix).map((v, index) => {
	listSections.push([index + ' ' + cmenub + ' ' + v.title, [
          ['Preview 🖼️', usedPrefix + 'bsdtail ' + v.link]
        ]])
	})
	return conn.sendList(m.chat, htki + ' 📺 BS Search 🔎 ' + htka, `⚡ Silakan pilih Bstation di tombolnya di bawah...\n*Hasil dari:* ${text}\n\n`, author, `☂️ Bstation Search Disini ☂️`, listSections, m)
}
handler.help = ['bs', 'bss', 'bstation', 'carianime']
handler.tags = ['anime']
handler.command = /^bstation-search|bss|bssearch|carianime$/i

export default handler