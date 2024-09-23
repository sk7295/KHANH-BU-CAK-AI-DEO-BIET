module.exports.config = {
	name: "leaveNoti",
	eventType: ["log:unsubscribe"],
	version: "1.0.0",
	credits: "",
	description: "Thông báo bot hoặc người rời khỏi nhóm có random gif/ảnh/video",
	dependencies: {
		"fs-extra": "",
		"path": ""
	}
};
function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
const checkttPath = __dirname + '/../commands/checktuongtac/'

module.exports.onLoad = function () {
    const { existsSync, mkdirSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];

	const path = join(__dirname, "cache", "leaveGif");
	if (existsSync(path)) mkdirSync(path, { recursive: true });	

	const path2 = join(__dirname, "cache", "leaveGif", "randomgif");
    if (!existsSync(path2)) mkdirSync(path2, { recursive: true });

    return;
}

module.exports.run = async function ({ api, event, Users, Threads }) {
    var fullYear = global.client.getTime("fullYear");
  	var getHours = await global.client.getTime("hours");
		var session = `${getHours < 3 ? "đêm khuya" : getHours < 8 ? "buổi sáng sớm" : getHours < 12 ? "buổi trưa" : getHours < 17 ? "buổi chiều" : getHours < 23 ? "buổi tối" : "đêm khuya"}`
    if (event.logMessageData.leftParticipantFbId == api.getCurrentUserID()) return;
    const { createReadStream, existsSync, mkdirSync, readdirSync, readFileSync, writeFileSync } = global.nodemodule["fs-extra"];
    const { join } = global.nodemodule["path"];
    const { threadID } = event;
    const moment = require("moment-timezone");
    const time = moment.tz("Asia/Ho_Chi_Minh").format("DD/MM/YYYY || HH:mm:ss");
    const hours = moment.tz("Asia/Ho_Chi_Minh").format("HH");
    var thu = moment.tz('Asia/Ho_Chi_Minh').format('dddd');
    if (thu == 'Sunday') thu = 'Chủ Nhật'
    if (thu == 'Monday') thu = 'Thứ Hai'
    if (thu == 'Tuesday') thu = 'Thứ Ba'
    if (thu == 'Wednesday') thu = 'Thứ Tư'
    if (thu == "Thursday") thu = 'Thứ Năm'
    if (thu == 'Friday') thu = 'Thứ Sáu'
    if (thu == 'Saturday') thu = 'Thứ Bảy'
    const data = global.data.threadData.get(parseInt(threadID)) || (await Threads.getData(threadID)).data;
    const iduser = event.logMessageData.leftParticipantFbId;
    const name = global.data.userName.get(event.logMessageData.leftParticipantFbId) || await Users.getNameUser(event.logMessageData.leftParticipantFbId);
    const type = (event.author == event.logMessageData.leftParticipantFbId) ? "Tự bấm nút rời" : "Bị quản trị viên kick khỏi nhóm";
	const path = join(__dirname, "cache", "leaveGif");
	const gifPath = join(path, `${threadID}.gìf`);
    var msg, formPush

    if (existsSync(checkttPath + threadID + '.json')) {
        const threadData = JSON.parse(readFileSync(checkttPath + threadID + '.json'));
        const userData_week_index = threadData.week.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_day_index = threadData.day.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        const userData_total_index = threadData.total.findIndex(e => e.id == event.logMessageData.leftParticipantFbId);
        if (userData_total_index != -1) {
            threadData.total.splice(userData_total_index, 1);
        }
        if (userData_week_index != -1) {
            threadData.week.splice(userData_week_index, 1);
        }
        if (userData_day_index != -1) {
            threadData.day.splice(userData_day_index, 1);
        }

        writeFileSync(checkttPath + threadID + '.json', JSON.stringify(threadData, null, 4));
    }
    if (existsSync(path)) mkdirSync(path, { recursive: true });

    (typeof data.customLeave == "undefined") ? msg = "→「 {name} 」vừa bị 「 {type} 」\n━━━━━━━━━━━━━━━━━━━━━━━\n→ Link FACEBOOK: https://www.facebook.com/{iduser}\n→ Vì không tương tác nên đã bị 「 {author} 」 {type}\n→ Người kick: 「 {author} 」\n→ Link FACEBOOK: https://www.facebook.com/{uidAuthor}\n━━━━━━━━━━━━━━━━━━━━━━━\n→ Chúc {name} tìm được box phù hợp hơn\n━━━━━━━━━━━━━━━━━━━━━━━\n→ Chúc mem box tuyển lại được 1 tvien mới\n→ Thời gian out nhóm: {thu} {time}" : msg = data.customLeave;
  var getData = await Users.getData(event.author)
var nameAuthor = typeof getData.name == "undefined" ? "" : getData.name
    msg = msg.replace(/\{name}/g, name).replace(/\{type}/g, type).replace(/\{buoi}/g, session).replace(/\{thu}/g, thu).replace(/\{iduser}/g, iduser).replace(/\{author}/g, nameAuthor).replace(/\{uidAuthor}/g, event.author).replace(/\{time}/g, time);

	const randomPath = readdirSync(join(__dirname, "cache", "leaveGif"));

    if (existsSync(gifPath)) formPush = { body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-vnh--dawnlover.repl.co/images/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data }
    else if (randomPath.length != 0) {
		const pathRandom = join(__dirname, "cache", "leaveGif", `${randomPath[Math.floor(Math.random() * randomPath.length)]}`);
        formPush = { body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-vnh--dawnlover.repl.co/images/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data }
    }
    else formPush = { body: msg, attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://api-vnh--dawnlover.repl.co/images/videogai')).data.url,
method: "GET",
responseType: "stream"
})).data }

    return api.sendMessage(formPush, threadID);
  }