import fetch from 'node-fetch'

let handler = async (m, {
    command,
    usedPrefix,
    conn,
    text,
    args
}) => {

    await m.reply(wait)
    try {
        const imgx = await Couple();

        if (imgx) {
            const male = imgx.male;
            const female = imgx.female;
            const tag = `@${m.sender.split('@')[0]}`;

            await conn.sendMessage(m.chat, {
                image: {
                    url: male
                },
                caption: `ها هي صورة *الرجل*\nالطلب من قبل: \n _*instagram.com/ovmar_1*_`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
            await conn.sendMessage(m.chat, {
                image: {
                    url: female
                },
                caption: `ها هي صورة *المرأة*\nالطلب من قبل: \n_*instagram.com/ovmar_1*_`,
                mentions: [m.sender]
            }, {
                quoted: m
            });
        } else {
            console.log("لم يتم الرد من OpenAI أو حدث خطأ.");
        }
    } catch (e) {
        await m.reply(eror)
    }
}
handler.help = ["resvcouple"]
handler.tags = ["search"]
handler.command = /^(resvcouple)$/i
handler.limit = true
export default handler

async function Couple() {
    try {
        const response = await fetch("https://tools.revesery.com/couple/revesery.php");

        if (!response.ok) {
            throw new Error(`خطأ HTTP! الحالة: ${response.status}`);
        }

        const data = await response.json();

        return data;
    } catch (error) {
        console.error(`حدث خطأ: ${error.message}`);
        throw error; // إعادة رمي الخطأ للتعامل معه أعلى في سلسلة الاستدعاء
    }
}