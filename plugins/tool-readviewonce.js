let { generateWAMessageFromContent } = (await import('@adiwajshing/baileys'));

let handler = async (m, { conn }) => {
    if (!m.quoted) throw 'where\'s message?'
    let kok = {...m.quoted.message}
    Object.keys(kok).forEach((i) => {
      delete kok[i]?.viewOnce
    })
    let {message} = await generateWAMessageFromContent(m.chat, kok, {quoted: m})
    await conn.relayMessage(m.chat, message, {})
}

handler.help = ['readviewonce']
handler.tags = ['tools']
handler.command = /^readviewonce|rv/i

export default handler