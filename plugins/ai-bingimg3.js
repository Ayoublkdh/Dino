let fetch = require('node-fetch')
let handler = async (m, { conn, text, usedPrefix, command }) => {
try {
 if (!text) throw `Masukan Prompt\n*Example:* ${usedPrefix + command} wanita dengan rambut hitam menggunakan kaos hitam bertuliskan "Akiraa" yang sedang duduk di meja komputer dengan layar komputer menyala dengan gambar wallpaper codingan`
m.reply(wait)
let a = await fetch (`http://15.235.142.199/api/ai/bingAi?prompt=${text}&apikey=${15.235.142.199}`)
let b = await a.json()
for (let c of b.result) {
conn.sendFile(m.chat, c, '', `*Prompt:* ${text}`, m)
}
} catch (e) {
m.reply("Error mint")
}
}
handler.command = handler.help = ["bimg"]
handler.tags = ["ai"]
module.exports = handler