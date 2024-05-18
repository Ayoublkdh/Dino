import fetch from 'node-fetch';

const handler = async (m, { conn, args, text, command, usedPrefix, isCreator, isPrems }) => {
  let response = args.join(' ').split('|');
  if (!args[0]) return conn.reply(m.chat, `ارسل تهنئة عيد الفطر لصديقك مثال :\n\n*${usedPrefix}${command}  ali ♥*`, m);
  conn.sendMessage(m.chat, {
    react: {
      text: '🕒',
      key: m.key,
    }
  });
  let res = `https://api.lolhuman.xyz/api/idulfitri?apikey=Gatadios&text=${response[0]}`;
  conn.sendFile(m.chat, res, 'idulfitri.jpg', '*╮ ──═┅─┅─┅═── ╭* \n•🇾🇪_ *الجنہـــــرال_بـوت*\n *╯ ──═┅─┅─┅═── ╰* \n*│❯طلبـــك*', m, false);
};
handler.help = ['aidfitr'];
handler.tags = ['logo'];
handler.command = /^(عيد|العيد|عيدالفطر|عيدفطر)$/i;

export default handler;
