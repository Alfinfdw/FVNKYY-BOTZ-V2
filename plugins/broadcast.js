let handler  = async (m, { conn, text }) => {
  let chats = Object.keys(await conn.chats)
  conn.reply(m.chat, `_Mengirim pesan broadcast ke ${chats.length} chat_`, m)
  for (let id of chats) {
       let bcbg = 'https://telegra.ph/file/2b9c88b0a03e08c11b179.jpg'
       await conn.send2ButtonImg(id, bcbg, text.trim(), wm, 'THANKS INFO', 'thanks', 'ᴏᴡɴᴇʀ', '.owner', m)
     }
  m.reply('*BROADCAST SELESAI☕*')
}
handler.help = ['broadcast'].map(v => v + ' <text>')
handler.tags = ['owner']
handler.command = /^(broadcast)$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler
