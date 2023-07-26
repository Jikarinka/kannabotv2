import fs from 'fs' 
import archiver from 'archiver'
import path from 'path'

let handler = async (m, { conn, usedPrefix: _p, args }) => {
    
    
    let nomor = '6285334930628@s.whatsapp.net'
    
    let fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: '🗓️Backup KannaBot', 
  jpegThumbnail: fs.readFileSync('./thumbnail.jpg'),
                            }
                          }
                        }
	let d = new Date
            let date = d.toLocaleDateString('id', {
                day: 'numeric',
                month: 'long',
                year: 'numeric'
            })
    
let password = 'jikarinkapunya'


let nameFile = 'kanna-backup.zip'
let output = fs.createWriteStream(nameFile) 
let archive = archiver('zip', { zlib: { level: 9 } }) 

//archive.setPassword(password);

let sourceDir = './' 

conn.reply(nomor, wait + `\nSedang Membuat ${nameFile}`, null)

archive.on('entry', (entry) => {
  console.log(`Menambahkan file ${entry.name} ke dalam arsip.`) 
}) 

let number = archive.pointer()
let embe = parseInt(number.toString().substring(0, 2))

archive.on('finish', () => {
  conn.reply(nomor, 'Arsip selesai dengan total ukuran *' + parseInt(archive.pointer().toString().substring(0, 2)) + 'MB*' + '\n```Arsip sedang dikirim ke nomor Owner```', null)
  conn.sendFile(nomor, fs.readFileSync(`./${nameFile}`), nameFile, 'Arsip otomatis akan terhapus dari Server', fdoc) 
    conn.reply(nomor, 'Arsip telah terkirim ke nomor Owner', null)
  fs.unlinkSync(`./${nameFile}`)
}) 

archive.on('error', (err) => {
  throw err 
}) 

archive.pipe(output) 

let processSource = (source) => {
  let files = fs.readdirSync(source) 

  files.forEach((file) => {
    let filePath = path.join(source, file) 
    let fileStat = fs.statSync(filePath) 

    if (fileStat.isDirectory()) {
      if (file !== 'node_modules' && file !== 'tmp' && file !== '.local' && file !== '.config' && file !== '.npm' && file !== '.cache' && file !== 'kannabot.data.json') {
        processSource(filePath) 
      }
    } else {
      archive.file(filePath, { name: filePath.replace(sourceDir, '') }) 
    }
  }) 
} 

processSource(sourceDir) 
archive.finalize()

 }
 
handler.help = ['backup']
handler.tags = ['owner']
handler.command = /^(kbackup)$/i
handler.rowner = true

export default handler