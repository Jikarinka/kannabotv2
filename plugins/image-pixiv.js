import { googleImage, pinterest } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
	
    if (!text) throw `Use example ${usedPrefix}${command} Sagiri`
    const res = await (await googleImage('pixiv' + text)).getRandom()
    conn.sendButton(m.chat,` \`\`\`➩ Random Pixiv ${text ? text.capitalize() : false}\`\`\` `, wm.date, res,['ɴᴇxᴛ', `.${command} ${text}`], m)
}
handler.help = ['pixiv <character>']
handler.tags = ['anime', 'internet']
handler.command = ['pixiv']

export default handler