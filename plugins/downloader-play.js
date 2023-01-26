let fetch = require ('node-fetch')
let { youtubeSearch } = require ('@bochilteam/scraper')

let handler = async (m, { conn, text, usedPrefix }) => {
  if (!text) throw 'Input Url Link!'
  let vid = (await youtubeSearch(text)).video[0]
  if (!vid) throw 'Video/Audio tidak ditemukan.'
  let { title, description, thumbnail, videoId, durationH, durationS, viewH, publishedTime } = vid
  let url = 'https://www.youtube.com/watch?v=' + videoId
  let ytLink = `https://ytdl.tiodevhost.my.id/?url=${url}&filter=audioonly&quality=highestaudio&contenttype=audio/mpeg`
  let capt = `⭔ Title : ${title}\n\n⭔ Published : ${publishedTime}\n⭔ Duration : ${durationH}\n⭔ Views : ${viewH}\n⭔ Description : ${description}\n⭔ Url : ${url}`
  let buttons = [{ buttonText: { displayText: 'VIDEO' }, buttonId: `${usedPrefix}ytv ${url}` }]
  let msg = await conn.sendMessage(m.chat, { image: { url: thumbnail }, caption: capt, footer: '_Audio In Process..._', buttons }, { quoted: m })
 if (durationS > 80000) return conn.sendMessage(m.chat, { text: `*Download :* ${await shortUrl(ytLink)}\n\n_Durasi terlalu panjang download manual saja lewat link berikut..._` }, { quoted: msg })
  conn.sendMessage(m.chat, { audio: { url: ytLink }, mimetype: 'audio/mpeg' }, { quoted: msg })
}
handler.help = ['play <pencarian>']
handler.tags = ['downloader']
handler.command = /^(play|song)$/i
handler.exp = 0
handler.limit = true 
module.exports = handler

async function shortUrl(url) {
  url = encodeURIComponent(url)
  let res = await fetch(`https://api.tiodevhost.my.id/api/linkshort/cuttly?link=${url}`)
  if (!res.ok) throw false
  return await res.text()
}
