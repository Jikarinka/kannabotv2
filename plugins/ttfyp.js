import fetch from 'node-fetch'
import {
	tiktokfyp
} from '@bochilteam/scraper'
let handler = async (m, {
	conn,
	text,
	args,
	command
}) => {
	let data = await tiktokfyp()
	if (command == 'fyp') {
		let listSections = [],
			tmp = [...data].map((i) => {
				listSections.push({
					title: i.desc || 'Tidak di ketahui',
					rows: [{
						title: 'AUTHOR\n',
						description: `Nickname : ${i.author.nickname}\nPrivate Account : ${i.author.privateAccount ? 'Ya' : 'Tidak'}\nVerified : ${i.author.verified ? 'Ya' : 'Tidak'}\n\nAUTHOR STATS\n\nDigg Count : ${i.authorStats.diggCount}\nFollower Count : ${i.authorStats.followerCount}\nFollowing Count : ${i.authorStats.followingCount}\nHeart : ${i.authorStats.heart}\nVideo Count : ${i.authorStats.videoCount}`,
						rowId: ''
					}, {
						title: 'AUDIO\n',
						description: 'Title : ' + i.music.title + '\nAuthor Name : ' + i.music.authorName + `\nDuration : ${i.music.duration}\nOriginal : ${i.music.original ? 'Ya' : 'Tidak'}`,
						rowId: '!get-tiktok-audio ' + i.music.playUrl
					}, {
						title: 'VIDEO\n',
						description: 'Definition : ' + i.video.definition + '\nDuration : ' + i.video.duration + '\nRatio : ' + i.video.ratio + `\n\nVIDEO STATS\n\nComment Count : ${i.stats.commentCount}\nPlay Count : ${i.stats.playCount}\nShare Count : ${i.stats.shareCount}`,
						rowId: '!get-tiktok-video ' + i.video.downloadAddr
					}, ],
				});
			});
		const listMessage = {
			text: 'TIKTOK FYP\n\nMencari random video fyp di tiktok\n',
			footer: 'Klik di bawah untuk infonya',
			title: null,
			buttonText: 'Click Here',
			sections: listSections,
		};
		return await conn.sendMessage(m.chat, listMessage, {
			quoted: m
		});
	}
	if (command == 'get-tiktok-video') {
		try {
			conn.sendFile(m.chat, args[0], '', null, m)
		}
		catch (e) {
			m.reply('Error saat mendapatkan video')
		}
	}
	if (command == 'get-tiktok-audio') {
		await conn.sendMessage(m.chat, {
			document: {
				url: args[0]
			},
			mimetype: 'audio/mpeg',
			fileName: `tiktok-fyp.mp3`
		}, {
			quoted: m
		})
	}
}
handler.help = ['fyp']
handler.tags = ['internet']
handler.command = ['fyp', 'get-tiktok-audio', 'get-tiktok-video']
handler.owner = false

export default handler