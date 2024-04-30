import axios from 'axios'
import cheerio from 'cheerio'
let handler = async (m, { text, command, usedPrefix }) => {
    if (!text) throw `*هاذا الأمر خاص بالبحث في موقع happymod*!\n\n*مثال الإستخدام*:\n${usedPrefix + command} minecraft \n\n\n *بعد أن يعطيك الروابط إختر واحد أكتب .get والصق الرابط*`
    let result = await happymod(text)
    let teks = result.map((v, i) => {
        return `
> *بحث جيطوسة*
*${i + 1}.* ${v.name}
❃ Link: ${v.link}
`.trim()
    }).filter(v => v).join('\n\n\n')
    await m.reply(teks)
}
handler.help = ['happymods'].map(v => v + ' <query>')
handler.tags = ['search']
handler.command = /^happymod$/i
export default handler

function happymod(query) {
    return new Promise((resolve, reject) => {
        axios.get(`https://www.happymod.com/search.html?q=${query}`).then(async tod => {
            const $ = cheerio.load(tod.data)
            let hasil = []
            $("div.pdt-app-box").each(function(c, d) {
                let name = $(d).find("a").text().trim();
                let icon = $(d).find("img.lazy").attr('data-original');
                let link = $(d).find("a").attr('href');
                let link2 = `https://www.happymod.com${link}`
                const Data = {
                    icon: icon,
                    name: name,
                    link: link2
                }
                hasil.push(Data)
            })
            resolve(hasil);
        }).catch(reject)
    });
}