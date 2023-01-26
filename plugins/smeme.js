/**aneh gak work anjime**/

const uploadImage = require('../lib/uploadImage')
const { MessageType } = require('@adiwajshing/baileys')
const { sticker } = require('../lib/sticker')
let handler = async (m, { conn, text, usedPrefix, command }) => {

    let [atas, bawah] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) throw `balas gambar dengan perintah\n\n${usedPrefix + command} <${atas ? atas : 'teks atas'}>|<${bawah ? bawah : 'teks bawah'}>`
    if (!/image\/(jpe?g|png)/.test(mime)) throw `_*Mime ${mime} tidak didukung!*_`
    let img = await q.download()
    let url = await uploadImage(img)
    meme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas ? atas : '')}/${encodeURIComponent(bawah ? bawah : '')}.png?background=${url}`
try {
    let stiker = await sticker(null, meme, global.packname, global.author)
    await conn.sendMessage(m.chat, stiker, MessageType.sticker, {
      quoted: m
    })
  } catch (e) {
    m.reply('Gagal Membuat Stiker! Mencoba Mengirim Gambar...')
    await conn.sendFile(m.chat, meme, 'image.png', 'JOIN GC BOT🐼 : https://chat.whatsapp.com/Hu3Mnyh023QGMVhKVOFLmr', m)
  }
}
handler.help = ['smeme <text atas>|<text bawah>']
handler.tags = ['sticker']
handler.command = /^(smeme)$/i

handler.limit = true

module.exports = handler
