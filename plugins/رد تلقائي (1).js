//*رد بوت ساسكي تبع ايتاتشي
// معلش ي ايتاتشي كسلت اعمل واحده 😀
// اعمل واحده بس احط رد تل

let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هوؤنيزيظيميلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
} else if (/^|تينيمؤظؤمؤخاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^ديناصوور|ديناصوووور$/i.test(m.text)) { 
     responses = [ 
'*بوت ديناصور تحت امرك*'
     ]; 
 }else if (/^من عمك$/i.test(m.text)) { 
     responses = [ 
'*ديناصور اككيد😩❤‍🔥*'
     ]; 
   }else if (/^ديناصور هل انت مرتبط$/i.test(m.text)) { 
     responses = [ 
'*لا ولا أريد الارتباط🏌🏻‍♂💔*'
   ]; 
   }else if (/^بوت تحبني$/i.test(m.text)) { 
     responses = [ 
'*اموت فيك 🌚💔*',
'*اكرهك🙂💔*',
'*احبك نص حب 🙃💔*',
]; 
   }else if (/^ديناصور تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*ماعاش من يكرهكك حبي 🙁*',
'*لا بس لا تتعب نفسك لحبك🫥*',
'*ااي اكرهك🙄*',   ]; 
     
     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^نبزيزيظيظيميخ/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   }else if (/^ديناصور من وين انت؟$/i.test(m.text)) { 
     responses = [ 
'المغرب 🤍'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^مبنيزيزينيني$/i.test(m.text)) { 
     responses = [ 
       'الحمدالله',  

     ];
     }else if (/^نيميميظيميم$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*اعشقق♥*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء الخير$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^نبزبزبزبن$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^نبنبنبنببز$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^تبنيميميز$/i.test(m.text)) { 
     responses = [ 
       '*تحت امرك حبي*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
