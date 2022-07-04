/*const { facebookdl, facebookdlv2, facebookdlv3 } from '@bochilteam/scraper'
import fs from 'fs'
const { Facebook } from 'xfarr-api'
let fetch from 'node-fetch'
let handler = async (m, { conn, args, usedPrefix, command }) => {
  if (!args[0]) throw `uhm.. url nya mana?\n\ncontoh:\n*${usedPrefix + command}* https://fb.watch/aYv0jAffAO/`
  if (!args[0].match(/(https:\/\/.www.facebook.com || fb.watch)/gi)) throw `*Link salah! Perintah ini untuk mengunduh media facebook dengan link*\n\ncontoh:\n${usedPrefix + command} https://fb.watch/aYv0jAffAO/`
  await m.reply(wait)
  await conn.reply(m.chat, 'Downloading media from Facebook', 0, {
  contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    description: sgc , 
    title: 'Humu²',
    body: wm, //`${fileSizeH}`,
    thumbnail: fs.readFileSync('./thumbnail.jpg'),
    sourceUrl: sgc
     }}
  })
  try {
      let res = await facebookdlv2(args[0])
      let data = res.result
      let { id, thumbnail } = await res
      let { url, quality } = await data[0]
      let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
      let sel = `🎬 *Facebook MP4*\n\n📌 *ID:* ${id}\n✨ *Quality:* ${quality}\n🚀 *Link:* ${urlshort}`
      conn.sendFile(m.chat, url, id+'.mp4', sel, 0, 0, {mentions: [m.sender], jpegThumbnail: await await(fetch(thumbnail)).buffer()})
  } catch {
   try {
     let res = await facebookdlv3(args[0])
      let data = res.result
      let { title, thumbnail } = await res
      let { url, quality } = await data[1]
      let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
      let sell = `🎬 *Facebook MP4*\n\n✨ *Quality:* ${quality}\n🚀 *Link:* ${urlshort}`
      conn.sendFile(m.chat, url, title+'.mp4', sell, 0, 0, {mentions: [m.sender], jpegThumbnail: await await(fetch(thumbnail)).buffer()})
  } catch {
   try {
     let anu = await scrape.facebook2(args[0])
     let { author, title, thumb, link_high, link_normal } = anu.hasil
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${link_high}`)).data
     let selll = `🎬 *Facebook MP4*\n\n👤 *Author:* ${author}\n📌 *Title:* ${title}\n🚀 *Link:* ${urlshort}`
     conn.sendFile(m.chat, link_high, title+'.mp4', selll, 0, 0, {mentions: [m.sender], jpegThumbnail: await(await fetch(thumb)).buffer()})
  } catch {
   try {
     let b = await Facebook(args[0])
     let { title, thumbnail, duration, source, medias } = b
     let { url, quality, extension, size, formattedSize  } = medias[0]
     let urlshort = await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
     let sell = `🎬 *Facebook MP4*\n\n✨ *Quality:* ${quality}\n🎚 *Size:* ${formattedSize}\n🚀 *Link:* ${urlshort}`
     conn.sendMedia(m.chat, url, null, {caption: sell, mentions: [m.sender], jpegThumbnail: await(await fetch(thumbnail)).buffer()})
  } catch { 
     throw eror
        }
      }
    }
  }
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((fb|facebook)(d(own)?l(oad)?(er)?)?(mp4)?)$/i

handler.limit = true

export default handler*/