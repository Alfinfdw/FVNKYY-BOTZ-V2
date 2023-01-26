let fs = require('fs')
let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    let user = global.db.data.users[who]
    let toos = fs.readFileSync('./media/bank.jpg')
    let anu =`┏━━━━ꕥ〔 𝗣 𝗥 𝗢 𝗙 𝗜 𝗟 𝗘 〕ꕥ━━━⬣
┃💌 Nᴀᴍᴇ : ${user.name}
┃📞 Nᴜᴍʙᴇʀ : ${require('awesome-phonenumber')(`+${m.sender.split('@')[0]}`).getNumber('international')}
┃🎨 Aɢᴇ : ${user.registered ? '' + user.age : ''}
┃🎫 Lɪᴍɪᴛ : ${user.limit}
┃💹 Mᴏɴᴇʏ : ${user.money}
┃📍Rᴏʟᴇ : ${user.role}
┃🎟 ️Lɪᴍɪᴛ Gᴀᴍᴇ : ${user.glimit}
┃📊 Lᴇᴠᴇʟ : ${user.level}
┃✨ Exᴘ : ${user.exp}
┗━ꕥ`
    conn.sendButtonImg(m.chat, toos, anu, wm2, 'Inventory💐', '.inv', m) 
}
handler.help = ['my']
handler.tags = ['xp', 'rpg', 'main']
handler.command = /^(my)$/i

module.exports = handler
