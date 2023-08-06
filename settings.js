/*
› Create By @WB
› Base Ori @WBGM
› Kalau mau tambahin fitur di index.js
› Edit text menu di file language › help.js
*/

//gausah di apa² in!
const fs = require('fs')
const chalk = require('chalk')

//—————「 Website Apikey 」—————//
global.APIs = {
//gausah di apa² in!
zenz: 'https://zenzapis.xyz',
}

//—————「 Website Apikey 」—————//
global.APIKeys = {
//gausah di apa² in, udah free apikey :)
'https://zenzapis.xyz': 'BagasGanz',
}

//—————「 Setting Owner 」—————//
global.owner = ['6289525720818','6289525720818','6289525720818'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.premium = ['6289525720818'] //ubah jadi nomor mu, note tanda ' gausah di hapus!
global.ownernomer = '6289525720818' //ubah jadi nomor mu, note tanda ' gausah di hapus!

//—————「 Set Nama Own & Bot 」—————//
global.ownername = 'WB' //ubah jadi nama mu, note tanda ' gausah di hapus!
global.botname = 'BOT-WV' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.footer = 'BOT-WV' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Kebutuhan Button & Kontak 」—————//
//ubah aja kalau ada yang gapunya gsh di hps anggap aja credits :), note tanda ' gausah di hapus!
global.youtube = 'https://youtube.com/channel/UCeKjwO8iZ7vf3bsoMm9PrkA'
global.ig = 'https://www.instagram.com/wb_create01?r=nametag'
global.mygc = 'https://chat.whatsapp.com/Fe5RMAyvC8522hPgKZ2Vux'
global.myweb = 'https://linktr.ee/bot_wb'
global.email = 'botwbb@gmail.com'
global.region = 'indonesia'

//—————「 Set Wm 」—————//
global.packname = '© BOT-WV' //ubah jadi nama bot mu, note tanda ' gausah di hapus!
global.author = 'Riy' //ubah jadi nama mu, note tanda ' gausah di hapus!

//—————「 Set Nama Session 」—————//
//gausah di apa² in!
global.sessionName = 'session'

//—————「 Set Limit 」—————//
//terserah mau ubah atau nggak, note : tanda ' gausah di hapus!
global.limitawal = {
premium: "Infinity",
free: 50,
}

//—————「 Set Image 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.thumb = fs.readFileSync('./image/chika.jpg')
/*global.veloriy = fs.readFileSync('./image/chika.mp4')*/

//—————「 Set Image Welcome 」—————//
//terserah mau ubah apa nggak, menurut gua jangan di ubah!
global.BgWelcLeav = 'https://telegra.ph/file/ca207893ae26d531cd9c6.jpg'

//—————「 Set Random Image Menu 」—————//
//gausah di apa² in!
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='

//—————「 Set Prefix 」—————//
//gausah di apa² in!
global.prefa = ['','!','.','🐦','🐤','🗿']

//—————「 Set Simbol 」—————//
//terserah mai ubah atau nggak, note : tanda ' gausah di hapus!
global.sp = '⭔'

//—————「 Set Message 」—————//
//terserah mau ubah apa nggak, note : tanda ' gausah di hapus!
global.mess = {
success: '_Done._',
admin: '_khusus Admin Group!_',
botAdmin: '_Bot Harus Menjadi Admin Terlebih Dahulu!_',
owner: '_Khusus Owner Bot_',
group: '_Digunakan Hanya Untuk Group!_',
private: '_Digunakan Hanya Untuk Private Chat!_',
bot: '_Khusus Pengguna Nomor Bot_',
wait: '_Sedang Di Proses..._',
error: '_Maaf Error!_',
endLimit: '_Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12_',
}

//—————「 Batas Akhir 」—————//
//gausah si apa² in!
let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update'${__filename}'`))
delete require.cache[file]
require(file)
})
