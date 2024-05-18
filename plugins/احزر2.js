import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/استخدم.*انسحب/i.test(m.quoted.text) || /.*hhint/i.test(m.text))
        return !0
    this.tebakbendera = this.tebakbendera ? this.tebakbendera : {}
    if (!(id in this.tebakbendera))
        return this.reply(m.chat, '*❐┃لقد انتها هذا الامر اكتبه مجددا لي العب من جديد┃🧊 ❯*\n*『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』*', m)
    if (m.quoted.id == this.tebakbendera[id][0].id) {
        let isSurrender = /^(انسحب|surr?ender)$/i.test(m.text)
        if (isSurrender) {
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
            return this.reply(m.chat, '*❐┃لم تكن كما ضننت┃🧊 ❯*\n*『亗 ᴹᴿ ꪜ RINGO☂』*', m)
        }
        let json = JSON.parse(JSON.stringify(this.tebakbendera[id][1]))

        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tebakbendera[id][2]
            this.reply(m.chat, `*❐┃اجـابـة صـحـيـحـة┃✅❯*\n\n*❐↞┇الـجـائـزة💰↞${this.tebakbendera[id][2]} نقطه*\n*『𝑅𝐼𝑇𝐴🌸𝐵𝛩𝑇』*`, m)
            clearTimeout(this.tebakbendera[id][3])
            delete this.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold)
            m.reply(`*❐┃لقد كنت على وشك النجاح┃❌ ❯*\n*『亗 ᴹᴿ ꪜ RINGO☂』*`)
        else
            this.reply(m.chat, `*❐┃اجـابـة خـاطـئـة┃❌ ❯*\n*『亗 ᴹᴿ ꪜ RINGO☂』*`, m)
    }
    return !0
}
export const exp = 0
