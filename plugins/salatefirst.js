export async function before(m) {
    this.autosholat = this.autosholat ? this.autosholat : {};
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender;
    let name = await this.getName(who);
    let id = m.chat;
    if (id in this.autosholat) {
        return false;
    }
    let jadwalSholat = {
        الفجر: "05:05",
        الضحى: "06:42",
        الظهر: "13:25",
        العصر: "17:07",
        المغرب: "20:08",
        العشاء: "21:34"
    };
    const date = new Date(new Date().toLocaleString("en-US", {
      timeZone:"Africa/Casablanca"
    }));
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const timeNow = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`;
    for (const [sholat, waktu] of Object.entries(jadwalSholat)) {
        if (timeNow === waktu) {
            let caption = `السلام  عليكم   *${name}*,\nحان موعد أدان صلاة *${sholat}* اذهب و توضأ بسرعة و قم لصلاتك  ولا تنسانا من الدعاء.\n\n*${waktu}*\n> *هذا توقيت الصلاة في الرباط وما جاورها*`;
            this.autosholat[id] = [
                this.reply(m.chat, caption, null),
                setTimeout(() => {
                    delete this.autosholat[id];
                }, 57000)
            ];
        }
    }
}