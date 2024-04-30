
import fetch from "node-fetch"

let handler = async (m, { conn, text, usedPrefix, command }) => {
        let wm = global.me
        if (!text) throw `*هاذا الأمر يقوم بتوليد صور أنمي*\n\nمثال للإستخدام\n${ usedPrefix + command } hd picture dinosaur with boy`
        await m.reply(waittt)
        await conn.relayMessage(m.chat, { reactionMessage: { key: m.key, text: '⌛'  }}, { messageId: m.key.id })
        try {
        let ff = await fetch(`https://api.neoxr.eu/api/waifudiff?q=${text}`)
        let anu = await ff.json()
        await conn.sendFile(m.chat, anu.data.url, 'LEADER.jpg', '▢ *🥰 للتواصل على واتساب*\n\n _*wa.me/212690943590*_', m)
        m.react('🎐')
      } catch (e) {
        console.log(e)
        m.reply(eror)
      }
    }

handler.help = ['animediff']
handler.tags = ['drawing']
handler.command = /^(animediff)$/i

export default handler
