//Ini untuk setting Bot
//Untuk gambar background menu ada - di plugins menu
//untuk lainya saran jangan di ubah bre nanti eror

//Global Owner//
global.owner = ['447971533162']  // isi jika perlu
global.mods = ['447971533162']   // isi jika perlu
global.prems = ['447971533162']  // isi jika perlu

//Nomor Owner & payment//
global.nameowner = 'DimSam Store' // isi nama kalian bebas
global.numberowner = '447971533162' // isi ini untuk mengendalikan bot
global.dana = '-' // isi dengan nomor dana yg kamu punya 
global.pulsa = '085608468994' // isi dengan nomor pulsa hp kalian
global.gopay = '-'

//Nama Bot & Grouplink//
global.namebot = 'PSHT Botz'
global.gc = 'https://chat.whatsapp.com/Hu3Mnyh023QGMVhKVOFLmr'
global.web = 'https://youtube.com/@PSHTBotz' //ubah jadi website lu, bisa link ig, link github, link yt, klo link gc ntr beda tampilan lagi. 
global.instagram = 'https://instagram.com/pshtsurabaya'

//Tampilan wm Bot dan pesan bot//
global.lolkey = 'rey2k22' //biar mudah ngegantinya semisal apikeynya expired:v
global.zenzkey = 'BagasPrdn' //ganti jadi apikey lu kalau expired
global.wm = 'Β© PSHT'
global.watermark = wm
global.wm2 = 'β» πππ»πΈππππΌππ ΓαΦΝΓ'
global.wm3 = 'Β© PSHT'
global.wm4 = 'Β© Dim-Dev'
global.fla = 'https://botcahx.ddns.net/api/photooxy/harry-potter?text='
global.wait = '*γβ°β°β°β±β±β±β±β±γ* π¬πππ©! ππ£ π₯π§π€πππ¨π¨...'
global.eror = 'β ππ₯π’π₯ π°π¬π°'
global.benar = 'Benar β\n'
global.salah = 'Salah β\n'
global.stiker_wait = 'πΌππͺπ£πππͺ π¨ππππ£π©ππ§ π ππ ...'
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
      exp: 'βοΈ',
      money: 'π΅',
      potion: 'π₯€',
      diamond: 'π',
      common: 'π¦',
      uncommon: 'π',
      mythic: 'π³οΈ',
      legendary: 'ποΈ',
      pet: 'π',
      sampah: 'π',
      armor: 'π₯Ό',
      sword: 'βοΈ',
      kayu: 'πͺ΅',
      batu: 'πͺ¨',
      string: 'πΈοΈ',
      kuda: 'π',
      kucing: 'π' ,
      anjing: 'π',
      petFood: 'π',
      gold: 'π',
      emerald: 'π'
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
