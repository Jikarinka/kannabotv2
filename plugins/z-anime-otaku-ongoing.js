import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import fs from 'fs'

let handler = async(m, { 
    conn,
    text
}) => {
let row = []
let res = await ongoing()
console.log(res)
let no = 0
for (let i of res) {
    no += 1
    row.push({
      title: `Anime Ke - ${no}`,
      description: `Judul : ${i.judul}\nEpisode : ${i.episode}\nTanggal : ${i.tanggal}\nHari : ${i.hari}\n\nThumbnail : ${i.thumbnail}\n\nLinknya : ${i.link}`,
      rowId: '!otaku-get ' + i.link.substr(26)
    })
  }
  conn.sendListM2(m.chat,  '*「 ANIME ONGOING 」*', 'Terdapat *' + no + '* Anime', null, '🍁 Tap di sini kak 🍁', null, row, m)                
}
handler.help = ['ongoing']
handler.tags = ['anime']
handler.command = /^(ongoing)$/i

handler.limit = true

export default handler

function ongoing() {
    return new Promise((resolve, reject) => {
        axios.get(`https://otakudesu.bid`).then(({data}) => {
                const hasil = []
                const $ = cheerio.load(data)
                $('#venkonten > div > div.venser > div.venutama > div > div.rapi > div > ul > li').each(function (a, b) {
                        let result = {
                            status: 200,
                            author: 'Xfarr-Api',
                            judul: $(b).find('> div > div.thumb > a > div > h2').text().trim(),
                            episode: $(b).find('> div > div.epz').text().trim(),
                            tanggal: $(b).find('> div > div.newnime').text().trim(),
                            hari: $(b).find('> div > div.epztipe').text().trim(),
                            thumbnail: $(b).find('> div > div.thumb > a > div > img').attr('src'),
                            link: $(b).find('> div > div.thumb > a').attr('href')
                        };
                        hasil.push(result);
                    });
                resolve(hasil)
            }).catch(reject)
    })
}