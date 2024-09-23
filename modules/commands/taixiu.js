module.exports.config = {
    name: "taixiu",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "D-Jukie",
    description: "Chơi tài xỉu",
    commandCategory: "Trò chơi",
    usages: "[tài/xỉu]",
    cooldowns: 5
};
module.exports.run = async function ({ api, event, args, Currencies, Users }) {
    const { senderID, messageID, threadID } = event;
    const axios = require('axios');
    const fs = require("fs-extra");
    const dataMoney = await Currencies.getData(senderID);
    const moneyUser = dataMoney.money;
    const thinh = ["Cờ bạc là bác thằng bần", "Bạn chơi, bạn thắng, bạn chơi, bạn thua. Bạn lại tiếp tục chơi.", "Người không chơi là người không bao giờ thắng", "Bạn không bao giờ biết điều gì tồi tệ hơn vận xui mà bạn có.", "Cách an toàn nhất để nhân đôi số tiền của bạn là gấp nó lại 1 lần và để vào túi.", "Cờ bạc là nguyên tắc vốn có của bản chất con người.", "Đánh đề thì chỉ có ra đê mà ở", "Cách tốt nhất để Ném xúc xắc là ném chúng đi và đừng chơi nữa.", "Ăn tiền cược của bạn nhưng đừng cược tiền ăn", "Áo quần bán hết, ngồi trần tô hô", "Đánh bạc quen tay, ngủ ngày quen mắt, ăn vặt quen mồm.", "Cược càng ít, khi thắng bạn càng thua nhiều", "Cờ bạc, khiến chúng ta mất hai thứ quý giá nhất của đời người. Đó là thời gian và tiền bạc", "Cờ bạc ai thua, ai thắng, ai không thắng để rồi lại sẽ thua.", "Cờ bạc có thắng có thua, thắng thì ít mà thua thì nhiều."];
    if (args.length !== 2) return api.sendMessage({body: "🎲==== [ 𝗧𝗔̀𝗜 𝗫𝗜̉𝗨 ] ====🎲\n━━━━━━━━━━━━━━━━━━\n🎮𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🎮\n\n𝟭. 𝗧𝗮𝗶𝘅𝗶𝘂 + 𝘁𝗮̀𝗶 𝗼𝗿 𝘅𝗶̉𝘂 + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝘁𝗮𝗶𝘅𝗶𝘂 𝘁𝗮̀𝗶 𝟮𝟬𝟬)\n𝟮. 𝗧𝗮𝗶𝘅𝗶𝘂 + 𝗰𝗵𝗮̆̃𝗻 𝗼𝗿 𝗹𝗲̉ + 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻 𝗰𝘂̛𝗼̛̣𝗰 𝘁𝗿𝗲̂𝗻 𝟭𝟬𝟬 (𝘃𝗱: ?𝘁𝗮𝗶𝘅𝗶𝘂 𝗹𝗲̉ 𝟮𝟬𝟬)\n\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗰𝗼̂́ 𝘁𝗶̀𝗻𝗵 𝘀𝗽𝗮𝗺 𝘁𝗮̀𝗶 𝘅𝗶̉𝘂 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗯𝗮𝗻 𝗯𝗮̣𝗻!!!",attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/taixiu')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
    const choose = args[0]
    if (choose.toLowerCase() != 'tài' && choose.toLowerCase() != 'xỉu') return api.sendMessage("Chỉ đặt cược tài hoặc xỉu!", threadID, messageID)
    var money = args[1]
  if (money.toLowerCase() == "all") var money = `${moneyUser}`
    if (money < 50 || isNaN(money)) return api.sendMessage("Mức đặt cược của bạn không phù hợp hoặc dưới 50$!!!", threadID, messageID);
    if (moneyUser < money) return api.sendMessage(`⚡️Số dư bạn không đủ ${money}$ để có thể chơi`, threadID, messageID);
    try {
        const res = (await axios.get(`https://api-vnh--dawnlover.repl.co/game/taixiu`)).data
        const image = [];
        const result = res.result;
        const ketqua = res.total;
        if(result == false) result = '3 mặt cùng loại';
        for (let i in res.images) {
            var path = __dirname + `/cache/${i}.png`;
            var img = (await axios.get(`${res.images[i]}`, { responseType: "arraybuffer" })).data;
            fs.writeFileSync(path, Buffer.from(img, "utf-8"));
            image.push(fs.createReadStream(path));
        }
        if (choose.toLowerCase() == result) {
            await Currencies.increaseMoney(senderID, parseInt(money * 1));
            api.sendMessage({ body: `🌸=== [ 𝐘𝐎𝐔 𝐖𝐈𝐍 ] ===🌸\n\n🎋 𝗕𝗮̣𝗻 𝘁𝗵𝗮̆́𝗻𝗴 𝗰𝘂̛𝗼̛̣𝗰\n🧧 𝗠𝗮𝗻𝗴 𝘃𝗲̂̀ 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻: ${money*1}$ 💵\n🎲 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${result} ${ketqua}\n━━━━━━━━━━━━\n${thinh[Math.floor(Math.random() * thinh.length)]}\n━━━━━━━━━━━━\n💸 𝗦𝗼̂́ 𝗗𝘂̛ 𝗛𝗶𝗲̣̂𝗻 𝗧𝗮̣𝗶 𝗖𝘂̉𝗮 𝗕𝗮̣𝗻: ${[moneyUser + money*1]}$\n🎲🎲🎲`, attachment: image }, threadID, messageID);
        } else {
            await Currencies.decreaseMoney(senderID, parseInt(money));
            api.sendMessage({ body: `🌸=== [ 𝐘𝐎𝐔 𝐋𝐎𝐒𝐄 ] ===🌸\n\n🎋 𝗕𝗮̣𝗻 𝘁𝗵𝘂𝗮 𝗰𝘂̛𝗼̛̣𝗰\n🧨 𝗕𝗼̂́𝗰 𝗵𝗼̛𝗶 𝘀𝗼̂́ 𝘁𝗶𝗲̂̀𝗻: ${money}$ 💸\n🎲 𝗞𝗲̂́𝘁 𝗾𝘂𝗮̉: ${result} ${ketqua}\n━━━━━━━━━━━━\n${thinh[Math.floor(Math.random() * thinh.length)]}\n━━━━━━━━━━━━\n💸 𝗦𝗼̂́ 𝗗𝘂̛ 𝗛𝗶𝗲̣̂𝗻 𝗧𝗮̣𝗶 𝗖𝘂̉𝗮 𝗕𝗮̣𝗻: ${[moneyUser + money*1]}$\n🎲🎲🎲`, attachment: image}, threadID, messageID);
        }
        for(var i = 0; i < image.length; i++) {
            fs.unlinkSync(__dirname + `/cache/${i}.png`);
        }
    } catch(e) {
        console.log(e);
        return api.sendMessage('😌Vui lòng chờ!\n🎋lỗi không mong muốn, bot sẽ được thay api sớm nhất có thể để không ngắt sự trải nghiệm của bạn ', threadID, messageID);
    }
}