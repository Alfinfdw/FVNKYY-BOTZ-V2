let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks\nContoh : .flaming4 BOTCAHX'
  m.reply('_Process..._')
  let res = `https://api.tiodevhost.my.id/api/photooxy/illuminated-metallic?text=${response[0]}`
  conn.sendFile(m.chat, res, 'botcahx.jpg', `© FvnkyyBotz`, m, false)
}
handler.help = ['iluminated'].map(v => v + ' <text>')
handler.tags = ['photooxy']
handler.command = /^(iluminated)$/i

module.exports = handler
