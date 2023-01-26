let handler = async(m, {conn, command, usedPrefix, text}) => {
  let fail = 'Format Salah! Contoh : ' +usedPrefix+command+ ' Fvnkyy|1. Masak'
  global.db.data.users[m.sender].catatan = global.db.data.users[m.sender].catatan || []
  let catatan = global.db.data.users[m.sender].catatan
  let split = text.split('|')
  let title = split[0]
  let isi = split[1]
  if (catatan.includes(title)) return m.reply('Judul tidak tersedia!\n\nAlasan : Sudah digunakan.')
  if (!title || !isi) return m.reply(fail)
  let cttn = {
    'title': title,
    'isi': isi
  }
  global.db.data.users[m.sender].catatan.push(cttn)
  conn.reply(m.chat, `Succes! Catatan berhasil dibuat.\nMau melihat hasil catatan? Ketik : ${usedPrefix}lihatcatatan`, m, false, {
    contextInfo: {
      mentionedJid: conn.parseMention(text)
    }
  })
}

handler.help = ['buatcatatan <title|isi>']
handler.tags = ['internet']
handler.command = /^buatcatatan$/i

module.exports = handler
