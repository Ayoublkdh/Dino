import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
    let wm = global.wm

    if (!text) throw `*هاذا الأمر يقوم بتوليد صور أنمي بالكتابة فقط قم بالإبداع* \n\n *مثال الإستخدام*\n.leaderdif girl with dinosaur`
    await m.reply(wait)

    await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '👌' } }, { messageId: m.key.id })
    try {
        let url = `https://aemt.me/v5/text2img?text=${text}`

        await conn.sendFile(m.chat, await (await fetch(url)).buffer(), 'fubuki.jpg', '*للتواصل عبر واتساب ❤️* \n .wa.me/212690943590', m)
        m.react(done)

    } catch (e) {
        console.log(e)
      //  conn.reply(eror)
    }
}

handler.help = ['leaderdif']
handler.tags = ['drawing']
handler.command = /^(leaderdif)$/i

handler.premium = false
handler.limit = false
handler.register = false

export default handler
