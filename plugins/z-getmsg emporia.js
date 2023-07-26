let handler = async (m, { conn, command, usedPrefix, text }) => {
    let which = command.replace(/get/i, '')
    if (!text) throw conn.sendButton(m.chat,'SILAHKAN KLIK BUTTON DIBAWAH', wm.date, null,['L I S T', `${usedPrefix}listmsg`], m)
    let msgs = global.db.data.msgs
    if (!(text in msgs)) throw `'${text}' tidak terdaftar di daftar pesan`
    let _m = conn.serializeM(JSON.parse(JSON.stringify(msgs[text]), (_, v) => {
        if (
            v !== null &&
            typeof v === 'object' &&
            'type' in v &&
            v.type === 'Buffer' &&
            'data' in v &&
            Array.isArray(v.data)) {
            return Buffer.from(v.data)
        }
        return v
    }))
    await _m.copyNForward(m.chat, true)
}
handler.command = /^g(m)$/
handler.dm = true

export default handler