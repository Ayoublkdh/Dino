import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
   let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .flaming3 AYOUB'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `> _LEADER-DINO LOGO_ \n\n wa.me/212690943590`, m, false)
}
handler.help = ['flaming3'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming3)$/i

export default handler
