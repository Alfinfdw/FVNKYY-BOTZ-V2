//Ini untuk setting Bot
//Untuk gambar background menu ada - di plugins menu
//untuk lainya saran jangan di ubah bre nanti eror

//Global Owner//
global.owner = ['6285876138954']  // isi jika perlu
global.mods = ['84352438984']   // isi jika perlu
global.prems = ['84352438984']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = 'Andika Store' // isi nama kalian bebas
global.numberowner = '6285876138954' // isi ini untuk mengendalikan bot
global.dana = '-' // isi dengan nomor dana yg kamu punya 
global.pulsa = '085876138954' // isi dengan nomor pulsa hp kalian
global.gopay = '-'

//Nama Bot & Grouplink//
global.namebot = 'Fvnkyy Botz'
global.gc = 'https://chat.whatsapp.com/Hu3Mnyh023QGMVhKVOFLmr'
global.web = 'https://youtube.com/@FvnkyyBotz' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://instagram.com/rellz.fvnkyy'

//Tampilan wm Bot dan pesan bot//
global.lolkey = 'rey2k22' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = '© Fvnkyy Botz'
global.watermark = wm
global.wm2 = '⻝ 𝗙𝘃𝗻𝗸𝘆𝘆𝗕𝗼𝘁𝘇 ×፝֟͜×'
global.wm3 = '© Fvnkyy Botz'
global.wm4 = '© Andika-Dev'
global.fla = 'https://botcahx.ddns.net/api/photooxy/harry-potter?text='
global.wait = '*「▰▰▰▱▱▱▱▱」* 𝙬𝙖𝙞𝙩! 𝙞𝙣 𝙥𝙧𝙤𝙘𝙚𝙨𝙨...'
global.eror = '✘ 𝗘𝗥𝗢𝗥 𝟰𝟬𝟰'
global.benar = 'Benar ✅\n'
global.salah = 'Salah ❌\n'
global.stiker_wait = '🐼𝙏𝙪𝙣𝙜𝙜𝙪 𝙨𝙚𝙗𝙚𝙣𝙩𝙖𝙧 𝙠𝙖𝙠...'
global.packname = 'Made with'
global.author = 'Bot WhatsApp\nFvnkyy Botz'

//Apikey Setting//
global.APIs = { // API Prefix
  // name: 'https://website'
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  zeks: 'https://api.zeks.xyz',
  zekais: 'http://zekais.com',
  lolhuman: 'https://api.lolhuman.xyz',
  tio: 'http://api.tiodevhost.my.id', 
  rey: 'https://sekha.me'
}
global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://sekha.me': 'apirey',
  'https://api.xteam.xyz': 'd37372311698ed1d',
  'https://pencarikode.xyz': 'pais', 
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://zekais.com': 'apikeymu',
  'https://api.lolhuman.xyz': 'Deffbotz',
}

//Setting Rpg//
global.multiplier = 45 // The higher, The harder levelup
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      sampah: '🗑',
      armor: '🥼',
      sword: '⚔️',
      kayu: '🪵',
      batu: '🪨',
      string: '🕸️',
      kuda: '🐎',
      kucing: '🐈' ,
      anjing: '🐕',
      petFood: '🍖',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

//Jangan merubah bagian ini ! //
let fs = require('fs')
let chalk = require('chalk')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})
