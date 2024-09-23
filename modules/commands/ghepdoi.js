module.exports.config = {
  name: "ghepdoi",
  version: "1.0.0", 
  hasPermssion: 0,
  credits: "D-Jukie ( Xuyên get )",//Mod by nhhoang
  description: "Ghép đôi giữa 2 người",
  commandCategory: "Tình yêu", 
  usages: "ghép", 
  cooldowns: 10
};
module.exports.run = async function({ api, event,Threads, Users }) {
        const axios = global.nodemodule["axios"];
        const fs = global.nodemodule["fs-extra"];
        const res = await axios.get(`https://apinhathoanghaikhkhsau--dawnlover.repl.co/thinh`);
var thinh = res.data.url;
        var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH:mm:ss || D/MM/YYYY");

        var { participantIDs } =(await Threads.getData(event.threadID)).threadInfo;
        var tle = Math.floor(Math.random() * 101);
        var namee = (await Users.getData(event.senderID)).name
        const botID = api.getCurrentUserID();
        const listUserID = event.participantIDs.filter(ID => ID != botID && ID != event.senderID);
        var id = listUserID[Math.floor(Math.random() * listUserID.length)];
        var name = (await Users.getData(id)).name
        var arraytag = [];
  
                arraytag.push({id: event.senderID, tag: namee});
                arraytag.push({id: id, tag: name});

  
        let Avatar = (await axios.get( `https://graph.facebook.com/${event.senderID}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/avt.png", Buffer.from(Avatar, "utf-8") );

        let gifLove = (await axios.get( `https://i.imgur.com/NKGjSpw.gif`, { responseType: "arraybuffer" } )).data; 
            fs.writeFileSync( __dirname + "/cache/ghep.png", Buffer.from(gifLove, "utf-8") );

        let Avatar2 = (await axios.get( `https://graph.facebook.com/${id}/picture?width=512&height=512&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`, { responseType: "arraybuffer" } )).data;
            fs.writeFileSync( __dirname + "/cache/avt2.png", Buffer.from(Avatar2, "utf-8") );

        var imglove = [];
              
              imglove.push(fs.createReadStream(__dirname + "/cache/avt.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/ghep.png"));
              imglove.push(fs.createReadStream(__dirname + "/cache/avt2.png"));

        var msg = {body: `=== 『 𝗚𝗛𝗘́𝗣 Đ𝗢̂𝗜 』 ====\n━━━━━━━━━━━━━━━━━━\n\n[💓] → 𝗚𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴!\n[⏰️] → 𝗕𝐚̂𝘆 𝗴𝗶𝗼̛̀ 𝗹𝗮̀: ${gio}\n[💌] → 𝗖𝗵𝘂́𝗰 𝟮 𝗯𝗮̣𝗻 𝘁𝗿𝗮̆𝗺 𝗻𝗮̆𝗺 𝗵𝗮̣𝗻𝗵 𝗽𝗵𝘂́𝗰\n[🐼] → 𝗕𝗮̣𝗻 𝗰𝘂̃𝗻𝗴 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗮̀𝗶 𝗴𝗵𝗲́𝗽 + 𝗕𝗼𝘆 𝗮𝗻𝗱 𝗴𝗶𝗿𝗹\n[🧸] → 𝗧𝗮̣̆𝗻𝗴 𝗯𝗮̣𝗻 𝗰𝐚̂𝘂 𝘁𝗵𝗶́𝗻𝗵 𝗻𝗲̀: ${thinh}\n[💕] → 𝗧𝗶̉ 𝗹𝗲̣̂ 𝗵𝗼̛̣𝗽 đ𝗼̂𝗶: ${tle}%\n[🌷] → `+namee+" "+"💓"+" "+name, mentions: arraytag, attachment: imglove}
        return api.sendMessage(msg, event.threadID, event.messageID)
          }