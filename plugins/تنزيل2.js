import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

let handler = async (m, { conn, text, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ مثـال :\n${usedPrefix + command} https://youtu.be/YzkTFFwxtXI`;
  if (!args[0].match(/youtu/gi)) throw `❎ تأكـد من صحة هـذا الرابط يبدو أن هناك خطأ.`;



  try {
    let q = '128kbps'; 
    let v = args[0]; 
    const yt = await youtubedl(v).catch(async () => await youtubedlv2(v)); 
    const dl_url = await yt.audio[q].download(); 
    const title = await yt.title; 

    conn.sendFile(
      m.chat,
      dl_url,
      title + '.mp3',
      null, 
      m,
      false,
      { mimetype: 'audio/mpeg' }
    );

    m.react(xmoji); 
  } catch {
    await m.reply(`إنتظر يتم ارسال الملف إليك اذا لم يصل هناك خطأ اخبر المطور.`)
  }
};

handler.help = ['ytmp3 <url>']
handler.tags = ['downloader']
handler.command = ['تنزيل2', 'yta'] 

export default handler
