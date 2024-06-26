let handler = m => m; 

handler.all = async function(m) {
  let chat = global.db.data.chats[m.chat];
  let responses;
  if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) {
    responses = [
      'وعليكم السلام',
      'وعليكم السلام حبي منور',
      ' وعليكم السلام كيفك',
      'وعليكم السلام ورحمة الله وبركاته'
    ];
  } else if (/^ شادو عامل ايه|عامله ايه|عاملين ايه|الدنيا عامله ايه|كيفك|عاملين ايه يشبب$/i.test(m.text)) {
    responses = [
      'كل شيء بخير الحمد لله ',
      ' شكرا على اهتمامك  ',
      ' الحمد لله كل شيء بخير ',
      'الحمد الله',
      ' لو انت بخير انا بخير'
    ];
  } else if (/^ديناصور|عمي ديناصور|دينو عمي|دينو عمك|ديناصور عمك|البوت عمك/i.test(m.text)) {
    responses = [
      'قلب الديناصور✨🥺♥',
      ' ديناصور عمك✨🤺 ',
      ' الديناصور يموت فيك يا وحش✨🥺♥',
      'أطلب و انا انفذ✨🥺♥ ',
      ' شبيك لبيك، امرك بين اديك ✨🤺'
    ];
  } else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح الخير|صباح الورد|صباح الياسمين|صياح الافراح|صباح السرور $/i.test(m.text)) {
    responses = [
      'صباح الأنوار ✨💜',
      'صباح النور ✨💜 ',
      ' صباح الكاريزما ✨💜',
      'انت صحيت وانا رايح انام 🐦👋🏻 ',
      'ارجع نام تاني 🙃'
    ];
  } else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) {
    responses = [
      'العفو✨🥺♥',
      ' ولا يهمك مفيش حاجه✨💫 ',
      ' الشكر لله ✨💜',
      'العفو يا صديقي ✨💜'
    ];
  } else if (/^اسكت|اسكت|هتسكت امتي|يا ابني اسكت$/i.test(m.text)) {
    responses = [
      '	ملكش دعوه ',
      ' لع وانت مالك',
      ' مش بمزاجك',
      'لا مين انت ال هتسكتني ',
      'اسكت انت'
    ];
  } 
  if (responses) {
    let randomIndex = Math.floor(Math.random() * responses.length);
    conn.reply(m.chat, responses[randomIndex], m);
  }
  return !0 
}; 

export default handler;
