import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ɴᴀᴍᴀᴍᴜ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://ziy.herokuapp.com/api/maker/lolimaker?nama=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'neko.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['logololi'].map(v => v + ' <nama>')
handler.tags = ['nulis']
handler.command = /^(logololi)$/i
handler.limit = true

export default handler