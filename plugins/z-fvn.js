import { generateWAMessageFromContent } from "@adiwajshing/baileys"
import fet from 'node-fetch'


let handler  = async (m, { conn }) => {



let prep = generateWAMessageFromContent(m.chat, { liveLocationMessage: { 

degreesLatitude: 35.685506276233525, degreesLongitude: 139.75270667105852,

caption: wm,

sequenceNumber: 1656662972682001, timeOffset: 86400000, jpegThumbnail: await(await fet('https://telegra.ph/file/d06e73b9ade7fca18ceaa.jpg')).buffer()

}}, { quoted: m

					})



return conn.relayMessage(m.chat, prep.message, { messageId: prep.key.id })

}



handler.command = /^loc2$/

handler.owner = true

export default handler