import uploadFile from '../lib/uploadFile.js'

const {
    proto,
    generateWAMessage,
    areJidsSameUser // replace with lib baileys or @adiwajshing/baileys
} = (await import("@adiwajshing/baileys")).default 

export async function all(m, chatUpdate) {
    if (!m.message || m.isBaileys) return 
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || m.quoted.buttons) return 
    let text = m.quoted.text.split('*') // silahkan kreasi example command
    let cmd = text.map(v => v.toLowerCase())
    let plugin = Object.values(plugins).filter(v => v.help).map(v => v.help).flat(1).map(v => v.split` `[0])
    if (!cmd[1] && !(cmd[1] in plugin)) return 
    if (cmd[4]?.includes('media')) {
        try {
           text = await m.download()
           text = await uploadFile(text) // harap di plugin lainnya jgn di fetch 2kali, sekali fetch auto delete in web.        
           text = text + ' ' + m.text
        } catch {
           text = m.text
        }
    } else text = m.text   
    text = '/' + cmd[1] + ' ' + text
    let messages = await generateWAMessage(m.chat, { text: text, mentions: m.mentionedJid }, {
        userJid: '0@s.whatsapp.net', // maybe fix trigger 
        quoted: m.quoted && m.quoted.fakeObj
    })
    messages.key.fromMe = areJidsSameUser(m.sender, this.user.id)
    messages.key.id = m.key.id
    messages.pushName = m.name
    if (m.isGroup)
        messages.key.participant = messages.participant = m.sender
    let msg = {
        ...chatUpdate,
        messages: [proto.WebMessageInfo.fromObject(messages)].map(this.serializeM),
        type: 'append'
    }
    this.ev.emit('messages.upsert', msg)
}

/*
example quoted split 
     cmdnya
[ *STICKER* ]
                   prefix + cmd resplace with media or teks
 •  *Example* : .sticker media atau url

_Balas pesan ini jika tidak ingin mengetik *.sticker* lagi!_ 

*/