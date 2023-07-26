// mempermudah mengambil fungsi 
// by { instagram: @rasel.ganz }
import axios from 'axios'
import fetch from 'node-fetch'
import cheerio from 'cheerio'
import fs from 'fs'
import jimp from 'jimp'
import util from 'util'
import types from 'mime-types'
import chalk from 'chalk'
import path from 'path'
import tr from 'translate-google-api'
import tr2 from 'translate-google'
import FormData from 'form-data'
import { fileTypeFromBuffer } from 'file-type'
import { tmpdir } from 'os'
import { toAudio, toPTT } from './converter.js'
import { webp2mp4, webp2png } from './webp2mp4.js'
import uploadFile from './uploadFile.js'
import uploadImage from './uploadImage.js'

export default new class Function {
    // readMore
   readMore = String.fromCharCode(8206).repeat(4001)
   /* Delay
    * @param {Integer} time
    */
   delay = time => new Promise(res => setTimeout(res, time))
   
    /**/
   isNumber = x => typeof x === 'number' && !isNaN(x)
    
   /* URL Validator
    * @param {String} url
    */
   isUrl = (text) => {
      return text.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
   }
   /* Creat url tinyurl
    */
   tinyurl = async (url) => {
      return await(await axios.get(`https://tinyurl.com/api-create.php?url=${url}`)).data
   }
 
   toAudio = async (path) => {
      let buffer = await this.fetchBuffer(path)
      return await toAudio(buffer)
   }

   toPTT = async (path) => {
      let buffer = await this.fetchBuffer(path)
      return await toPTT(buffer)
   }
	
   webp2mp4 = async (path) => {
      let buffer = await this.fetchBuffer(path)
      return await webp2mp4(buffer)
   }

   webp2png = async (path) => {
      let buffer = await this.fetchBuffer(path)
      return await webp2png(buffer)
   }

   uploadFile = async (path) => {
      let buffer = await this.fetchBuffer(path)
      return await uploadFile(buffer)
   }

   uploadImage = async (path) => {
      let buffer = await this.fetchBuffer(path)
      return await uploadImage(buffer)
   }
   
   /* Resize image
    */
   resize = (path, uk1, uk2) => {
      return new Promise(async(resolve, reject) => {
         let buffer = await this.fetchBuffer(path)
         let a = await jimp.read(buffer)
         let b = await a.resize(uk1 || 300, uk2 || 300).getBufferAsync(jimp.MIME_JPEG)
         resolve(b)
      })
   }
   
   /* Translate text
    * 
    */
   translate = async (text, from, to) => {
      let res = await tr(text, { from: from, to: to }).catch(async _=> [await tr2(text, { from: from, to: to })] )
      return res[0]
   }
   
   /* Search content github user 
    * 
    */
   fetchGithub = async (nameRepoBranchFile, options = {}) => {
      let res 
      try {
	res = await fetch(`https://raw.githubusercontent.com/${nameRepoBranchFile}`)
      } catch {
	res = 'Not Found'
      }
      if (options && options.json) {
         try {
           res = await res.json()	    
	 } catch {
           let anu = await res.text()
	   res = res.split('\n')
         }			
      } else if (options && options.buffer) {		 
	res = await res.buffer()
      }
      return res
   }
   
   /* Fetching JSON
    * @param {String} url
    * @param {Object} head
    */
   fetchJson = async (url, head = {}) => {
      let result = await (await fetch(url, {
         headers: head
      })).json()
      return result
   }

   /* Converting to Buffer
    * @param {String|Buffer} file
    */
   fetchBuffer = async (PATH) => {
      return new Promise(async (resolve, reject) => {
         let data = Buffer.isBuffer(PATH) ? PATH : PATH instanceof ArrayBuffer ? PATH.toBuffer() : /^data:.*?\/.*?;base64,/i.test(PATH) ? Buffer.from(PATH.split`,`[1], 'base64') : /^https?:\/\//.test(PATH) ? await (await fetch(PATH)).buffer() : fs.existsSync(PATH) ? (fs.readFileSync(PATH)) : typeof PATH === 'string' ? PATH : Buffer.alloc(0)  
	 resolve(data)
      })
   }

   /* Text Style
    * @param {String} type
    * @param {String} text
    */
   texted = (type, text) => {
      switch (type) {
         case 'bold':
            return '*' + text + '*'
            break
         case 'italic':
            return '_' + text + '_'
            break
         case 'monospace':
            return '```' + text + '```'
      }
   }
 
   pluginHelp = (m) => {
      return plugins[m.plugin].help[0].split(' ')[0]
   }
	
   /* Example Format
    * @param {String} isPrefix
    * @param {String} command
    * @param {String} args
    */
   example = (isPrefix, command, args) => {
      let cmd = command.plugin?.endsWith('js') ? this.pluginHelp(command) : command
      let tutor = this.texted('italic', `Balas pesan ini jika tidak ingin mengetik ${this.texted('bold', isPrefix + cmd)} lagi!`)
      return `[ ${this.texted('bold', cmd.toUpperCase())} ]\n\n${'' || '•'} ${this.texted('bold', 'Example')} : ${isPrefix + cmd} ${args ? args + '\n\n' + tutor : ''}`
   }

   exampleNew = (isPrefix, command, args) => {
      let cmd = command.plugin?.endsWith('js') ? this.pluginHelp(command) : command
      let tutor = this.texted('italic', `Balas pesan ini jika tidak ingin mengetik ${this.texted('bold', isPrefix + cmd)} lagi!`)
      return `[ ${this.texted('bold', cmd.toUpperCase())} ]\n\n${args ? args : ''}`
   }
   
   /* Fix Instagram URL
    * @param {String} url
    */
   igFixed = (url) => {
      let count = url.split('/')
      if (count.length == 7) {
         let username = count[3]
         let destruct = this.removeItem(count, username)
         return destruct.map(v => v).join('/')
      } else return url
   }

   /* Fix Tiktok URL
    * @param {String} url
    */
   ttFixed = (url) => {
      if (!url.match(/(tiktok.com\/t\/)/g)) return url
      let id = url.split('/t/')[1]
      return 'https://vm.tiktok.com/' + id
   }

   /* Random Filename
    * @param {String} extension
    */
   filename = (extension) => {
      return `${Math.floor(Math.random() * 10000)}.${extension}`
   }

   /* Create UUID */
   uuid = () => {
      var dt = new Date().getTime()
      var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
         var r = (dt + Math.random() * 16) % 16 | 0;
         var y = Math.floor(dt / 16);
         return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
      });
      return uuid
   }

   /* Random Element From Array
    * @param {Array} list
    */
   random = (list) => {
      return list[Math.floor(Math.random() * list.length)]
   }

   /* Format Number \w Dot
    * @param {Integer} integer
    */
   formatNumber = (integer) => {
      let numb = parseInt(integer)
      return Number(numb).toLocaleString().replace(/,/g, '.')
   }

   /* To Readable Size
    * @param {Integer} size
    */
   formatSize = (size) => {
      function round(value, precision) {
         var multiplier = Math.pow(10, precision || 0)
         return Math.round(value * multiplier) / multiplier
      }
      var megaByte = 1024 * 1024
      var gigaByte = 1024 * megaByte
      var teraByte = 1024 * gigaByte
      if (size < 1024) {
         return size + ' B'
      } else if (size < megaByte) {
         return round(size / 1024, 1) + ' KB'
      } else if (size < gigaByte) {
         return round(size / megaByte, 1) + ' MB'
      } else if (size < teraByte) {
         return round(size / gigaByte, 1) + ' GB'
      } else {
         return round(size / teraByte, 1) + ' TB'
      }
      return ''
   }

   /* Fix Instagram URL
    * @param {String|Integer} str
    */
   getSize = async (str) => {
      if (!isNaN(str)) return this.formatSize(str)
      let header = await (await axios.get(str)).headers
      return this.formatSize(header['content-length'])
   }

   /* Generate Color
    * @param {String} text
    * @param {String} color
    */
   color = (text, color) => {
      return chalk.keyword(color || 'green').bold(text)
   }

   /* Get Message Type
    * @param {String|Object} data
    */
   mtype = (data) => {
      function replaceAll(str) {
         let res = str.replace(new RegExp('```', 'g'), '')
            .replace(new RegExp('_', 'g'), '')
            .replace(new RegExp(/[*]/, 'g'), '')
         return res
      }
      let type = (typeof data.text !== 'object') ? replaceAll(data.text) : ''
      return type
   }

   /* Size Limitation
    * @param {String} str
    * @param {Integer} max
    */
   sizeLimit = async (str, max, url) => {
      let data
      if (str.match('G') || str.match('GB') || str.match('T') || str.match('TB')) return data = {
         over: true,
         say: `File size above average ${this.texted('bold', `${max} MB`)} download it yourself${url ? `, use link :\n${await this.tinyurl(url)}` : ''}`
      }
      if (str.match('M') || str.match('MB')) {
         let first = str.replace(/MB|M|G|T/g, '').trim()
         if (isNaN(first)) return data = {
            over: true,
            say: `File size above average ${this.texted('bold', `${max} MB`)} download it yourself${url ? `, use link :\n${await this.tinyurl(url)}` : ''}`
         }
         if (first > max) return data = {
            over: true,
            say: `File size above average ${this.texted('bold', `${max} MB`)} download it yourself${url ? `, use link :\n${await this.tinyurl(url)}` : ''}`
         }
         return data = {
            over: false,
            say: `Wait for the file to be sent it may take a few minutes!`
         }
      } else {
         return data = {
            over: false,
            say: `Wait for the file to be sent it may take a few minutes!`
         }
      }
   }

   /* Link Extractor
    * @param {String} text
    */
   generateLink = (text) => {
      let regex = /(https?:\/\/(?:www\.|(?!www))[^\s\.]+\.[^\s]{2,}|www\.[^\s]+\.[^\s]{2,})/gi;
      return text.match(regex)
   }

   /* File Reloader
    * @param {String} file
    */
   reload = (file) => {
      fs.watchFile(file, () => {
        fs.unwatchFile(file)
        console.log(chalk.redBright(`Update '${file}'`))
        import(`${file}?update=${Date.now()}`)
      })
   }

   /* Print JSON
    * @param {Object} obj
    */
   jsonFormat = (obj) => {
      return util.format(obj)
   }

   /* Ucword Format
    * @param {String} str
    */
   ucword = (str) => {
      return (str + '').replace(/^([a-z])|\s+([a-z])/g, function($1) {
         return $1.toUpperCase();
      })
   }

   /* Next Level Array Concat 
    * @param {Array} arr
    */
   arrayJoin = (arr) => {
      var construct = []
      for (var i = 0; i < arr.length; i++) construct = construct.concat(arr[i])
      return construct
   }

   /* Remove Element Form Array
    * @param {Array} arr
    * @param {String} value
    */
   removeItem = (arr, value) => {
      let index = arr.indexOf(value)
      if (index > -1) arr.splice(index, 1)
      return arr
   }

   /* Socmed Link Validator
    * @param {String} url
    */
   socmed = (url) => {
      const regex = [
         /^(?:https?:\/\/(web\.|www\.|m\.)?(facebook|fb)\.(com|watch)\S+)?$/,
         /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:tv\/|p\/|reel\/)(?:\S+)?$/,
         /^(?:https?:\/\/)?(?:www\.)?(?:instagram\.com\/)(?:stories\/)(?:\S+)?$/,
         /^(?:https?:\/\/)?(?:www\.)?(?:mediafire\.com\/)(?:\S+)?$/,
         /pin(?:terest)?(?:\.it|\.com)/,
         /^(?:https?:\/\/)?(?:www\.|vt\.|vm\.|t\.)?(?:tiktok\.com\/)(?:\S+)?$/,
         /http(?:s)?:\/\/(?:www\.|mobile\.)?twitter\.com\/([a-zA-Z0-9_]+)/,
         /^(?:https?:\/\/)?(?:www\.|m\.|music\.)?youtu\.?be(?:\.com)?\/?.*(?:watch|embed)?(?:.*v=|v\/|\/)([\w\-_]+)\&?/,
         /^(?:https?:\/\/)?(?:podcasts\.)?(?:google\.com\/)(?:feed\/)(?:\S+)?$/
      ]
      return regex.some(v => url.match(v))
   }

   /* Did You Mean ??
    * @param {String} string
    * @param {Array} array
    * @param {String|Object} options
    */
   matcher = (string, array, options) => {
      function levenshtein(value, other, insensitive) {
         var cache = []
         var codes = []
         var length
         var lengthOther
         var code
         var result
         var distance
         var distanceOther
         var index
         var indexOther

         if (value === other) {
            return 0
         }

         length = value.length
         lengthOther = other.length

         if (length === 0) {
            return lengthOther
         }

         if (lengthOther === 0) {
            return length
         }

         if (insensitive) {
            value = value.toLowerCase()
            other = other.toLowerCase()
         }

         index = 0

         while (index < length) {
            codes[index] = value.charCodeAt(index)
            cache[index] = ++index
         }

         indexOther = 0

         while (indexOther < lengthOther) {
            code = other.charCodeAt(indexOther)
            result = distance = indexOther++
            index = -1

            while (++index < length) {
               distanceOther = code === codes[index] ? distance : distance + 1
               distance = cache[index]
               cache[index] = result =
                  distance > result ?
                  distanceOther > result ?
                  result + 1 :
                  distanceOther :
                  distanceOther > distance ?
                  distance + 1 :
                  distanceOther
            }
         }
         return result
      }

      function similarity(a, b, options) {
         var left = a || ''
         var right = b || ''
         var insensitive = !(options || {}).sensitive
         var longest = Math.max(left.length, right.length)
         return ((longest === 0 ?
            1 :
            (longest - levenshtein(left, right, insensitive)) / longest) * 100).toFixed(1)
      }

      let data = []
      let isArray = array.constructor.name == 'Array' ? array : [array] || []
      isArray.map(v => data.push({
         string: v,
         accuracy: similarity(string, v)
      }))
      return data
   }

   /* Time Format
    * @param {Integer} ms
    */
   timeFormat = (ms) => {
      let h = Math.floor(ms / 3600000)
      let m = Math.floor(ms / 60000) % 60
      let s = Math.floor(ms / 1000) % 60
      return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
   }

   /* Millisecond to time string
    * @param {Integer} ms
    */
   toTime = (ms) => {
      // let milliseconds = ms % 1000
      let seconds = Math.floor((ms / 1000) % 60)
      let minutes = Math.floor((ms / (60 * 1000)) % 60)
      let hours = Math.floor((ms / (60 * 60 * 1000)) % 24)
      let days = Math.floor((ms / (24 * 60 * 60 * 1000)))
      return (
          (days ? `${days} day(s) ` : '') +
          (hours ? `${hours} hour(s) ` : '') +
          (minutes ? `${minutes} minute(s) ` : '') +
          (seconds ? `${seconds} second(s)` : '') // +
	  // (milliseconds ? `${milliseconds} millisecond(s)` : '')
      ).trim()
   }
}