import request from 'request'
import axios from 'axios'
import cheerio from 'cheerio'
import {
    tiktokdl,
    tiktokdlv2,
    tiktokdlv3
}
from '@bochilteam/scraper'
import fetch from 'node-fetch'
import fs from 'fs'
async function tiktokna2(link) {
    const url = 'https://tiktokdownload.online/abc?url=dl';
    const headers = {
        'User-Agent': 'Mozilla/5.0 (BlackBerry; U; BlackBerry 9900; en) AppleWebKit/534.11+ (KHTML, like Gecko) Version/7.0.0.585 Mobile Safari/534.11+',
        'Accept-Language': 'en-US,en;q=0.9',
        'Referer': 'https://tiktokdownload.online/id',
        'Origin': 'https://tiktokdownload.online',
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
        'hx-current-url': 'https://tiktokdownload.online/id',
        'hx-request': true,
        'hx-target': 'target',
        'hx-trigger': '_gcaptcha_pt',
    };
    const jar = axios.default.create({
        withCredentials: true,
    });
    try {
        const res1 = await jar.get('https://tiktokdownload.online/id', {
            headers,
        });
        const token = /tt:'(.*?)'/.exec(res1.data)[1];
        const linkna = encodeURIComponent(`id=${link}`);
        const data = `id=${linkna}&locale=id&tt=${token}`;
        const res2 = await jar.post(url, data, {
            headers,
        });
        const $ = cheerio.load(res2.data);
        const resultOverlay = $('div.result_overlay');
        const title = resultOverlay.find('h2')
            .text()
            .trim();
        const caption = resultOverlay.find('.maintext')
            .text()
            .trim();
        const nowm = resultOverlay.find('a.download_link.without_watermark')
            .attr('href');
        const nowm2 = resultOverlay.find('a.buy_ios_app')
            .attr('href');
        const mp3 = resultOverlay.find('a.download_link.music')
            .attr('href');
        return {
            title,
            caption,
            nowm,
            nowm2,
            mp3,
        };
    }
    catch (error) {
        //awalnya throw skrng console.log
        console.log(error);
    }
}
let handler = async (m, {
    Func,
    conn,
    args,
    usedPrefix,
    command
}) => {
    if (!args[0]) throw Func.example(usedPrefix, m, "Balas Pesan Ini menggunakan LINK TIKTOK\nContohnya: https://vt.tiktok.com/ZSRTCxBsv/")
    // let res = await fetch('https://api.waifu.pics/sfw/waifu')
    // if (!res.ok) throw await res.text()
    // let json = await res.json()
    // if (!json.url) throw 'Error!'
    await conn.reply(m.chat, "ᴅᴏᴡɴʟᴏᴀᴅɪɴɢ ᴍᴇᴅɪᴀ ꜰʀᴏᴍ ᴛɪᴋᴛᴏᴋ", m, {
        render: true,
        thum: 'https://telegra.ph/file/3395ab75ac59384d04c76.jpg'
    })
    const result = await tiktokna2(args[0])
        .catch(async _ => await tiktokdl(args[0]))
        .catch(async _ => await tiktokdlv2(args[0]))
        .catch(async _ => await tiktokdlv3(args[0]))
    let nickname = result?.title || result?.author?.nickname
    let description = result?.caption || result?.description
    const url = result?.nowm || result?.nowm2 || result?.video?.no_watermark2 || result?.video?.no_watermark || 'https://tikcdn.net' + result?.video?.no_watermark_raw || result?.video?.no_watermark_hd
    if (!url) throw 'Can\'t download video!'
    // conn.sendButton(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ɴᴏ ᴡᴍ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ: ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${description}` : ''}`, await (await fetch(url)).buffer(),
    //     [
    //         ['ᴅᴏɴᴀꜱɪ', `.donasi`],
    //         ['ᴀᴜᴅɪᴏ', `.tiktokaudio ${args}`]
    //     ], m).then(_=> conn.reply(m.chat, Func.example(usedPrefix, 'tiktok1', "Balas Pesan Ini menggunakan LINK TIKTOK\nContohnya: https://vt.tiktok.com/ZSRTCxBsv/")))
       conn.sendFile(m.chat, await (await fetch(url)).buffer(), nickname + '.mp4',  `${htki} TIKTOK ${htka}\n\n${htjava}Title: ${nickname}\n${htjava}Type: No Watermark\n${htjava}Description: ${description}`.trim(), m).then(_=> conn.reply(m.chat, Func.example(usedPrefix, 'tt', "Balas Pesan Ini menggunakan LINK TIKTOK\nContohnya: https://vt.tiktok.com/ZSRTCxBsv/")))
}
handler.help = ['tiktok', 'tiktok', 'tiktokdl', 'tt'].map(v => v + ' <url>')
handler.tags = ['downloader']
//handler.command = /^tt(tik(tok)?(tok)?(dl)?)$/i
handler.command = /^(tiktok|tt)$/i
export default handler


    /*
         conn.sendHydrated(m.chat, `${htki} ᴛɪᴋᴛᴏᴋ ɴᴏ ᴡᴍ ${htka}`, `➔ ɴɪᴄᴋɴᴀᴍᴇ: ${nickname}${description ? `\n➔ ᴅᴇsᴄʀɪᴘᴛɪᴏɴ: ${description}` : ''}`, await (await fetch(url)).buffer(),
            url, '🌎 s ᴏ ᴜ ʀ ᴄ ᴇ', null, null, [
            ['ᴅᴏɴᴀꜱɪ', `.donasi`],
            ['ᴀᴜᴅɪᴏ', `.tiktokaudio ${args}`],
            [null, null]], m).then(_=> conn.reply(m.chat, Func.example(usedPrefix, 'tiktok1', "Balas Pesan Ini menggunakan LINK TIKTOK\nContohnya: https://vt.tiktok.com/ZSRTCxBsv/")))
    */