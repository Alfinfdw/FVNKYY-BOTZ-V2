let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks\nContoh : . butterfly BOTCAHX'
  m.reply('_Process..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/butterfly?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© FvnkyyBotz`, m, false)
}
handler.help = ['butterfly'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(butterfly)$/i

module.exports = handler
