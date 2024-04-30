const axios = require('axios');
const fetch = require('node-fetch');
const fs = require('fs');
const FormData = require('form-data');
const uploadImage = require('../lib/uploadImage.js');

const handler = async (m, { conn, usedPrefix, command, args, text }) => {
  let style = (args[0] || '').toLowerCase(); // استخراج نمط التأثير من الأرقام المرسلة
  let q = m.quoted ? m.quoted : m; // استخراج الرسالة المرفقة إذا وجدت
  let mime = (q.msg || q).mimetype || ''; // استخراج نوع الميديا المرسلة
  let listStyle = `┌ ◦ Use Format: *.${command} <style>*
└ ◦ Example: *.${command} gta5*

*— L I S T - S T Y L E*

┌ ◦ gta5
│ ◦ dball
│ ◦ naruto
│ ◦ cyber
│ ◦ killer
│ ◦ kyoto
│ ◦ bikini
└ ◦ iron

*Note:* Reply/Send Image with caption .${command} <style>`;

  if (/makerdiff|jadi|makerdif/i.test(command)) { // التأكد من أن الأمر هو makerdiff
    switch (style) {
      case 'killer':
      case 'dball':
      case 'naruto':
      case 'starry_girl':
      case 'bikini':
      case 'gta5':
      case 'kyoto':
      case 'iron':
      case 'cyber':
        if (!mime) return conn.reply(m.chat, `Send/Reply Images with captions .${command} ${style ? style : 'gta5'}`, m); // رسالة إذا لم يتم إرسال صورة
        conn.sendMessage(m.chat, { react: { text: '🕒', key: m.key } }); // إرسال رسالة "يكتب"

        let media = await q.download(); // تحميل الصورة
        let url = await uploadImage(media); // رفع الصورة
        let hasil = await fetch(`https://skizo.tech/api/aimirrorvip?&apikey=${global.xzn}&url=${url}&filter=${style.toUpperCase()}`); // استخدام API لإنشاء الصورة
        let res = await hasil.json(); // تحويل الرد إلى JSON
        return conn.sendFile(m.chat, res.generated_image_addresses, 'ppk.jpg', '```Success...\nDont forget to donate```', m); // إرسال الصورة المعالجة إلى المستخدم
      default:
        return conn.sendMessage(m.chat, { // إرسال قائمة الأنماط المتاحة
          text: listStyle,
          contextInfo: {
            externalAdReply: {
              title: "M A K E R D I F F",
              body: 'The following styles are available',
              thumbnailUrl: "https://telegra.ph/file/a82ad1b37cac63de1ba70.jpg",
              mediaType: 1,
              renderLargerThumbnail: true
            }
          }
        });
    }
  } else {
    conn.reply(m.chat, 'Invalid command', m); // رسالة إذا كان الأمر غير صالح
  }
};

handler.tags = ['drawing']; // الوسم المرتبط بالأمر
handler.command = /^(makerdif|jadi|makerdiff)$/i; // نمط الأمر
handler.help = ['makerdiff'].map(v => v + ' *<style>*'); // المساعدة للأمر
handler.limit = true; // تحديد الحد الأقصى للاستخدام

module.exports = handler; // تصدير الدالة handler