let handler = async m => {

let krtu = `Kartu Intro`
m.reply(`
╭─── *「 KARTU INTRO 」*
│       
│ *Nama     :* 
│ *Gender   :* 
│ *Umur      :* 
│ *Hobby    :* 
│ *Kelas      :* 
│ *Asal         :* 
│ *Agama    :* 
│ *Status     :* 
╰──────────────`.trim()) 
}
handler.command = /^(intro)$/i

module.exports = handler
