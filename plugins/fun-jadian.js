let handler = async (m, { conn, participants, command, usedPrefix }) => {
    let member = participants.map(u => u.id)
    let orang
    if (/ku/i.test(command)) orang = m.sender
    else orang = member[Math.floor(Math.random() * member.length)]
    let jodoh = member[Math.floor(Math.random() * member.length)]
    let jawab = `@${orang.replace(/@.+/, '')} ❤️ @${jodoh.replace(/@.+/, '')}`.trim()
    let mentionedJid = [orang, jodoh]
    await conn.sendBut(m.chat, jawab, '', `${command}`, usedPrefix + command, m, { contextInfo: { mentionedJid } })
}
handler.help = ['jadian']
handler.tags = ['fun']
handler.command = /^(jadian)$/i
handler.group = true
handler.limit = true

module.exports = handler
