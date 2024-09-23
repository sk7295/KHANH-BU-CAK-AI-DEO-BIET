 module.exports.config = {
  name: "joinNoti",
  eventType: ["log:subscribe"],
  version: "1.0.1",
  credits: "HĐGN",//Update by ThanhAli
  description: "Thông báo Bot hoặc người dùng vào nhóm có random gif/ảnh/video",
  dependencies: {
    "fs-extra": "",
    "path": "",
    "pidusage": ""
  }
};

module.exports.onLoad = function() {
  const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
  const { join } = global.nodemodule["path"];

  const path = join(__dirname, "cache", "joinGif");
  if (existsSync(path)) mkdirSync(path, { recursive: true });

  const path2 = join(__dirname, "cache", "joinGif");
  if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

  return;
}


module.exports.run = async function({ api, event, Users }) {
   var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
			var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
  const { join } = global.nodemodule["path"];
  const { threadID } = event;
  let thread = global.data.threadData.get(event.threadID) || {};
  if (typeof thread["join"] == "undefined", thread["join"] == false) return;
  if (event.logMessageData.addedParticipants.some(i => i.userFbId == api.getCurrentUserID())) {
    api.changeNickname(`『 ${global.config.PREFIX} 』 • ${(!global.config.BOTNAME) ? "BOT" : global.config.BOTNAME}`, threadID, api.getCurrentUserID());
    const fs = require("fs");
    return api.sendMessage("", event.threadID, () => api.sendMessage({ body: `► 𝗞𝗘̂́𝗧 𝗡𝗢̂́𝗜 𝗧𝗛𝗔̀𝗡𝗛 𝗖𝗢̂𝗡𝗚 ◄\n━━━━━━━━━━━━━━━━━━\n→ [🐧] 𝗛𝗶 𝗠𝗼̣𝗶 𝗡𝗴𝘂̛𝗼̛̀𝗶 𝗠𝗶̀𝗻𝗵 𝗟𝗮̀ 𝗕𝗼𝘁 𝗖𝘂̉𝗮 𝗕𝗮̀𝗻 𝗧𝘂𝗮̂́𝗻 𝗞𝗵𝗮𝗻𝗵\n→ [🎀] 𝗩𝘂𝗶 𝗟𝗼̀𝗻𝗴 𝗞𝗵𝗼̂𝗻𝗴 𝗦𝗽𝗮𝗺 , 𝗖𝗵𝘂̛̉𝗶 𝗕𝗼𝘁\n→ [🎊] 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 !𝗵𝗲𝗹𝗽 , !𝗺𝗲𝗻𝘂 Đ𝗲̂̉ 𝗫𝗲𝗺 𝗖𝗵𝗶 𝗧𝗶𝗲̂́𝘁 𝗟𝗲̣̂𝗻𝗵 𝗖𝗼́ 𝗧𝗿𝗼𝗻𝗴 𝗕𝗼𝘁\n→ [🌸] 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴 !𝗱𝘂𝘆𝗲𝘁𝗯𝗼𝘅 Đ𝗲̂̉ Đ𝘂̛𝗼̛̣𝗰 𝗔𝗱𝗺𝗶𝗻 𝗗𝘂𝘆𝗲̣̂𝘁\n→ [💓] 𝗖𝗵𝘂́𝗰 𝗖𝗮́𝗰 𝗕𝗮̣𝗻 𝗦𝗮̀𝗶 𝗕𝗼𝘁 𝗩𝘂𝗶 𝗩𝗲̉\n━━━━━━━━━━━━━━━━━━\n→ [🌐] 𝗡𝗲̂́𝘂 𝗠𝘂𝗼̂́𝗻 𝗠𝘂̛𝗼̛̣𝗻 𝗕𝗼𝘁 𝗖𝗵𝗼 𝗖𝗮́𝗰 𝗕𝗼𝘅 𝗞𝗵𝗮́𝗰 𝗧𝗵𝗶̀ 𝗟𝗶𝗲̂𝗻 𝗛𝗲̣̂ 𝗖𝗵𝗼 𝗔𝗱𝗺𝗶𝗻 𝗕𝗼𝘁: https://www.facebook.com/100090458979503\n━━━━━━━━━━━━━━━━━━`, attachment: fs.createReadStream(__dirname + "/cache/joinMp4/nhoang.mp4") }, threadID));
  }
  else {
    try {
      const { createReadStream, existsSync, mkdirSync, readdirSync } = global.nodemodule["fs-extra"];
      let { threadName, participantIDs } = await api.getThreadInfo(threadID);
      const moment = require("moment-timezone");
      const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
      const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
      const threadData = global.data.threadData.get(parseInt(threadID)) || {};
      const path = join(__dirname, "cache", "joinGif", "random");
      const pathGif = join(path, `hi.gif`);
      var mentions = [], nameArray = [], memLength = [], iduser = [], i = 0;

      for (id in event.logMessageData.addedParticipants) {
        const userName = event.logMessageData.addedParticipants[id].fullName; iduser.push(event.logMessageData.addedParticipants[id].userFbId.toString());
        nameArray.push(userName);
        mentions.push({ tag: userName, id: event.senderID });
        memLength.push(participantIDs.length - i++);
        console.log(userName)
      }
      memLength.sort((a, b) => a - b);
      (typeof threadData.customJoin == "undefined") ? msg = "→ Xin chào 「 {name} 」tới với nhóm「 {threadName} 」\n━━━━━━━━━━━━━━━━━━━━━━━\n→ Link FACEBOOK: https://www.facebook.com/profile.php?id={iduser}\n→ {type} là thành viên thứ {soThanhVien} của nhóm\n→ Được thêm vào nhóm bởi: {author} \n→ Link FACEBOOK: https://www.facebook.com/profile.php?id={uidAuthor}\n━━━━━━━━━━━━━━━━━━━━━━━\n→ Khi Vô bạn Hãy Dùng Lệnh Để Xem Luật Của Box Nhé\n━━━━━━━━━━━━━━━━━━━━━━━\n→ ?rule (trừ khi QTV set luật thì mới có nhé)\n→ Chúc bạn có một {buoi} vui vẻ\n→ Thời gian: {time}" : msg = threadData.customJoin;
      var nameAuthor = await Users.getNameUser(event.author)
      msg = msg
        .replace(/\{iduser}/g, iduser.join(', '))
        .replace(/\{name}/g, nameArray.join(', '))
        .replace(/\{type}/g, (memLength.length > 1) ? 'Các cậu' : 'Cậu')
        .replace(/\{soThanhVien}/g, memLength.join(', '))
        .replace(/\{threadName}/g, threadName)
        .replace(/\{author}/g, nameAuthor)
        .replace(/\{uidAuthor}/g, event.author)
         .replace(/\{buoi}/g, session)
        .replace(/\{time}/g, time);

      if (existsSync(path)) mkdirSync(path, { recursive: true });

      const randomPath = readdirSync(join(__dirname, "cache", "joinGif", "randomgif"));

      if (existsSync(pathGif)) formPush = { body: msg, attachment: createReadStream(pathGif), mentions }
      else if (randomPath.length != 0) {
        const pathRandom = join(__dirname, "cache", "joinGif", "randomgif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: createReadStream(pathRandom), mentions }
      }
      else formPush = { body: msg, mentions }

      return api.sendMessage(formPush, threadID);
    } catch (e) { return console.log(e) };
  }
  }