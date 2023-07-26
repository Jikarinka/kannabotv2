/**
 * Jangan Di Hapus!!
 * 
 * Saya lihat-lihat semakin saya buka jasa -
 * Bikin fitur kok semakin banyak pula yg main
 * nyolong terus dijual gitu hehe kerenðŸ¥³
 *
 * Inget lah woy hargai pembuatnya, kalian enak tinggal
 * pake jasa terus dijual lagi dengan harga lebih gitu mah enak cuy
 * lah saya selaku pembuat script udah capek-capek ngoding
 * eh kalian malah tinggal nerima hasil jual ulang wkwkwk gak punya malu :'v
 *
 * Ini script terbaru semoga aja tidak ada yg nyebar lagi!
 * dan untuk yg nyebar dan dijual lagi semoga allah membalas perbuatan kalian amiin ðŸ¤²
 * 
 * Ingin bikin fitur tapi tidak bisa coding?
 * hubungi:
 * WA: 081320170984
 * WA2: 085157436653
 * IG: aguzfamilia
  * hubungi:
 * WA:6285334930628
 * IG: kontol_elite
 * 
 */
const Apikey = "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";
import {
	Configuration,
	OpenAIApi
} from 'openai';

const config = new Configuration({
	apiKey: Apikey
});

const openai = new OpenAIApi(config);

export async function before(m) {
	let setting = global.db.data.settings[this.user.jid];
	let isAi = m.text.toLowerCase().split(' ')[0] || '';
	let text = m.text.slice(isAi.length + 1, m.text.length);
	if (!setting.chatAi || !/ai/.test(isAi)) return;
	try {
		let name = await this.getName(m.sender);
		const res = await openai.createCompletion({
			model: "text-davinci-003",
			prompt: text,
			temperature: 0.6,
			max_tokens: 256,
			top_p: 1,
			frequency_penalty: 0,
			presence_penalty: 0.6,
			stop: [name, "Ai:"],
		});
		if (res.status !== 200) throw res.statusText;
		 await this.reply(m.chat, res?.data?.choices[0]?.text, m, { render: true, thum: 'https://telegra.ph/file/2d23255b74abbc628997c.jpg', source: sgh, iklan: true, body: 'K A N N A  B O T  A I' })
	} catch (e) {
		console.error(e);
	}
}