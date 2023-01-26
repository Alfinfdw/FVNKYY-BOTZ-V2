let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
   response = args.join(' ').split('|')
  if (!args[0]) throw 'Masukkan Parameter'
  m.reply('JOIN GC BOT🐼 : https://chat.whatsapp.com/Hu3Mnyh023QGMVhKVOFLmr')
  //https://api.lolhuman.xyz/api/photooxy2/pubg?apikey=beta&text1=LoL&text2=Human
  let res = await fetch(`https://lolhuman.herokuapp.com/api/photooxy2/battlefield4?apikey=Dawnfrostkey&text1=${response[0]}&text2=${response[1]}`)
  conn.sendFile(m.chat, res, 'nama.jpg', `Done ✓`, m, false)
}
handler.help = ['battlefield'].map(v => v + ' <text1|text2>')
handler.tags = ['sticker']

handler.command = /^(battlefield)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler