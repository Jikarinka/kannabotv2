import { bioskopNow } from '@bochilteam/scraper'

let handler = async(m, { conn, usedPrefix, text, args, command }) => {
    let res = await bioskopNow()
    let listSections = []
    let tods = res.map((v) => {
								listSections.push({
									title: 'DIRECTOR BY ' + v.director,
									rows: [
                                        {
                                            title: v.title + ' 🎥',
                                            rowId: '.get ' + v.img,
                                            description: 'GENRE: ' + v.genre + '\nDURATION: ' + v.duration + '\nDATE: ' + v.release + '\nCAST: ' + v.cast
                                        },
                                    ]
                                })
})
    const listMessage = {
							text: 'Film Yang Sedang Tayang Pada Saat Ini',
							footer: '⚡ Silakan pilih FILM',
							title: 'B I O S K O P',
							buttonText: 'LIST FILM 🎬',
							sections: listSections,
						}
						await conn.sendMessage(m.chat, listMessage, m)
    }
handler.help = ['bioskop']
handler.tags = ['internet']
handler.command = /^bioskop$/i

export default handler