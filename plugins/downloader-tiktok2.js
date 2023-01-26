let fetch = require('node-fetch')
let handler = async (m, { conn, args }) => {
if (!args[0]) throw 'Uhm..url nya mana?'
m.reply(wait)
let res = await fetch(`https://api.tiodevhost.my.id/api/dowloader/tikok?url=${args[0]}`)
if (!res.ok) throw await res.text()
let json = await res.json()
if (!json.status) throw json
let { video, description, username } = json.result
await conn.sendFile(m.chat, video, 'video.mp4', `
\n\n💌 *ᴜꜱᴇʀɴᴀᴍᴇ :* ${username}
\n📛 *ᴅᴇꜱᴄʀɪᴘᴛɪᴏɴ :* ${description}
\n\n🏢 *By*: TioXd
`, m, false, { contextInfo: { forwardingScore: 999, isForwarded: true }})
}

handler.help = ['tiktok2 <url>']
handler.tags = ['downloader']

handler.command = /^(tiktok2)$/i
handler.limit = true
module.exports = handler
