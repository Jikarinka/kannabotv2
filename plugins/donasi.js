import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {

await conn.relayMessage(m.chat, 
        {"requestPaymentMessage" : {
        amount:{value: 10000000,offset: 0,currencyCode: 'USD'},
        amount1000: 10000000,
        background: null,
        currencyCodeIso4217: 'USD',
        expiryTimestamp: 0,
        noteMessage: {extendedTextMessage : { text : `❒ Pulsa : 6285334930628\n❒ Dana : 6285334930628\n❒ Pulsa : 6281336990781\n\nNote : Donasi Seikhlasnya, Agar Bot Dapat Beroperasi Lebih Lama Dan Supaya Owner Samangat Untuk Menambah Fitur² Baru, Dan Memperbaiki Fitur² Yang Eror\n\nSekian *MATUR NUWUN*
\n\nDōmo arigatōgozaimasu ~`}},
        requestFrom: m.sender}},{messageId:m.key.id})
}    
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

export default handler