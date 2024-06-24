عن//ميجو يحبكم 🤭❤️
//اهينك اذا تغير المصدر
//قناه المصدر
//https://whatsapp.com/channel/0029VaRygQcATRSk29RI4P1x

import { googleImage } from '@bochilteam/scraper'
let handler = async (m, { conn, text, usedPrefix, command }) => {
if (!text) throw `️ *${usedPrefix + command} سوكونا*`
const prohibited = ['بنات', 'بز', 'سكس','صدر','نودز']
if (prohibited.some(word => m.text.toLowerCase().includes(word))) return m.reply('لا يمكن 😂')      
try {
const res = await googleImage(text)
let image = res.getRandom()
let link = image
conn.sendButton(m.chat, `الصوره المطلوبه : ${text}`, wm, link, [['صوره أخرى', `/صوره ${text}`]], null, null, m,)

} catch (e) {
console.log(`error`)
console.log(e)
handler.money = false
}}
handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(صوره|صورة|img)$/i
handler.money = false
export default handler
