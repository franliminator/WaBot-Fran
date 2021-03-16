let handler = async (m, { conn, command, text }) => {
  conn.reply(m.chat, `
*Pregunta:* ${command} ${text}
*Respuesta:* ${pickRandom(['Sí','Tal vez sí','Quizás','Probablemente no','No','Imposible'])}
`.trim(), m)
}
handler.help = ['apakah <pregunta>']
handler.tags = ['kerang']
handler.command = /^apakah/i
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

