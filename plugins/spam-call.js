import fetch from 'node-fetch'
let handler = async (m, { conn, args, command, usedPrefix, text }) => {
  if (!args[0]) return m.reply(`<❓> ᴡʜᴇʀᴇ ᴛʜᴇ ɴᴜᴍʙᴇʀ ᴛᴀʀɢᴇᴛ?\n\n➞ ᴇxᴀᴍᴘʟᴇ:\n${usedPrefix  + command} 895********`)

    let res = await fetch('https://ainxbot-sms.herokuapp.com/api/spamsms?params&phone=' + args[0] )
    let json = await res.json().catch(v => '*404* || *sᴇʀᴠᴇʀ ɪɴᴛᴇʀɴᴀʟ ᴇʀʀᴏʀ*, ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ')
    if (!json == '*404* || *sᴇʀᴠᴇʀ ɪɴᴛᴇʀɴᴀʟ ᴇʀʀᴏʀ*, ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ') {
    let ch = `*${htki} SPAMSMS ${htka}*
• *ᴛᴇʀᴋɪʀɪᴍ:* ${json.result.terkirim}
• *ɢᴀɢᴀʟ:* ${json.result.gagal} 
• *ᴛᴏᴛᴀʟ:* ${json.result.total_spam}
• *ʟᴀʏᴀɴᴀɴ:* 
  - mapclub
  - jagreward
  - matahari
  - olx
  - icq
  - myfave
  - harvest
  - danacita
  - bukuwarung
  - payfazz`
await conn.reply(m.chat, ch, m)
} else m.reply('*404* || *sᴇʀᴠᴇʀ ɪɴᴛᴇʀɴᴀʟ ᴇʀʀᴏʀ*, ᴘʟᴇᴀsᴇ ᴛʀʏ ᴀɢᴀɪɴ')
}
handler.command = /^spamsms?$/i

handler.owner = true

export default handler