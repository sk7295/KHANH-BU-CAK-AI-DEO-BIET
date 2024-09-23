module.exports.config = {
	name: "checknude",
	version: "0.0.1",
	hasPermssion: 0,
	credits: "D-Jukie",
	description: "Phát hiện ảnh nude được gửi vào nhóm",
	commandCategory: "tiện ích",
	usages: "Phát hiện ảnh nude được gửi vào nhóm",
	cooldowns: 5,
  dependencies: {
        "axios": ""
    },
    envConfig: {
        "maxColumn": 0
    }
};

module.exports.handleEvent = async function ({ api, event, args, Users, Threads }) {
const axios = require('axios');
let data = (await Threads.getData(event.threadID)).data
if (event.isGroup == false) return;
//if (typeof data.checkNude == "undefined" || data.checkNude == false) return;
else if(undefined !== event.attachments && data.checkNude == true  && event.attachments['length'] != 0) {
  var dataa = event.attachments[0]
  if(dataa['type'] !== 'photo') return
  const ress = await axios.get(`https://APITPK-PHU.last-namename.repl.co/imgurupload?apikey=Tpk05&link=${encodeURIComponent(dataa.url)}`)
	const link = ress.data.uploaded.image;
  var res = await axios.get(`https://APITPK-PHU.last-namename.repl.co/nuditydetection?apikey=Tpk05&link=${link}`);
  const picture = (await axios.get(`https://i.imgur.com/PTovrwm.gif`, { responseType: "stream"})).data
  var img = res.data.data;
  if(img > 80) { return api.sendMessage({body: `🌚===『 𝗔𝗨𝗧𝗢𝗖𝗛𝗘𝗖𝗞 𝗡𝗨𝗗𝗘 』===🌚
🔰 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗮̉𝗻𝗵: ${res.data.NSFW_Prob}
━━━━━━━━━━━━━━━━━━━━
👉 𝗗𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸𝗻𝘂𝗱𝗲 𝗼𝗳𝗳 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̆́𝘁 𝗰𝗵𝘂̛́𝗰 𝗻𝗮̆𝗻𝗴 𝗻𝗮̀𝘆`, attachment: (picture)}, event.threadID, event.messageID) 
  }
  }
}
module.exports.run = async ({ args, api, event, Currencies, client,Threads }) => {
const axios = require('axios');
if (event.type == "message_reply") {
if (!event.messageReply.attachments || event.messageReply.attachments.length == 0) return
if (event.messageReply.attachments.length > 1) return
const ress = await axios.get(`https://APITPK-PHU.last-namename.repl.co/imgurupload?apikey=Tpk05&link=${encodeURIComponent(dataa.url)}`)
	const link = ress.data.uploaded.image
  const tt = (await axios.get(`https://i.imgur.com/DAoPIxV.jpeg`, { responseType: "stream"})).data
  var res = await axios.get(`https://APITPK-PHU.last-namename.repl.co/nuditydetection?apikey=Tpk05&link=${link}`);
  return api.sendMessage({body:  `🌚===『 𝗖𝗛𝗘𝗖𝗞 𝗡𝗨𝗗𝗘 』===🌚
━━━━━━━━━━━━━━━━━━━━
🔰 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗮̉𝗻𝗵: ${res.data.NSFW_Prob}
━━━━━━━━━━━━━━━━━━━━
👉 𝗗𝘂̀𝗻𝗴 !𝗰𝗵𝗲𝗰𝗸𝗻𝘂𝗱𝗲 𝗼𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗮𝘂𝘁𝗼 𝗰𝗵𝗲𝗰𝗸 𝗻𝘂𝗱𝗲 𝗼̛̉ 𝗻𝗵𝗼́𝗺`, attachment: (tt)},  event.threadID, event.messageID) 
}
else {
  
const data = (await Threads.getData(event.threadID)).data || {};
if (typeof data.checkNude == "undefined" || data.checkNude  == false) data.checkNude  = true;
    else data.checkNude  = false;
    await Threads.setData(event.threadID, { data });
    global.data.threadData.set(event.threadID, data);
    return api.sendMessage(` Đã ${(data.checkNude == true) ? "bật" : "tắt"} thành công check ảnh nude!`, event.threadID, event.messageID);
}
  }