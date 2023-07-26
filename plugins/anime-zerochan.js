import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    if (!text) throw `Use example ${usedPrefix}${command} Nishikigi Chisato`
    const res = await fetch('https://api.zacros.my.id/search/konachan?query=' + text).getRandom()
    conn.sendButton(m.chat,` \`\`\`➩ Zerochan ${text ? text.capitalize() : false}\`\`\` `, wm.date, res,['ɴᴇxᴛ', `.${command} ${text}`], m)
}
handler.help = ['zerochan <character>']
handler.tags = ['anime']
handler.command = ['zerochan', 'zeroc']

export default handler