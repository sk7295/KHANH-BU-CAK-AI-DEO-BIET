const fs = require('fs-extra');
const pathFile = __dirname + '/cache/autoseen.txt';
if (!fs.existsSync(pathFile))
  fs.writeFileSync(pathFile, 'false');
  
module.exports.config = {
	name: "autoseen",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "NTKhang",
	description: "Bật/tắt tự động seen khi có tin nhắn mới",
	commandCategory: "ADMIN",
	usages: "on/off",
	cooldowns: 5
};

module.exports.handleEvent = async ({ api, event, args }) => {
  const isEnable = fs.readFileSync(pathFile, 'utf-8');
  if (isEnable == 'true')
    api.markAsReadAll(() => {});
};
module.exports. run = async ({ api, event, args }) => {
  const permission = ["100001378940139"];
  if (!permission.includes(event.senderID)) return api.sendMessage("Xin hộ cái tuổi cái?", event.threadID, event.messageID);
  try {
	if (args[0] == 'on') {
	  fs.writeFileSync(pathFile, 'true');
	  api.sendMessage('Đã 𝐛ậ𝐭 𝐜𝐡ế độ 𝐭ự độ𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜ó 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐦ớ𝐢', event.threadID, event.messageID);
	}
	else if (args[0] == 'off') {
	  fs.writeFileSync(pathFile, 'false');
	  api.sendMessage('Đã 𝐭ắ𝐭 𝐜𝐡ế độ 𝐭ự độ𝐧𝐠 𝐬𝐞𝐞𝐧 𝐤𝐡𝐢 𝐜ó 𝐭𝐢𝐧 𝐧𝐡ắ𝐧 𝐦ớ𝐢', event.threadID, event.messageID);
	}
	else {
	  api.sendMessage('𝐇𝐃𝐒𝐃 - 𝐁ạ𝐧 𝐜ó 𝐭𝐡ể 𝐝ù𝐧𝐠 𝐚𝐮𝐭𝐨𝐬𝐞𝐞𝐧 𝐨𝐧 𝐡𝐨ặ𝐜 𝐨𝐟𝐟', event.threadID, event.messageID);
	}
  }
  catch(e) {
    console.log(e);
  }
};