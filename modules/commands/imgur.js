const imgur = require("imgur");
const fs = require("fs");
const { downloadFile } = require("../../utils/index");

module.exports.config = {
  name: "imgur",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "mod",
  description: "Imgur",
  commandCategory: "Tiện ích",
  usages: "[reply]",
  cooldowns: 5
};
module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "img.jpeg")) request("https://i.imgur.com/SJqI8jP.jpeg").pipe(fs.createWriteStream(dirMaterial + "img.jpeg"));
      }
module.exports.run = async ({ api, event }) => {
  const { threadID, type, messageReply, messageID } = event;
  const moment = require("moment-timezone");
  const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
const fs = require("fs");
  const ClientID = "c76eb7edd1459f3"
  if (type !== "message_reply" || messageReply.attachments.length == 0) return api.sendMessage("Bạn phải reply một video, ảnh nào đó", threadID, messageID);
  imgur.setClientId(ClientID);
  const attachmentSend = [];
  async function getAttachments(attachments) {
    let startFile = 0;
    for (const data of attachments) {
      const ext = data.type == "photo" ? "jpg" :
        data.type == "video" ? "mp4" :
          data.type == "audio" ? "m4" :
            data.type == "animated_image" ? "gif" : "txt";
      const pathSave = __dirname + `/cache/${startFile}.${ext}`
      ++startFile;
      const url = data.url;
      await downloadFile(url, pathSave);
      attachmentSend.push(pathSave);
    }
  }
  await getAttachments(messageReply.attachments);
  let msg = "", Succes = 0, Error = [];
  for (const getImage of attachmentSend) {
    try {
      const getLink = await imgur.uploadFile(getImage)
      console.log(getLink);
      msg += `${++Succes}/ ${getLink.link}\n`
      fs.unlinkSync(getImage)
    } catch {
      Error.push(getImage);
      fs.unlinkSync(getImage)
    }
  }
  return api.sendMessage({body: `====『 𝗜𝗠𝗚𝗨𝗥 𝗨𝗣𝗟𝗢𝗔𝗗 』====\n\n→ 𝗧𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴: ${Succes}\n→ 𝗧𝗵𝗮̂́𝘁 𝗯𝗮̣𝗶: ${Error.length}\n━━━━━━━━━━━━━━━━━━\n🐰 𝗟𝗶𝗻𝗸 𝗮̉𝗻𝗵 𝘃𝘂̛̀𝗮 𝘂𝗽:\n${msg}`, attachment: fs.createReadStream(__dirname + `/noprefix/img.jpeg`)}, event.threadID, event.messageID);
         }