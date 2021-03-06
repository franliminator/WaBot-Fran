let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${command} ${text}
*Responder:* ${Math.floor(Math.random() * 10)} ${pickRandom(['segundo', 'minuto', 'hora', 'día', 'domingo', 'mes', 'año', 'década', 'siglo'])} otra vez ...
`.trim(), m)
}
handler.help = ['', 'kah'].map(v => 'kapan' + v + ' <pregunta>')
handler.tags = ['kerang']
handler.command = /^kapan(kah)?/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}

