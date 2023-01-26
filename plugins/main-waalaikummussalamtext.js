let handler = async (m, { conn }) => {
let ye = `@${m.sender.split`@`[0]}`
let esce = `
Hai Kak ${ye} 👋 Ada Yang Bisa Fvnkyy Bot Bantu?\n\nKetik .menu Untuk Melihat Menu Bot Ini :)\n\n> *Contoh : .menu*
`
let footer= 'Saya Adalah Salah Satu Bot WhatsApp.\n\nSilahkan Gunakan Sebijak Mungkin Demi Kenyamanan Bersama ;)\n\nHarap Untuk Tidak Menelpon, Meminta Save, Atau Spam Dalam Penggunaan Bot!!\n\nJika Ada Kendala Hubungi Owner/Creator.'
conn.send2But(m.chat, esce, footer, 'Mᴇɴᴜ', '.menu', 'Tʜᴀɴᴋꜱ', 'iyaa', m,)
}
handler.customPrefix = /^ping|Ping|Speed|speed$/i 
handler.command = new RegExp
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.admin = false
handler.botAdmin = false
handler.fail = null
module.exports = handler
