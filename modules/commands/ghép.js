const axios = require('axios');
const fse = require('fs-extra');
const DownLoad = async (url, file, ext) => {
var array = [];
  for (var i = 0; i < url.length; i++) {
const dest = __dirname + `/cache/${file}_${i}.${ext}`; 
await require('image-downloader').image({ url: url[i], dest }); 
 array.push(fse.createReadStream(dest));
//fse.unlinkSync(dest);
  };
return array;
}
const config = {
	name: 'ghép',
	version: '1.1.1',
	hasPermssion: 0,
	credits: 'nhathoang',
	description: 'Trò Chơi',
	commandCategory: 'THÀNH VIÊN',
	usages: 'Hướng dẫn cách dùng ghép có trên bot',
	cooldowns: 5
};
const run = async function ({ api, event }) {
const { threadID: tid, messageID: mid, senderID: sid, type, args, body, isGroup, messageReply: mR, mentions } = event;
const UID = sid
  
      const images = ['https://i.imgur.com/rZttcsG.jpeg',];
      const pn = args[0][0] + config.name
      api.sendMessage({body: `=== [ 𝗦𝗘𝗥𝗩𝗘𝗥 𝗚𝗛𝗘́𝗣 ] ===\n━━━━━━━━━━━━━━━\n💙 ${global.config.PREFIX}𝗴𝗵𝗲𝗽𝘁𝗶𝗻𝗱𝗲𝗿 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗱𝗮̣𝗻𝗴 𝗴𝗵𝗲́𝗽 𝗰𝘂̉𝗮 𝗮𝗽𝗽 𝘁𝗶𝗻𝗱𝗲𝗿\n❤️ ${global.config.PREFIX}𝗴𝗵𝗲𝗽𝗯𝗱 𝗻𝗲̂́𝘂 𝗯𝗮̣𝗻 𝗺𝘂𝗼̂́𝗻 𝗯𝗼𝘁 𝗱𝗼̂̉𝗶 𝗹𝘂𝗼̂𝗻 𝗰𝗮̉ 𝗯𝗶𝗲̣̂𝘁 𝗱𝗮𝗻𝗵\n💛 ${global.config.PREFIX}𝗴𝗵𝗲𝗽𝗰𝗮𝘃𝗮𝘀 𝗴𝗵𝗲́𝗽 đ𝗼̂𝗶 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗮̉𝗻𝗵 𝗰𝗮𝗻𝘃𝗮𝘀\n💜 ${global.config.PREFIX}𝗴𝗵𝗲𝗽𝗱𝗼𝗶 𝗴𝗵𝗲́𝗽 𝘁𝗵𝗲𝗼 𝗱𝗮̣𝗻𝗴 𝗰𝗼́ 𝗺𝗼̣̂𝘁 𝗴𝗶𝗳 𝗰𝘂𝘁𝗲 𝗼̛̉ 𝗴𝗶𝘂̛̃𝗮\n🤍 ${global.config.PREFIX}𝘁𝗶𝗺𝗻𝗴𝘂𝗼𝗶𝘆𝗲𝘂 𝗵𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝗯𝗼𝘁 𝘀𝗲̃ 𝘁𝗶̀𝗺 𝟭 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗽𝗵𝘂̀ 𝗵𝗼̛̣𝗽 𝘃𝗼̛́𝗶 𝗯𝗮̣𝗻 (𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗮̀𝗶 𝗻𝗮𝗺 𝗵𝗼𝗮̣̆𝗰 𝗻𝘂̛̃)\n\n⚠️ 𝗟𝘂̛𝘂 𝘆́: 𝗗𝘂̀𝗻𝗴 𝗻𝗵𝘂̛ 𝘁𝗿𝗲̂𝗻 đ𝗲̂̉ 𝘅𝘂̛̉ 𝗱𝘂̣𝗻𝗴, 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 𝘁𝗵𝗶̀ 𝗺𝗼̛́𝗶 𝗹𝗲̂𝗻`, attachment: await DownLoad(images, sid, 'png')}, tid, mid);
}
module.exports = {config,run}