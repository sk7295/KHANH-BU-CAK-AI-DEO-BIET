/*
» Có lỗi LH FB: fb.com/levy.nam.2k5
*/
module.exports.config = {
    name: "sendnoti",
    version: "1.1.1",
    hasPermssion: 2,
    credits: "N1002",
    description: "Gửi tin nhắn đến tấy cả nhóm và reply để phản hồi",
    commandCategory: "Hệ Thống",
    usages: "text",
    cooldowns: 2
};
request = require("request");
fse = require("fs-extra");
imageDownload = require("image-downloader");
moment = require("moment-timezone");
fullTime = () => moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || DD/MM/YYYY");
module.exports.run = async({ api,
    event, Users }) => {
    let uid = event.senderID;
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, messageReply: mR, type, body, args } = event; 
    const allTid = global.data.allThreadID || [];
    const atm = await type == "message_reply" ? mR.attachments : atms.length != 0 ? atms : "nofile";
    const content = !args[1] ? "chỉ có tệp" : body.slice(body.indexOf(args[1]));
    if (!args[1] && atm == "nofile") return api.sendMessage(`‼️ Bạn chưa nhập nội dung`, tid, mid);
    var msg = `📩===『 𝗧𝗛𝗢̂𝗡𝗚 𝗕𝗔́𝗢 』===📩\n━━━━━━━━━━━━━━━━\n⏰️ 𝗧𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻: ${fullTime()}\n👤 𝗧𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻: ${(await Users.getData(sid)).name}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n🏘️ 𝗡𝗼̛𝗶 𝗴𝘂̛̉𝗶 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼: ${event.isGroup == true ? 'Nhóm ' + global.data.threadInfo.get(event.threadID).threadName: 'Từ cuộc trò chuyện riêng với bot'}\n━━━━━━━━━━━━━━━━━━\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${content}\n━━━━━━━━━━━━━━━━\n🐾 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 ( 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝘃𝗲̀ 𝗔𝗗𝗠𝗜𝗡 💞`
    const uwu = atm == "nofile" ? msg : {
        body: msg,
        attachment: await DownLoad(atm)
    };
var c1 = 0, c2 = 0;
    for (var idT of allTid) {
      var promise = new Promise (async(r1, r2) => {
 await api.sendMessage(uwu, idT, async(e, i) => {
   if (e) r2(++c2); else r1(++c1)
      return global.client.handleReply.push({
            name: this.config.name,
            messageID: i.messageID,
            author: sid,
            type: "userReply"
        })
      });
    })
  }
promise.then(async(r) => api.sendMessage(`→ Gửi thông báo thành công tới ${r} nhóm`, tid, mid)).catch(async(err) => api.sendMessage(`→ Không thể gửi thông báo tới ${err} nhóm`, tid, mid))
};
module.exports.handleReply = async({ api, event, handleReply: h, Users, Threads }) => {
    const { threadID: tid, messageID: mid, senderID: sid, attachments: atms, body, type } = event;
    const { ADMINBOT } = global.config;
    switch (h.type) {
        case "userReply": {
            const atm = atms.length != 0 ? atms : "nofile";
            var msg = `📬=== 『 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 』===📬\n━━━━━━━━━━━━━━━━━━\n👤 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗨𝘀𝗲𝗿: ${(await Users.getData(sid)).name}\n👪 𝗡𝗵𝗼́𝗺: ${(await Threads.getData(tid)).threadInfo.threadName}\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${atm == "nofile" ? body : "Chỉ có tệp đến bạn"}\n\n→ 𝗥𝗲𝗽𝗹𝘆 ( 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝗹𝗮̣𝗶 𝘂𝘀𝗲𝗿`
            const uwu = atm == "nofile" ? msg : {
                body: msg,
                attachment: await DownLoad(atm)
            };
          var c1 = 0, c2 = 0;
            for (var idA of ADMINBOT) {
              var promise = new Promise (async(r1, r2) => {
                await api.sendMessage(uwu, idA, async(e, i) => {
     if (e) r2(++c2); else r1(++c1)
                    return global.client.handleReply.push({
                        name: this.config.name,
                        messageID: i.messageID,
                        author: h.author, idThread: tid, idMessage: mid, idUser: sid,
                        type: "adminReply"
                    })
                });
            });
       }; 
          promise.then(async(r1) => api.sendMessage(`→ Phản hồi thành công tới ADMIN ${(await Users.getData(h.author)).name} và ${+r1-1} ADMIN khác`, tid, mid)).catch(async(err) => api.sendMessage(`→ Không thể gửi phản hồi tới ${err} ADMIN`, tid, mid))
            break;
        };
    case "adminReply": {
        const atm = atms.length != 0 ? atms : "nofile";
        var msg = `📪=== 『 𝗣𝗵𝗮̉𝗻 𝗛𝗼̂̀𝗶 𝗔𝗱𝗺𝗶𝗻 』 ===📪\n━━━━━━━━━━━━━━━━━━\n📩 𝗣𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 𝘁𝘂̛̀ 𝗮𝗱𝗺𝗶𝗻 ${(await Users.getData(sid)).name}\n⏰ 𝗧𝗶𝗺𝗲: ${fullTime()}\n🌐 𝗟𝗶𝗻𝗸 𝗙𝗯: https://www.facebook.com/profile.php?id=${event.senderID}\n💬 𝗡𝗼̣̂𝗶 𝗱𝘂𝗻𝗴: ${atm == "nofile" ? body : "Chỉ có tệp đến bạn"}\n𝗥𝗲𝗽𝗹𝘆 ( 𝗽𝗵𝗮̉𝗻 𝗵𝗼̂̀𝗶 ) 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 đ𝗲̂̉ 𝗴𝘂̛̉𝗶 𝘁𝗵𝗼̂𝗻𝗴 𝗯𝗮́𝗼 𝘃𝗲̂̀ 𝗔𝗱𝗺𝗶𝗻 💓`
        const uwu = atm == "nofile" ? msg : {
            body: msg,
            attachment: await DownLoad(atm)
        };
        await api.sendMessage(uwu, h.idThread, async(e, i) => {
            if (e) return api.sendMessage(`Error`, tid, mid);
            else api.sendMessage(`→ Phản hồi thành công tới USER ${(await Users.getData(h.idUser)).name} tại nhóm ${(await Threads.getData(h.idThread)).threadInfo.threadName}`, tid, mid)
            return global.client.handleReply.push({
                name: this.config.name,
                messageID: i.messageID,
                author: sid,
                type: "userReply"
            })
        }, h.idMessage);
        break;
    };
  }
};

const DownLoad = async(atm) => {
    var arr = [];
    for (var i = 0; i < atm.length; i++) {
        const nameUrl = request.get(atm[i].url).uri.pathname
        const namefile = atm[i].type != "audio" ? nameUrl : nameUrl.replace(/\.mp4/g, ".m4a");
        const path = __dirname + "/cache/" + namefile.slice(namefile.lastIndexOf("/") + 1);
        await imageDownload.image({
            url: atm[i].url,
            dest: path
        });
        arr.push(fse.createReadStream(path));
        fse.unlinkSync(path);
    }
    return arr;
};