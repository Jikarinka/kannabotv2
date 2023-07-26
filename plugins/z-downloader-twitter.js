import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import fs from 'fs'

let handler = async(m, { Func, conn, usedPrefix, text, args, command }) => {
    let tx = 'https://t.co/rsv8SH8isP'
    let ur = text
    if (!ur) throw Func.example(usedPrefix, m, "Balas Pesan Ini menggunakan LINK Twitter")
    let tw = await twitterDl(text)
    let twit = await twitterDl(text).then((x) => x.media)
	for (let i of twit) {
		await conn.sendHydrated(m.chat, `${htki} ᴛᴡɪᴛᴛᴇʀ ᴅᴏᴡɴʟᴏᴀᴅᴇʀ ${htka}`, tw.caption, await (await fetch(i.url)).buffer(),
        i.url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
        ['ᴅᴏɴᴀꜱɪ', `.donasi`],
        ['ᴍᴇɴᴜ', `.menu`],
        ['ᴅᴏᴡɴʟᴏᴀᴅ ᴀɴᴏᴛʜᴇʀ', `.twit`]], m)
	}
    
}
handler.help = ['twitter']
handler.tags = ['downloader']
handler.command = /^twitter|twit$/i

handler.owner = true
export default handler

async function twitterDl(url) {
	let id = /twitter\.com\/[^/]+\/status\/(\d+)/.exec(url)?.[1]
	if (!id) throw 'Invalid URL'
	let res = await fetch(`https://tweetpik.com/api/tweets/${id}`)
	if (res.status !== 200) throw res.statusText
	let json = await res.json()
	if (json.media) {
		let media = []
		for (let i of json.media) {
			if (/video|animated_gif/.test(i.type)) {
				let vid = await (await fetch(`https://tweetpik.com/api/tweets/${id}/video`)).json()
				vid = vid.variants.pop()
				media.push({
					url: vid.url,
					type: i.type
				})
			} else {
				media.push({
					url: i.url,
					type: i.type
				})
			}
		}
		return {
			caption: json.text,
			media 
		}
	} else throw 'No media found'
}