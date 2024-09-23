const request = global.nodemodule['request'];
const fs = global.nodemodule['fs']
module.exports.config = {
  name: "earth",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "BerVer",
  description: "Xem hình ảnh trái đất gần đây nhất",
  commandCategory: "Thông tin",
  usages: "earth",
  cooldowns: 5,
  dependencies: {
    "request": "",
  "fs": ""
}
};

module.exports.run = function({
  api,
  event,
  args,
  client,
  __GLOBAL
}) {
  return request(`https://api.nasa.gov/EPIC/api/natural/images?api_key=DEMO_KEY`, (err, response, body) => {
    if (err) throw err;
    var jsonData = JSON.parse(body);
    var randomNumber = Math.floor(Math.random() * ((jsonData.length - 1) + 1));
    var image_name = jsonData[randomNumber].image
    var date = jsonData[randomNumber].date;
    var date_split = date.split("-")
    var year = date_split[0];
    var month = date_split[1];
    var day_and_time = date_split[2];
    var sliced_date = day_and_time.slice(0, 2);
    var image_link = `https://epic.gsfc.nasa.gov/archive/natural/${year}/${month}/${sliced_date}/png/` + image_name + ".png";
    let callback = function() {
      api.sendMessage({
        body: `🌍==『 𝗘𝗔𝗥𝗧𝗛 𝗜𝗡𝗙𝗢𝗥𝗠𝗔𝗧𝗜𝗢𝗡 』==🌍

🌸 𝗗𝘂̛̃ 𝗹𝗶𝗲̣̂𝘂: ${jsonData[randomNumber].caption}
🕊️ 𝗗𝗮𝘁𝗲: ${date}
📎 𝗜𝗺𝗮𝗴𝗲 𝗹𝗶𝗻𝗸: ${image_link}
🍄 𝗜𝗺𝗮𝗴𝗲 𝗻𝗮𝗺𝗲: ${image_name}`,
        attachment: fs.createReadStream(__dirname + `/cache/randompic.png`)
      }, event.threadID, () => fs.unlinkSync(__dirname + `/cache/randompic.png`), event.messageID);
    };
    request(image_link).pipe(fs.createWriteStream(__dirname + `/cache/randompic.png`)).on("close", callback);
  });
  }