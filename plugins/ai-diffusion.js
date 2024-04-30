import fetch from "node-fetch";

let handler = async (m, { conn, isOwner, usedPrefix, command, text }) => {
    if (!text) throw 'مثال: .diffusion مفصل للغاية، معقد، 4k، 8k، تركيز حاد، شعر مفصل، تفاصيل'
    m.reply(waittt)
    try {
        conn.sendFile(m.chat, `https://api.xyroinee.xyz/api/ai/stablediffusion?q=${encodeURIComponent(text)}&apikey=${global.xyro}`, 'anu.jpg', `المدخلات: ${text}`, m)
    } catch (e) {
        m.reply(eror)
    }
};

handler.help = ['stabledif'];
handler.tags = ['drawing'];
handler.command = /^(stabledif)$/i;
handler.limit = true;
export default handler;