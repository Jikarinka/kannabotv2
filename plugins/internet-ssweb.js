import fetch from 'node-fetch'

let handler = async (m, { conn, command, args }) => {
	if (!args[0]) throw 'Input URL'
	await m.reply('_ɪɴ ᴘʀᴏɢʀᴇꜱꜱ, ᴘʟᴇᴀꜱᴇ ᴡᴀɪᴛ..._')
	let url = /https?:\/\//.test(args[0]) ? args[0] : 'https://' + args[0],
		ss = /f$/i.test(command) ? API('nrtm', '/api/ssweb', { delay: 1000, url, full: true }) : API('nrtm', '/api/ssweb', { delay: 1000, url }),
		res = await fetch(ss)
	if (!res.ok) throw await res.text()
	conn.sendMessage(m.chat, { image: { url: ss }, caption: 🅽🅸🅷 🅺🅰🅺 }, { quoted: m })
}
handler.help = ['ss', 'ssf']
handler.tags = ['tools']
handler.alias = ['ss', 'ssf', 'ssweb', 'sswebf']
handler.command = /^ss(web)?f?$/i

export default handler