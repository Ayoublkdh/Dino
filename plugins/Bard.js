import fetch from "node-fetch";
let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `*_✅مرحبا✌🏻، كيف يمكنني مساعدتك_*`;
	await m.reply(wait);
	let putra = await fetch(`https://aemt.me/bard?text=${text}`);
	let hasil = await putra.json();
	let txt = `${hasil.result}`.trim();
	conn.sendMessage(m.chat, {
		text: txt,
		contextInfo: {
			externalAdReply: {
				title: `👻KOBY-BOT-MD👻`,
				body: wm,
				sourceUrl: "",
				mediaType: 2,
				renderLargerThumbnail: true,
			},
		},
	});
};
handler.help = ["b0 *ᴛᴇxᴛ*"];
handler.tags = ["ai"];
handler.command = /^(b0)$/i;
export default handler;
