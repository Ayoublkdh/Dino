//import db from '../lib/database.js'

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0]
    else who = m.chat
    if (!who) throw '✳️ منشن المتخدم'
    let txt = text.replace('@' + who.split`@`[0], '').trim()
    if (!txt) throw '✳️ أدخل المبلغ * الحد * الذي تريد إضافته'
  if (isNaN(txt)) throw ' 🔢 مجرد ارقام'
  let xp = parseInt(txt)
  let exp = xp
    
    if (exp < 1) throw '✳️ الحد الأدنى  *1*'
    let users = global.db.data.users
   users[who].exp += xp

    await m.reply(`≡ *🔖XP
إضافة*
┌──────────────
▢ *Total:* ${xp}
└──────────────`)
   conn.fakeReply(m.chat, `▢ 
يحصل \n\n *+${xp}* الحد`, who, m.text)
}

handler.help = ['addxp <@user>']
handler.tags = ['econ']
handler.command = ['addxp', 'اضف-اكسبي'] 
handler.rowner = true

export default handler
