let handler = async m => m.reply(`
╭─「 Donacion • Pulsa 」
│ • 
╰────
╭─「 Contacto 」
│ > Quieres donar? Wa.me/34693555687
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
