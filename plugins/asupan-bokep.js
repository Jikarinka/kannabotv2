//gamanaufal🗿

import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix }) => {
    if (db.data.chats[m.chat].nsfw == false && m.isGroup) return conn.sendButton(m.chat, '❗ ᴏᴘᴛɪᴏɴs ɴsғᴡ ᴅɪᴄʜᴀᴛ ɪɴɪ ʙᴇʟᴜᴍ ᴅɪɴʏᴀʟᴀᴋᴀɴ ᴏʟᴇʜ ᴀᴅᴍɪɴ ɢʀᴏᴜᴘ',wm.date, null, [['ᴇɴᴀʙʟᴇ', '.on nsfw']], m)
    let bokep = 'https://yog-apikey.herokuapp.com/api/bokep?apikey=YogGanz'
	conn.sendButton(m.chat, 'Ngocok Trus, Ingat Masa Depan CUY🗿', author, bokep, [['Bokep', `${usedPrefix}bkp`]], m)
}

handler.help = ['bkp']
handler.tags = ['internet', 'nsfw']

handler.command = /^(bokep|bkp)$/i
handler.premium = true
handler.register = true
handler.limit = 1
export default handler