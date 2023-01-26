let fetch = require('node-fetch') 
let handler = async (m, { conn, text, usedPrefix, command }) => {
let gh = 'https://github.com/rellzxd'
  let buttonMessage= {
'document':{'url':gh},
'mimetype':'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
'fileName':'RAGUMU-RUGIMU!',
'fileLength':'99999999999999',
'pageCount':'999',
'contextInfo':{
'externalAdReply':{
'showAdAttribution': true, 
'mediaUrl':gh,
'mediaType':2,
'previewType':'pdf',
'title':'Satset Lagi Promo Ygy >-<',
'body':'© Andika-Dev',
'thumbnail':await(await fetch('https://telegra.ph/file/9ffffe78abd97918b96c9.jpg')).buffer(),
'sourceUrl':gh}},
'caption':'*Halo Kak 👋*\nList Sewa Bot\n*10K (Permanent)*\n💳PAYMENT : OVO ~ GOPAY ~PULSA\n\nJika minat hubungi Owner.\nwa.me/+84352438984',
'footer':'© FvnkyyBotz-V2',
'buttons':[
{'buttonId':'.menu','buttonText':{'displayText':'ᴍᴇɴᴜ'},'type':1},
{'buttonId':'.sewa','buttonText':{'displayText':'ꜱᴇᴡᴀ ʙᴏᴛ'},'type':1}
],
'headerType':6}
    await conn.sendMessage(m.chat,buttonMessage, { quoted:m})
}

handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^(sewa|sewabot)$/i

module.exports = handler