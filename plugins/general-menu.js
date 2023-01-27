/** Menu Untuk Whatsapp List Ringan 
 Udah gua buat biar ringan cuma gak manggil semua menu

Note:
Ini ada menu payment tujuan nya biar kalo lu run panel atau 
Run di platform yang kecil disk nya ( penyimpanan )
Agar terap bisa di gunakan dan tidak ada kendala seperti
[Error: ENOENT: no such file or directory, open ''] 
**/ 

    let handler = async (m, { conn, text, usedPrefix, command }) => {
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let time = require('moment-timezone').tz('Asia/Jakarta').format('HH:mm:ss')
    let ar = ['list', 'menu']
    let title = `*MAU MAIN BOT?*\n*SILAHKAN...*`
    let tmb = `CLICK HERE !`
    const sections = [ {
	title: `⚘ YouTube : FvnkyyBotz`,
	rows: [
	{title: `ALL FITUR BOT`, rowId: `.allmenu `, description: `waduhh. langsung semuanya xixi>-<`},
    {title: `SCRIPT`, rowId: `#sc `, description: `mau sc ini?`},
        {title: `OWNER`, rowId: `#owner `, description: `chat yang penting-penting aja ya kak!`},
        ]
 } ]

const listMessage = {
  text: title,
  mentions: [m.sender],
  footer: '_Mau Masukin Bot Ke Group?_\nHarga *10k* (PERMANENT)',
  buttonText: tmb,
  sections
}

  if(!text) return conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!ar.includes(text)) throw conn.sendMessage(m.chat, listMessage, { quoted: m })
  if (!res.ok) throw `${res.status} ${res.statusText}`
  let json = await res.json()
  if (!json.image) throw json
}

handler.help = ['menu'].map((v) => v + ' <list>')
handler.tags = ['FvnkyyBotzV2']
handler.command = /^(menu|help|\?)$/i
handler.register = false

module.exports = handler
function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}
