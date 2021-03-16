let handler  = async (m, { conn, command, text }) => {
  let type = command.replace(/^set(menu|help|\?)/, '').toLowerCase()
  if (type == '') {
    if (text) {
      conn.menu = text
      conn.reply(m.chat, 'Menu configurado con exito\n' + info, m)
    } else {
      conn.menu = {}
      conn.reply(m.chat, 'El menu se reinicia', m)
    }
  } else {
    conn.menu = typeof conn.menu == 'object' ? conn.menu : {}
    if (text) {
      conn.menu[type] = text
      conn.reply(m.chat, 'Menu ' + type + ' configurado con exito\n' + info, m)
    } else {
      delete conn.menu[type]
      conn.reply(m.chat, 'El menu ' + type + ' se reinicia', m)
    }
  }
}
handler.help = ['', 'before','header','body','footer','after'].map(v => 'setmenu' + v + ' <texto>')
handler.tags = ['owner']
handler.command = /^set(menu|help|\?)(before|header|body|footer|after)?$/i
handler.owner = true
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

let info = `
Universal:
%% (%)
%p (Prefix)
%exp (Exp)
%limit (Limit)
%name (Nama)
%weton (Weton Hoy)
%week (Hari)
%date (Tanggal)
%time (Jam)
%uptime (Uptime Bot)
%totalreg (Número de usuarios en la database)

Seccion del menu cabecera & pie:
%category (categoria)

Seccion cuerpo menu:
%cmd (comando)
%islimit (si el comando es limitado)
`.trim()
