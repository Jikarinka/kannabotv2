let limit = 80
import fetch from 'node-fetch'
import { youtubeSearch, youtubedl, youtubedlv2, youtubedlv3 } from '@bochilteam/scraper';
let handler = async (m, { conn, args, isPrems, isOwner }) => {
  if (!args || !args[0]) throw 'Uhm... urlnya mana?'
  let chat = global.db.data.chats[m.chat]
  const isY = /y(es)/gi.test(args[1])
  const { thumbnail, video: _video, title} = await youtubedl(args[0]).catch(async _ => await youtubedlv2(args[0])).catch(async _ => await youtubedlv3(args[0]))
  const limitedSize = (isPrems || isOwner ? 99 : limit) * 1024
  let video, source, res, link, lastError, isLimit
  for (let i in _video) {
    try {
      video = _video[i]
      isLimit = limitedSize < video.fileSize
      if (isLimit) continue
      link = await video.download()
      if (link) res = await fetch(link)
      isLimit = res?.headers.get('content-length') && parseInt(res.headers.get('content-length')) < limitedSize
      if (isLimit) continue
      if (res) source = await res.arrayBuffer()
      if (source instanceof ArrayBuffer) break
    } catch (e) {
      video = source = link = null
      lastError = e
    }
  }
  if ((!(source instanceof ArrayBuffer) || !link || !res.ok) && !isLimit) throw 'Error: ' + (lastError || 'Can\'t download video')
  if (!isY && !isLimit) await conn.reply(m.chat, `
  ${htki} YOUTUBE ${htka}
  
  ${htjava} Title: ${title}
  ${htjava} Type: mp4
  ${htjava} Filesize: ${video.fileSizeH}
  ${htjava} Link: ${link}
  
  L O A D I N G. . .
  `, m, { render: true, thum: thumbnail })
  let _thumb = {}
  try { _thumb = { thumbnail: await (await fetch(thumbnail)).buffer() } }
  catch (e) { }
  if (!isLimit) await conn.sendFile(m.chat, link, title + '.mp4', `
${htki} YOUTUBE ${htka}

${htjava} Title: ${title}
${htjava} Quality: 1080p
${htjava} Filesize: ${video.fileSizeH}
`.trim(), m, false, {
    ..._thumb,
    asDocument: chat.useDocument
  }).catch(v => "File tidak dapat terkirim")
}
handler.help = ['mp4', 'v', ''].map(v => 'yt' + v + ` <url> <without message>`)
handler.tags = ['downloader']
handler.command = /^yt(v|mp4)?$/i

handler.exp = 0
handler.register = true
handler.limit = true


export default handler