import glob from 'glob'
import fs from 'fs'
import path from 'path'

let handler = async(m, { conn }) => {

let dir = './kannabot.data.json/';
fs.readdir(dir, function(err, files){
 
    if(err){
        console.log(err); 
        m.reply('*Error !*\n*Gagal menghapus Sessions*')
    } 
    else {
        m.reply('*Berhasil Menghapus Sessions !*')
        console.log('Berhasil Menghapus Sessions !')
        for(let file of files){
            if(file.startsWith('pre')){
                fs.unlinkSync(path.join(dir, file));
            }
        }  
    } 
});
} /* Bang ? */
handler.help = ['clearsessions']
handler.tags = ['owner']
handler.command = /^(clearsessions|cs|clearsessi)$/i

handler.owner = true
export default handler