import { googleImage, pinterest } from '@bochilteam/scraper'
import fetch from 'node-fetch'

let handler = async (m, { Func, conn, text, usedPrefix, command }) => {
if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
	
    if (!text) throw `Use example ${usedPrefix}${command} Sagiri`
    const res = await (await googleImage('rule34 ' + text)).getRandom()
    //conn.sendButton(m.chat,` \`\`\`➩ Random Nsfw Rule34 ${text ? text.capitalize() : false}\`\`\` `, wm.date, res,['ɴᴇxᴛ', `.${command} ${text}`], m)
    conn.sendFile(m.chat, await ((await fetch(res)).buffer()), '', Func.exampleNew(usedPrefix, 'rule34', `• >  _Balas pesan ini dengan *${text ? text.capitalize() : false}* untuk mendapatkan gambar berikutnya atau masukan nama karakter yang ingin kalian cari🤞_`))
}
handler.help = ['rule34 <character>']
handler.tags = ['nsfw']
handler.command = ['rule34']

export default handler