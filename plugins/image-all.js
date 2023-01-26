let handler = async (m, { conn, command }) => {
let nyenye = `https://api.lolhuman.xyz/api/random/${command}?apikey=${lolkey}`
    conn.sendButtonImg(m.chat, nyenye, 'Nih Kak', wm2, 'next', `.${command}`, m) 
}
handler.help = ['blush', 'cringe', 'dance', 'poke', 'wink', 'happy', 'slap', 'kill', 'glomp', 'bite', 'nom', 'handhold', 'highfive', 'wave', 'smile', 'yeet', 'bonk', 'smug', 'pat', 'lick', 'kiss', 'awoo', 'hug', 'cry', 'cuddle', 'bully']
handler.tags = ['image', 'random']
handler.command = /^(blush|cringe|dance|poke|wink|happy|slap|kill|glomp|bite|nom|handhold|highfive|wave|smile|yeet|bonk|smug|pat|lick|kiss|awoo|hug|cry|cuddle|bully)$/i
//buatan hyzer, jgn hapus atuh :)
module.exports = handler