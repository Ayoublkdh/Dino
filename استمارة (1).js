let handler = async (m, { conn }) => {
    let message = 'هذا الامر قيد التعديل 🎗️🧡';

    // رابط الملف الصوتي
    let audioUrl = '';

    // إرسال الصورة مع الرسالة
    await conn.sendFile(m.chat, 'https://telegra.ph/file/1ee2af6fdf7c01918916b.jpg', 'image.jpg', message, m);

    // إرسال الرسالة الصوتية
    await conn.sendMessage(m.chat, { audio: { url: audioUrl }, mimetype: 'audio/mpeg', ptt: true }, { quoted: m });
};

handler.customPrefix = /^(استمارة)$/i;
handler.command = new RegExp;

export default handler;
