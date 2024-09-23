module.exports.config = {
	name: "count", 
	version: "1.0.0", 
	hasPermssion: 0, 
	credits: "BerVer mod by Drasew", 
	description:"Đếm mọi thứ trong box chat", 
	commandCategory: "Nhóm", 
	usages: "count admin/adminbot/messagebox/messageuser/qtv/listqtv/member/male/female/gei/allgroup/alluser/modules/commands/events/uptime/time/fast/ping/rank", 
	cooldowns: 5,
   	dependencies: {
		"pidusage": "",
		"fast-speedtest-api": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}
module.exports.run = async function({ api,Threads,Users, event, args, client, __GLOBAL, Currencies }) {
const fast = global.nodemodule["fast-speedtest-api"];
		const speedTest = new fast({
			token: "YXNkZmFzZGxmbnNkYWZoYXNkZmhrYWxm",
			verbose: false,
			timeout: 10000,
			https: true,
			urlCount: 5,
			bufferSize: 8,
			unit: fast.UNITS.Mbps
		});
const resault = await speedTest.getSpeed();
const { commands } = global.client;
const { events } = global.client;
const { threadID, messageID } = event;
const { participantIDs, adminIDs } = (await Threads.getData(event.threadID)).threadInfo;
		let qtv = adminIDs.length;
var listAdmin = global.config.ADMINBOT;
  var msgAd = [];
  let count = 0;
  for (const idAdmin of listAdmin) {
  if (parseInt(idAdmin)) {
  count++;
  var fullName = global.data.userName.get(idAdmin);
  const name = (await Users.getData(idAdmin)).name
   msgAd.push(`${count}> ${name}\n> ${idAdmin}`);
    }
  } 
const time = process.uptime(),
hours = Math.floor(time / (60 * 60)),
minutes = Math.floor((time % (60 * 60)) / 60),
seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var gio = moment.tz("Asia/Ho_Chi_Minh").format("HH");
var phut = moment.tz("Asia/Ho_Chi_Minh").format("mm");
var giay = moment.tz("Asia/Ho_Chi_Minh").format("ss");
const fs = require("fs");
const timeStart = Date.now();
let today = new Date();
var d = new Date();
var day = d.getDay()
if (day == 0) var day = "Chủ nhật"
else if (day == 1) var day = "Thứ hai"
else if (day == 2) var day = "Thứ ba"
else if (day == 3) var day = "Thứ tư"
else if (day == 4) var day = "Thứ năm"
else if (day == 5) var day = "Thứ sáu"
else if (day == 6) var day = "Thứ bảy"
else if (day == 7) var day = "Chủ nhật"
else return console.log(day)
	var input =args.join();
	    var nameMen = [];
    var gendernam = [];
    var gendernu = [];
    var nope = [];
    		let threadInfo = await api.getThreadInfo(event.threadID);
        let sl = threadInfo.messageCount;
    var listad = '';
    var qtv2 = threadInfo.adminIDs;
    dem = 1;
    for (let i = 0; i < qtv2.length; i++) {
        const name = (await Users.getData(qtv2[i].id)).name
        listad += '' + `${dem++}` + '. ' + name + '\n';
    }
    const listUserID = event.participantIDs
      var id = listUserID
      exp = [];
      var name = await Users.getData(id)
      for(const idUser of listUserID) {
      const countMess = await Currencies.getData(event.senderID) || await Currencies.getData(id);
      exp.push({"name" : idUser.name, "exp": (typeof countMess.exp == "undefined") ? 0 : countMess.exp, "uid": idUser});
  }
      exp.sort(function (a, b) { return b.exp - a.exp });
      const rank = exp.findIndex(info => parseInt(info.uid) == parseInt(event.senderID)) + 1;       
      const infoUser = exp[rank - 1];
        for (let z in threadInfo.userInfo) {
     	var gioitinhone = threadInfo.userInfo[z].gender;
        if(gioitinhone == "MALE"){gendernam.push(gioitinhone)
        }else{
        		if (gioitinhone=="FEMALE"){gendernu.push(gioitinhone)
        			}else{nope.push(gioitinhone)}}}
		var out = (msg) => api.sendMessage(msg, event.threadID, event.messageID);
	var boxget = await Threads.getAll(['threadID'])
var userget = await Users.getAll(['userID'])
		if (input==""){out(`Bạn chưa nhập thẻ, hãy sử dụng các thẻ sau: admin/adminbot/messagebox/messageuser/qtv/listqtv/member/male/female/gei/allgroup/alluser/modules/commands/events/uptime/time/fast/ping/rank`)}
		if (input=="message") {out(`====[ Message ]====\nNhóm này có ${threadInfo.messageCount} tin nhắn`)}
		if (input=="qtv"){out(`====[ Qtv ]====\nNhóm mày có ${threadInfo.adminIDs.length} quản tri viên`)}
		if (input=="member"){out(`====[ Member ]====\nNhóm này có ${threadInfo.participantIDs.length} thành viên`)}
		if (input=="male"){out(`====[ Male ]====\nNhóm này có ${gendernam.length} thành viên là nam`)}
		if (input=="female"){out(`====[ Female ]====\nNhóm này có ${gendernu.length} thành viên là nữ`)}
		if (input=="gei"){out(`====[ Gei ]====\nNhóm này có ${nope.length} thành viên là Gei`)}
		if (input=="allgroup"){out(`====[ All Group ]====\nTổng có ${boxget.length} nhóm chat sử dụng bot`)}
		if (input=="alluser"){out(`====[ All User ]====\nTổng có ${userget.length} người dùng sử dụng bot`)}
    if (input=="modules"){out(`====[ Modules ]====\nTổng có ${commands.size} lệnh commands và  ${events.size} event trên bot`)}
    if (input=="commands"){out(`====[ Commands ]====\nTổng có ${commands.size} lệnh commands trên bot`)}
    if (input=="events"){out(`====[ Events ]====\nTổng có ${events.size} lệnh event trên bot`)}
    if (input=="uptime"){out(`====[ Uptime ]====\nBot đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây`)}
    if (input=="time"){out(`====[ Time ]====\nBây giờ là ${gio}:${phut}:${giay} (${day})`)}
    if (input=="fast"){out(`====[ Fast ]====\nSpeed: ${resault} Mbps`)}
    if (input=="ping"){out(`====[ Ping ]====\nPing: ${Date.now() - timeStart}`)}
    if (input=="adminbot"){out(`====[ Amdin Bot ]====\n${msgAd.join("\n")}`)}
    if (input=="messagebox"){out(`====[ Message Box ]====\nTổng số tin nhắn của nhóm là ${sl} tin nhắn`)}
    if (input=="messageuser"){out(`====[ Message User  ]====\nSố tin nhắn của bạn hiện có ${infoUser.exp} tin nhắn`)}
    if (input=="admin"){out(`====[ Admin ]====\nTổng admin hiện tại của nhóm có ${qtv} quản trị viên`)}
    if (input=="listqtv"){out(`====[ Admin Box ]====\nTổng admin hiện tại của nhóm có ${qtv} quản trị viên\n${listad}`)}
    if (input=="rank"){out(`====[ Rank ]====\nRank hiện tại của bạn trên hệ thống\nBạn đứng hạng ${rank} trong sever của bot`)}
}

