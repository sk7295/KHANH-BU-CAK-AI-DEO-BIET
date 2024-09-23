module.exports.config = {
	name: "menu",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "ntkien",
	description: "Hướng dẫn cho người mới",
	commandCategory: "Tutorial",
	usages: "[Tên module]",
	cooldowns: 5
};

module.exports.handleEvent = function ({ api, event }) {
	const { commands } = global.client;
	if (!event.body) return;
	const { threadID, messageID, body } = event;
	if (body.indexOf("menu") != 0) return;
	const splitBody = body.slice(body.indexOf("menu")).trim().split(/\s+/);
	if (splitBody.length == 1 || !commands.has(splitBody[1].toLowerCase())) return;
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
	const command = commands.get(splitBody[1].toLowerCase());
	const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(`❄️🦋» ${command.config.name} «🦋❄️\n${command.config.description}\n\nCách sử dụng: ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\nThuộc nhóm: ${command.config.commandCategory}\nThời gian chờ: ${command.config.cooldowns} giây(s)\nQuyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\nPrefix: ${prefix}\n\n» Module code by ${command.config.credits} «`, threadID, messageID);
}
module.exports.run = function({ api, event, args }) {
	const { commands } = global.client;
  const { events } = global.client;
	const { threadID, messageID } = event;
	const command = commands.get((args[0] || "").toLowerCase());
	const threadSetting = global.data.threadData.get(parseInt(threadID)) || {};
const timenow = require("moment-timezone").tz("Asia/Ho_Chi_Minh");
const gio = timenow.format("HH");
  if (gio >= 6) get = "buổi sáng"
  if (gio >= 12) get = "buổi trưa"
  if (gio >= 13) get = "buổi chiều"
  if (gio >= 18) get = "buổi tối"
  if (gio >= 23) get = "buổi tối"
	if (!command) {
		const command = commands.values();
		var group = [], msg = "";
		for (const commandConfig of command) {
			if (!group.some(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase())) group.push({ group: commandConfig.config.commandCategory.toLowerCase(), cmds: [commandConfig.config.name] });
			else group.find(item => item.group.toLowerCase() == commandConfig.config.commandCategory.toLowerCase()).cmds.push(commandConfig.config.name);
		}
        group.forEach(commandGroup => msg += `🍓🌸 「 ${commandGroup.group.charAt(0).toUpperCase() + commandGroup.group.slice(1)} 」 🌸🍓\n${commandGroup.cmds.join(', ')}\n\n`);
		return api.sendMessage(msg + `🌼 Bot được điều hành và phát triển bởi admin: 𝗕𝗮̀𝗻 𝗧𝘂𝗮̂́𝗻 𝗞𝗵𝗮𝗻𝗵\n🌵 Số lệnh hiện có: ${commands.size} lệnh và ${events.size} lệnh sự kiện\n🍀 Cách sử dụng: "${(threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX}help (tên lệnh)" để xem chi tiết cách sử dụng!🍃\n🛎 Sau 99 giây ${this.config.name} tự động gỡ UwU <333!\nChúc các bạn ${get} vui vẻ !`, threadID,(err, info) => setTimeout(() => api.unsendMessage(info.messageID), 99000),messageID);

	}
const prefix = (threadSetting.hasOwnProperty("PREFIX")) ? threadSetting.PREFIX : global.config.PREFIX;
	return api.sendMessage(`Tên lệnh: "${command.config.name}"\nChức năng: ${command.config.description}\nCách sử dụng:    ${prefix}${command.config.name} ${(command.config.usages) ? command.config.usages : ""}\nThuộc nhóm: ${command.config.commandCategory}\nThời gian chờ: ${command.config.cooldowns} giây(s)\nQuyền hạn: ${((command.config.hasPermssion == 0) ? "Người dùng" : (command.config.hasPermssion == 1) ? "Quản trị viên" : "Người vận hành bot" )}\nPrefix: ${prefix}\nModule code by: ${command.config.credits} `, threadID, messageID);
}
