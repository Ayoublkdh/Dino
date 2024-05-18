import fetch from "node-fetch";
let handler = async (m, { text, usedPrefix, command }) => {
	if (!text) throw `*_✅مرحبا أنا مريم، كيف يمكنني مساعدتك_*`;
	await m.reply(wait);
	let putra = await fetch(`https://aemt.me/bard?text=${text}`);
	let hasil = await putra.json();
	let txt = `${hasil.result}`.trim();
	conn.sendMessage(m.chat, {
		text: txt,
		contextInfo: {
			externalAdReply: {
				title: `🦖LEADER-DINO BOT🦖😎`,
				body: wm,
				sourceUrl: "",
				mediaType: 2,
				renderLargerThumbnail: true,
			},
		},
	});
};
handler.help = ["مريم *ᴛᴇxᴛ*"];
handler.tags = ["ai"];
handler.command = /^(مريم)$/i;
export default handler;
