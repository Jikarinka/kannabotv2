let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
‹•══════════┅━━━━━═┅═❏
│   *「 Kartu Intro 」*
│ *Nama     :* 
│ *Gender   :* 
│ *Umur     :* 
│ *Hobby    :* 
│ *Kelas    :* 
│ *Asal     :* 
│ *Agama    :* 
|  *Status  :* 
╰═════┅━━━━━═┅═❏
`.trim()) // Tambah sendiri kalo mau
}
handler.command = /^(intro)$/i

export default handler