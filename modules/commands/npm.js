const config = new setUp()
function setUp() {
  return {
    name: "npm",
    hasPermssion: 0,
    version: "1.0.0",
    credits: "Trần Thanh Dương",
    description: "xem thông tin 1 package trên npmjs",
    commandCategory: "Tiện ích",
    usages: "",
    cooldowns: 5
  }
}
const axios = require("axios")
const { execSync } = require('child_process')
async function run({ api, event, args }) {
  try {
    let res = await axios.get(`https://api-1.miraiofficials123.repl.co/npm/?package=${args[0]}`)
    let msg = []
    for(let i = 0; i < res.data.length; i++) {
      let data = res.data[i]
      msgg = `→ Tên: ${data.name}\n→ Phiên bản: ${data.version}\n→ Tác giả: ${data.author.name}\n→ Tài khoản: ${data.publisher.username}\n→ Email: ${data.publisher.email}\n→ Mô tả: ${data.description}\n→ Tải lên: ${data.date}\n→ Đường dẫn: ${data.links.npm}\n`
      msg.push(msgg)
    }
api.sendMessage(`${msg.join("\n\n")}━━━━━━━━━━━━━━━━━━\n→  Tìm thấy ${res.data.length} kết quả tìm kiếm cho từ khoá "${args[0]}"\n→ Thả cảm xúc để cài mô-đun`, event.threadID, (error, info) => {
  global.client.handleReaction.push({
                type: "npm",
                name: this.config.name,
                ID: event.messageID,
    author: event.senderID,
                messageID: info.messageID,
                args: args[0]
              }), event.messageID
    })
  } catch(e) {
    console.log(e)
  }
}
async function handleReaction({ api, event, args, handleReaction }) {
  try { //thay uid của bạn tại đây
		if (event.userID != "100001378940139") return api.sendMessage("Chỉ Admin có đủ quyền hạn để sử dụng tính năng", event.threadID, event.messageID)
     switch(handleReaction.type) {
       case "npm": {
api.unsendMessage(event.messageID)

        execSync(`npm install ${handleReaction.args}`)
             api.sendMessage(`Đã cài thành công mô-đun "${handleReaction.args}"`, event.threadID, event.messageID)
       }
     }
  } catch(e) {
    console.log(e)
  }
}
module.exports = {
  config,
  run, 
  handleReaction 
}