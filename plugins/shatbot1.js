let handler = m => m
handler.all = async function(m) {
  let chat = global.db.data.chats[m.chat]
  
  if (/^بوت$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, '*اسمي يا  فاشل ✨🐤*', m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^.بوت$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, '*اسمي ديناصور يا بيض 😑*', m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^بايض$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, ` انا مش مبضون والله انا مش مبضون اصلي انا بضان واللهي انا ايوة بضان 🐦` , m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^تست$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, `شغال يا عم 😂 `, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^انا جيت$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, ` منور ✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^اخرس$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, 'احااا مش اخرس', m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^حرامي|سارق$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, `دليك فين ؟ انا متاكد انك ال حرامي `, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^ملل|مللل|ملللل$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, ` عارفين ف اسكت `, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^تيزيزؤظؤم$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, ` وعليكم السلام `, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^تصبح علي خير|تصبحوا علي خير/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, ` وانت من اهل الخير حبيبي✨💜 `, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  
  if (/^عامل اي|عامل ايه$/i.test(m.text)) { //sem prefixo
      conn.reply(m.chat, ` الحمد لله و انت `, m) //wm, null, [['Menu', '#menu']], m) botones :V
  }
  return !0
}
export default handler
