/**
Ini wm ku jika dihapus mandul kalian😂🔥
by: Tio 
**/

import axios from "axios"

let handler = async (m, {text, usedPrefix, command}) => {
if (!text) return m.reply('Masukan url')
try {
await m.react('⌛')
let { data } = await axios.post(`https://v3.igdownloader.app/api/ajaxSearch?recaptchaToken=null&q=${text}&t=media&lang=en`)
let $ = cheerio.load(data.data)
let result = $('div >  div > a').attr('href')
await conn.sendFile(m.chat, result, '', 'Instagram: '+text, m)
await m.react('✅')
} catch (e) {

}
}
handler.help = ['instagram3']
handler.tags = ['downloader']
handler.limit = true
handler.command = /^(instagram3)$/i

export default handler
