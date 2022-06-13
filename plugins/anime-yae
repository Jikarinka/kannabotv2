import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://rokuhentai.com/?q=%22Yae+Miko%22'
	conn.sendButton(m.chat, 'Waifu nya om (≧ω≦)', wm, await(await fetch(url)).buffer(), [['Next',`.${command}`]],m)
}
handler.command = /^(yae)$/i
handler.tags = ['anime']
handler.help = ['yae']
handler.premium = false

export default handler