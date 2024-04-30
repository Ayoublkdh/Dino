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
      ' مش عارف  ',
      ' الحمد لله ماشي الحال ',
      'الحمد الله',
      ' لو انت كويس انا كويس'
    ];
  } else if (/^لايت|عمي لايت|يا لايت/i.test(m.text)) {
    responses = [
      'قلب لايت من جوا✨🥺♥',
      ' لايت عمك✨🤺 ',
      ' لايت بيموت فيك ياض✨🥺♥',
      'بحبك ياض اطلب✨🥺♥ ',
      ' علي الطلاق اكتب اسمك في المذكرة ✨🤺'
    ];
  } else if (/^صباح النور|صباح النعناع الاخصر|صباح الفل|صباح الخير $/i.test(m.text)) {
    responses = [
      'صباح الفل ✨💜',
      'صباح النور ✨💜 ',
      ' صباح الكاريزما ✨💜',
      'انت صحيت وانا رايح انام 🐦👋🏻 ',
      'روح نام تاني بقي 🙃'
    ];
  } else if (/^شكرا|تسلم|تسلمي$/i.test(m.text)) {
    responses = [
      'العفو✨🥺♥',
      ' ولا يهمك مفيش حاجه✨💫 ',
      ' الشكر لله ✨💜',
      'العفو يبشه ✨💜'
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