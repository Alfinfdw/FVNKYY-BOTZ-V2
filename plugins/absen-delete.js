let handler = async (m, { usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) conn.sendBut(m.chat, `_*Tidak ada absen berlangsung di Group ini🗿*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen!`, wm, 'MULAI ABSEN', '.mulaiabsen', m)
    delete conn.absen[id]
    m.reply(`DONE🐼`)
}
handler.help = ['deleteabsen']
handler.tags = ['absen']
handler.command = /^(delete|hapus)absen$/i
handler.group = true
handler.admin = true
module.exports = handler
