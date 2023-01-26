const { createHash } = require('crypto')
let Reg = /\|?(.*)([.|] *?)([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.db.data.users[m.sender]
  if (user.registered === true) throw `Anda sudah Terdaftar di Database FvnkyyBotz\nMau daftar ulang? ${usedPrefix}unreg <SN|SERIAL NUMBER>`
  if (!Reg.test(text)) throw `FORMAT SALAH!\n*${usedPrefix}daftar nama.umur*`
  let [_, name, splitter, age] = text.match(Reg)
  if (!name) throw 'Nama tidak boleh kosong (Alphanumeric)'
  if (!age) throw 'Umur tidak boleh kosong (Angka)'
  age = parseInt(age)
  if (age > 120) throw 'Umur terlalu Tua'
  if (age < 5) throw 'Bayi bisa ngetik sesuai format bjir:V_.'
  user.name = name.trim()
  user.age = age
  user.regTime = + new Date
  user.registered = false
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
Daftar Berhasil!

╭───「 𝗜𝗡𝗙𝗢 」
│ ✦ Nᴀᴍᴇ : ${name}
│ ✦ Aɢᴇ : ${age} tahun 
╰──❏
Serial Number : 
${sn}
`.trim())
}
handler.help = ['register'].map(v => v + ' <nama>.<umur>')
handler.tags = ['xp','main']

handler.command = /^(daftar|register)$/i

module.exports = handler
