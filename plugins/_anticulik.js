import fs from 'fs'
let handler = m => m

handler.all = async function (m, { isBlocked }) {
    if (isBlocked) return
    // ketika ada yang invite/kirim link grup di chat pribadi
    if ((m.mtype === 'groupInviteMessage' || m.text.startsWith('Undangan untuk bergabung') || m.text.startsWith('Invitation to join') || m.text.startsWith('Buka tautan ini')) && !m.isBaileys && !m.isGroup) {
    let teks = `ᴍᴀᴜ ɪɴᴠɪᴛᴇ ᴋᴇ ɢʀᴏᴜᴘ?😃

ᴊɪᴋᴀ ɪʏᴀ ᴅᴀɴ ʙᴇʀᴍɪɴᴀᴛ ꜱɪʟᴀʜᴋᴀɴ ʜᴜʙᴜɴɢɪ: @${global.owner[0]} ᴜɴᴛᴜᴋ ᴏʀᴅᴇʀ😉
`
    this.reply(m.chat, teks, m)
    const data = global.owner.filter(([id, isCreator]) => id && isCreator)
    this.sendContact(m.chat, data.map(([id, name]) => [id, name]), m)
    }
}

export default handler