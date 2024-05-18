let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*

*⌝ رابط خاصه بالستقبال النقابة〣🍷⌞*

ـ· • • ━━━━━━ ⌞⚜️⌝ ━━━━━━ • • ·
*⌝نرحب بكم في نقابة مافيا 〣🍷⌞*
ـ· • • ━━━━━━ ⌞⚜️⌝ ━━━━━━ • • ·

*❐رابط⛩️↶*

*⌝🛕╎جروب الاستقبال⌞*
*➥【https://chat.whatsapp.com/JwS5RhQayeY4nT1yYbaRTm 】*

*〄━━━━━━━⌬〔🏮〕⌬━━━━━━━〄*
 تــــوقــيــع ↯:
*⌞ LEVI‹⚜️›YORUICHI ⌝* `;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/1ee2af6fdf7c01918916b.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(استقبال)$/i;
handler.command = new RegExp;

export default handler;
