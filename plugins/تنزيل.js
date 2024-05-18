import ytdl from 'ytdl-core';
import fs from 'fs';
import os from 'os';

let limit = 500;
let handler = async (m, { conn, args, isPrems, isOwner, usedPrefix, command }) => {
  if (!args || !args[0]) throw `✳️ مثـال:\n${usedPrefix + command} https://youtube.com/watch?v=GvabaWHngzU`;
  if (!args[0].match(/youtu/gi)) throw `❎ تحقق من رابط اليوتيوب`;

  let chat = global.db.data.chats[m.chat];
  try {
    const info = await ytdl.getInfo(args[0]);
    const format = ytdl.chooseFormat(info.formats, { quality: 'highest' });
    if (!format) {
      throw new Error('No valid formats found');
    }

    if (format.contentLength / (1024 * 1024) >= limit) {
      return m.reply(`≡ *GURU YTDL*\n\n▢ *⚖️Size*: ${format.contentLength / (1024 * 1024).toFixed(2)}MB\n▢ *🎞️Quality*: ${format.qualityLabel}\n\n▢ The file exceeds the download limit *+${limit} MB*`);
    }

    const tmpDir = os.tmpdir();
    const fileName = `${tmpDir}/${info.videoDetails.videoId}.mp4`;

    const writableStream = fs.createWriteStream(fileName);
    ytdl(args[0], {
      quality: format.itag,
    }).pipe(writableStream);

    writableStream.on('finish', () => {
      conn.sendFile(
        m.chat,
        fs.readFileSync(fileName),
        `${info.videoDetails.videoId}.mp4`,
        `✼ ••๑⋯❀ الـيـوتيــوب ❀⋯⋅๑•• ✼
	  
	  ❏ العنوان: ${info.videoDetails.title}
	  ❐ المـده: ${info.videoDetails.lengthSeconds} ثانيـة
	  ❑ المشـاهدات: ${info.videoDetails.viewCount}
	  ❒ التحميل: ${info.videoDetails.publishDate}
	  ❒ الرابط: ${args[0]}
	  
	  ⊱─━⊱༻𝑨𝒍𝒊𝒒𝒖𝒕𝒆𝒆𝒏𝒂𝒉༺⊰━─⊰`,
        m,
        false,
        { asDocument: chat.useDocument }
      );

      fs.unlinkSync(fileName); // Delete the temporary file
    });

    writableStream.on('error', (error) => {
      console.error(error);
      m.reply('حدث خطأ تأكد من صحة الرابط.');
    });
  } catch (error) {
    console.error(error);
    m.reply('حدث خطأ تأكد من صحة الرابط.');
  }
};

handler.help = ['ytmp4 <yt-link>'];
handler.tags = ['dl'];
handler.command = ['تنزيل', 'y'];
handler.diamond = false;

export default handler;
