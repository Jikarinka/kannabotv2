let handler = async (m, { conn, args, usedPrefix, command }) => {

if (!args[0] || !args[1] || !args[2] || !args[3]) throw `.setchattime 6282328303332 2022-04-30 15:30 hola`

let obj = { 
tanggal: `${args[1]}`, 
jam: `${args[2]}`
}

let date1 = +new Date()

let date2 = +new Date(obj.tanggal + " " + obj.jam)

let poster = m.sender

setTimeout(() => conn.reply(args[0] + "@s.whatsapp.net", `*TIME CHAT BOT*
*From:* @${poster.split("@")[0]}
*Text Content:*
${args[3]}
`, m, { contextInfo: { mentionedJid: [poster] }}), date2 - date1)

}

handler.help = ['setchattime'].map(v => v + ' <tanggal|jam|text>')
handler.tags = ['Baileys']

handler.command = /^(set(chat)?(time)?)$/i
handler.limit = false
export default handler