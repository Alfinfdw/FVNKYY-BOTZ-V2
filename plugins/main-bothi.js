let handler = async (m, { conn, text, usedPrefix, command }) => {

conn.sendImageAsSticker(m.chat, 'https://database.tioclkp02.repl.co/IMG-20220724-WA0225.png', m, { packname: "database replit", author: "@tioclkp.replit" })
}

handler.customPrefix = /^(Bot|p)$/i
handler.command = new RegExp

module.exports = handler

handler.limit = true
handler.mods = false 
handler.premium = false
handler.group = false
handler.private = false
