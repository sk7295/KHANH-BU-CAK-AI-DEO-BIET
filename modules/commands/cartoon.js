module.exports.config = {
    name: "cartoon",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "nhoang",
    description: "Thông tin phim hoạt hình",
    commandCategory: "tiện ích",
    usages: "infocartoon",
    cooldowns: 5
};
module.exports.run = async ({ event, api, args }) => {
    const axios = global.nodemodule["axios"];
    if (!args[0]) return api.sendMessage({body: `Hiện tại có 3 bộ phim hoạt hình có trên lệnh:\n1: Doraemon\n2: Naruto\n3: Shin Cậu Bé Bút Chì\nNếu bạn muốn admin làm về phim gì cứ sài ?cartoon donggop.`,attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/imgphongcanhanime')).data.url,
method: "GET",
responseType: "stream"
})).data
}, event.threadID, event.messageID);
    const naruto = (await axios.get(`https://i.imgur.com/jgKfvV1.jpeg`, { responseType: "stream"})).data
    const doraemon = (await axios.get(`https://i.imgur.com/TGZRXYd.png`, { responseType: "stream"})).data
   const shin = (await axios.get(`https://i.imgur.com/cIihqv1.jpeg`, { responseType: "stream"})).data
    const { threadID, messageID } = event;
    const fs = global.nodemodule["fs-extra"];
    let id = args[1];
    switch (args[0]) {
        case "Doraemon":
        case "doraemon": {
            return api.sendMessage({body:`🎞=== 「 𝗖𝗔𝗥𝗧𝗢𝗢𝗡 」===🎞\n━━━━━━━━━━━━━━━━━━\n📽 𝗧𝗲̂𝗻 𝗽𝗵𝗶𝗺: "Doraemon"\n📝 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: "Doraemon là một nhân vật hoạt hình Nhật Bản phổ biến được tạo ra bởi Fujiko F. Fujio. Ông là một con mèo robot đến từ tương lai và trở về quá khứ để giúp đỡ một cậu bé trẻ tên là Nobita với các vấn đề hàng ngày của mình. Doraemon có một túi kỳ diệu từ đó ông có thể tạo ra tất cả các loại thiết bị và công cụ để giúp Nobita trong các cuộc phiêu lưu của mình. Bộ phim đã trở thành một hiện tượng văn hóa tại Nhật Bản và đã được dịch sang nhiều ngôn ngữ trên toàn thế giới."\n🗓 𝗡𝗴𝗮̀𝘆 𝘅𝘂𝗮̂́𝘁 𝗯𝗮̉𝗻: "Doraemon được xuất bản lần đầu tiên vào ngày 1 tháng 12 năm 1969 tại Nhật Bản."\n👤 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: "Fujiko F. Fujio"`, attachment: (doraemon)},threadID, messageID)
        }
        case "naruto":
        case "Naruto": {
           return api.sendMessage({
                body: `🎞=== 「 𝗖𝗔𝗥𝗧𝗢𝗢𝗡 」===🎞\n━━━━━━━━━━━━━━━━━━\n📽 𝗧𝗲̂𝗻 𝗽𝗵𝗶𝗺: "Naruto"\n📝 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: "Naruto là một loạt truyện tranh và anime Nhật Bản được tạo ra bởi Masashi Kishimoto. Nó kể câu chuyện về Naruto Uzumaki, một ninja trẻ tuổi đến từ làng Konohagakure và mơ ước trở thành Hokage, người lãnh đạo của làng. Cùng với bạn bè và các ninja khác, Naruto trải qua nhiều cuộc phiêu lưu và chiến đấu với nhiều kẻ địch khác nhau, trong khi học được nhiều bài học quan trọng về teamwork, sự kiên trì và tình bạn. Loạt truyện này đã trở nên rất phổ biến không chỉ ở Nhật Bản mà trên toàn thế giới, tạo nên nhiều manga phối ngẫu, anime, phim, trò chơi điện tử và các sản phẩm khác."\n🗓 𝗡𝗴𝗮̀𝘆 𝘅𝘂𝗮̂́𝘁 𝗯𝗮̉𝗻: "Anime Naruto được phát hành lần đầu tiên vào ngày 3 tháng 10 năm 2002 tại Nhật Bản."\n👤 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: "Masashi Kishimoto"`, attachment: (naruto)},threadID, messageID)
        }
        case "shin":
        case "Shin cậu bé bút chì": {
           return api.sendMessage({
                body: `🎞=== 「 𝗖𝗔𝗥𝗧𝗢𝗢𝗡 」===🎞\n━━━━━━━━━━━━━━━━━━\n📽 𝗧𝗲̂𝗻 𝗽𝗵𝗶𝗺: "Shin Cậu Bé Bút Chì"\n📝 𝗚𝗶𝗼̛́𝗶 𝘁𝗵𝗶𝗲̣̂𝘂: "Shin cậu bé bút chì là một bộ truyện tranh nổi tiếng của Nhật Bản, được sáng tác bởi tác giả Yoshito Usui vào những năm 1990. Bộ truyện này kể về cuộc sống của cậu bé Shin chan, một đứa trẻ rất nghịch ngợm và đầy trí tưởng tượng, sống cùng gia đình và bạn bè ở thành phố Kasukabe. Nội dung của bộ truyện thường xoay quanh các chủ đề về gia đình, học tập, bạn bè và các hoạt động giải trí. Shin cậu bé bút chì đã trở thành một biểu tượng văn hóa của Nhật Bản và được yêu thích rộng rãi trên toàn thế giới."\n🗓 𝗡𝗴𝗮̀𝘆 𝘅𝘂𝗮̂́𝘁 𝗯𝗮̉𝗻: "Shin cậu bé bút chì là một bộ truyện tranh nổi tiếng của Nhật Bản được viết và minh họa bởi tác giả Yoshito Usui. Bộ truyện này được xuất bản lần đầu vào ngày 15 tháng 3 năm 1990 trên tạp chí Weekly Manga Action của nhà xuất bản Futabasha."\n👤 𝗧𝗮́𝗰 𝗴𝗶𝗮̉: "Yoshito Usui"`, attachment: (shin)},threadID, messageID)
        }
        case 'link': {
            return api.sendMessage('⌛️ Vui lòng reply với nội dung là link cần đóng góp',event.threadID,(error, info) => {
        
            global.client.handleReply.push({
                type: "choosee",
                name: this.config.name,
                author: event.senderID,
                messageID: info.messageID
            })
        })
    }
module.exports.handleReply = async function ({
    args,
    event,
    Users,
    api,
    handleReply,
    Currencies,
    __GLOBAL
  }) {
  const axios = require("axios");
  const fs = require("fs-extra");
         
   api.unsendMessage(handleReply.messageID);
    return api.sendMessage({body: '✅ Đóng góp truyện thành công, truyện có thể sẽ sớm có mặt trên messenger!', attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://TPKTAO.last-namename.repl.co/image/phongcanh')).data.url,
method: "GET",
responseType: "stream"
})).data
},event.threadID, event.messageID)
        }
    }
}