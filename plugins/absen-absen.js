let handler = async (m, { conn, usedPrefix }) => {
    let id = m.chat
    conn.absen = conn.absen ? conn.absen : {}
    if (!(id in conn.absen)) {
        await conn.sendBut(m.chat, `Tidak ada absen berlangsung!`, wm, 'MULAI', `${usedPrefix}mulaiabsen`, m)
        throw false
    }

    let absen = conn.absen[id][1]
    const wasVote = absen.includes(m.sender)
    if (wasVote) throw 'Kamu sudah absen kakð¼'
    absen.push(m.sender)
    let d = new Date
    let date = d.toLocaleDateString('id', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    })
    let list = absen.map((v, i) => `â ${i + 1}.  @${v.split`@`[0]}`).join('\n')
    let caption = `
Tanggal: ${date}
${conn.absen[id][2]}
âã DAFTAR ABSEN ã
â Total : *${absen.length}*
${list}
âââââ`.trim()
    await conn.send2But(m.chat, caption, wm, 'Absen', `${usedPrefix}absen`, 'Cek', `${usedPrefix}cekabsen`, m, { contextInfo: { mentionedJid: conn.parseMention(caption) } })
}
handler.help = ['absen']
handler.tags = ['absen']
handler.command = /^(absen|hadir)$/i

module.exports = handler
