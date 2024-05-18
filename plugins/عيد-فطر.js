import fetch from 'node-fetch';

const handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|');
  if (!args[0]) return conn.reply(m.chat, `عيد عل صتحبك ياض🦦 مثال :\n\n*${usedPrefix}${command}  كل سنه وانت طيب يابرو بحبك والله حبيبي حبيبي والله🫂🦦*`, m);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/idulfitri?apikey=Gatadios&text=${response[0]}`;
  conn.sendFile(m.chat, res, 'idulfitri.jpg', 'instagram.com/noureddine_ouafy', m, false);
};
handler.help = ['عيد-فطر'];
handler.tags = ['logo'];
handler.command = /^(عيد-فطر)$/i;

export default handler;
