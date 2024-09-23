module.exports.config = {
  name: "out",
  version: "1.0.0",
  hasPermssion: 2,
  credits: "DũngUwU",
  description: "out box",
  commandCategory: "Hệ Thống",
  usages: "[tid]",
  cooldowns: 3
};

module.exports.run = async function({ api, event, args }) {
  const permission = ["100090458979503"];
  if (!permission.includes(event.senderID))
  return api.sendMessage("→ [❗] Đ𝐚̂́𝐦 𝐩𝐡𝐚́𝐭 𝐠𝐢𝐨̛̀ 𝐜𝐡𝐮̛́ 𝐨𝐮𝐭 😏", event.threadID, event.messageID);
  var id;
  if (!args.join(" ")) {
    id = event.threadID;
  } else {
    id = parseInt(args.join(" "));
  }
  return api.sendMessage('→ [🌷] 𝐓𝐮𝐚̂𝐧 𝐥𝐞̣̂𝐧𝐡 𝐜𝐮𝐧𝐠 𝐜𝐡𝐮̉ 💌', id, () => api.removeUserFromGroup(api.getCurrentUserID(), id))
}