//## CASE BY LETTA DEV √
// > 62831433937633

import fs from 'fs'
let handler = async (m, { conn, isROwner, args, isOwner, command, isAdmin}) => {
 if (!isROwner) throw false
 
let q = m.quoted ? m.quoted : m
let mime = (q.msg || q).mimetype || ''
if (!mime) throw 'reply / caption gambar !'
var media = await q.download()
            
            let botNumber = await conn.user.jid
            let gc = m.chat
            var { img } = await conn.generateProfilePicture(media)
            
            let type = (args[0] || '').toLowerCase()
                switch (type) {
                case 'bot': 
                if (!isOwner) {
            	global.dfail('owner', m,conn)
                throw false
                }
            await conn.query({
            tag: 'iq',
            attrs: {
            to: botNumber,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            break
                  case 'gc':
                  case 'group':
                  case 'grup':
                  if (!m.isGroup) return global.dfail('group',m,conn)
                  if (m.isGroup) {
                  if (!isAdmin) {
            	global.dfail('admin', m,conn)
                }
                }
                
                await conn.query({
            tag: 'iq',
            attrs: {
            to: gc,
            type:'set',
            xmlns: 'w:profile:picture'
            },
            content: [
            {
            tag: 'picture',
            attrs: { type: 'image' },
            content: img
            }
            ]
            })
            break
        default:
            if (!/[01]/.test(command)) return m.reply('Masukan Type, lalu reply / caption gambar yang mau diterapkan')
            throw false
     }
            m.reply(`Sukses Set ${type}`)
}
handler.help = ['setpp <type> (reply|caption)']
handler.tags = ['owner', 'group']
handler.command = /^(setpp)$/i

export default handler