import fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw 'ᴍᴀꜱᴜᴋᴋᴀɴ ᴛᴇxᴛ'
  m.reply('ᴘʀᴏꜱᴇꜱ...')
  let res = `https://ziy.herokuapp.com/api/maker/LisaPresentation?text=${response[0]}&apikey=xZiyy`
  conn.sendFile(m.chat, res, 'lisa.jpg', `ꜱᴜᴅᴀʜ ᴊᴀᴅɪ`, m, false)
}
handler.help = ['lisapresent'].map(v => v + ' <text>')
handler.tags = ['nulis']
handler.command = /^(lisapresent)$/i
handler.limit = true

export default handler