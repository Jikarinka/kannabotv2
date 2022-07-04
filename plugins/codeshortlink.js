let handler = async(m, { conn, args, usedPrefix }) => {

    if (args.length == 0) return conn.reply(m.chat, `Harap masukan code transaksi anda..!!`, m)
    if (args[0] == '085213' || args[0] == '443321' || args[0] == '662522' || args[0] == '322929' || args[0] == '562622' || args[0] == '432282' || args[0] == '002819' || args[0] == '715611' || args[0] == '882910' || args[0] == '882010' || args[0] == '937100' || args[0] == '736390' || args[0] == '762837' || args[0] == '028393' || args[0] == '625529' || args[0] == '727638' || args[0] == '992719' || args[0] == '092739' || args[0] == '727269' || args[0] == '629461' || args[0] == '239210') {

   if (new Date - global.db.data.users[m.sender].lastcode > 86800000) {
     if (new Date - global.db.data.users[m.sender].lastcode < 86800000) throw `Anda sudah mengambill code gift, Code gift anda sudah kadaluarsa..\nTunggu besok iya kak..`
    conn.reply(m.chat, `*SELAMAT!*\n\nKamu telah mendapatkan\n+25000 XP\n+25000 Money\n+25000 Nabung Money\n+25 Limit`, m)
    global.db.data.users[m.sender].exp += 25000
    global.db.data.users[m.sender].limit += 25
    global.db.data.users[m.sender].bank += 2500000
    global.db.data.users[m.sender].money += 25000000
   global.db.data.users[m.sender].lastcode = new Date * 1
} else conn.reply(m.chat, 'Kode anda sudah kadaluarsa, harap transaksi kembali..', m)
   } else {
        conn.reply(m.chat, `*「 KODE TIDAK VALID 」*`, m)
    }
}
// handler.help = ['codeshortlink']
// handler.tags = ['rpgabsen']
handler.command = /^(kannagive)$/i
handler.limit = true
handler.private = false

export default handler

function msToTime(duration) {
  var milliseconds = parseInt((duration % 1000) / 100),
    seconds = Math.floor((duration / 1000) % 60),
    minutes = Math.floor((duration / (1000 * 60)) % 60),
    hours = Math.floor((duration / (1000 * 60 * 60)) % 24)
    
  
  hours = (hours < 10) ? "0" + hours : hours
  minutes = (minutes < 10) ? "0" + minutes : minutes
  seconds = (seconds < 10) ? "0" + seconds : seconds

  return hours + " jam " + minutes + " menit " + seconds + " detik"
}
