let handler = async (m, { conn, command, text }) => {

    if (!text) return conn.reply(m.chat, 'حط اسم', m)

  let personalidad = `
┏━━°❀❬ *تحليل الشخصية* ❭❀°━━┓
*┃*
*┃• الاسم* : ${text}
*┃• الأخلاق الحميدة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• الأخلاق السيئة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• نوع الشخص* : ${pickRandom(['طيب القلب','متكبر','بخيل','كريم','متواضع','خجول','جبان','فضولي','محبوب','كريم', 'ذكي'])}
*┃• دائما* : ${pickRandom(['متوتر','سيء','مشتت','مزعج','نمام','بيقرا كتب','خروجات','بيتفرج ع الانمي','فاتح واتس','بيكدب','سيمب','ماسك الفون'])}
*┃• الذكاء* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• الانحراف* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• الشجاعة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• الخوف* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
*┃• شهرة* : ${pickRandom(['6%','12%','20%','27%','35%','41%','49%','54%','60%','66%','73%','78%','84%','92%','93%','94%','96%','98,3%','99,7%','99,9%','1%','2,9%','0%','0,4%'])}
┗━━━━━━━━━━━━━━━━
`
conn.reply(m.chat, personalidad, m, { mentions: conn.parseMention(personalidad) })
}
handler.help = ['شخصية *<اسم>*']
handler.tags = ['fun']
handler.command = /^شخصية/i

export default handler 

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
                          }
