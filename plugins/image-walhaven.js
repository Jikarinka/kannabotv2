import fetch from 'node-fetch'

let handler = async (m, { conn, text, usedPrefix, command  }) => {
    if (!text) throw `Masukan Nama Karakternya Kak😊`
    let res = await fetch(`http://stikerin.my.id/wallhaven?q=${text}&apikey=elsawijayanti`)
    if (!res.ok) throw 'Error: ' + res.statusText
    let json = await res.json()
    if (!json[0].status) throw json
    //conn.sendFile(m.chat, json[0].path, json[0].path, '', m)
    conn.sendButton(m.chat,` \`\`\`➩ Wallhaven\nName Chara: ${text ? text.capitalize() : false}\`\`\` `, wm.date, json[0].path,['ɴᴇxᴛ', `.${command} ${text}`], m)
}
handler.help = ['wallhaven <teks>']
handler.tags = ['tools']
handler.command = /^wallhaven|walhaven$/i

export default handler