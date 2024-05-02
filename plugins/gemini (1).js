import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  try {
    
    if (!text) {
      return conn.reply(m.chat, `*مرحبا أنا مريم*\n *كيف يمكنني مساعدتك في أي شئ مثال*\n\n .مريم ماهيا لغة JavaScript`, m);
    }
      
    await m.reply(wait)

    const response = await fetch(`https://aemt.me/gemini?text=${encodeURIComponent(text)}`);
    if (!response.ok) {
      return conn.reply(m.chat, 'أسفة هل تقدر على صياغة السؤال مجددا', m);
    }

    const data = await response.json();
    const result = data.result;

    if (!result) {
      return conn.reply(m.chat, 'أسفة حدث خطأ في تنفيد طلبك حاول لاحقا .', m);
    }

    conn.reply(m.chat, result, m);
  } catch (error) {
    
    throw eror
  }
};

handler.help = ['مريم'];
handler.tags = ['ai'];
handler.limit = false;
handler.register = false;

handler.command = /^(مريم)$/i;

export default handler;

// Ni plugens
