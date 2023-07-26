let handler = m => m

handler.before = function (m, { user }) {
  if (m.isBaileys && m.fromMe)
      return true
  let chat = global.db.data.chats[m.chat]
  let sender = global.db.data.chats[m.sender]
  let bot = global.db.data.settings[this.user.jid] || {}
  if (chat.sticker || chat.isBanned) return true


  let isSticker = m.mtype
  if (chat.antiSticker && isSticker) {
    if(isSticker === "stickerMessage"){
      if (global.opts) {
        if (isAdmin || !isBotAdmin){		  
        }else{
          m.reply('*Sticker detected*\nYou will in kick now..!!') // ganti text terserah kamu 
          this.groupParticipantsUpdate(m.chat, [m.sender], "remove")
        }return true
      }
    }
  }
  return true
}

export default handler