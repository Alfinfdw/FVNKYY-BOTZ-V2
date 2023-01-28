let handler = async (m, { conn, args, command }) => {
let totalf = Object.values(global.plugins).filter(
    (v) => v.help && v.tags
  ).length;
conn.reply(m.chat, `🎈Tᴏᴛᴀʟ Fɪᴛᴜʀ Fᴠɴᴋʏʏ-Bᴏᴛᴢ Sᴀᴀᴛ Iɴɪ : 𝟰𝟬𝟬+`,m)
}

handler.help = ['totalfitur']
handler.tags = ['main']
handler.command = /^(totalfitur)$/i
module.exports = handler
