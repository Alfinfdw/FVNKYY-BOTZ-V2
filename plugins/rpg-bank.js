let fs = require('fs')
let handler = async (m, { conn }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let name = conn.getName(m.sender)
    let thumbnail = fs.readFileSync('./media/bank.jpg')
    let user = global.db.data.users[who]
let anu = `
ð¦ Bank *${user.name}*
â­ Role : *${user.role}*\n\n
*${user.exp}* Exp â¨
*${user.limit}* Limit ð
*${user.money}* Money ðµ`
      conn.sendButtonImg(m.chat, thumbnail, anu, wm2, 'Má´É´á´', '.menu', m) 
}
handler.help = ['bank', 'dompet']
handler.tags = ['xp', 'rpg']
handler.command = /^(bank|dompet)$/i

module.exports = handler