module.exports.config = {
    name: "gg",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "CatalizCS",//Mod by nhhoang
    description: "Tìm kiếm kết quả trên google!",
    commandCategory: "thông tin",
    usages: "google [Text]",
    cooldowns: 5,
    dependencies: {
        "request":"",
        "fs":""
    }
};

module.exports.run = function({ api, event, args }) {
    let textNeedSearch = "";
  const axios = require('axios');
  const request = require('request');
  const fs = require("fs");
    const regex = /(https?:\/\/.*?\.(?:png|jpe?g|gif)(?:\?(?:[\w_-]+=[\w_-]+)(?:&[\w_-]+=[\w_-]+)*)?(.*))($)/;
    (event.type == "message_reply") ? textNeedSearch = event.messageReply.attachments[0].url: textNeedSearch = args.join(" ");
    (regex.test(textNeedSearch)) ? api.sendMessage(`https://www.google.com/searchbyimage?&image_url=${textNeedSearch}`, event.threadID, event.messageID):
      axios.get('https://apinhathoanghaikhkhsau--dawnlover.repl.co/google').then(res => {
  let ext = res.data.url.substring(res.data.url.lastIndexOf(".") + 1);
  let callback = function () {
    api.sendMessage({
            body: `=== [ 𝗚𝗢𝗢𝗚𝗟𝗘 𝗦𝗘𝗔𝗥𝗖𝗛 ] ===
\n━━━━━━━━━━━━━━━━━━\n[🌐] → 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗻𝗲̀\n[🖥] → 𝗟𝗶𝗻𝗸 𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 đ𝐚̂𝘆: https://www.google.com.vn/search?q=${encodeURIComponent(textNeedSearch)}\n\n💓 𝗡𝗵𝗮̂́𝗻 𝘃𝗮̀𝗼 𝗹𝗶𝗻𝗸 𝗼̛̉ 𝘁𝗿𝗲̂𝗻 đ𝗲̂̉ 𝘅𝗲𝗺 𝗸𝗲̂́𝘁 𝗾𝘂𝗮̉ 𝗺𝗮̀ 𝗯𝗮̣𝗻 𝘁𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗻𝗵𝗮́`,attachment: fs.createReadStream(__dirname + `/cache/nhhoang.${ext}`)
          }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/nhhoang.${ext}`), event.messageID);
        };
        request(res.data.url).pipe(fs.createWriteStream(__dirname + `/cache/nhhoang.${ext}`)).on("close", callback);
      })
  }