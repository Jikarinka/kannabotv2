let handler = async (m, { conn, text, usedPrefix, command }) => {

let res = await schedule()
console.log(res)
let row = []
for (let i of res) {
    row.push({
      title: `Hari - ${i.day}\n`,
      description: `${i.animeList.map((v, i) => '• ' + v.animeName).join('\n')}`,
      rowId: ''
	})}
	let button = {
		buttonText: 'Tap',
		description: `*Jadwal - Anime*\n\n_Ongoing ANIME Minggu Ini_`,
		footerText: null
	}
	return conn.sendListM(m.chat, button, row, m)

}
handler.help = ['jadwalanime']
handler.tags = ['anime']
handler.command = /^(jadwalanime|jadwalnime)$/i

export default handler


import axios from 'axios'
import cheerio from 'cheerio'

async function schedule() {
  let { data } = await axios("https://otakudesu.bid/jadwal-rilis/")
  let $ = cheerio.load(data)
  let result = []
  let element = $(".kgjdwl321")
  element.find(".kglist321").each(function() {
    let day = $(this).find("h2").text()

    if(day == "Random") return

    let animeList = []
    $(this).find("ul > li").each(function() {
      let animeName = $(this).find("a").text()
      let link = $(this).find("a").attr("href")
      let id = link.replace("https://otakudesu.bid/anime/", "")
      animeList.push({ animeName, id, link })
    })
    result.push({ day, animeList })
  })

  return result
}