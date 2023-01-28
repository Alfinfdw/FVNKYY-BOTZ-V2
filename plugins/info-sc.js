let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
🎐Sc Fvnkyy-V2 Only Private Kak!
`
conn.sendBut(m.chat, esce, wm3, 'Thanks', 'thanks', m) 
}
handler.help = ['script']
handler.tags = ['main']
handler.command = /^(sc|script)$/i

module.exports = handler
