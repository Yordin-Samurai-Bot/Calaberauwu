let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βββγπΦΌ αΉππ―πππππ!sβΉβ·β»βΉπΉβα΅α΅α΅β»α΄Ήα΄°γβ
ββπΎπ€π£π©πππ©π€ | πΎπ€π£π©πππ©
ββWa.me/5212411347467 (BOT)
ββWa.me/5212411261883 (BOT) 
ββWa.me/5212411719888 (CREADOR)
ββWa.me/5212411347465 (CREADOR)
βββββΧβΧβΧβΧβββ
γ€`
let buttonMessage= {
'document': { url: `http://wa.me/5212411347465` },
'mimetype': `application/${document}`,
'fileName': `πππ π·π°π³π΄π π±πΎπ`,
'fileLength': 99999999999999,
'pageCount': 200,
'contextInfo': {
'forwardingScore': 200,
'isForwarded': true,
'externalAdReply': {
'mediaUrl': 'http://wa.me/5212411347465',
'mediaType': 2,
'previewType': 'pdf',
'title': 'http://wa.me/5212411347465β©',
'body': wm,
 }},
'caption': texto1,
'footer': wm,
'buttons':[
{buttonId: `${usedPrefix}menu`, buttonText: {displayText: 'πΎπ΅π² ππΎππ°π½πΈ'}, type: 1}],
'headerType': 6 }
conn.sendMessage(m.chat, buttonMessage, { quoted: m })}
handler.command = /^(contacto|owner|creator|propietario|dueΓ±a|dueΓ±o|propietaria|dueΓ±o|creadora|creador)$/i
export default handler

