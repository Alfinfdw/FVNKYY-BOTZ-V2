let fg = require('api-dylux') 
let handler = async (m, { conn, args, usedPrefix, command }) => {
 
 if (!args[0]) throw `✳️ Input Url Facebook!\n\n📌 Contoh :\n*${usedPrefix + command}* https://fb.watch/d7nB8-L-gR/`
    
   try {
   let res = await fg.fbdl(args[0])
    for (let result of res.download) {
    	  let tex = `
┌─⊷ *FACEBOOK*
▢ *Result :* ${result.quality}
└───────────`
    conn.sendFile(m.chat, result.url, 'fb.mp4', tex, m)
     } 
   
 } catch {
 	m.reply('Error: Intenta con otro link')
 	} 
}
handler.help = ['facebook'].map(v => v + ' <url>')
handler.tags = ['downloader']
handler.command = /^((facebook|fb)(downloder|dl)?)$/i

module.exports = handler
