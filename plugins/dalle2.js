import fetch from 'node-fetch';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*هذا الأمر ينشئ صورًا من النصوص*\n\n*مثال الاستخدام*\n*◉ ${usedPrefix + command} فتاة أنمي جميلة*\n*◉ ${usedPrefix + command} إيلون ماسك باللون الوردي*`;

    try {
        m.reply(wait);

        const endpoint = `https://cute-tan-gorilla-yoke.cyclic.app/imagine?text=${encodeURIComponent(text)}`;
        const response = await fetch(endpoint);
        
        if (response.ok) {
            const imageBuffer = await response.buffer();
            await conn.sendFile(m.chat, imageBuffer, 'jitossa.png', '_تابعني على إنستجرام 🥰_ \n www.instagram.com/ovmar_1', m);
        } else {
            throw '*فشل إنشاء الصورة*';
        }
    } catch {
        throw '*عذرًا! حدث خطأ أثناء إنشاء الصور. يرجى المحاولة مرة أخرى لاحقًا.*';
    }
};

handler.help = ['dalle2'];
handler.tags = ['drawing'];
handler.command = ['dalle2'];
export default handler;