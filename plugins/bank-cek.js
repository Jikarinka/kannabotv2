let handler = async (m, { conn }) => {
  let user = global.db.data.users[m.sender];
  let tmb = "https://telegra.ph/file/0451b07945f7f9633b59b.jpg";
  const caption = `
▧「 *B A N K  U S E R* 」
│ 📛 *Name:* ${user.registered ? user.name : conn.getName(m.sender)}
│ 💳 *Atm:* ${user.atm > 0 ? "Level " + user.atm : "✖️"}
│ 🏛️ *Bank:* ${user.bank} 💲 / ${user.fullatm} 💲
│ 💹 *Money:* ${user.money} 💲
│ 🤖 *Robo:* ${user.robo > 0 ? "Level " + user.robo : "✖️"}
│ 🌟 *Status:* ${user.premiumTime > 0 ? "Premium" : "Free"}
│ 📑 *Registered:* ${user.registered ? "Yes" : "No"}
└──···
`.trim();
  //conn.sendButton(m.chat, caption, global.wm, 'https://telegra.ph/file/0451b07945f7f9633b59b.jpg', [`Inventory`, '.inv'],m)
  conn.reply(m.chat, caption, 0, {
    contextInfo: {
      mentionedJid: [m.sender],
      externalAdReply: {
        // title: `${htjava} C A S I N O`,
        // body: "KannaBOT",
        containsAutoReply: false,
        mediaType: 1,
        mediaUrl: tmb,
        renderLargerThumbnail: true,
        showAdAttribution: false,
        thumbnail: await (await fetch(tmb)).buffer(),
        thumbnailUrl: tmb,
      },
    },
  });
};
handler.help = ["bank"];
handler.tags = ["rpg"];
handler.command = /^(bank)$/i;

handler.register = false;
export default handler;
