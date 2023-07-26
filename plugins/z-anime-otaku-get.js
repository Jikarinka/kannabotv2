let handler = async (m, { conn, text }) => {

let x = await get(text)
    console.log(x)
let xx = x.info
let row = []
let eps = x.episode
for (let i of eps ) {
    row.push({
      title: i.episode,
      description: null,
      rowId: '!otaku-dl ' + i.id
    })
  }
  conn.sendListM2(m.chat,  xx.judul, `Rating : ${xx.skor}\nEpisode : ${xx.episode}\nStudio : ${xx.studio}\nGenre : ${xx.genre[0]}\nSinopsis : ${x.sinopsis}`, wm, '🍁 Tap di sini kak 🍁', null, row, m)                


}
handler.command = ['otaku-get'] 
export default handler

import axios from 'axios'
import cheerio from 'cheerio'
import https from 'https'
import jsdom from 'jsdom'
let { JSDOM } = jsdom

let virtualConsole = new jsdom.VirtualConsole()
virtualConsole.on("error", () => {}) // Ignore "Could not parse CSS stylesheet" error
                                     // https://stackoverflow.com/a/69958999
let agent = new https.Agent({
  rejectUnauthorized: false
})                                   // Ignore "Uncaught AxiosError: certificate has expired"
                                     // https://stackoverflow.com/a/62212128

class InvalidArguments extends TypeError {
  constructor(message) {
    super(message)
    this.name = "InvalidArguments"
  }
}
const isString = s => typeof s === "string"
const isNumber = n => typeof n === "number"
const isBoolean = b => typeof b === "boolean"


async function get(id) {
  if(!isString(id)) throw new InvalidArguments(`The "id" argument must be of type string. Received ${typeof id}`)

  let { data, request } = await axios(`https://otakudesu.is/anime/${id}`)
  if(request.res.responseUrl == "https://otakudesu.is/") throw new Error("Anime not found!")

  let $ = cheerio.load(data)
  let { document } = new JSDOM(data, { virtualConsole }).window
  let result = {
    [Symbol("creator")]: "Restu"
  }

  result.thumb = $("img.attachment-post-thumbnail").attr("src")
  result.info = {
    judul: document.querySelectorAll("div.infozingle > p > span")[0].innerHTML.split(": ")[1],
    judul_jepang: document.querySelectorAll("div.infozingle > p > span")[1].innerHTML.split(": ")[1],
    skor: document.querySelectorAll("div.infozingle > p > span")[2].innerHTML.split(": ")[1],
    produser: document.querySelectorAll("div.infozingle > p > span")[3].innerHTML.split(": ")[1].split(", "),
    episode: document.querySelectorAll("div.infozingle > p > span")[6].innerHTML.split(": ")[1],
    tanggal_rilis: document.querySelectorAll("div.infozingle > p > span")[8].innerHTML.split(": ")[1],
    studio: document.querySelectorAll("div.infozingle > p > span")[9].innerHTML.split(": ")[1],
    genre: document.querySelectorAll("div.infozingle > p > span")[10].innerHTML.split(": ")[1].split(", ").map(v => v.split(">")[1].split("<")[0])
  }
  result.sinopsis = $("div.sinopc").text()
  result.episode = []
  document.querySelectorAll("div.episodelist > ul > li").forEach(function(v) {
    let obj = {}
    let _$ = cheerio.load(v.innerHTML)
    obj.episode = _$("span > a").text()
    obj.url = _$("span > a").attr("href")
    obj.id = obj.url.split("/").at(-2)
    result.episode.push(obj)
  })
  result.episode.reverse()

  return result
}