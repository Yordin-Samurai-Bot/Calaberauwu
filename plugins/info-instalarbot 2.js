let handler = async (m, { conn, usedPrefix }) => {
let pp = 'https://i.imgur.com/lkch77g.jpeg' 
var doc = ['pdf','zip','vnd.openxmlformats-officedocument.presentationml.presentation','vnd.openxmlformats-officedocument.spreadsheetml.sheet','vnd.openxmlformats-officedocument.wordprocessingml.document']
var document = doc[Math.floor(Math.random() * doc.length)]    
let texto1 = `
βγπΈπ½πππ°π»π°π²πΈπΎπ½ π³π΄π» π±πΎπγ
ββ ΰΉΫ£ΫΝ‘ΝΫππ¨π₯ππ este este tutorial de explica cΓ³mo tener un bot activo 24/7π en Boxmuneπ Si te ha gustado el video No olvides suscribirte dejar tu likeπ¦
βββββΧβΧβΧβΧβββ
βγππππππππ: ππππ’ :γ
ββhttps://youtu.be/Gn-ESCcdFGw
βββββΧβΧβΧβΧβββ
βγπ½ππΌπ΄ππΎ π³π΄π πΌπΈ π²ππ΄π°π³πΎπγ
ββhttp://wa.me/5212411347465
βββββΧβΧβΧβΧβββ
βγππ·π°πππ°πΏπΏ ππ΄π²πΎπΌπ΄π½π³π°π³πΎ γ
ββhttps://www.mediafire.com/file/o80pni1rfi0n6zz/Κα΄sΝ¨ΙͺΝ§Ι΄α·¨α΄Ν£sα·‘ΰΉsΝ¦_V6_PRIMARIO.apk/file
βββββΧβΧβΧβΧβββ
βγππ·π°πππ°πΏπΏ ππ΄π²πΎπΌπ΄π½π³π°π³πΎ γ
ββhttps://www.mediafire.com/file/4kkiwpxvciabjf5/Κα΄sΝ¨ΙͺΝ§Ι΄α·¨α΄Ν£sα·‘ΰΉsΝ¦_V6_SECUNDARIO.apk/file
βββββΧβΧβΧβΧβββ
βγπΏπ°πΆπΈπ½π° π³π΄ π±πΎππΌππ½π΄ππΎππ»π³γ
ββhttps://dash.boxmineworld.com/register?ref=Mb0BN5ny
βββββΧβΧβΧβΧβββ
βγπΆπΈπ π²π»πΎπ½π΄γ
ββgit clone https://github.com/Yovanihades1212/HADES-BOT-MDV2.git
βββββΧβΧβΧβΧβββ
βγππ΄ππΌππγ
ββhttps://www.mediafire.com/file/190g4b86nhyof7b/com.termux_118.apk/file?dkey=wfddtbi5jtj98
βββββΧβΧβΧβΧβββ`
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
handler.command = /^(instalarbot2|instalarbot2)$/i
export default handler

