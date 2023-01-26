let axios = require("axios");
let handler = async(m, { conn, text }) => {

	axios.get(`https://videfikri.com/api/anime/randomquoteanime`).then ((res) => {
	 	let hasil = `${res.data.result.quotes}`

    conn.reply(m.chat, hasil, m)
	})
}
handler.help = ['quotesanime']
handler.tags = ['anime']
handler.command = /^(quotesanime)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = true

module.exports = handler