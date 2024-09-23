module.exports.config = {
  name: "\n",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "nhathoang",
  description: "Random ảnh gái khi dùng dấu lệnh",
  commandCategory: "Hình ảnh",
  usages: "noprefix",
  cooldowns: 5,
  dependencies: {
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};

const axios = require('axios');
const request = require('request');
const PREFIX = config.PREFIX
const timeStart = Date.now();
  const time = process.uptime();
		 var h = Math.floor(time / (60 * 60));
		var m = Math.floor((time % (60 * 60)) / 60);
	var s = Math.floor(time % 60);
const fs = require("fs");
module.exports.run = async({api,event,args}) => {
  const { threadID, messageID, senderID, body } = event;
const moment = require("moment-timezone");
 var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
var tl = ["🐾" , "🌬" , "🌸" , "☁️" , "💌" , "🐢" , "🌊" , "🥀" , "🧸" , "🥨" , "❤️‍🩹" , "🍇" , "🫒" , "🍑" , "🎀" , "🚬" , "🐧" , "🦅" , "🐸" , "🐉" , "🦖" , "🐙" , "🦑" , "🏵" , "🌻" , "🍁" , "🌷" , "🍀" , "💮" , "🦋" , "🧀" , "🍤" , "☕️" , "🍕" , "🍒" , "🎊"];
var tle = tl[Math.floor(Math.random() * tl.length)];
const t = Date.parse("January 23, 2023 00:00:00") - Date.parse(new Date());
    const seconds = Math.floor( (t/1000) % 60 );
    const minutes = Math.floor( (t/1000/60) % 60 );
    const hours = Math.floor( (t/(1000*60*60)) % 24 );
    const days = Math.floor( t/(1000*60*60*24) );
  if (thu == 'Sunday') thu = 'Chủ nhật'
  if (thu == 'Monday') thu = 'Thứ hai'
  if (thu == 'Tuesday') thu = 'Thứ ba'
  if (thu == 'Wednesday') thu = 'Thứ tư'
  if (thu == "Thursday") thu = 'Thứ năm'
  if (thu == 'Friday') thu = 'Thứ sáu'
  if (thu == 'Saturday') thu = 'Thứ bảy'
	const res = await axios.get(`https://apinhathoanghaikhkhsau--dawnlover.repl.co/cadao`);
var cadao = res.data.url;
  api.sendMessage({
                                                body: `🥨====  𝗕𝗮̀𝗻 𝗧𝘂𝗮̂́𝗻 𝗞𝗵𝗮𝗻𝗵  ====🥨\n━━━━━━━━━━━━━━━━━━\n⏰️ 𝗧𝗶𝗺𝗲: ${thu} | ${gio}\n⌛️ 𝗕𝗼𝘁 𝗼𝗻𝗹: ${h}:${m}:${s}\n◆━━━◆『${tle}』◆━━━◆\n☁️ 𝗖𝗮 𝗱𝗮𝗼: ${cadao}\n━━━━━━━━━━━━━━━━━━\n⚙️ 𝗧𝗶̀𝗻𝗵 𝘁𝗿𝗮̣𝗻𝗴: deplay\n🌸 𝗧𝗼̂́𝗰 đ𝗼̣̂ 𝘅𝘂̛̉ 𝗹𝘆́: ${timeStart}\n🕰 Đ𝗼̣̂ 𝘁𝗿𝗲̂̃: ${Date.now() - timeStart}ms\n\n💮 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👍" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗰𝘂̉𝗮 𝗯𝗼𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗺𝗲𝗻𝘂 𝘁𝗶𝗲̣̂𝗻 𝗶́𝗰𝗵`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/imggaidawn')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
    },event.messageID);
     }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users}) => {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `=== [ 𝗠𝗘𝗡𝗨 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 ] ===\n━━━━━━━━━━━━━━━━━━\n𝟭. 𝗫𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝗵𝗮𝘆 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴\n𝟮. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗹𝗶𝗲̂𝗻 𝗵𝗲̣̂ 𝗮𝗱𝗺𝗶𝗻 𝗯𝗼𝘁 ☎️\n𝟯. 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘄𝗲𝗯 𝗮𝗽𝗶 𝗰𝘂̉𝗮 𝗡𝗴𝗼̂ 𝗧𝗿𝘂𝗻𝗴 𝗞𝗶𝗲̂𝗻/𝗯𝗼𝘁 🖨️\n𝟰. 𝗧𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘁 💻\n𝟱. 𝗫𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 🐰\n\n𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/api1mp3nhacchill')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
}) {
  const axios = require("axios");
  const fs = require("fs-extra");
        api.sendMessage(`vui lòng chờ 1 xíu 😻`, event.threadID, (err, info) =>
	setTimeout(() => {api.unsendMessage(info.messageID) } , 100000));
  const request = require("request");
       const nameUser = (await Users.getData(event.senderID)).name || (await Users.getInfo(envent.senderID)).name;
  let data = (await Currencies.getData(event.senderID)).ghepTime;
 
    
    switch (handleReply.type) {
    case "choosee": {
        switch (event.body) {
          case "" :
          case "":
        case "1": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗠𝗨𝗟𝗧𝗜𝗣𝗟𝗘 𝗨𝗦𝗘𝗗 𝗖𝗢𝗠𝗠𝗔𝗡𝗗𝗦 ] ====
━━━━━━━━━━━━━━━━━━
🐰 𝗖𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘁𝗵𝘂̛𝗼̛̀𝗻𝗴 đ𝘂̛𝗼̛̣𝗰 𝗱𝘂̀𝗻𝗴 🐰
==== [ 𝗡𝗵𝗼́𝗺 𝗼𝗿 𝗯𝗼𝘅 ] ====
━━━━━━━━━━━━━━━━━━
🌸 𝗱𝘂̀𝗻𝗴 !𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
💞 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
👤 !𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
🌷 𝗱𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
💕 !𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅
☠️ !𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
💝 !𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗿𝗼̀ 𝗰𝗵𝗼̛𝗶 𝗼𝗿 𝗴𝗶𝗮̉𝗶 𝘁𝗿𝗶́ ] ====
━━━━━━━━━━━━━━━━━━
💍 !𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
🕊️ !𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
😻 !𝗴𝗵𝗲𝗽𝗱𝗼𝗶: 𝗴𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗿𝗲𝗽𝗹𝘆
━━━━━━━━━━━━━━━━━━
==== [ 𝗩𝗶𝗱𝗲𝗼 𝗼𝗿 𝗻𝗵𝗮̣𝗰 ] ====
━━━━━━━━━━━━━━━━━━
💓 !𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
🎥 !𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
🎼 !𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
📺 !𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻: 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘂𝗿𝗹
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗶𝗲̣̂𝗻 𝗶́𝗰𝗵 ] ====
━━━━━━━━━━━━━━━━━━
🔗 !𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
💗 !𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
🌹 !𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
💞 !𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿
📆 !𝗮𝗴𝗲 + 𝗻𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘀𝗶𝗻𝗵 𝗿𝗮
━━━━━━━━━━━━━━━━━━
======『 𝗩𝗡𝗛 𝗕𝗢𝗧 』======`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🌐 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: https://www.facebook.com/Trungkiendepzaiqua?mibextid=ZbWKwL\n💬 𝗠𝗲𝘀𝘀𝗲𝗻𝗴𝗲𝗿𝘀: https://m.me/100001378940139\n📲 𝗭𝗮𝗹𝗼: 000\n☎️ 𝗖𝗮𝗹𝗹: 000`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🖥 𝗪𝗲𝗯 𝗮𝗽𝗶 𝗡𝗵𝗵𝗼𝗮𝗻𝗴: apinhathoanghaikhsau.vnhoang06.repl.co`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill')).data.data,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "4": {
const admin = config.ADMINBOT
    const ndh = config.NDH
          const namebot = config.BOTNAME
          const { commands } = global.client;
          const PREFIX = config.PREFIX
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `==== [ 𝗕𝗢𝗧 𝗜𝗡𝗙𝗢 ] ====
━━━━━━━━━━━━━━━━━━\n\n🖥 𝗠𝗼𝗱𝘂𝗹𝗲𝘀: 𝗖𝗼́ ${commands.size} 𝗹𝗲̣̂𝗻𝗵 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝘂̛̉ 𝗱𝘂̣𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁\n📎 𝗣𝗿𝗲𝗳𝗶𝘅: 𝗗𝗮̂́𝘂 𝗹𝗲̣̂𝗻𝗵 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘁𝗿𝗲̂𝗻 𝗯𝗼𝘁 𝗹𝗮̀ [ ${PREFIX} ]\n💓 𝗡𝗮𝗺𝗲 𝗯𝗼𝘁: ${namebot}\n💬 𝗟𝗶𝘀𝘁𝗯𝗼𝘅: 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗼̛̉ ${global.data.allThreadID.length} 𝗯𝗼𝘅\n👑 𝗛𝗶𝗲̣̂𝗻 𝘁𝗮̣𝗶 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗼́ ${admin.length} 𝗮𝗱𝗺𝗶𝗻 𝘃𝗮̀  ${ndh.length} 𝗻𝗱𝗵\n━━━━━━━━━━━━━━━━━━\n𝗦𝗮𝘂 đ𝐚̂𝘆 𝗹𝗮̀ 𝗹𝗼̛̀𝗶 𝗻𝗼́𝗶 𝗯𝗼𝘁 𝗺𝘂𝗼̂́𝗻 𝗴𝘂̛̉𝗶 đ𝗲̂́𝗻 𝗯𝗮̣𝗻: Đ𝘂̛̀𝗻𝗴 𝘀𝗽𝗮𝗺 𝘁𝘂𝗶 𝗻𝗵𝗮́ 𝘃𝗶̀ 𝘁𝘂𝗶 𝗿𝗮̂́𝘁 𝗰𝘂𝘁𝗶 , 𝘁𝘂𝗶 𝘀𝗲̃ 𝗽𝗵𝘂̣𝗰 𝘃𝘂̣ 𝗯𝗮̣𝗻 𝟭 𝗰𝗮́𝗰𝗵 𝗻𝗵𝗶𝗲̣̂𝘁 𝘁𝗶̀𝗻𝗵 𝗻𝗵𝗮̂́𝘁 💓`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/robot')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
            }
            case "5": {
const axios = global.nodemodule["axios"];
const fs = global.nodemodule["fs-extra"];
const { threadID, messageID, userID } = event;
  const moment = require("moment-timezone");
   const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  async function streamURL(url, mime='jpg') {
    const dest = `${__dirname}/cache/${Date.now()}.${mime}`,
    downloader = require('image-downloader'),
    fse = require('fs-extra');
    await downloader.image({
        url, dest
    });
    setTimeout(j=>fse.unlinkSync(j), 60*1000, dest);
    return fse.createReadStream(dest);
};
          let threadInfo = await api.getThreadInfo(event.threadID);
            let img = threadInfo.imageSrc;
            var gendernam = [];
            var gendernu = [];
            var nope = [];
                for (let z in threadInfo.userInfo) {
      var gioitinhone = threadInfo.userInfo[z].gender;
      var nName = threadInfo.userInfo[z].name;
      if (gioitinhone == "MALE") {
        gendernam.push(z + gioitinhone)
      } else if (gioitinhone == "FEMALE") {
        gendernu.push(gioitinhone)
      } else {
        nope.push(nName)
      }
    }; 
                         var nam = gendernam.length;
             var nu = gendernu.length;
             var kxd = nope.length;
         let threadName = threadInfo.threadName;
            let qtv = threadInfo.adminIDs.length;
            let sl = threadInfo.messageCount;
             let icon = threadInfo.emoji;
                      let color = threadInfo.color;
             let sex = threadInfo.approvalMode;
       var pd = sex == false ? "tắt" : sex == true ? "bật" : "\n";
 
                  var i = 1;
                       var listad_msg = '';
  var adminIDs = threadInfo.adminIDs;
	for (let get of adminIDs) {
    const infoUsers = await Users.getInfo(get.id);
    listad_msg += `• ${i++}. 𝗧𝗲̂𝗻: ${infoUsers.name}\n`
  }
 api.unsendMessage(handleReply.messageID); 
 var msg = `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${event.threadID}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.participantIDs.length}\n 🧑 𝗡𝗮𝗺: ${nam}\n👧 𝗡𝘂̛̃ : ${nu}\n💞 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n📚 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${listad_msg}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${sl}\n 📔 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂: ${timeNow}\n🎀 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁`
return api.sendMessage({body: msg, attachment: await streamURL(threadInfo.imageSrc)},event.threadID,event.messageID)
  
            }
            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ Vui lòng nhập 1 con số", event.threadID, event.messageID);
            	if (choose > 4 || choose < 1) return api.sendMessage("→ Lựa chọn không nằm trong danh sánh.", event.threadID, event.messageID); 
    }
    }
}
  }