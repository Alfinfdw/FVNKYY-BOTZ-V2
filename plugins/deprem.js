let handler = async (m, { usedPrefix, command, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false
    else who = text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : m.chat
    let user = db.data.users[who]
    if (!who) return m.reply(`Tag atau balas orangnya mas!\n\nContoh :\n${usedPrefix + command} @${m.sender.split`@`[0]}`)
    user.premium = false
    user.premiumTime = 0
    m.reply(`Succes!\n*${user.name}* sekarang bukan Premium.`)
}
handler.help = ['delprem']
handler.tags = ['owner']
handler.command = /^(-|del)p(rem)?$/i

handler.rowner = true

module.exports = handler
