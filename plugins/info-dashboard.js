import moment from 'moment-timezone'
let handler = async (m, { usedPrefix, args, conn }) => {
   let sortedCmd = Object.entries(global.db.data.stats).map(([key, value]) => {
        return { ...value, name: key }
    }).map(toNumber('total')).sort(sort('total'))
    let all = 0;
    let sall = 0;
    for (let i of sortedCmd){
        all += i.total
        sall += i.success
    }
    let len =  args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 3)) : sortedCmd.length
    let capt =  `
*💬❳┈ ⋞✿ 〈 Dashboard 〉 ✿⋟ ┈*
› Total command : ${Object.values(global.plugins).length} ( ${sortedCmd.length} used )
› Total hit all : ${all}
› Total succes all : ${sall}

${sortedCmd.slice(0, len).map(({ name, total, success, last }, i) => `
${i + 1}. Cmd : *${name.split`-`[1] || name.replace(/.js/, '')}*
*Total :* ${total} use ${success} sukses 
*Last used :* ${moment(last).tz('Asia/Jakarta').format('HH:mm:ss | DD-MM-YYYY')}`).join`\n`}`.trim()
   m.reply(capt)
}
handler.help = ['topcmd / dashboard']
handler.tags = ['info']
handler.command = /^(topcmd|dashboard)$/i

export default handler

function sort(property, ascending = true) {
    if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
    else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
    if (property) return (a, i, b) => {
        return { ...b[i], [property]: a[property] === undefined ? _default : a[property] }
    }
    else return a => a === undefined ? _default : a
}