import fetch from 'node-fetch';
import displayLoadingScreen from '../lib/loading.js';
let handler = async (m, { conn, text }) => {
    if (!text) {
        console.log('No song name provided.');
        throw `*الإستماع للأغاني مجانا على Spotify*\n\n*مثال الإستخدام*\n .spotify call out my name`;
    }
  m.react('🎶')
  await displayLoadingScreen(conn, m.chat);
  //let pp = 'https://wallpapercave.com/wp/wp7932387.jpg'
    const query = encodeURIComponent(text);
    let res = `https://guruapi.tech/api/spotifydl?url=${query}`
   // let spotify = await (await fetch(res)).buffer()
    let doc = {
        audio: {
          url: res
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform:  [100, 0, 100, 0, 100, 0, 100],
        fileName: "JITOSSA.mp3",
    
        contextInfo: {
\n\مثال           mentionedJid: [m.sender],
          externalAdReply: {
            title: "SONG'S JOTOSSA",
            body: `Katsm3 L: ${text}`,
            thumbnailUrl: pp,
            sourceUrl: null,
            mediaType: 1,
            renderLargerThumbnail: false
          }
        }
    };
    
    await conn.sendMessage(m.chat, doc, { quoted: m });
}
handler.help = ['spotify'];
handler.tags = ['downloader'];
handler.command = /^(spotify)$/i;

export default handler;