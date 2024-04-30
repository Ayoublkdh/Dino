import Jimp from 'jimp';
import axios from 'axios';

// دالة لمعالجة الصورة وإضافة علامة مائية
const processImage = async (inputBuffer, watermarkText) => {
    try {
        // تحويل الصورة إلى سلسلة Base64
        const base64String = Buffer.from(inputBuffer, 'binary').toString('base64');
        // إرسال طلب لتحويل الصورة إلى رسم متحرك
        const apiResponse = await axios.post('https://www.drawever.com/api/photo-to-anime', {
            data: `data:image/png;base64,${base64String}`,
        }, {
            headers: {
                'Content-Type': 'application/json',
            },
        });

        // الحصول على رابط الصورة المحولة
        const link = 'https://www.drawever.com' + (apiResponse.data.urls[1] || apiResponse.data.urls[0]);
        // تحميل الصورة المحولة
        const { data: imageBuffer } = await axios.get(link, {
            responseType: 'arraybuffer'
        });

        // قراءة الصورة وإضافة خلفية سوداء ونص مائي
        const image = await Jimp.read(imageBuffer);
        const blackBackground = new Jimp(image.bitmap.width, 50, 0x000000FF);
        const font = await Jimp.loadFont(Jimp.FONT_SANS_16_WHITE);
        blackBackground.print(font, 10, 10, watermarkText, blackBackground.bitmap.width - 20);
        image.composite(blackBackground, 0, image.bitmap.height - blackBackground.bitmap.height, {
            mode: Jimp.BLEND_SOURCE_OVER,
            opacityDest: 0.5,
            opacitySource: 1
        });

        // إضافة نص إلى الصورة
       /* const instaText = await Jimp.loadFont(Jimp.FONT_SANS_32_WHITE);
        image.print(instaText, 10, 10, image.bitmap.width - 20);*/
        
        // الحصول على بيانات الصورة النهائية كمصفوفة بيانات
        const outputBuffer = await image.getBufferAsync(Jimp.MIME_JPEG);
        return outputBuffer;
    } catch (err) {
        console.error(err);
        throw err;
    }
}

// دالة التعامل مع الرسائل لتحويل الصورة وإضافة العلامة المائية
const handler = async (m, {
    conn,
    args,
    text,
    usedPrefix,
    command
}) => {
    try {
        // التحقق من رد الرسالة على وسائط ونوع الوسائط
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || q.mediaType || ''
        if (!/image|viewOnce/g.test(mime)) return m.reply(`الرجاء الرد على صورة لاستخدام الأمر\n*${usedPrefix + command}*`)
        // تحميل الصورة
        let img = await q.download?.()
        // معالجة الصورة وإضافة العلامة المائية
        let output = await processImage(img, 'LEADER')
        // إرسال الصورة المعالجة مع العلامة المائية
        await conn.sendFile(m.chat, output, 'drawever.jpg', 'للتواصل عبر واتس اب 🥰\nwa.me/212690943590', m)
    } catch (error) {
        console.error(error);
    }
}

// تعريف المساعدة والوسوم والأمر
handler.help = ["drawever"]
handler.tags = ['drawing']
handler.command = ["drawever"]

export default handler
