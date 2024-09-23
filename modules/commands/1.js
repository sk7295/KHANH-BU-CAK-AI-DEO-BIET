module.exports.config = {
    name: "1",
    version: "1.0.4",
    hasPermssion: 1,
    credits: "nhhoang",
    description: "xem video & ảnh & gif thông qua url",
    commandCategory: "Hệ Thống",
    usages: "xem video & ảnh & gif",
    cooldowns: 10,
    dependencies: {
        "fs-extra": "",
        "path": ""
    }
}

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

    const path = join(__dirname, "cache", "joinGif", "randomgif");
    if (!existsSync(path)) mkdirSync(path, { recursive: true });

    return;
}

module.exports.languages = {
    "vi": {
        "gifPathNotExist": "done!",
        "removemp4Success": "done!",
        "invaildURL": "Url bạn nhập không phù hợp!",
        "internetError": "Không thể tải file vì url không tồn tại hoặc bot đã xảy ra vấn đề về mạng!",
        "savemp4Success": "Video của bạn nè\nThả cảm xúc 🤍 vào tin nhắn này để chuyển sang nhạc",
        "savejpegSuccess":"ảnh của bạn nè",
        "savegifSuccess":"gif của bạn nè",
        "savemp3Success":"mp3 của bạn nè"
    },
    "en": {
        "gifPathNotExist":"done!",
        "removeGifSuccess": "done!",
        "invaildURL": "Invalid url!",
        "internetError": "done!",
        "saveGifSuccess": "done!"
    }
}

module.exports.run = async function ({ args, event, api, Threads, getText }) {
    try {
        const axios = require('axios');
    const fs = require('fs');
    const request = require('request');
    const cheerio = require('cheerio');
  if (!args[0]) return api.sendMessage({body: `1. Tải video (mp4)\n2. Tải hình nền động (gif)\n3. Tải nhạc (mp3)\n4. Tải ảnh (image)`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/imgphongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
        const { existsSync, createReadStream } = global.nodemodule["fs-extra"];
        const { join } = global.nodemodule["path"];
        const { threadID, messageID } = event;
        const msg = args.slice(1, args.length).join(" ");
        var data = (await Threads.getData(threadID)).data;

        switch (args[0]) {
            case "gif": {
                const path = join(__dirname, "", "", "");
                const pathgif = join(path, `${threadID}.gif`);
                if (msg == "remove") {
                    if (!existsSync(pathmp4)) return api.sendMessage(getText("gifPathNotExist"), threadID, messageID);
                    unlinkSync(pathgif);
                    return api.sendMessage(getText("removegifSuccess"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:gif|gif)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathgif);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID); }
                    return api.sendMessage({ body: getText("savegifSuccess"), attachment: createReadStream(pathgif) }, threadID, messageID);
         }
            }
            case "mp4": {
                const path = join(__dirname, "", "", "");
                const pathmp4 = join(path, `${threadID}.mp4`);
                if (msg == "remove") {
                    if (!existsSync(pathmp4)) return api.sendMessage(getText("mp4PathNotExist"), threadID, messageID);
                    unlinkSync(pathmp4);
                    return api.sendMessage(getText("removemp4Success"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:mp4|mp4)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathmp4);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID); }
                    return api.sendMessage({ body: getText("savemp4Success"), attachment: createReadStream(pathmp4) }, threadID, messageID);
            }
               }
              case "image": {
              const path = join(__dirname, "", "", "");
                const pathjpeg = join(path, `${threadID}.jpeg`);
                if (msg == "remove") {
                    if (!existsSync(pathjpeg)) return api.sendMessage(getText("jpegPathNotExist"), threadID, messageID);
                    unlinkSync(pathjpeg);
                    return api.sendMessage(getText("removejpegSuccess"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:jpeg|jpeg)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathjpeg);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID); }
                    return api.sendMessage({ body: getText("savejpegSuccess"), attachment: createReadStream(pathjpeg) }, threadID, messageID);
                  }
               }
              case "mp3": {
              const path = join(__dirname, "", "", "");
                const pathmp3 = join(path, `${threadID}.mp3`);
                if (msg == "remove") {
                    if (!existsSync(pathmp3)) return api.sendMessage(getText("mp3PathNotExist"), threadID, messageID);
                    unlinkSync(pathmp3);
                    return api.sendMessage(getText("removemp3Success"), threadID, messageID);
                }
                else {
                    if (!msg.match(/(http(s?):)([/|.|\w|\s|-])*\.(?:mp3|mp3)/g)) return api.sendMessage(getText("invaildURL"), threadID, messageID);
                    try {
                        await global.utils.downloadFile(msg, pathmp3);
                    } catch (e) { return api.sendMessage(getText("internetError"), threadID, messageID); }
                    return api.sendMessage({ body: getText("savemp3Success"), attachment: createReadStream(pathmp3) }, threadID, messageID);
                }
            }
            default: { return global.utils.throwError(this.config.name, threadID, messageID) }
        }
    } catch (e) { return console.log(e) };
}