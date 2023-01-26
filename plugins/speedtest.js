let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	await conn.reply(m.chat, `Please Wait`, m)
    let o
    try {
        o = await exec('python3 speed.py --share --secure')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) conn.sendButton(m.chat, `SPEEDTEST.NET`, stdout, null, [["Mᴇɴᴜ", ".menu"],["Oᴡɴᴇʀ", ".owner"]], m)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['speedtest']
handler.tags = ['main']
handler.command = /^(speedtest)$/i

module.exports = handler
