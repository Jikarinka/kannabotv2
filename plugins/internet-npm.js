import fetch from 'node-fetch'

let handler = async (m, { text }) => {
if (!text) throw '「 ❗ 」Gagal\n\nContoh : /npm xfarr-api'
let res = await fetch(`http://registry.npmjs.com/-/v1/search?text=${text}`)
let { objects } = await res.json()
if (!objects.length) throw `「 ❗ 」Gagal\n\nQuery "${text}" not found :/`
let txt = objects.map(({ package: pkg }) => {
return `*🔎❳┈ ⋞✿ 〈 Npm Search 〉 ✿⋟ ┈*\n› Nama : ${pkg.name}\n› Versi : ${pkg.version}\n› Link : ${pkg.links.npm}\n› Desk : ${pkg.description}`
}).join`\n\n`
m.reply(txt)
}
handler.help = ['npmsearch']
handler.tags = ['search']
handler.command = /^npm(js|search)?$/i
//maapin hyzer
export default handler