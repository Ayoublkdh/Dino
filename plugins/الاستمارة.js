let handler = async (m, { command, text }) => m.reply(`╗•══━━━•〘•❦•〙•━━━══•╔
『اهلاً بك بإستقبال نقابة LEADER'S OF SWORDS』 
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
handler.command = /^(الاستماره|77|استماره\استمارة)$/i

export default handler
