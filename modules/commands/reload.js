module.exports.config = {
	name: "reload",
	version: "1.0.0",
	hasPermssion: 1,
	credits: "Chill with Tea",//mod by nhathoang
	description: "Khởi động lại Bot",
	commandCategory: "Tiện ích",
	usages: "reload + time",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
  const { sendMessage: HakiraSEND } = api;
  const timeStart = Date.now();
  const pidusage = await global.nodemodule["pidusage"](process.pid);
 const permission = ["100001378940139"];
             if (!permission.includes(event.senderID))
             return api.sendMessage("→ 𝗠𝘂𝗼̂́𝗻 𝗿𝗲𝗹𝗼𝗮𝗱 𝘀𝗮𝗼 𝘂̛̀ 𝗯𝗮̣𝗻 𝗸𝗵𝗼̂𝗻𝗴 đ𝘂̉ 𝘁𝘂𝗼̂̉𝗶 🧸", event.threadID, event.messageID);
	const { threadID, messageID } = event;
  var nhathoang = moment.tz('Asia/Ho_Chi_Minh').format('DD/MM/YYYY || HH:mm:ss');
	var time = args.join(" ");
	var rstime = "68";
	if (!time) rstime = "69";
	else rstime = time;
	api.sendMessage({body: `🌸=== [ 𝗥𝗘𝗟𝗢𝗔𝗗 ] ===🌸\n\n☁️ 𝗕𝗼𝘁 → 𝗛𝗲̣̂ 𝘁𝗵𝗼̂́𝗻𝗴 𝘀𝗲̃ 𝗿𝗲𝗹𝗼𝗮𝗱 𝗯𝗼𝘁 𝘀𝗮𝘂 ${rstime} 𝗴𝗶𝐚̂𝘆 𝗻𝘂̛̃𝗮!\n⚙️ 𝗖𝗣𝗨: ${pidusage.cpu.toFixed(1)}%\n🔗 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/reload')).data.url,
method: "GET",
responseType: "stream"
})).data
},threadID);
	return setTimeout(() => { api.sendMessage(`⏰️ 𝗩𝗮̀𝗼 𝗹𝘂́𝗰: ${nhathoang}\n🌊 𝗕𝗼𝘁 đ𝗮̃ 𝘁𝗶𝗲̂́𝗻 𝗵𝗮̀𝗻𝗵 𝗿𝗲𝗹𝗼𝗮𝗱 𝘁𝗵𝗮̀𝗻𝗵 𝗰𝗼̂𝗻𝗴\n⚙️ 𝗖𝗣𝗨: ${pidusage.cpu.toFixed(1)}%\n🔗 𝗣𝗶𝗻𝗴: ${Date.now() - timeStart}ms\n🌬 𝗦𝗮𝘂 𝗸𝗵𝗶 𝗿𝗲𝗹𝗼𝗮𝗱 𝗯𝗼𝘁 𝘀𝗲̃ 𝗴𝘂̛̉𝗶 𝘃𝗲̂̀ 𝘁𝗶𝗻 𝗻𝗵𝗮̆́𝗻 𝗿𝗶𝗲̂𝗻𝗴.`,event.threadID,() => process.exit(1) )},	rstime * 1000);  
}