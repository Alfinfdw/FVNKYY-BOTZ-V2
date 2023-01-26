let fetch = require ('node-fetch')
let { youtubeSearch } = require ('@bochilteam/scraper')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm, url nya mana kak?'
  m.reply('JOIN GROUP BOT 🐼 : https://chat.whatsapp.com/Hu3Mnyh023QGMVhKVOFLmr')
  let vid = (await youtubeSearch(text)).video[0]
  let { videoId } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = `https://ytdl.tiodevhost.my.id/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: m })
}
handler.help = ['youtubeaudio <url>']
handler.tags = ['downloader']
handler.command = /^(yta|ytaudio|ytmp3)$/i
handler.limit = true 
module.exports = handler
