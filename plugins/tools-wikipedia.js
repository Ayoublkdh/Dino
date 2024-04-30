import axios from 'axios'
import cheerio from 'cheerio'


let handler = async (m, { text }) => {
	if (!text) throw `البحث في ويكيبيديا سلسلة المعلومات الشهري قم بالبحث بعد كتابة الأمر كالتالي \n\n.wikipedia فلسطين ` 
	
    try {
	const link =  await axios.get(`https://es.wikipedia.org/wiki/${text}`)
	const $ = cheerio.load(link.data)
	let wik = $('#firstHeading').text().trim()
	let resulw = $('#mw-content-text > div.mw-parser-output').find('p').text().trim()
	m.reply(`▢ *J I T O S S A*

‣ Buscado : ${wik}

${resulw}`)
} catch (e) {
  m.reply('لاوجود لهاذا البحة في الموقع أسفة  ')
}
}
handler.help = ['wikipedia']
handler.tags = ['search']
handler.command = ['wiki','wikipedia'] 


export default handler
