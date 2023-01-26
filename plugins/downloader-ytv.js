let fetch = require ('node-fetch')
let { youtubeSearch } = require ('@bochilteam/scraper')
let handler = async (m, { conn, text }) => {
  if (!text) throw 'Uhm, url nya mana kak?'
  m.reply('JOIN GROUP BOT🐼 : https://chat.whatsapp.com/Hu3Mnyh023QGMVhKVOFLmr')
  let vid = (await youtubeSearch(text)).video[0]
  let { videoId } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
let ytLink = `https://ytdl.tiodevhost.my.id/?url=${url}&filter=audioandvideo&quality=highestvideo&contenttype=video/mp4`
  conn.sendMessage(m.chat, { video: { url: ytLink }, mimetype: 'video/mp4' }, { quoted: m })
}
handler.help = ['youtubevideo <url>']
handler.tags = ['downloader']
handler.command = /^(ytv|ytvideo|ytmp4)$/i
handler.limit = true 
module.exports = handler
