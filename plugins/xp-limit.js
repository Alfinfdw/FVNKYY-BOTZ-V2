let handler = async (m) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.sender
    else who = m.sender
    fdoc = {
  key : {
  remoteJid: 'status@broadcast',
  participant : '0@s.whatsapp.net'
  },
  message: {
  documentMessage: {
  title: wm, 
                            }
                          }
                        }
conn.sendBut(m.chat, `${global.db.data.users[who].limit} Limit Tersisaಥ_ಥ`, wm, 'BUY LIMIT', '.buy', fdoc)
}
handler.help = ['ceklimit']
handler.tags = ['xp']
handler.command = /^(limit|ceklimit)$/i
module.exports = handler
