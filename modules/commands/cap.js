 const axios = require("axios");
const fs = require("fs");
module.exports.config = {
    name: "capv1",
    version: "1.0.0",
    hasPermssion: 0,
    credits: "Thiệu Trung Kiên",
    description: "Chụp ảnh profile của người dùng",
    commandCategory: "THÀNH VIÊN",
    usages: "",
    cooldowns: 5
}
module.exports.handleEvent = async ({ api, event, Threads, args, Users }) => {
  try{
  if(event.body.toLowerCase() == "cap"){
    let name = await Users.getNameUser(event.senderID);
    const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `→ 𝗖𝗵𝗼̛̀ 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽\n⏳ 𝗖𝗮𝗽 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${timeNow} || ${thu}\n💮 𝘃𝗼̛́𝗶 𝗹𝗮̣𝗶 𝘁𝘂̀𝘆 𝘁𝗵𝗲𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗼𝘁 𝗺𝗼̛́𝗶 𝗰𝗮𝗽 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮`, mentions}, event.threadID, event.messageID);
    if (event.type == "message_reply") {
      var uid = event.messageReply.senderID;
    } else if (Object.keys(event.mentions).length == 1) {
      var uid = Object.keys(event.mentions)[0];
    }
  else {
          var uid = event.senderID;
    }
    var cookies = `datr=hEFrZKaG-HnfcCe0gqRDk4qC; sb=hEFrZBN_MVBpvfnCee4ZZC53; vpd=v1%3B755x384x2.8125; wd=384x755; fr=0MSOaVcOCq2Busn7m.AWWRez4D62wvpV-E2fOw0w99f2s.Bka0GE.iQ.AAA.0.0.BkgZR_.AWW0nYHiY9o; c_user=100001917453768; xs=28%3A4935NG8sMJjF_g%3A2%3A1686213765%3A-1%3A6378; m_page_voice=100001917453768; locale=en_US; fbl_cs=AhBTdgdQfhao0rKMcRUhXwaCGFRPeEo5aFBOVGpRZWFNdjNaaDF2M1IzZg; fbl_ci=940026847377135; fbl_st=100424093%3BT%3A28103918; wl_cbv=v2%3Bclient_version%3A2269%3Btimestamp%3A1686235137; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEzOyBTTS1NMzI1RlYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTIuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzY%3D; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2013%3B%20SM-M325FV)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Mobile%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=hEFrZKaG-HnfcCe0gqRDk4qC; sb=hEFrZBN_MVBpvfnCee4ZZC53; vpd=v1%3B755x384x2.8125; wd=384x755; fr=0MSOaVcOCq2Busn7m.AWWRez4D62wvpV-E2fOw0w99f2s.Bka0GE.iQ.AAA.0.0.BkgZR_.AWW0nYHiY9o; c_user=100001917453768; xs=28%3A4935NG8sMJjF_g%3A2%3A1686213765%3A-1%3A6378; m_page_voice=100001917453768; locale=en_US; fbl_cs=AhBTdgdQfhao0rKMcRUhXwaCGFRPeEo5aFBOVGpRZWFNdjNaaDF2M1IzZg; fbl_ci=940026847377135; fbl_st=100424093%3BT%3A28103918; wl_cbv=v2%3Bclient_version%3A2269%3Btimestamp%3A1686235137; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEzOyBTTS1NMzI1RlYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTIuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzY%3D; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2013%3B%20SM-M325FV)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Mobile%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=462ce0&url=${url}&dimension=1920x1080`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `🎥 ==== [ 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 ] ==== 🎥\n━━━━━━━━━━━━━━━━\n🌸 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${timeNow} || ${thu}\n━━━━━━━━━━━━━━━━━\n⚙️ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 !𝗰𝗮𝗽 + 𝘁𝗮𝗴 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗲̂̉ 𝗯𝗼𝘁 𝗰𝗮𝗽\n━━━━━━━━━━━━━━━━━━\n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }
} catch(e){
    console.log(e)
}}
module.exports.run = async function ({ api,Users,event, args }) {
  let name = await Users.getNameUser(event.senderID);
const timeNow = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
  if (thu == 'Sunday') thu = '𝐂𝐡𝐮̉ 𝐍𝐡𝐚̣̂𝐭'
  if (thu == 'Monday') thu = '𝐓𝐡𝐮̛́ 𝐇𝐚𝐢'
  if (thu == 'Tuesday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚'
  if (thu == 'Wednesday') thu = '𝐓𝐡𝐮̛́ 𝐓𝐮̛'
  if (thu == "Thursday") thu = '𝐓𝐡𝐮̛́ 𝐍𝐚̆𝐦'
  if (thu == 'Friday') thu = '𝐓𝐡𝐮̛́ 𝐒𝐚́𝐮'
  if (thu == 'Saturday') thu = '𝐓𝐡𝐮̛́ 𝐁𝐚̉𝐲'
    let mentions = [];
    mentions.push({
      tag: name,
      id: event.senderID
    })
    api.sendMessage({body: `→ đ𝗼̛̣𝗶 𝘁𝗶́ 𝗻𝗵𝗮 ${name} 𝗯𝗼𝘁 đ𝗮𝗻𝗴 𝗰𝗮𝗽\n⏳ 𝗖𝗮𝗽 𝘃𝗮̀𝗼 𝗹𝘂́𝗰: ${timeNow} || ${thu}\n💮 𝘃𝗼̛́𝗶 𝗹𝗮̣𝗶 𝘁𝘂̀𝘆 𝘁𝗵𝗲𝗼 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗯𝗼𝘁 𝗺𝗼̛́𝗶 𝗰𝗮𝗽 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮`,mentions}, event.threadID, event.messageID);
    var uid = String(args[0]);
    isNaN(uid) && (uid = Object.keys(event.mentions)[0], "message_reply" == event.type ? uid = event.messageReply.senderID : uid = event.senderID);
    var cookies = `datr=hEFrZKaG-HnfcCe0gqRDk4qC; sb=hEFrZBN_MVBpvfnCee4ZZC53; vpd=v1%3B755x384x2.8125; wd=384x755; fr=0MSOaVcOCq2Busn7m.AWWRez4D62wvpV-E2fOw0w99f2s.Bka0GE.iQ.AAA.0.0.BkgZR_.AWW0nYHiY9o; c_user=100001917453768; xs=28%3A4935NG8sMJjF_g%3A2%3A1686213765%3A-1%3A6378; m_page_voice=100001917453768; locale=en_US; fbl_cs=AhBTdgdQfhao0rKMcRUhXwaCGFRPeEo5aFBOVGpRZWFNdjNaaDF2M1IzZg; fbl_ci=940026847377135; fbl_st=100424093%3BT%3A28103918; wl_cbv=v2%3Bclient_version%3A2269%3Btimestamp%3A1686235137; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEzOyBTTS1NMzI1RlYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTIuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzY%3D; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2013%3B%20SM-M325FV)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Mobile%20Safari%2F537.36; `,
    vaildItems = ['sb', 'datr', 'c_user', 'xs', 'm_pixel_ratio', 'locale', 'wd', 'fr', 'presence', 'xs', 'm_page_voice', 'fbl_st', 'fbl_ci', 'fbl_cs', 'vpd', 'wd', 'fr', 'presence'];
    var cookie = `datr=hEFrZKaG-HnfcCe0gqRDk4qC; sb=hEFrZBN_MVBpvfnCee4ZZC53; vpd=v1%3B755x384x2.8125; wd=384x755; fr=0MSOaVcOCq2Busn7m.AWWRez4D62wvpV-E2fOw0w99f2s.Bka0GE.iQ.AAA.0.0.BkgZR_.AWW0nYHiY9o; c_user=100001917453768; xs=28%3A4935NG8sMJjF_g%3A2%3A1686213765%3A-1%3A6378; m_page_voice=100001917453768; locale=en_US; fbl_cs=AhBTdgdQfhao0rKMcRUhXwaCGFRPeEo5aFBOVGpRZWFNdjNaaDF2M1IzZg; fbl_ci=940026847377135; fbl_st=100424093%3BT%3A28103918; wl_cbv=v2%3Bclient_version%3A2269%3Btimestamp%3A1686235137; useragent=TW96aWxsYS81LjAgKExpbnV4OyBBbmRyb2lkIDEzOyBTTS1NMzI1RlYpIEFwcGxlV2ViS2l0LzUzNy4zNiAoS0hUTUwsIGxpa2UgR2Vja28pIENocm9tZS8xMTIuMC4wLjAgTW9iaWxlIFNhZmFyaS81MzcuMzY%3D; _uafec=Mozilla%2F5.0%20(Linux%3B%20Android%2013%3B%20SM-M325FV)%20AppleWebKit%2F537.36%20(KHTML%2C%20like%20Gecko)%20Chrome%2F112.0.0.0%20Mobile%20Safari%2F537.36; `;
    cookies.split(';').forEach(item => {
        var data = item.split('=');
        if (vaildItems.includes(data[0])) cookie += `${data[0]}=${data[1]};`;
    });
    var url = encodeURI(encodeURI((`https://trend-trai-tim.hianime.repl.co/screenshot/${uid}/${cookie}`))),
        path = __dirname + `/cache/${uid}.png`;
    axios({
        method: "GET",
        url: `https://api.screenshotmachine.com/?key=5102e6&url=${url}&dimension=1024x768`,
        responseType: "arraybuffer"
    }).then(res => {
        fs.writeFileSync(path, Buffer.from(res.data, "utf-8"));
        api.sendMessage({body: `‎‎‎‎🎥 ==== [ 𝗖𝗔𝗣 𝗪𝗔𝗟𝗟 ] ==== 🎥\n━━━━━━━━━━━━━━━━\n🌸 𝗮̂𝘆 𝗱𝗼̂ 𝗯𝗼𝘁 𝗰𝗮𝗽 𝘅𝗼𝗻𝗴 𝗿𝗼̂̀𝗶 𝗻𝗲̀ ${name}\n⏰ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${timeNow} || ${thu}\n━━━━━━━━━━━━━━━━━\n⚙️ 𝗕𝗮̣𝗻 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝗱𝘂̀𝗻𝗴 !𝗰𝗮𝗽 + 𝘁𝗮𝗴 𝗵𝗼𝗮̣̆𝗰 𝗿𝗲𝗽𝗹𝘆 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 đ𝗲̂̉ 𝗯𝗼𝘁 𝗰𝗮𝗽\n━━━━━━━━━━━━━━━━━━\n→ 𝘁𝗶́𝗻𝗵 𝗻𝗮̆𝗻𝗴 𝘁𝘂̛̣ đ𝗼̣̂𝗻𝗴 𝗰𝗮𝗽 𝘄𝗮𝗹𝗹 𝗸𝗵𝗶 𝗽𝗵𝗮́𝘁 𝗵𝗶𝗲̣̂𝗻 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗰𝗮𝗽`,mentions, attachment: fs.createReadStream(path) }, event.threadID, () => fs.unlinkSync(path), event.messageID);
    }).catch(err => console.log(err));
  }