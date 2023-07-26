import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { createRequire } from 'module'

const __dirname = dirname(fileURLToPath(import.meta.url))
const require = createRequire(__dirname)
let kbbi = require(join(__dirname, '../src/kbbi.json'))

let handler = async function (m, { conn, args, text }) {
  if (!text) throw 'where alfabet?'
  let lower = text.toLowerCase()
  
  let kata = Object.values(kbbi).filter(v => v.startsWith(lower))
  if (kata == '') throw 'Tidak ada kata yang cocok'
  
  let atas = `▶︎ *ʀᴇsᴜʟᴛ :* ${text}
▶︎ *ᴛᴏᴛᴀʟ ʀᴇsᴜʟᴛ :* ${kata.length}

▶︎ *ᴛᴏᴛᴀʟ ᴋᴀᴛᴀ ᴋʙʙɪ :* ${Object.values(kbbi).length}
`

  conn.sendButton(m.chat, atas, ('• ' + (kata).join`\n• `), null, [['ᴅᴏɴᴀsɪ', '.donasi'],['ᴍᴇɴᴜ', '.menu']],m)
  
}
handler.help = ['kbbi <text>']
handler.tags = ['internet']

handler.command = /^kbbi|kbbilist?$/i
handler.register = true

export default handler