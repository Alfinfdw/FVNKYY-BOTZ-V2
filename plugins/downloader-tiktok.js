

//let tio = require('node-fetch')
//let handler = async (m, { conn, args }) => {
//if (!args[0]) throw 'Contoh:\n.tiktok https://vm.tiktok.com/ZGJAmhSrp/'
//m.reply('Fetching data from node-fetch...')
//let tioxd = await tio(`https://api.ibengtools.my.id/api/download/tiktok?url=${args[0]}&apikey=ibeng`)
//if (!tioxd.ok) throw await tioxd.text()
//let tiodl = await tioxd.json()
//if (!tiodl.status) throw tiodl
//let { video, description, username } = tiodl.result
//await conn.sendFile(m.chat, video, 'tiovid.mp4', `
//*Deskripsi*: ${description}
//\n*Username*: ${username}`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
//}
//handler.help = ['tiktok <url>']
//handler.tags = ['downloader']
//handler.command = /^(tiktok|tt|ttdl|tiktoknowm|ttvid|tiktod)$/i
//handler.limit = true
//module.exports = handler

let fg = require('api-dylux')
const { tiktokdl, tiktokdlv2, tiktokdlv3 } = require ('@bochilteam/scraper')

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
if (!args[0]) throw `â³ï¸ Masukkan Tautan Tiktok Kak!\n\n ð Contoh : ${usedPrefix + command} https://vm.tiktok.com/ZGJAmhSrp/`
if (!args[0].match(/tiktok/gi)) throw `â Periksa apakah tautannya dari Tiktok sudah benar?`

try {
    let p = await fg.tiktok(args[0]) 
    let te = `
ââââ·ã NÉªÊ Ká´á´ð¼ ã
ââ¢ *á´ê±á´ÊÉ´á´á´á´ :* ${p.author}
ââ¢ *á´á´ê±á´ÊÉªá´á´Éªá´É´ :* ${p.title}
â°âââ¬£`
    
    conn.sendFile(m.chat, p.nowm, 'tt.mp4', te, m)
    } catch {  	
    try { 
	const { author: { nickname }, video, description } = await tiktokdl(args[0])
         .catch(async _ => await tiktokdlv2(args[0]))
         .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw 'â Kesalahan Mengunduh Video!'
    let tex = `
âââ· SERVER 2 
â¢ *á´ê±á´ÊÉ´á´á´á´ :* ${nickname} ${description ? `\nâ¢ *Descripcion :* ${description}` : ''}
ââââââââââââ`
conn.sendFile(m.chat, url, 'tt.mp4', tex, m)
} catch {
    m.reply(`â Kesalahan Mengunduh Video!`)
}
} 
    
}  
handler.help = ['tiktok <url>']
handler.tags = ['downloader']
handler.command = /^(tiktok|ttdl|tiktokdl|tiktoknowm|tt|tiktod|dltt)$/i
handler.limit = true

module.exports = handler
