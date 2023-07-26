import { scrapNews } from '@shineiichijo/mal-news-scraper'
import fetch from 'node-fetch'

let handler = async (m, { conn, text }) => {

let news = await scrapNews(text)
let im = news.title.replace(/'/, '')
let tx = `📑 Title : ${news.title}\nId : ${news.id}\nUrl : ${news.url}\nDescription : \n${news.description}`
    await conn.reply(m.chat, tx, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: news.image,
    mediaType: 1,
    renderLargerThumbnail: true,
    title: im, 
    body: null,  
    sourceUrl: news.url, 
    thumbnail: await (await fetch(news.image)).buffer(),
      }}
     })
}
handler.command = ['news-detail'] 
export default handler