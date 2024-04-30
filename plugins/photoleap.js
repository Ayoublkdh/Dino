import axios from "axios"

let handler = async (m, { conn, args, usedPrefix, command }) => {
    let text
    if (args.length >= 1) {
        text = args.slice(0).join(" ")
    } else if (m.quoted && m.quoted.text) {
        text = m.quoted.text
    } else throw "الرجاء إدخال النص لتوليد الصورة التي تريد \n\nمثال الإستخدام\n.photoleao WOMEN WITH CAT"

    await m.reply(wait)

    try {
        let data = await textToImage(text)
        if (data) {
            await conn.sendFile(m.chat, data.result_url, '', `صورة لـ ${text} \n www.instagram.com/ovmar_1`, m, false, { mentions: [m.sender] });
        }
    } catch (e) {
        await m.reply('حدث خطأ أثناء معالجة الطلب')
    }
}

handler.help = ["photoleap"]
handler.tags = ["drawing"];
handler.command = /^(photoleap)$/i

export default handler

/* خط جديد */
async function textToImage(text) {
    try {
        const { data } = await axios.get("https://tti.photoleapapp.com/api/v1/generate?prompt=" + text)
        return data;
    } catch (err) {
        return null;
    }
}