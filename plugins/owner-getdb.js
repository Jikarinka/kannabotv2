import fs from 'fs'
let handler = async (m, { conn, text }) => {
    m.reply('ᴛᴜɴɢɢᴜ ꜱᴇʙᴇɴᴛᴀʀ, ꜱᴇᴅᴀɴɢ ᴍᴇɴɢᴀᴍʙɪʟ ꜰɪʟᴇ ᴅᴀᴛᴀʙᴀꜱᴇ')
    let sesi = await fs.readFileSync('./index.js_database.json')
    return await conn.sendMessage(m.chat, { document: sesi, mimetype: 'application/json', fileName: 'index.js_database.json' }, { quoted: m })
}
handler.help = ['getdb']
handler.tags = ['owner']
handler.command = /^(getdb)$/i

handler.owner = true

export default handler