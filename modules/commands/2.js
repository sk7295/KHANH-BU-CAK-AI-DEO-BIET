module.exports.config = {
	name: "2",
	version: "1.0.5",
	hasPermssion: 0,
	credits: "nh",
	description: "sailenh",
	commandCategory: "Tiện ích",
	usages: "Tiện ích",
	cooldowns: 0
};

module.exports.run = async function ({ api, event,args,client,Users,Threads,__GLOBAL,Currencies }) {
    //Làm cái gì ở đây tuỳ thuộc vào bạn ¯\_(ツ)_/¯
  const allicon = ["💞","💖","💗","💜","🌸","💗","💝","🎀","🌹","🍁","🎊","🌟","🍁"];
const lol = allicon[Math.floor(Math.random()*allicon.length)];
  let d = [
    ];
    let sticker = d[Math.floor(Math.random() * d.length)];
const axios = require('axios');
    const request = require('request');
    const timeStart = Date.now();
  const dcm = process.uptime(); 
      var anh = Math.floor(dcm / (60 * 60));
	var la = Math.floor((dcm % (60 * 60)) / 60);
	var vtoan = Math.floor(dcm % 60);
  const threadInfo = await api.getThreadInfo(event.threadID)
var { threadID, messageID, body } = event,{ PREFIX } = global.config;
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
  
  const fs = require("fs");
    const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");

   var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
  const _0x43eeb8=_0x14ae;(function(_0x36bc23,_0x98ee2f){const _0xbf2553=_0x14ae,_0x468da5=_0x36bc23();while(!![]){try{const _0x5079d8=-parseInt(_0xbf2553(0x93))/0x1*(-parseInt(_0xbf2553(0x9e))/0x2)+parseInt(_0xbf2553(0x9b))/0x3*(parseInt(_0xbf2553(0xa1))/0x4)+parseInt(_0xbf2553(0x90))/0x5*(parseInt(_0xbf2553(0xa4))/0x6)+parseInt(_0xbf2553(0x91))/0x7*(-parseInt(_0xbf2553(0x92))/0x8)+parseInt(_0xbf2553(0x9a))/0x9+-parseInt(_0xbf2553(0xa3))/0xa+parseInt(_0xbf2553(0x9d))/0xb*(parseInt(_0xbf2553(0x99))/0xc);if(_0x5079d8===_0x98ee2f)break;else _0x468da5['push'](_0x468da5['shift']());}catch(_0x396e9d){_0x468da5['push'](_0x468da5['shift']());}}}(_0x362c,0xddb75));function _0x14ae(_0x1a1353,_0x443db2){const _0x362c8c=_0x362c();return _0x14ae=function(_0x14ae3d,_0x1736fa){_0x14ae3d=_0x14ae3d-0x90;let _0x3778f9=_0x362c8c[_0x14ae3d];return _0x3778f9;},_0x14ae(_0x1a1353,_0x443db2);}function _0x8eb9(_0xb66a78,_0x29e2c4){const _0x184a31=_0x409e();return _0x8eb9=function(_0x4cce7e,_0x43c146){_0x4cce7e=_0x4cce7e-0x1d9;let _0x537eab=_0x184a31[_0x4cce7e];return _0x537eab;},_0x8eb9(_0xb66a78,_0x29e2c4);}const _0x50c1a2=_0x8eb9;function _0x409e(){const _0x44657d=_0x14ae,_0x224e0b=['3174920fmrPRu',_0x44657d(0xa0),_0x44657d(0xa5),'417224CEdZQM','4773804KHMFgM',_0x44657d(0x9f),_0x44657d(0x96),'https://phai-lo.sensiquan.repl.co/image/cadao',_0x44657d(0x95),_0x44657d(0x97)];return _0x409e=function(){return _0x224e0b;},_0x409e();}(function(_0x59939f,_0x5900a3){const _0x3fcc81=_0x14ae,_0x45df09=_0x8eb9,_0x3b462c=_0x59939f();while(!![]){try{const _0x4bb81b=-parseInt(_0x45df09(0x1db))/0x1+parseInt(_0x45df09(0x1da))/0x2+-parseInt(_0x45df09(0x1e0))/0x3*(parseInt(_0x45df09(0x1dd))/0x4)+parseInt(_0x45df09(0x1e2))/0x5+-parseInt(_0x45df09(0x1de))/0x6+parseInt(_0x45df09(0x1df))/0x7+parseInt(_0x45df09(0x1dc))/0x8;if(_0x4bb81b===_0x5900a3)break;else _0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}catch(_0x76aeb3){_0x3b462c[_0x3fcc81(0x94)](_0x3b462c[_0x3fcc81(0xa2)]());}}}(_0x409e,0xc9569));function _0x362c(){const _0x26d429=['24mrIzdD','get','url','5988WISHbU','7020828SteAtj','4669332NJHTIu','data','3872vcyusJ','18Sikdob','7017283VcXxhC','540482UqFHIb','4LbyLwa','shift','15900870cBCcPo','258sWvlEe','1584120xDgqqT','108870rcoJkx','7HtMjaH','8674856YpXsOW','14903JQuzev','push','1036505JrCLuP'];_0x362c=function(){return _0x26d429;};return _0x362c();}const res=await axios[_0x50c1a2(0x1d9)](_0x50c1a2(0x1e1));var tho=res[_0x43eeb8(0x9c)][_0x43eeb8(0x98)];
					let msg = `🐾`
  api.sendMessage({sticker: sticker}, event.threadID);          api.sendMessage({body: msg,attachment: [await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`), await streamURL(threadInfo.imageSrc)]
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
if (event.reaction != "❤") return; 
 api.unsendMessage(handleReaction.messageID);
        var msg = `🐾`
        return api.sendMessage({body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/api1mp3nhacchill')).data.url,
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
        api.sendMessage(`1s`, event.threadID, (err, info) =>
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
🌸 𝗱𝘂̀𝗻𝗴 ?𝗵𝗲𝗹𝗽: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝘁𝗮̂́𝘁 𝗰𝗮̉ 𝗹𝗲̣̂𝗻𝗵 𝗯𝗼𝘁 𝗰𝗼́
💞 𝗱𝘂̀𝗻𝗴 ?𝗰𝗵𝗲𝗰𝗸𝘁𝘁: đ𝗲̂̉ 𝘅𝗲𝗺 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗺𝗮̀ 𝗯𝗮̣𝗻 đ𝗮̃ 𝗻𝗵𝗮̆́𝗻
👤 ?𝗶𝗻𝗳𝗼: 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗮𝗰𝗰 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻
🌷 𝗱𝘂̀𝗻𝗴 ?𝗰𝗵𝗲𝗰𝗸: 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗰𝗮́𝗰 𝗹𝗲̣̂𝗻𝗵 𝘃𝗲̂̀ 𝗰𝗵𝗲𝗰𝗸
💕 ?𝗯𝗼𝘅 𝗶𝗻𝗳𝗼: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝘃𝗲̂̀ 𝗯𝗼𝘅
☠️ ?𝗹𝗼𝗰𝗺𝗲𝗺: 𝗹𝗼̣𝗰 𝗻𝗵𝘂̛̃𝗻𝗴 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗸𝗵𝗼̂𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘁𝗮́𝗰
💝 ?𝘀𝗲𝘁𝗻𝗮𝗺𝗲 + 𝘁𝗲̂𝗻: 𝘀𝗲𝘁 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝗼̛̉ 𝗻𝗵𝗼́𝗺
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗿𝗼̀ 𝗰𝗵𝗼̛𝗶 𝗼𝗿 𝗴𝗶𝗮̉𝗶 𝘁𝗿𝗶́ ] ====
━━━━━━━━━━━━━━━━━━
💍 ?𝗴𝗵𝗲𝗽: 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗰𝗮𝗻𝘃𝗮𝘀 
🕊️ ?𝗴𝗵𝗲́𝗽: 𝗰𝘂̃𝗻𝗴 𝗹𝗮̀ 𝗴𝗵𝗲́𝗽 𝗻𝗵𝘂̛̃𝗻𝗴 𝗹𝗮̀ 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝘁𝗶𝗻𝗱𝗲𝗿
😻 ?𝗴𝗵𝗲𝗽𝗱𝗼𝗶: 𝗴𝗵𝗲́𝗽 đ𝗼̂𝗶 𝗽𝗵𝗶𝗲̂𝗻 𝗯𝗮̉𝗻 𝗿𝗲𝗽𝗹𝘆
━━━━━━━━━━━━━━━━━━
==== [ 𝗩𝗶𝗱𝗲𝗼 𝗼𝗿 𝗻𝗵𝗮̣𝗰 ] ====
━━━━━━━━━━━━━━━━━━
💓 ?𝘆𝗼𝘂𝘁𝘂𝗯𝗲 & 𝘁𝗲̂𝗻 𝗰𝗹𝗶𝗽: 𝘁𝗮̉𝗶 𝗰𝗹𝗶𝗽 𝘁𝗿𝗲̂𝗻 𝘆𝘁𝗯
🎥 ?𝘁𝗶𝗸𝘁𝗼𝗸: 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸𝘁𝗼𝗸 𝗱𝘂̀𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 𝗱̶𝗲̂̉ 𝗯𝗶𝗲̂́𝘁 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁
🎼 ?𝘀𝗶𝗻𝗴 𝗼𝗿 𝘁𝗲̂𝗻 𝗯𝗮̀𝗶 𝗵𝗮́𝘁: 𝗽𝗵𝗮́𝘁 𝗯𝗮̀𝗶 𝗵𝗮́𝘁 𝗱𝗮̣𝗻𝗴 𝘃𝗼𝗶𝗰𝗲𝘀
📺 ?𝗮𝘂𝘁𝗼𝗱𝗼𝘄𝗻: 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝘁𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘂𝗿𝗹
━━━━━━━━━━━━━━━━━━
==== [ 𝗧𝗶𝗲̣̂𝗻 𝗶́𝗰𝗵 ] ====
━━━━━━━━━━━━━━━━━━
🔗 ?𝗶𝗺𝗴𝘂𝗿 + 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̂́𝘆 𝗹𝗶𝗻𝗸 𝗶𝗺𝗴𝘂𝗿
💗 ?𝗻𝗲𝘁𝗮𝗻𝗵 & 𝗿𝗲𝗽𝗹𝘆 𝗮̉𝗻𝗵: 𝗹𝗮̀𝗺 𝗻𝗲́𝘁 𝗮̉𝗻𝗵 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝗿𝗲𝗽𝗹𝘆
🌹 ?𝗮𝘃𝘁𝗱𝗼𝗶: 𝗴𝘂̛̉𝗶 𝗮𝘃𝘁𝗱𝗼𝗶 𝘁𝗵𝗲𝗼 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻
💞 ?𝗾𝗿 + 𝗾𝗿𝘀: 𝗹𝗮̀𝗺 𝗾𝗿 𝘃𝗮̀ 𝗾𝘂𝗲́𝘁 𝗾𝗿
📆 ?𝗮𝗴𝗲 + 𝗻𝗴𝗮̀𝘆 𝘀𝗶𝗻𝗵: đ𝗲̂̉ 𝘅𝗲𝗺 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝗯𝗮̣𝗻 đ𝘂̛𝗼̛̣𝗰 𝘀𝗶𝗻𝗵 𝗿𝗮
━━━━━━━━━━━━━━━━━━
======『 𝗩𝗡𝗛 𝗕𝗢𝗧 』======`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/imgphongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "2": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `🐾`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoang.nhhoangepdaiqaa.repl.co/images/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
        case "3": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `api: ProfileVoNhatHoang.nhhoangepdaiqaa.repl.co`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoang.nhhoangepdaiqaa.repl.co/images/videogai')).data.url,
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
url: (await global.nodemodule["axios"]('https://apinhathoang.nhhoangepdaiqaa.repl.co/images/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
          case "6": {
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
    listad_msg += `→ ${i++}. 𝐓𝐞̂𝐧: ${infoUsers.name}\n`
  }
 api.unsendMessage(handleReply.messageID); 
 var msg = `=====「 𝗧𝗛𝗢̂𝗡𝗚 𝗧𝗜𝗡 𝗡𝗛𝗢́𝗠 」=====\n\n🏘️ 𝗧𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadName}\n⚙️ 𝗜𝗗 𝗻𝗵𝗼́𝗺: ${event.threadID}\n👥 𝗦𝗼̂́ 𝘁𝗵𝗮̀𝗻𝗵 𝘃𝗶𝗲̂𝗻 𝗻𝗵𝗼́𝗺: ${threadInfo.participantIDs.length}\n 🧑 𝗡𝗮𝗺: ${nam}\n👧 𝗡𝘂̛̃ : ${nu}\n💞 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${qtv}\n 📚 𝗗𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗤𝘂𝗮̉𝗻 𝘁𝗿𝗶̣ 𝘃𝗶𝗲̂𝗻: ${listad_msg}\n🌷 𝗣𝗵𝗲̂ 𝗱𝘂𝘆𝗲̣̂𝘁: ${pd}\n😻 𝗕𝗶𝗲̂̉𝘂 𝘁𝘂̛𝗼̛̣𝗻𝗴 𝗰𝗮̉𝗺 𝘅𝘂́𝗰: ${icon ? icon : 'Không sử dụng'}\n💝 𝗠𝗮̃ 𝗴𝗶𝗮𝗼 𝗱𝗶𝗲̣̂𝗻: ${color}\n━━━━━━━━━━━━━━━━━━\n🍑 𝗧𝗼̂̉𝗻𝗴 𝘀𝗼̂́ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺: ${sl}\n 📔 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼 𝗱𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂: ${timeNow}\n🎀 𝗣𝗵𝗶́𝗮 𝘁𝗿𝗲̂𝗻 𝗹𝗮̀ 𝘁𝗵𝗼̂𝗻𝗴 𝘁𝗶𝗻 𝗰𝘂̉𝗮 𝗻𝗵𝗼́𝗺 𝗯𝗮̣𝗻 𝗱𝘂̀𝗻𝗴 𝗯𝗼𝘅 𝗶𝗻𝗳𝗼 đ𝗲̂̉ 𝘅𝗲𝗺 𝗰𝗵𝗶 𝘁𝗶𝗲̂́𝘁`
return api.sendMessage({body: msg, attachment: await streamURL(threadInfo.imageSrc)},event.threadID,event.messageID)
  
                                                                                             }
           
          case "5": {
          const axios = require('axios');
       api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: `chờ done!`, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoang.nhhoangepdaiqaa.repl.co/images/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
          }
             case "7": {
          const moment = require("moment-timezone");
  const táo = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
  let tpk1 = `chờ done!`
	const gettext = (await api.getThreadInfo(event.threadID)).adminIDs;
	var id = gettext;
var id = [];
var mentions = [];
for (var i of gettext) {
const admin = i.id;
const name = (await Users.getData(admin)).name;
	id.push(name);
	mentions.push({
		id: admin,
		tag: name
	})
}
return api.sendMessage({body: tpk + tpk1 + id.join('\n') + tpk2 , mentions, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoang.nhhoangepdaiqaa.repl.co/images/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data
 },event.threadID);          
   
        }
            

            break;
					default:
           const choose = parseInt(event.body);
            	if (isNaN(event.body)) return api.sendMessage("→ 𝐕𝐮𝐢 𝐥𝐨̀𝐧𝐠 𝐧𝐡𝐚̣̂𝐩 𝟏 𝐜𝐨𝐧 𝐬𝐨̂́", event.threadID, event.messageID);
            	if (choose > 7 || choose < 1) return api.sendMessage("→ 𝐋𝐮̛̣𝐚 𝐜𝐡𝐨̣𝐧 𝐤𝐡𝐨̂𝐧𝐠 𝐧𝐚̆̀𝐦 𝐭𝐫𝐨𝐧𝐠 𝐝𝐚𝐧𝐡 𝐬𝐚́𝐜𝐡.", event.threadID, event.messageID); 
    }
    }
 }
}