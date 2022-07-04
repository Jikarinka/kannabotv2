import fs from 'fs'
import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, isAdmin, isOwner, text }) => {
	if (m.isGroup) {
		switch (text) {
			case 'off': {
				global.db.data.chats[m.chat].isBanned = true
				conn.reply(m.chat, 'Ｓｕｋｓｅｓ', m, { contextInfo: { externalAdReply: {title: global.wm, body: 'ʙᴏᴛ ᴛᴇʟᴀʜ ᴅɪ ᴍᴀᴛɪᴋᴀɴ ᴜɴᴛᴜᴋ ɢʀᴏᴜᴘ ɪɴɪ', sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
				break
			case 'on': {
				global.db.data.chats[m.chat].isBanned = false
				conn.reply(m.chat, 'Ｓｕｋｓｅｓ', m, { contextInfo: { externalAdReply: {title: global.wm, body: 'ʙᴏᴛ ᴛᴇʟᴀʜ ᴅɪ ɴʏᴀʟᴀᴋᴀɴ ᴜɴᴛᴜᴋ ɢʀᴏᴜᴘ ɪɴɪ', sourceUrl: sig, thumbnail: fs.readFileSync('./thumbnail.jpg')  }}})
}
				break
			default: {
				conn.sendButton(m.chat, '_Silahkan pilih opsi_', 'Opsi ini untuk mengaktifkan/nonaktifkan bot untuk group', 2, ['ON', '.bot on', 'OFF', '.bot off'], m)
			}
				break
		}
	} else conn.sendButton(m.chat, `Silahkan ketik ${usedPrefix}menu`, '', 1, ['Menu', `${usedPrefix}menu`], m)
}
handler.help = ['bot [on/off]']
handler.tags = ['group']
handler.command = /^(bot)$/i

handler.admin = true

export default handler