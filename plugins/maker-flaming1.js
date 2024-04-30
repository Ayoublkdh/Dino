
import  fetch from 'node-fetch'
let handler = async (m, { conn, args }) => {
  let response = args.join(' ').split('|')
  if (!args[0]) throw '*_أكتب نص مع هاذا الأمر لإنشاء لوغو_*\n\n *مثال الإستخدام*\n .flaming1 JITOSSA'
  m.reply('*_جارى إنشاء لوغو لك قريبا ..._*')
  let res = `https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&script=fluffy-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `_تابعني على إنستجرام 🧚🏼‍♀️_ \n www.instagram.com/ovmar_1`, m, false)
}
handler.help = ['flaming1'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming1|fla)$/i
export default handler
