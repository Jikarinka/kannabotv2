import cod from 'unofficial-carbon-now-sh'
let carb = new cod.createCarbon()
let handler = async(m, {Func, conn, text, usedPrefix}) => {
    
    //let txt = m.quoted ? m.quoted.text : text
    if (!text) throw Func.example(usedPrefix, m, 'Balas pesan ini menggunakan Code')
    let carbon = await carb.setCode(text).setTheme('vscode').setPrettify(true);
    
    if (!carbon) throw error
    await conn.sendMedia(m.chat, await cod.generateCarbon(carbon), m)
    
}

handler.help = ['carbonsh', 'carbon', 'carb']
handler.tags = ['tools']
handler.command = /^(carbonsh|carbon|carb)$/i

export default handler