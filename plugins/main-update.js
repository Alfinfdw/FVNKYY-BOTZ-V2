let cp = require ('child_process')
let { promisify } = require ('util')
let exec = promisify(cp.exec).bind(cp)
let handler = async (m, { conn}) => {
	await conn.reply(m.chat, `Looking For Resources...`, m)
    let o
    try {
        o = await exec('git pull')
    } catch (e) {
        o = e
    } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) conn.sendButton(m.chat, `root@tio`, stdout, null, [["BACK", ".menu"],["COMMAND", ".pay"]], m)
        if (stderr.trim()) m.reply(stderr)
    }
}
handler.help = ['npminfo']
handler.tags = ['info']
handler.command = /^(act|updategit|update)$/i

module.exports = handler
