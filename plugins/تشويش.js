import jimp from 'jimp'

let handler = async (m, { conn, text }) => {
	let image = m.message?.imageMessage
		? await m.download()
			: /image/.test(m.quoted?.mediaType)
		? await m.quoted.download()
			: m.mentionedJid?.[0]
		? await conn.profilePictureUrl(m.mentionedJid[0], 'image')
			: await conn.profilePictureUrl(m.quoted?.sender || m.sender, 'image')
	if (!image) throw `تعذر جلب الصورة المطلوبة`
	let level = text || '18', img = await jimp.read(image)
	img.blur(isNaN(level) ? 18 : parseInt(level))
	img.getBuffer('image/jpeg', (err, buffer) => {
		if (err) throw err?.message || `تعذر تعتيم الصورة`
		m.reply(buffer)
	})
}
handler.help = ["تشويش"]
handler.tags = ["image-edit"];
handler.command = /^(تشويش)$/i

export default handler
