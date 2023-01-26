let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Teks!\nContoh : .flaming2 FVNKYY'
  m.reply('_Process..._')
  let res = `https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text=${response[0]}`
  conn.sendFile(m.chat, res, 'gura.jpg', `© FvnkyyBotz`, m, false)
}
handler.help = ['flaming2'].map(v => v + ' <text>')
handler.tags = ['maker']
handler.command = /^(flaming2)$/i

module.exports = handler
