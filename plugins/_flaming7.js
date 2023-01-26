let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks!\nContoh : .carved FVNKYY'
  m.reply('_Process..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/carved-wood?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© FvnkyyBotz`, m, false)
}
handler.help = ['carved'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(carved)$/i

module.exports = handler
