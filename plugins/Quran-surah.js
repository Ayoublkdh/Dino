import fetch from 'node-fetch';
import { translate } from '@vitalets/google-translate-api';

let quranSurahHandler = async (m, { conn }) => {
  try {
    // استخراج رقم السورة أو اسمها من نص الأمر
    let surahInput = m.text.split(' ')[1];

    if (!surahInput) {
      throw new Error('يرجى كتابة اسم السورة أو رقمها بعد الأمر. مثال: .سوره الكوثر');
    }

    // جلب قائمة السور من API
    let surahListRes = await fetch('https://quran-endpoint.vercel.app/quran');
    let surahList = await surahListRes.json();

    // البحث عن السورة المطلوبة
    let surahData = surahList.data.find(surah => 
      surah.number === Number(surahInput) || 
      surah.asma.ar.short.toLowerCase() === surahInput.toLowerCase() || 
      surah.asma.en.short.toLowerCase() === surahInput.toLowerCase()
    );

    if (!surahData) {
      throw new Error(`تعذر العثور على السورة بالرقم أو بالاسم "${surahInput}"`);
    }

    // جلب تفاصيل السورة من API
    let res = await fetch(`https://quran-endpoint.vercel.app/quran/${surahData.number}`);
    
    if (!res.ok) {
      let error = await res.json(); 
      throw new Error(`فشل طلب API بحالة ${res.status} ورسالة ${error.message}`);
    }

    let json = await res.json();

    // ترجمة التفسير من الإندونيسية إلى العربية
    let translatedTafsirUrdu = await translate(json.data.tafsir.id, { to: 'ar', autoCorrect: true });

    // ترجمة التفسير من الإندونيسية إلى الإنجليزية
    let translatedTafsirArabic = await translate(json.data.tafsir.id, { to: 'en', autoCorrect: true });

    let quranSurah = `
🕌 *القرآن الكريم*\n
📜 *سورة ${json.data.number}: ${json.data.asma.ar.long} (${json.data.asma.en.long})*\n
نوع: ${json.data.type.ar}\n
عدد الآيات: ${json.data.ayahCount}\n
🔮 *تفسير (العربية):*\n
${translatedTafsirUrdu.text}\n
🔮 *تفسير (الإنجليزية):*\n
${translatedTafsirArabic.text}`;

    m.reply(quranSurah);

    if (json.data.recitation.full) {
      await conn.sendFile(m.chat, json.data.recitation.full, 'recitation.mp3', null, m, true, { type: 'audioMessage', ptt: true });
    }
  } catch (error) {
    console.error(error);
    m.reply(`Error: ${error.message}`);
  }
};

handler.help = ['quran [surah_number|surah_name]'];
handler.tags = ['quran', 'surah'];
handler.command = ['سورة', 'سوره'];

export default quranSurahHandler;
