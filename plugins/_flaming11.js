import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .butterfly LEADER'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://api.tiodevhost.my.id/api/photooxy/butterfly?text=${response[0]}`
  conn.sendFile(m.chat, res, 'butterfly.jpg', `> _LEADER-DINO LOGO_ \n\n wa.me/212690943590`, m, false)
}
handler.help = ['butterfly'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(butterfly)$/i

export default handler
