let timeout = 60000
let poin = 500
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '回《 》لم يتم الاجابة علي السؤال بعد》💬《🚫 ❯', conn.tebakbendera[id][0])
        throw false
    }
    let src = await (await fetch('https://gist.githubusercontent.com/Kyutaka101/2ca0f797f66d524a1f2e3685f66298f2/raw/7fe3898420592b47ca37db07fdd173b9b4ca9a63/Game.json')).json()
  let json = src[Math.floor(Math.random() * src.length)]
    let caption = `*· • • ━━ 回❄回 ━━ • • ·*
*${command.toUpperCase()}*
*🜋↫╎السـؤال : من في الصوره_ 》*
  *🜋↫╎[الـوقـت❄٦٠ث] ↞ ${(timeout / 1000).toFixed(2)} ┇*
  *استخدم .انسحب للأنسحاب*
  *🜋↫╎الـجـائز ✦↞ ${poin} نقاط┇*
回┇━━━ •❄• ━━━┇回
*✠ ~تـــوقــيــع ↯:~*
『 _LEADER-DINO BOT_ 』
     `.trim()
    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) conn.reply(m.chat, `❮ ❄┇انتهي الوقت┇🌀❯\n回↞┇الاجـابـة😎↞ *${json.name}* ┇`, conn.tebakbendera[id][0])
            delete conn.tebakbendera[id]
        }, timeout)
    ]
}
handler.help = ['فعاليه']
handler.tags = ['game']
handler.command = /^فعاليه/i

export default handler
