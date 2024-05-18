import fetch from 'node-fetch';

let gitagptHandler = async (m, { text, usedPrefix, command }) => {
  if (!text && !(m.quoted && m.quoted.text)) {
    throw `يرجى تقديم بعض الأسئلة أو اقتباس رسالة للحصول على رد. ضع في اعتبارك أن GitaGPT لا يزال في مرحلة الاختبار ، لذلك قد يولد استجابات غير دقيقة في بعض الأحيان.`;
  }

  if (!text && m.quoted && m.quoted.text) {
    text = m.quoted.text;
  }

  try {
    conn.sendPresenceUpdate('composing', m.chat);
    const prompt = encodeURIComponent(text);
    const endpoint = `https://ultimetron.guruapi.tech/gita?prompt=${prompt}`;

    const response = await fetch(endpoint);
    const data = await response.json();
    const result = data.completion; 

    m.reply(result);
  } catch (error) {
    console.error('Error:', error);
    throw `*خطا راسل المطور علي قطينة*`;
  }
};
gitagptHandler.help = ['جيتا']
gitagptHandler.tags = ['AI']
gitagptHandler.command = ['جيتا'];
gitagptHandler.diamond = false;

export default gitagptHandler;
