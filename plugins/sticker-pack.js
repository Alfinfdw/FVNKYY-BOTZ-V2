let handler = async (m, { conn, text }) => {
  let res = 'https://api.zacros.my.id/search/sticker?query=pentol'
  if (!res.ok) throw await 'Website Down'
  let json = await res.json()
  if (!json.result) throw json
  m.reply(json.result) 
}
handler.help = ['stikerpack'].map(v => v + ' <text>')
handler.tags = ['internet', 'sticker']
handler.command = /^(stickerpack)$/i

module.exports = handler