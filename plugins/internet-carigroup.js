import fetch from 'node-fetch'

let handler = async (m, {conn, text, usedPrefix, command }) => {
     if (!text) throw `Masukan nama Group yg ingin dicari\nExample: ${usedPrefix + command} anime`
     let url = await fetch(`https://api-frteam.my.id/carigrup?q=${text}&apikey=gamanaufal`)
     if (!url.ok) throw eror
     let json = await url.json()
     if (!json.status) throw json
     
     let hasil = `
— — — — — — — — [ 	L I S T   G R O U P ] — — — — — — — —

${json.data.map(v => `Nama: ${v.subject}\nLink: ${v.link}`).join`\n\n`}
    `.trim()

     conn.reply(m.chat, hasil, m)

}
handler.help = ['carigroup <name>']
handler.tags = ['internet']
handler.command = /^carigroup|carigc$/i
handler.register = false
handler.limit = true

export default handler