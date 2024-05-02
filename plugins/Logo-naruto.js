//المصدر https://whatsapp.com/channel/0029VaL2bnW0rGiPZq8B5S2M


let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[❗] هذا الامر يقوم بصناعة لوجو ناروتو بأي اسم تريده\n\n *مـثــال* :\n*${usedPrefix + command}* AYOUB`

  if (!text) throw too
  let lr = (`https://shizoapi.onrender.com/api/photooxy/naruto?text=${encodeURIComponent(text)}&apikey=shizo`)
  conn.sendFile(m.chat, lr, 'LEADER.png', `تم بواسطه ✅
  BOT⚡LEADER`, m)
}
handler.help = ['نارو']
handler.tags = ['maker']
handler.command = ['نارو']

export default handler
