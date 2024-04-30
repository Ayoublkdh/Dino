import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .flaming6 JITOSSA'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=0&backgroundColor=%23101820&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `> _JITOSSA LOGO_ \n\n www.instagram.com/ovmar_1`, m, false)
}
handler.help = ['flaming6'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming6)$/i

export default handler
