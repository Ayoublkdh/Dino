import fetch from 'node-fetch'; 
  
 let handler = async (m, { conn, text, usedPrefix, command }) => { 
   const name = conn.getName(m.sender); 
   if (!text) { 
     throw `*مرحبا* *${name}*, *أنا اليكسا نظام أيفون المتحدث أدعم اللغة الإنجليزية فقط* \n\n⌕ *مثال الإستخدام*: *${usedPrefix + command}* Hi`; 
   }  
  
   const uid = encodeURIComponent(m.sender); 
   const msg = encodeURIComponent(text); 
  
   const res = await fetch(`http://api.brainshop.ai/get?bid=176023&key=LDSYmkI28NH1qFuN&uid=${uid}&msg=${msg}`); 
   const json = await res.json(); 
  
   if (json.cnt) { 
     const reply = json.cnt; 
     m.reply(reply); 
   } else { 
     throw json; 
   } 
 }; 
  
 handler.help = ['alexa']; 
 handler.tags = ['ai']; 
 handler.command = ['alexa']; 
 handler.limit = true

 export default handler;