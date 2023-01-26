let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => {
let gh = 'https://github.com/nothing'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'I LOVE YOU',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Buat Yang Donasi,\nSemoga Harimu Baik >~<',
'body':'© FvnkyyBotz-V2',
'thumbnail':await(await fetch('https://telegra.ph/file/9ffffe78abd97918b96c9.jpg')).buffer(),
'sourceUrl':gh}},
'caption':'*Hai Kak👋*\nMau Donasi?\nChat Owner Fvnkyy >-<\nDonasi Seikhlas nya ya kack\n\n_Hasil Donasi Akan Di Pakai Untuk Upgrade Server Bot, Agar Lebih Fast Respon._',
'footer':'© Rellz Store',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'Menu'},'type':1},
{'buttonId':'.sewa','buttonText':{'displayText':'Sewa Bot'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['donasi']
handler.tags = ['main']
handler.command = /^(donasi|donate)$/i

module.exports = handler