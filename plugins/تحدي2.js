const handler = (m) => m;
handler.before = async function(m) {
  this.suit = this.suit ? this.suit : {};
  if (db.data.users[m.sender].suit < 0) db.data.users[m.sender].suit = 0;
  const room = Object.values(this.suit).find((room) => room.id && room.status && [room.p, room.p2].includes(m.sender));
  if (room) {
    let win = '';
    let tie = false;
    if (m.sender == room.p2 && /^(acc(ept)?|نعم|نعم|gas|accept|rechazar|yes)/i.test(m.text) && m.isGroup && room.status == 'wait') {
      if (/^(لا|gamau|لا|no)/i.test(m.text)) {
        const textno = `*[❗] @${room.p2.split`@`[0]} خـاف ورفـض يلعـب اللعـبه ملغـيه🦦*`;
        m.reply(textno, null, {mentions: this.parseMention(textno)});
        delete this.suit[room.id];
        return !0;
      }
      room.status = 'play';
      room.asal = m.chat;
      clearTimeout(room.waktu);
      const textplay = `🎮  *بدأ التحدي*  🎮\n\n—◉ اذهب للبـوت خـاص واختـار🦦 @${room.p.split`@`[0]} 𝚈 @${room.p2.split`@`[0]}\n\n◉ *لو الاعـب التـاني اتاخـر بتنتـهي اللعـبه🦦\n*◉ *ادخل للبوت من هنا* wa.me/${conn.user.jid.split`@`[0]}*`;
      m.reply(textplay, m.chat, {mentions: this.parseMention(textplay)});
      const comienzop = `*اختار قبل الاعب التانـي🐔*  
حجر
ورقه
مقص\nالنقاط +${room.poin}𝚇𝙿\nلفل ${room.poin_lose}𝚇𝙿\n *LEADER DINO ᵇᵒᵗ*

