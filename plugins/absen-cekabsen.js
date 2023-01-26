let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) throw `_*Tidak ada absen berlangsung di Group ini🗿*_\n\n*${usedPrefix}mulaiabsen* - untuk memulai absen!`

    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let absen = conn.absen[id][1]
    let list = absen.map((v, i) => `│ ${i + 1}. @${v.split`@`[0]}`).join('\n')
    conn.sendBut(m.chat, `*「 ABSEN 」*

› Tanggal : ${date}
${conn.absen[id][2]}

┌ 「 ABSEN HADIR 」
│ 
├Total : ${absen.length}
${list}
│ 
└───❖`, wm, 'Absen', '.absen', m, { contextInfo: { mentionedJid: absen } })
}
handler.help = ['cekabsen']
handler.tags = ['absen']
handler.command = /^cekabsen$/i
handler.group = true
module.exports = handler
