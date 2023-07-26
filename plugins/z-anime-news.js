import { getNewsNoDetails } from 'mal-scraper'
import { scrapNews } from '@shineiichijo/mal-news-scraper'
let handler = async (m, { conn, text }) => {

let noDetails = await getNewsNoDetails()
let row = []
for (let i of noDetails) {
    row.push({
      title: '📑 Title : ' + i.title,
      description: 'Link : ' + i.link,
      rowId: '!news-detail ' + i.newsNumber
    })
  }
  conn.sendListM2(m.chat,  'MynimeList News', 'Tap di bawah untuk melihat details nya', '🎐  K A N N A  B O T', '🍁 Tap di sini kak 🍁', null, row, m)                
}
handler.tags = ['anime']
handler.help = ['news']
handler.command = ['news'] 
export default handler