const fs = require("fs");
const axios = require('axios')
module.exports.config = {
    name: "cave",
    version: "1.0.1",
    hasPermssion: 0,
    credits: "Nam",//mod by nhathoang
    description: "Làm cave random quốc gia",
    commandCategory: "Kiếm tiền",
    cooldowns: 5,
    envConfig: {
        cooldownTime: 60000
    },
    denpendencies: {
        "fs": "",
        "request": ""
}
};
module.exports.languages = {
    "vi": {
        "cooldown": "Bạn đang kiệt sức vui lòng đợi %1 phút %2 giây."      
    }
                     }
module.exports.handleReply = async ({ event, api, handleReply, Currencies, Users }) => {
    const { threadID, messageID, senderID, body } = event;
  let name = await Users.getNameUser(senderID)
  let data = (await Currencies.getData(senderID)).data || {};
if (handleReply.author != senderID) 
return api.sendMessage("Bạn không phải người reply", threadID, messageID)

var a = Math.floor(Math.random() * 50000) + 900; 
var b = Math.floor(Math.random() * 50000) + 800; 
var c = Math.floor(Math.random() * 50000) + 700; 
var x = Math.floor(Math.random() * 50000) + 600; 
var y = Math.floor(Math.random() * 50000) + 500; 
var f = Math.floor(Math.random() * 50000) + 400;
var img = Math.floor(Math.random() * 1) + 1; 
var no = ["khách sạn vip pro,","khách sạn vip,","khách sạn vip pro max,"];
var tt = ["chị gái dú to","em gái dú to","em loli","bà già"];
var ttt = ["anh da đen","anh ciu 20cm","anh ciu 25cm","anh cao to đen hôi"];
var gio = Math.floor(Math.random() * 48) + 1;
  var money = ( a.toLocaleString('vi-VN'))
  var msg = "";
    switch(handleReply.type) {
        case "boy": {
            switch(body) {
                case "1": msg = `Bạn làm cave ở Việt Nam 🇻🇳 và được ${tt[Math.floor(Math.random() * tt.length)]} trả ${money} ₫ nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${money} ₫`;
                break;             
                case "2": msg = `Bạn làm cave ở Trung Quốc 🇨🇳 và được ${tt[Math.floor(Math.random() * tt.length)]} trả ${b} Tệ nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${b} Tệ`; 
                await Currencies.increaseMoney(senderID, parseInt(b)); 
                break;
                case "3": msg = `Bạn làm cave ở Nhật Bản 🇯🇵 và được ${tt[Math.floor(Math.random() * tt.length)]} trả ${c} Yên nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${c} yên`; 
                await Currencies.increaseMoney(senderID, parseInt(c)); 
                break;
                case "4": msg = `Bạn làm cave ở Thái Lan 🇹🇭 và được ${tt[Math.floor(Math.random() * tt.length)]} trả ${x} Baht nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${x} Baht`; 
                await Currencies.increaseMoney(senderID, parseInt(x)); 
                break;
                case "5": msg = `Bạn làm cave ở Mỹ 🇺🇸 và được ${tt[Math.floor(Math.random() * tt.length)]} trả ${y} $ nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${y} $`; 
                await Currencies.increaseMoney(senderID, parseInt(y)); 
                break;
                case "6": msg = `Bạn làm cave ở Campuchia 🇰🇭 và được ${tt[Math.floor(Math.random() * tt.length)]} trả ${f} Riel nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${f} Riel`; 
                await Currencies.increaseMoney(senderID, parseInt(f)); 
                break;
                default: break;
            };
            const boy = parseInt(body);
            if (isNaN(body)) 
            return api.sendMessage("Nhập STT tương ứng để làm cave nước đó", threadID, messageID);
            if (boy > 6 || boy < 1) 
            return api.sendMessage("Quốc gia bạn chọn không có trong danh sách", threadID, messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg == "...") {
                msg = "...";
            };
           return api.sendMessage({body: `${msg}`, attachment: await DownLoad("https://i.imgur.com/GgQxtXI.jpg")}, threadID, async () => {
            data.workcaveTime = Date.now();
            await Currencies.setData(senderID, { data });
            
        }, messageID);

    };
}
  var msg1 = "";
    switch(handleReply.type) {
        case "girl": {
            switch(body) {
                case "1": msg1 = `Bạn làm cave ở Việt Nam 🇻🇳 và được ${ttt[Math.floor(Math.random() * ttt.length)]} trả ${money} ₫ nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${money} ₫`;
                await Currencies.increaseMoney(senderID, parseInt(a)); 
                break;             
                case "2": msg1 = `Bạn làm cave ở Trung Quốc 🇨🇳 và được ${ttt[Math.floor(Math.random() * ttt.length)]} trả ${b} Tệ nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${b} Tệ`; 
                await Currencies.increaseMoney(senderID, parseInt(b)); 
                break;
                case "3": msg1 = `Bạn làm cave ở Nhật Bản 🇯🇵 và được ${ttt[Math.floor(Math.random() * ttt.length)]} trả ${c} Yên nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${c} yên`; 
                await Currencies.increaseMoney(senderID, parseInt(c)); 
                break;
                case "4": msg1 = `Bạn làm cave ở Thái Lan 🇹🇭 và được ${ttt[Math.floor(Math.random() * ttt.length)]} trả ${x} Baht nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${x} Baht`; 
                await Currencies.increaseMoney(senderID, parseInt(x)); 
                break;
                case "5": msg1 = `Bạn làm cave ở Mỹ 🇺🇸 và được ${ttt[Math.floor(Math.random() * ttt.length)]} trả ${y} $ nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${y} $`; 
                await Currencies.increaseMoney(senderID, parseInt(y)); 
                break;
                case "6": msg1 = `Bạn làm cave ở Campuchia 🇰🇭 và được ${ttt[Math.floor(Math.random() * ttt.length)]} trả ${f} Riel nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${f} Riel`;
                break;
                case "7": msg1 = `Bạn làm cave ở Âm phủ 🗿 và được ${ttt[Math.floor(Math.random() * ttt.length)]} trả ${f} Riel nếu xxx ${gio} giờ trong ${no[Math.floor(Math.random() * no.length)]} thế là bạn đồng ý ngay\n + ${f} Riel`;
                await Currencies.increaseMoney(senderID, parseInt(f)); 
                break;
                default: break;
            };
            const girl = parseInt(body);
            if (isNaN(body)) 
            return api.sendMessage("Nhập STT tương ứng để làm cave nước đó", threadID, messageID);
            if (girl > 7 || girl < 1) 
            return api.sendMessage("Quốc gia bạn chọn không có trong danh sách", threadID, messageID); 
            api.unsendMessage(handleReply.messageID);
            if (msg1 == "...") {
                msg1 = "...";
            };
            return api.sendMessage({body: `${msg1}`, attachment: await DownLoad('https://i.imgur.com/rjoDDC9.jpg')}, threadID, async () => {
            data.workcaveTime = Date.now();
            await Currencies.setData(senderID, { data });
            
        });

    };
}
}


module.exports.run = async ({  event, api, handleReply, Currencies, args, getText }) => {
    const { threadID, messageID, senderID } = event;
    const cooldown = global.configModule[this.config.name].cooldownTime;
    var typee = args[0] == "girl" ? "https://i.imgur.com/4XZYz3k.jpg" : "https://i.imgur.com/xizNR6i.jpg"
    let data = (await Currencies.getData(senderID)).data || {};
    //cooldownTime cho mỗi lần nhận 
    if (typeof data !== "undefined" && cooldown - (Date.now() - data.workcaveTime) > 0) {

        var time = cooldown - (Date.now() - data.workcaveTime),
            minutes = Math.floor(time / 60000),
            seconds = ((time % 60000) / 1000).toFixed(0); 
        return api.sendMessage(getText("cooldown", minutes, (seconds < 10 ? "0" + seconds : seconds)), threadID, messageID);
          }
  if (args.length == 0) {
        return api.sendMessage({body: `=== [ 𝗖𝗔𝗩𝗘 ] ===\n━━━━━━━━━━━━━━━━━━\n🦋𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🦋\n\n𝟭. ?𝗰𝗮𝘃𝗲 𝗯𝗼𝘆 𝗮𝗻𝗱 𝗴𝗶𝗿𝗹 + 𝗿𝗲𝗽𝗹𝘆 𝘁𝗻 𝗰𝘂̉𝗮 𝗯𝗼𝘁 đ𝗲̂̉ 𝗹𝗮̀𝗺 𝗰𝗮𝘃𝗲 (𝘃𝗱: ?𝗰𝗮𝘃𝗲 𝗴𝗶𝗿𝗹)\n𝟮. 𝗕𝗮̣𝗻 𝗰𝘂̃𝗻𝗴 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗮̀𝗶 𝗰𝗮𝘃𝗲𝟮 𝗵𝗼𝗮̣̆𝗰 𝗰𝗮𝘃𝗲𝟯 𝘁𝘂̀𝘆 𝘆́ 𝗯𝗮̣𝗻 𝗰𝗵𝗼̣𝗻\n\n⚠️𝗟𝘂̛𝘂 𝘆́: 𝗩𝘂𝗶 𝗹𝗼̀𝗻𝗴 𝗸𝗵𝗼̂𝗻𝗴 𝘀𝗽𝗮𝗺 𝗯𝗼𝘁 đ𝗲̂̉ 𝘁𝗿𝗮́𝗻𝗵 𝗺𝗼̃𝗺 𝗯𝗼𝘁!!!`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/imggaiditbu')).data.url,
method: "GET",
responseType: "stream"
})).data
},threadID, messageID);
      }
  else {
        var msg = {
            body: "======『 Cave " + args[0]  + " 』======"+`\n`+
                "\n1 → 🇻🇳 Việt Nam" +
                "\n2 → 🇨🇳 Trung Quốc" +
                "\n3 → 🇯🇵 Nhật Bản" +
                "\n4 → 🇹🇭 Thái lan" +
                "\n5 → 🇺🇸 Mỹ" +
                "\n6 → 🇰🇭 Campuchia" +
                "\n7 → 🗿 Âm phủ" +
                `\n\n😻 𝗥𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗮̀𝘆 𝘁𝗵𝗲𝗼 𝘀𝗼̂́ 𝘁𝗵𝘂̛́ 𝘁𝘂̛̣ 𝘁𝘂̛̀ 𝟭 - 𝟳 𝘁𝗵𝗲𝗼 𝘆́ 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻`,
                attachment: await DownLoad(typee)}
          //else {
            if (args[0] == "boy" || args[0] == "girl") {
               return api.sendMessage(msg, threadID, (error, info) => {
                data.workcaveTime = Date.now();
        global.client.handleReply.push({
            type: args[0],
            name: this.config.name,
            author: event.senderID,
            messageID: info.messageID
          })  
        }) 
      }
   }
}
async function DownLoad(url) {
    return (await axios.get(url, {
        responseType: "stream"
    })).data
  }