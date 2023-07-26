//## ᴍᴀᴅᴇ ʙʏ ʟᴇᴛᴛᴀ ᴅᴇᴠ
// 62831433937633

import jimp from "jimp"
import uploadImage from "../lib/uploadImage.js"
import uploadFile from "../lib/uploadFile.js"

let handler = async (m, { conn, usedPrefix, args}) => {
	let towidth = args[0]
	let toheight = args[1]
	if (!towidth) throw 'size width?'
	if (!toheight) throw 'size height?'
	
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw "where the media?"

let media = await q.download()
let isMedia = /image\/(png|jpe?g)/.test(mime)
if (!isMedia) throw `Mime ${mime} tidak didukung`
let link = await (isMedia ? uploadImage : uploadImage)(media)

let source = await jimp.read(await link)
let size = {
            before:{
                   height: await source.getHeight(),
                   width: await source.getWidth()
             },
            after:{ 
            	   height: toheight,
                   width: towidth,
                   },
            }
let compres = await conn.resize(link, towidth - 0, toheight - 0)
let linkcompres = await (isMedia ? uploadImage : uploadImage)(compres)

conn.sendFile(m.chat, compres, null, `*— RESIZE IMAGE —*

*• BEFORE*
> ᴡɪᴅᴛʜ : ${size.before.width}
> ʜᴇɪɢʜᴛ : ${size.before.height}

*• AFTER*
> ᴡɪᴅᴛʜ : ${size.after.width}
> ʜᴇɪɢʜᴛ : ${size.after.height}

*• LINK*
> ᴏʀɪɢɪɴᴀʟ : ${link}
> ᴄᴏᴍᴘʀᴇss : ${linkcompres}

• ᴍᴀᴅᴇ ʙʏ *ʟᴇᴛᴛᴀ ᴅᴇᴠ ᴀɴᴅ ᴠᴀɴᴇꜱꜱᴀ-ᴅᴇꜱᴜ*`, m)
}
handler.help = ['resize <width> <height> (reply|caption)']
handler.tags = ['tool', 'tools']
handler.command = /^(resize)$/i

export default handler