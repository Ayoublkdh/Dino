import fetch from "node-fetch";

const handler = async (m, usedPrefix, command) => {
  const g = await fetch(`https://raw.githubusercontent.com/inirey/RESTAPI/master/data/deidara.json`);
  const f = await g.json();
  const a = f[Math.floor(Math.random() * f.length)];
  conn.sendFile(m.chat, a, "deidara.jpg", 'wa.me/212690943590', m);
};

handler.help = ["deidara"];
handler.tags = ["anime"];
handler.command = /^deidara$/i;

export default handler;
