import fetch from 'node-fetch';
import { translate } from '@vitalets/google-translate-api';

const handler = async (m, { conn }) => {
  try {
    const res = await fetch('https://some-random-api.com/animu/quote');
    if (!res.ok) throw await res.text();
    const json = await res.json();
    const { sentence, character, anime } = json;

    const message = `❖𝐐𝐔𝐎𝐓𝐄\n${sentence}\n\n❖𝐂𝐇𝐀𝐑𝐀𝐂𝐓𝐄𝐑: \`\`\`${character}\`\`\`\n❖𝐀𝐍𝐈𝐌𝐄: \`\`\`${anime}\`\`\`\n`;

    // ترجمة الرسالة إلى اللغة العربية
    const translatedMessage = await translate(message, { to: 'ar', autoCorrect: true });

    conn.sendMessage(m.chat, { text: translatedMessage.text }, 'extendedTextMessage', { quoted: m });
  } catch (error) {
    console.error(error);
  }
};

handler.help = ['animequote'];
handler.tags = ['group'];
handler.command = /^(animequote)$/i;

export default handler;
