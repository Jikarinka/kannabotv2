import { tiktok } from '@xct007/frieren-scraper'

let handler = async (m, { conn, args, text }) => {
 
if (!text) throw 'linknya mana kak'
let tt = await tiktok.v1(text)
let semua = `Nama: ${tt.nickname}\nid: ${tt.unique_id}\nDownload: ${tt.download_count}\nduration: ${tt.duration} detik\nDescription: ${tt.description}`

/*conn.sendFile(m.chat, tt.hdplay, '', semua, m)*/

   m.reply(tt.music)

}
handler.help = 'tiktok'
handler.tags = 'downloader'
handler.command = ['ttn']
export default handler