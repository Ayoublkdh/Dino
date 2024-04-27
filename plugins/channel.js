let handler = async (m, { conn }) => {

m.reply(`*حساباتي :*\n
*لييت لدي أي قناة او حساب على مواقع التواصل الاجتماعي بتاتا حاليا*
*سوف يتم نحديث الامر إذا قمت بإنشاء قناة ما في المستقبل♥*`)
}
handler.help = ['channel']
handler.tags = ['infobot']
handler.command = /^(channel)$/i

export default handler;
