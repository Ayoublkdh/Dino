import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .shadowsky JITOSSA'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
   let res = `https://api.tiodevhost.my.id/api/photooxy/shadow-sky?text=${response[0]}`
  conn.sendFile(m.chat, res, 'carved.jpg', `> _JITOSSA LOGO_ \n\n www.instagram.com/ovmar_1`, m, false)
}
handler.help = ['shadowsky'].map(v => v + ' <text>')
handler.tags = ['maker'']
handler.command = /^(shadowsky)$/i

export default handler
