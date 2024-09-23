module.exports.config = {
	name: "say",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Mirai Team",
	description: "Khiến bot trả về file âm thanh của chị google thông qua văn bản",
	commandCategory: "Công Cụ",
	usages: "[ru/en/ko/ja] [Text]",
	cooldowns: 5,
	dependencies: {
		"path": "",
		"fs-extra": ""
	}
};

module.exports.run = async function({ api, event, args }) {
	try {
		const { createReadStream, unlinkSync } = global.nodemodule["fs-extra"];
		const { resolve } = global.nodemodule["path"];
		var content = (event.type == "message_reply") ? event.messageReply.body : args.join(" ");
		var languageToSay = (["ru","en","ko","ja"].some(item => content.indexOf(item) == 0)) ? content.slice(0, content.indexOf(" ")) : global.config.language;
		var msg = (languageToSay != global.config.language) ? content.slice(3, content.length) : content;
    let axios = require('axios');
    if (args.length == 0 || !args) return api.sendMessage({body: '=== [ 𝗦𝗔𝗬 𝗠𝗘𝗡𝗨 ] ====\n━━━━━━━━━━━━━━━━━━\n🌟𝗛𝘂̛𝗼̛́𝗻𝗴 𝗗𝗮̂̃𝗻 𝗦𝘂̛̉ 𝗗𝘂̣𝗻𝗴🌟\n\n𝟭. 𝗦𝗮𝘆 + 𝘁𝗲𝘅𝘁 𝗰𝗮̂̀𝗻 𝗯𝗼𝘁 𝘁𝗿𝗮̉ 𝘃𝗲̂̀ 𝗹𝗮̣𝗶 𝗴𝗶𝗼̣𝗻𝗴 𝗰𝘂̉𝗮 𝗰𝗵𝗶̣ 𝗴𝗴 (𝘃𝗱: ?𝘀𝗮𝘆 𝗰𝗵𝗮̀𝗼 𝗰𝗮́𝗰 𝗯𝗮̣𝗻)\n𝟮. 𝗕𝗮̣𝗻 𝗰𝘂̃𝗻𝗴 𝗰𝗼́ 𝘁𝗵𝗲̂̉ 𝘀𝗮̀𝗶 𝗻𝗵𝗶𝗲̂̀𝘂 𝗴𝗶𝗼̣𝗻𝗴 𝗸𝗵𝗮́𝗰 𝗻𝗵𝗮𝘂 𝗰𝗼́ 𝘁𝗿𝗼𝗻𝗴 𝗹𝗲̣̂𝗻𝗵 (𝗿𝘂 , 𝗲𝗻 , 𝗸𝗼 , 𝗷𝗮)\n━━━━━━━━━━━━━━━━━━\n⚠️𝗟𝘂̛𝘂 𝘆́ 𝗻𝗲̂́𝘂 𝘀𝗽𝗮𝗺 𝘀𝗮𝘆 𝗻𝗵𝗶𝗲̂̀𝘂 𝘀𝗲̃ 𝗱𝗮̂̃𝗻 đ𝗲̂́𝗻 𝗺𝗼̃𝗺 𝘃𝗼𝗶𝗰𝗲',attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/imgphongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID);
		const path = resolve(__dirname, 'cache', `${event.threadID}_${event.senderID}.mp3`);
		await global.utils.downloadFile(`https://translate.google.com/translate_tts?ie=UTF-8&q=${encodeURIComponent(msg)}&tl=${languageToSay}&client=tw-ob`, path);
		return api.sendMessage({ attachment: createReadStream(path)}, event.threadID, () => unlinkSync(path));
	} catch (e) { return console.log(e) };
}