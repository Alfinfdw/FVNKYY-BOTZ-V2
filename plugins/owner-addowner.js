let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw `Tag Orangnya!`
    if (global.owner.includes(who.split`@`[0])) throw 'Succes! Dia Menjadi Owner FvnkyyBot🐼'
    global.owner.push(`${who.split`@`[0]}`)
    conn.reply(m.chat, `@${who.split`@`[0]} sekarang owner !`, m, {
        contextInfo: {
            mentionedJid: [who]
        }
    })

}
handler.help = ['addowner <user>']
handler.tags = ['owner']
handler.command = /^(addowner|add|+)$/i

handler.owner = true

module.exports = handler