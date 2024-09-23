module.exports.config = {
  name: "conc",	
  version: "2.0.0", 
  hasPermssion: 0,
  credits: "Hải harin",//tpk mod lại thành UID nopre
  description: "", 
  commandCategory: "THÀNH VIÊN",
  usages: "¹",
  cooldowns: 0
};
module.exports.handleEvent = async function ({ api, event, Threads, Users }) {
  const axios = require("axios")
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
      const moment = require("moment-timezone");
var tpk = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");
  const name = await Users.getNameUser(event.senderID)
  const res = await axios.get(`https://golike.com.vn/func-api.php?user=${event.senderID}`);
  if (res.status == 200) {
  const finduid = res.data.data.uid
  const finddate = res.data.data.date
  if (body.toLowerCase() == "uid" || (body.toLowerCase() == "lấy giúp uid") ||  (body.toLowerCase() == "cần uid") || (body.toLowerCase() == "lấy giúp tui uid")) {
       api.sendMessage({body: `🌐==== [ 𝗨𝗜𝗗 𝗙𝗔𝗖𝗘𝗕𝗢𝗢𝗞 ] ====🌐
━━━━━━━━━━━━━━━━

🍄 𝗧𝗲̂𝗻: ${name}
📌 𝗜𝗗 𝗙𝗮𝗰𝗲𝗯𝗼𝗼𝗸: ${finduid}\n📆 𝗡𝗴𝗮̀𝘆 𝘁𝗮̣𝗼: ${finddate}\n\n👉🏻 𝗧𝗵𝗮̉ 𝗰𝗮̉𝗺 𝘅𝘂́𝗰 "👍" 𝘃𝗮̀𝗼 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗯𝗼𝘁 𝘁𝗮́𝗰𝗵 𝗿𝗮 𝗰𝗵𝘂̛̀𝗮 𝗺𝗼̂̃𝗶 𝘂𝗶𝗱`, attachment: await streamURL(`https://graph.facebook.com/${event.senderID}/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)},event.threadID, (err, info) => {
    global.client.handleReaction.push({
      name: this.config.name, 
      messageID: info.messageID,
      author: event.senderID,
    })
      },event.messageID);
  }
 }
      }
module.exports.run = async ({ api, event, args, Threads }) => {
                          }
module.exports.handleReaction = async ({ event, api, handleReaction, Currencies, Users, client}) => {
const { threadID, messageID, userID } = event;
//const { threadID, messageID, senderID, mentions, type, messageReply } = event;
if (event.userID != handleReaction.author) return;
if (event.reaction != "👍") return;
 api.unsendMessage(handleReaction.messageID);
    const fs = global.nodemodule["fs-extra"];
    const request = global.nodemodule["request"];
    const axios = global.nodemodule['axios'];
api.sendMessage(`${userID}`,event.threadID,event.messageID);
}