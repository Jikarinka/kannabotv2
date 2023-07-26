let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix }) => {
    
    let list = `┏━━━━━━━━━━━━━━━━━━━━┅
┇       *「 list Type 」*
┣━━━━━━━━━━━━━━━━━━━━┅
┃ ❖ pixelate
┃ ❖ blur
┃ ❖ Simpcard
┃ ❖ Horny
┃ ❖ Lolice
┃ ❖ LGBT
┃ ❖ Pansexual
┃ ❖ Nonbinary
┃ ❖ Lesbian
┃ ❖ Bisexual
┃ ❖ Trans
┃ ❖ Oogway
┗━━━━━━━━━━━━━━━━━━━━┅`
    
    let number = text

let type = `${number}`

if (!number) return conn.reply(m.chat, list, m)
    
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  conn.sendFile(m.chat, global.API('https://some-random-api.ml', '/canvas/' + type, {
    avatar: await conn.profilePictureUrl(who).catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
  }), 'hornycard.png', type, m)
}

handler.help = ['card <type>']
handler.tags = ['maker', 'nulis']

handler.command = /^(card)$/i

export default handler