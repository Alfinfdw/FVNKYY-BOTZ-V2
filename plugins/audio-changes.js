const fs = require('fs')
const path = require('path')
const { exec } = require('child_process')

let handler = async (m, { conn, args, usedPrefix, command }) => {
    try {
        let q = m.quoted ? m.quoted : m
        let mime = (q.msg || q).mimetype || ''
        if (!/audio/.test(mime)) throw `Balas vn/audio yang ingin diubah dengan caption *${usedPrefix + command}*`
        let audio = await q.download()
        if (!audio) throw 'Can\'t Download Audio!'
        let set
        if (/bass/.test(command)) set = '-af equalizer=f=94:width_type=o:width=2:g=30'
        if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
        if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
        if (/earrape/.test(command)) set = '-af volume=12'
        if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
        if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
        if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
        if (/reverse/.test(command)) set = '-filter_complex "areverse"'
        if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
        if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
        if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
        if (/tupai|squirrel|chipmunk/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
        if (/vibra/.test(command)) set = '-filter_complex "vibrato=f=15"'
        let ran = (new Date * 1) + '.mp3'
        let media = path.join(__dirname, '../tmp/' + ran)
        let filename = media + '.mp3'
        await fs.promises.writeFile(media, audio)
        exec(`ffmpeg -i ${media} ${set} ${filename}`, async (err) => {
            await fs.promises.unlink(media)
            if (err) return Promise.reject( `_*Error!*_`)
            let buff = await fs.promises.readFile(filename)
            conn.sendFile(m.chat, buff, ran, null, m, /vn/.test(args[0]), { quoted: m, mimetype: 'audio/mp4' })
            await fs.promises.unlink(filename)
        })
    } catch (e) {
        throw e
    }
}
handler.help = ['bass', 'blown', 'deep', 'earrape', 'fast', 'fat', 'nightcore', 'reverse', 'robot', 'slow', 'smooth', 'tupai', 'vibra'].map(v => v + ' <vn>')
handler.tags = ['Pengubah Suara']
handler.command = /^(bass|blown|deep|earrape|fas?t|nightcore|reverse|robot|slow|smooth|tupai|vibra)$/i

module.exports = handler
