import { facebookdl, facebookdlv2 } from '@bochilteam/scraper'
import fetch from 'node-fetch'
import { savefrom } from '@bochilteam/scraper'
import cheerio from 'cheerio'

let handler = async (m, { conn, args, usedPrefix, command }) => {
try {
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    // let { result } = await facebookdl(args[0])
    if (!args[1]) return conn.sendButton(m.chat, `*${htki} ғᴀᴄᴇʙᴏᴏᴋ ${htka}*`, null, null, [['sᴅ', `.fb ${args[0]} sd`],['ʜᴅ', `.fb ${args[0]} hd`]],m)
   let res = await fetch(`https://api.xteam.xyz/dl/fbv2?url=${args[0]}&APIKEY=NezukoTachibana281207`)
    let { result } = await res.json()
    
    let { hd, meta, sd } = result
    
    let tpe = "sd"
  if (args[1] == 'sd') {
    tpe = sd
  }
  if (args[1] == 'hd') {
    tpe = hd
  }
  let { url } = tpe
  let { duration } = meta
  let { thumb } = result

conn.reply(m.chat, `ᴅ ᴏ ᴡ ɴ ʟ ᴏ ᴀ ᴅ ɪ ɴ ɢ. . .`, 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: 'https://facebook.com',
    mediaType: 2,
    description: wm, 
    title: '               「🇫」 ғ ᴀ ᴄ ᴇ ʙ ᴏ ᴏ ᴋ',
    body: wm,
    thumbnail: await(await fetch(thumb)).buffer(),
    sourceUrl: sgc
     }}
  })
  conn.sendHydrated(m.chat, ' ', `
━━━━━•─────────────── ${duration}
       ⇆ㅤ◁ㅤ ❚❚ㅤ ▷ㅤ↻`, await (await fetch(url)).buffer(), args[0], '🌎 ᴜ ʀ ʟ', null,null, [[null,null],[null,null],[null,null]],m)
       } catch {
       if (!args[0]) throw 'Input URL'
	let res = await facebookDl(args[0]).catch(async _ => await savefrom(args[0])).catch(_ => null)
	if (!res) throw 'Can\'t download the post'
	let url = res?.url?.[0]?.url || res?.url?.[1]?.url || res?.['720p'] || res?.['360p']
	await m.reply('_In progress, please wait..._')
	conn.sendMessage(m.chat, { video: { url }, caption: res?.meta?.title || '' }, { quoted: m })
}
       
}
handler.help = ['facebbok'].map(v => v + ' <url>')
handler.tags = ['downloader']

handler.command = /^((facebook|fb)(downloder|dl)?)$/i

export default handler

async function facebookDl(url) {
	let res = await fetch('https://fdownloader.net/')
	let $ = cheerio.load(await res.text())
	let token = $('input[name="__RequestVerificationToken"]').attr('value')
	let json = await (await fetch('https://fdownloader.net/api/ajaxSearch', {
		method: 'post',
		headers: {
			cookie: res.headers.get('set-cookie'),
			'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
			referer: 'https://fdownloader.net/'
		},
		body: new URLSearchParams(Object.entries({ __RequestVerificationToken: token, q: url }))
	})).json()
	let $$ = cheerio.load(json.data)
	let result = {}
	$$('.button.is-success.is-small.download-link-fb').each(function () {
		let quality = $$(this).attr('title').split(' ')[1]
		let link = $$(this).attr('href')
		if (link) result[quality] = link
	})
	return result
}
