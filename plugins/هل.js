let handler = async (m, { command, text }) => m.reply(`
*💫 اسئل موب 💫*
  
*السؤال:* ${text}
*الاجابة:* ${['اه','ممكن','في الاغلب اه','ف الاغلب لا','لا','مستحيل'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['هل <التكملة ...>?']
handler.tags = ['fun']
handler.command = /^هل$/i
export default handler
