let handler = async (m, { command, text }) => m.reply(`╗•══━━━•〘•❦•〙•━━━══•╔
『اهلاً بك بإستقبال نقابة 𝕋 𝔼 ℝ ℙ 𝕆』 
للدخول يرجى تعبئة الأستمارة
◉━━─ ─ ⊱ ❪❦❫ ⊰ ─ ─━━◉

�-اللقب مع الصورة:〖 〗

◉━━─ ─ ⊱ ❪❦❫ ⊰ ─ ─━━◉

�-اسم الأنمي:〖 〗

◉━━─ ─ ⊱ ❪❦❫ ⊰ ─ ─━━◉

�-بنت┇ولد:〖 〗

◉━━─ ─ ⊱ ❪❦❫ ⊰ ─ ─━━◉

�من طرف:〖 〗

•❖═━━•〘•❦•〙•━━═❖•

${m.mentionedJid ? '\n' + m.mentionedJid.map(v => `@[${v.replace(/@.+/, '')}]`).join('\n') : ''}
`.trim(), null, m.mentionedJid ? {
  mentions: m.mentionedJid
} : {})
handler.help = ['الاوامر <teks>?']
handler.tags = ['الاوامر', 'fun']
handler.command = /^(الاستماره|1|استماره\استمارة)$/i

export default handler