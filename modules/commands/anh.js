module.exports.config = {
	name: "anh",
	version: "1.0.3",
	hasPermssion: 0,
	credits: "Võ Nhật Hoàng",
	description: "Xem ảnh réply",
	commandCategory: "Tiện ích",
	cooldowns: 5,
	dependencies: {
		axios: ""
	}
  };
  module.exports.onLoad = () => {
    const fs = require("fs-extra");
    const request = require("request");
    const dirMaterial = __dirname + `/noprefix/`;
    if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
    if (!fs.existsSync(dirMaterial + "tpk1.gif")) request("https://i.imgur.com/QrTKcbW.gif").pipe(fs.createWriteStream(dirMaterial + "tpk1.gif"));
}, module.exports.run = async function({
	event: e,
	api: a,
	args: n
}) {
    const fs = require("fs");
	if (!n[0]) return a.sendMessage({body:"=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗔̉𝗡𝗛 ] ===\n━━━━━━━━━━━━━━━━━━\n\n𝟭. 𝗔̉𝗻𝗵 𝗚𝗮́𝗶 💞 \n𝟮. 𝗔̉𝗻𝗵 𝗧𝗿𝗮𝗶 💕\n𝟯. 𝗔̉𝗻𝗵 𝗠𝗼̂𝗻𝗴 🍑\n𝟰. 𝗔̉𝗻𝗵 𝟲 𝗠𝘂́𝗶 😽\n𝟱. 𝗔̉𝗻𝗵 𝗡𝘂𝗱𝗲 🌚\n𝟲. 𝗔̉𝗻𝗵 𝗖𝗼𝘀𝗽𝗹𝗮𝘆 😻\n𝟳. 𝗔̉𝗻𝗵 𝗦𝗲𝘅𝘆 🔥\n𝟴. 𝗔̉𝗻𝗵 𝗞𝗮𝗻𝗮 🌸\n𝟵. 𝗔̉𝗻𝗵 𝗗𝘂́ 🎀\n𝟭𝟬. 𝗔̉𝗻𝗵 𝗛𝗲𝗻𝘁𝗮𝗶 💸\n𝟭𝟭. 𝗔̉𝗻𝗵 𝗝𝗶𝗺𝗺𝘆 💊\n𝟭𝟮. 𝗔̉𝗻𝗵 𝗪𝗶𝗯𝘂 🌸\n𝟭𝟯. 𝗔̉𝗻𝗵 𝗟𝗼𝗹𝗶 📌\n𝟭𝟰. 𝗔̉𝗻𝗵 𝗣𝗵𝗼𝗻𝗴 𝗖𝗮̉𝗻𝗵 🌻\n𝟭𝟱. 𝗔̉𝗻𝗵 𝗧𝗲̂́𝘁 𝟮𝟬𝟮𝟯 🎇\n━━━━━━━━━━━━━━━━━━\n=== [ 𝗗𝗔𝗡𝗛 𝗦𝗔́𝗖𝗛 𝗩𝗜𝗗𝗘𝗢 ] ===\n𝟭𝟲. 𝗩𝗶𝗱𝗲𝗼 𝗔𝗻𝗶𝗺𝗲 📺\n𝟭𝟳. 𝗩𝗶𝗱𝗲𝗼 𝗚𝗮́𝗶 🐰\n𝟭𝟴. 𝗩𝗶𝗱𝗲𝗼 𝗖𝗵𝗶𝗹𝗹 🎊\n𝟭𝟵. 𝗩𝗶𝗱𝗲𝗼 𝗧𝗲̂́𝘁 🎆\n𝟮𝟬. 𝗔𝗻𝗶𝗺𝗲 𝘃𝟮 🧸\n𝟮𝟭. 𝗧𝗲̣̂𝗽 𝗚𝗶𝗳 𝗣𝗵𝗼𝗻𝗴 𝗖𝗮̉𝗻𝗵 🌟\n𝟮𝟮. 𝗩𝗶𝗱𝗲𝗼 𝘁𝐚̂𝗺 𝘁𝗿𝗮̣𝗻𝗴 💓\n𝟮𝟯. 𝗠𝘂𝘀𝗶𝗰 𝗰𝗵𝗶𝗹𝗹 & 𝗩𝗶𝗱𝗲𝗼 𝗻𝗴𝗼̂𝗻 𝘁𝗶̀𝗻𝗵 🥀\n\n→ 𝗥𝗲𝗽𝗹𝘆 𝗧𝗶𝗻 𝗡𝗵𝗮̆́𝗻 𝗡𝗮̀𝘆 𝗩𝗮̀ 𝗖𝗵𝗼̣𝗻 𝗧𝗵𝗲𝗼 𝗦𝗧𝗧 𝗔̉𝗻𝗵 𝗛𝗼𝗮̣̆𝗰 𝗩𝗶𝗱𝗲𝗼 𝗕𝗮̣𝗻 𝗠𝘂𝗼̂́𝗻 𝗫𝗲𝗺 𝗡𝗵𝗲́ 🐧",attachment: fs.createReadStream(__dirname + `/noprefix/tpk1.gif`)}, e.threadID, ((a, n) => {
		global.client.handleReply.push({
			name: this.config.name,
			messageID: n.messageID,
			author: e.senderID,
			type: "create"
		})
	}), e.messageID)
}, module.exports.handleReply = async ({
	api: e,
	event: a,
	client: n,
	handleReply: t,
	Currencies: s,
	Users: i,
	Threads: o
}) => {
	var { p, h } = linkanh();

	if ("create" === t.type) {
		const n = (await p.get(h)).data.data;
		let t = (await p.get(n, {
			responseType: "stream"
		})).data;
		return e.sendMessage({
			body: "[ 𝗧𝗵𝗮̀𝗻𝗵 𝗖𝗼̂𝗻𝗴 ] →  𝗰𝘂̉𝗮 𝗯𝗮̣𝗻 𝘆𝗲̂𝘂 𝗰𝗮̂̀𝘂 𝗻𝗲̀ 🐧️",
			attachment: t
		}, a.threadID, a.messageID)
	}

    function linkanh() {
        const p = require("axios");
        if ("1" == a.body)
            var h = "https://vnhhoang206.vnhoang06.repl.co/api/img/anhgaixinh";
        else if ("2" == a.body)
         var   h = "https://vnhhoang206-1.vnhoang06.repl.co/api/img/anhgai";
        else if ("3" == a.body)
         var   h = "https://vnhhoang206-2.vnhoang06.repl.co/api/img/gaiditbu";
        else if ("4" == a.body)
          var  h = "https://vnhhoang206-3.vnhoang06.repl.co/api/img/trai6mui";
        else if ("5" == a.body)
          var  h = "https://vnhhoang206-4.vnhoang06.repl.co/api/img/anhnude";
        else if ("6" == a.body)
          var  h = "https://vnhhoang206-5.vnhoang06.repl.co/api/img/anhcosplay";
        else if ("7" == a.body)
          var  h = "https://vnhhoang206-6.vnhoang06.repl.co/api/img/anhsexy";
        else if ("8" == a.body)
         var   h = "https://apikanna.khoahoang3.repl.co/";
        else if ("9" == a.body)
         var  h = "https://vnhhoang206-7.vnhoang06.repl.co/api/img/gaidubu";
        else if ("10" == a.body)
          var  h = "https://apituandz1407.herokuapp.com/api/hentai.php";
        else if ("11" == a.body)
          var  h = "https://jimmy.ocvat2810.repl.co";
        else if ("12" == a.body)
         var   h = "https://wibu.ocvat2810.repl.co";
        else if ("13" == a.body)
          var  h = "https://vnhhoang206-8.vnhoang06.repl.co/api/img/avtxinh";
        else if ("14" == a.body)
          var  h = "https://vnhhoang206-9.vnhoang06.repl.co/api/img/phongcanh";
        else if ("15" == a.body)
         var   h = "https://vnhhoang206-10.vnhoang06.repl.co/api/img/anhtet";
        else if ("16" == a.body)
          var  h = "https://vnhhoang206-11.vnhoang06.repl.co/api/mp4/videoanime";
        else if ("17" == a.body)
         var   h = "https://vnhhoang206-12.vnhoang06.repl.co/api/mp4/videogai";
        else if ("18" == a.body)
         var   h = "https://vnhhoang206-13.vnhoang06.repl.co/api/mp4/videochill";
        else if ("19" == a.body)
         var   h = "https://vnhhoang206-14.vnhoang06.repl.co/api/mp4/videotet";
        else if ("20" == a.body)
         var   h = "https://vnhhoang206-15.vnhoang06.repl.co/api/mp4/animevideo";
        else if ("21" == a.body)
         var   h = "https://vnhhoang206-16.vnhoang06.repl.co/api/gif/gifchill";
       else if ("22" == a.body)
         var   h = "https://vnhhoang206-17.vnhoang06.repl.co/api/mp4/videotamtrang";
      else if ("23" == a.body)
         var   h = "https://vnhhoang206-18.vnhoang06.repl.co/api/mp4/musicchill";
        return { p, h };
    }
};