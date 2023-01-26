let handler = async (m, { conn, command }) => {
let nyenye = `http://hadi-api.herokuapp.com/api/walpaperanime`
    conn.sendButtonImg(m.chat, nyenye, 'Nih Cuy', wm2, 'next', `.wallpaperanime`, m) 
}
handler.help = ['wallpaperanime']
handler.tags = ['anime']
handler.command = /^(wallpaperanime)$/i
handler.limit = true

module.exports = handler
