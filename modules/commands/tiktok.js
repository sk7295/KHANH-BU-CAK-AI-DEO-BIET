module.exports.config = {
    name: "tiktok",
    version: "1.0.0",
    hasPermssion: 2,
    credits: "Trần Thanh Dương",
    description: "",
    commandCategory: "Admin",
    usages: "",
    cooldowns: 0
}
const axios = require("axios")
const fs = require("fs-extra")
const tiktokDown = require('tiktok-down')
const tt = new tiktokDown({
		  checkUpdate: true,
		  clientIP: '127.0.0.1'
			})
async function getVideo(link) {
   const resp = await axios.post('https://www.tikwm.com/api/', {
      url: link,
      count: 12,
      cursor: 0,
      hd: 1
    });
    return resp.data
}
async function search(key) {
 const resp = await axios.post('https://www.tikwm.com/api/feed/search', {
            keywords: key,
            count: 12,
            cursor: 0,
            hd: 1
          });
    return resp.data
}
async function postsUser(name) {
const resp = await axios.post('https://www.tikwm.com/api/user/posts', {
      unique_id: '@' + name,
      count: 1000,
      cursor: 0,
      hd: 1
    })
    return resp.data
}
async function searchUser(name) {
  return tt.getSearchUser({
  lang: 'vi-VN', 
  region: 'VN',
  tz: 'Asia/Ho_Chi_Minh', 
  keyWord: name
        }).then((lol) => {
    return lol
        })
}
async function getImages(url) {
const data = axios.get(`https://api-vnh--dawnlover.repl.co/tiktok/images?url=${url}`)
    return data
}
async function getMusic(url) {
const data = axios.get(`https://api-vnh--dawnlover.repl.co/tiktok/music?url=${url}`)
    return data
  }
async function getInfo(name) {
const data = axios.get(`https://api-vnh--dawnlover.repl.co/tiktok/info?name=${name}`)
    return data
}
module.exports.run = async function ({ api, event, args, Users, handleReaction }) {
  try {
    if (!args[0]) {
                const path = __dirname + '/cache/Tiktok.jpg';
      if ("https://i.imgur.com/eGvoyux.jpg") {
await global.utils.downloadFile("https://i.imgur.com/eGvoyux.jpg", path);
    }
      api.sendMessage({body:`🌸=== [ 𝗖𝗔́𝗖𝗛 𝗦𝗨̛̉ 𝗗𝗨̣𝗡𝗚 ] ===🌸\n━━━━━━━━━━━━━━━━━━\n🖨️ ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝘃𝗶𝗱𝗲𝗼 <𝘂𝗿𝗹>: 𝗧𝗮̉𝗶 𝘃𝗶𝗱𝗲𝗼 𝘁𝘂̛̀ 𝗻𝗲̂̀𝗻 𝘁𝗮̉𝗻𝗴 𝗺𝗮̣𝗻𝗴 𝘅𝗮̃ 𝗵𝗼̣̂𝗶 𝘁𝗶𝗸 𝘁𝗼𝗸
🎼 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝗮𝘂𝗱𝗶𝗼 <𝘂𝗿𝗹>: 𝗟𝗮̂́𝘆 𝗻𝗵𝗮̣𝗰 𝘁𝘂̛̀ 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸 𝘁𝗼𝗸
🔎 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝘀𝗲𝗮𝗿𝗰𝗵 <𝘁𝘂̛̀ 𝗸𝗵𝗼𝗮́>: 𝗧𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝘃𝗶𝗱𝗲𝗼 𝘁𝗶𝗸 𝘁𝗼𝗸
💮 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝗽𝗼𝘀𝘁 <𝘁𝗲̂𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴>: 𝗫𝗲𝗺 𝘃𝗶𝗱𝗲𝗼 𝘁𝗿𝗲̂𝗻 𝘁𝗿𝗮𝗻𝗴 𝗰𝗮́ 𝗻𝗵𝗮̂𝗻 𝗰𝘂̉𝗮 𝗵𝗼̣
💝 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝘁𝗿𝗲𝗻𝗱𝗶𝗻𝗴: 𝘁𝗶𝗸 𝘁𝗼𝗸 𝘁𝗿𝗲𝗻𝗱𝗶𝗻𝗴
👥 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝗳𝗶𝗻𝗱𝘂𝘀𝗲𝗿 <𝘁𝗲̂𝗻 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴>: 𝗧𝗶̀𝗺 𝗸𝗶𝗲̂́𝗺 𝗻𝗴𝘂̛𝗼̛̀𝗶 𝗱𝘂̀𝗻𝗴 𝘁𝘂̛𝗼̛𝗻𝗴 𝘂̛́𝗻𝗴 𝘁𝗵𝗼̂𝗻𝗴 𝗾𝘂𝗮 𝘁𝘂̛̀ 𝗸𝗵𝗼𝗮́
🎞️ ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝗶𝗺𝗮𝗴𝗲𝘀 <𝘂𝗿𝗹>: 𝗧𝗮̉𝗶 𝗵𝗶̀𝗻𝗵 𝗮̉𝗻𝗵 𝘁𝘂̛̀ 𝘁𝗶𝗸 𝘁𝗼𝗸
🎶 ${global.config.PREFIX}𝘁𝗶𝗸𝘁𝗼𝗸 𝗺𝘂𝘀𝗶𝗰 <𝘂𝗿𝗹>: 𝗧𝗮̉𝗶 𝗺𝗼̣̂𝘁 𝗯𝗮̉𝗻 𝗻𝗵𝗮̣𝗰 𝘁𝘂̛̀ 𝘁𝗶𝗸 𝘁𝗼𝗸\n⚙️ 𝗟𝘂̛𝘂 𝘆́ 𝘃𝗶𝗲̂́𝘁 đ𝘂́𝗻𝗴 𝗰𝗵𝗶́𝗻𝗵 𝘁𝗮̉ 𝘁𝗵𝗶̀ 𝗺𝗼̛́𝗶 𝗹𝗲̂𝗻 đ𝘂̛𝗼̛̣𝗰 𝗻𝗵𝗮`,attachment: fs.createReadStream(path)}, event.threadID, event.messageID)
    }
    if (args[0] == "video") {
   const res = await getVideo(args[1])
    const path = __dirname + '/cache/getVideoTiktok.mp4';
          const pathh = __dirname + '/cache/getMusicTiktok.mp3';
if (res.data.hdplay) {
await global.utils.downloadFile(res.data.hdplay, path);
    }
if (res.data.music_info.play) {
await global.utils.downloadFile(res.data.music_info.play, pathh);
}
api.sendMessage({body:`→ Tác giả: ${res.data.author.nickname}\n→ UID: ${res.data.author.unique_id}\n━━━━━━━━━━━━━━━━━━\n→ Khu vực: ${res.data.region}\n→ Tiêu đề: ${res.data.title}\n→ Lượt tim: ${res.data.digg_count}\n→ Tổng bình luận: ${res.data.comment_count}\n→ Lượt chia sẻ: ${res.data.share_count}\n→ Lượt tải: ${res.data.download_count}\n→ Thời gian: ${res.data.duration} giây\n━━━━━━━━━━━━━━━━━━\n→ Âm nhạc: ${res.data.music_info.title}\n→ Thời gian: ${res.data.music_info.duration} giây\n━━━━━━━━━━━━━━━━━━\n→ Thả cảm xúc để gửi âm thanh video`, attachment: fs.createReadStream(path)}, event.threadID, (error, info) => {
  global.client.handleReaction.push({
                type: "audio-video",
                name: this.config.name,
                author: event.threadID,
                ID: event.messageID,
                messageID: info.messageID
              });
}, event.messageID, () => unlinkSync(path))
    }
    if (args[0] == "audio") {
      const res = await getVideo(args[1])
                const path = __dirname + '/cache/getMusicTiktok.mp3';
      if (res.data.music_info.play) {
await global.utils.downloadFile(res.data.music_info.play, path);
      }
      api.sendMessage({body:`→ UID: ${res.data.music_info.id}\n→ Tiêu đề: ${res.data.music_info.title}\n→ Nhạc riêng: ${res.data.music_info.original}\n→ Tác giả: ${res.data.music_info.author}\n→ Thời gian: ${res.data.music_info.duration} giây`, attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path), event.messageID)
    }
    if (args[0] == "search") {
      const keyword = args.slice(1).join(' ')
        if (!keyword) return api.sendMessage("Bạn chưa nhập từ khóa cần tìm kiếm", event.threadID, event.messageID);
      const res = await search(keyword)
  var h = [], attachment = [], videoInfo = []
    for(let i = 0; i < 10; i++) {
          const path = __dirname + `/cache/tiktok--${i+1}.png`;
         if (res.data.videos[i].origin_cover) {
await global.utils.downloadFile(res.data.videos[i].origin_cover, path);
         }
          attachment.push(fs.createReadStream(path))
    const { title, play, nickname, region, duration, author, music_info } = res.data.videos[i];
    videoInfo.push({ title, play, nickname, region, duration, author, music_info });
            h += `${i+1}.\n→ Khu vực: ${region}\n→ Tác giả: ${author.nickname}\n→ Tiêu đề: ${title}\n→ Thời gian: ${duration} giây\n\n`
        }
api.sendMessage({body:`→ Các kết quả trùng với từ khoá của bạn: \n━━━━━━━━━━━━━━━━━━\n${h}━━━━━━━━━━━━━━━━━━\n→ Phản hồi tin nhắn này kèm số thứ tự để tải về`,attachment: attachment}, event.threadID, (err, info) => {
        global.client.handleReply.push({
                args: args.slice(1).join(' '),
                type: "reply",
                name: this.config.name,
                author: event.threadID,
                ID: event.messageID,
                messageID: info.messageID,
          videoInfo
              })
      }, event.messageID)
    }
    if (args[0] == "post") {
      const res = await postsUser(args[1])
      var page = 1;
            page = parseInt(args[2]) || 1
            page < -1 ? page = 1 : "";
            var limit = 10;
            var numPage = Math.ceil(res.data.videos.length/limit);
var h = [], attachment = [], videoInfo = []
        for(let i = limit*(page - 1); i < limit*(page-1) + limit; i++) {
           const path = __dirname + `/cache/tiktok--${i+1}.png`;
         if (res.data.videos[i].origin_cover) {
await global.utils.downloadFile(res.data.videos[i].origin_cover, path);
         }
          attachment.push(fs.createReadStream(path))
          
    const { title, play, nickname, region, duration, author, music_info } = res.data.videos[i];
    videoInfo.push({ title, play, nickname, region, duration, author, music_info });
            h += `${i+1}.\n→ Tiêu đề: ${title}\n→ Thời gian: ${duration} giây\n\n`
        }
api.sendMessage({body:`${h}━━━━━━━━━━━━━━━━━━\n→ Trang ${page}/${numPage}\n→ Sử dụng ${global.config.PREFIX}${this.config.name} ${args[1]} + số trang để lật\n→ Phản hồi tin nhắn này kèm số thứ tự để tải về`,attachment: attachment}, event.threadID, (err, info) => {
        global.client.handleReply.push({
                args: args.slice(1).join(' '),
                type: "reply",
                name: this.config.name,
                author: event.threadID,
                ID: event.messageID,
                messageID: info.messageID,
          videoInfo
              })
      }, event.messageID)
    }
    if (args[0] == "trending") {
const resp = await axios.post('https://www.tikwm.com/api/feed/list', {
            region: 'VN',
            'count': 100,
            hd: 1
          });
    const res = resp.data
      var page = 1;
            page = parseInt(args[1]) || 1
            page < -1 ? page = 1 : "";
            var limit = 5;
            var numPage = Math.ceil(res.data.length/limit);
var h = [], attachment = [], videoInfo = []
        for(let i = limit*(page - 1); i < limit*(page-1) + limit; i++) {
           const path = __dirname + `/cache/tiktok--${i+1}.png`;
         if (res.data[i].origin_cover) {
await global.utils.downloadFile(res.data[i].origin_cover, path);
         }
          attachment.push(fs.createReadStream(path))
          console.log(res.data[i].origin_cover)
    const { title, play, nickname, region, duration, author, music_info } = res.data[i];
    videoInfo.push({ title, play, nickname, region, duration, author, music_info });
            h += `${i+1}.\n→ Tiêu đề: ${title}\n→ Tác giả: ${author.nickname}\n→ Thời gian: ${duration} giây\n\n`
        }
api.sendMessage({body:`${h}━━━━━━━━━━━━━━━━━━\n→ Trang ${page}/${numPage}\n→ Sử dụng ${global.config.PREFIX}${this.config.name} trending + số trang để lật\n→ Phản hồi tin nhắn này kèm số thứ tự để tải về`,attachment: attachment}, event.threadID, (err, info) => {
        global.client.handleReply.push({
                type: "reply",
                name: this.config.name,
                author: event.threadID,
                ID: event.messageID,
                messageID: info.messageID,
          videoInfo
              })
      }, event.messageID)
    }
    if (args[0] == "finduser") {
            const keyword = args.slice(1).join(' ')
        if (!keyword) return api.sendMessage("Bạn chưa nhập từ khóa cần tìm kiếm", event.threadID, event.messageID);
      const res = await searchUser(keyword)
      console.log(res)
  var h = [], attachment = []
    for(let i = 0; i < 10; i++) {
          
    const { id, name, uniqueID, followerCount, signature } = res.result[i];
            h += `\n→ Tên: ${name}\n→ UID: ${uniqueID}\n→ Tổng số theo dõi: ${followerCount}\n→ Tiểu sử: ${signature}\n`
        }
      api.sendMessage(`Sau đây là 10 kết quả cho từ khoá: ${keyword}\n━━━━━━━━━━━━━━━━━━${h}`,event.threadID, event.messageID)
    }
    if (args[0] == "images") {
      const res = await getImages(args[1])
      console.log(res)
      var attachment = []
    for(let i = 0; i < 5; i++) {
          const path = __dirname + `/cache/tiktok--${i+1}.png`;
         if (res.data.listUrl[i]) {
await global.utils.downloadFile(res.data.listUrl[i], path);
           console.log(res.data.listUrl[i])
         }
          attachment.push(fs.createReadStream(path))
  }
      api.sendMessage({body:`→ UID: ${res.data.authorID}\n→ Hastag: ${res.data.desc}`, attachment: attachment}, event.threadID, event.messageID)
    }
    if (args[0] == "music") {
      const res = await getMusic(args[1])
      const path = __dirname + '/cache/getMusicTiktok.mp3';
      if (res.data.music.playUrl) {
await global.utils.downloadFile(res.data.music.playUrl, path);
      }
api.sendMessage({body:`→ Khu vực: ${res.data.author.region}\n→ Tác giả ${res.data.author.nickname}\n→ UID: ${res.data.author.uniqueId}\n→ Tiểu sử: ${res.data.author.signature}\n→ Liên kết: ${res.data.author.bioLink.link}\n━━━━━━━━━━━━━━━━━━\n→ Tiêu đề: ${res.data.music.title}\n→ Tác giả: ${res.data.music.authorName}\n→ Riêng tư: ${res.data.music.private}\n→ Thời gian: ${res.data.music.duration} giây`,attachment: fs.createReadStream(path)}, event.threadID,() => fs.unlinkSync(path), event.messageID)
  }
        } catch (e) {
    console.log(e)
            api.sendMessage(e, event.threadID, event.messageID)
        }
  }

module.exports.handleReply = async ({ api, event, handleReply, Users, Threads }) => {
  try {
    switch(handleReply.type) {
  case "reply": {
                    const path = __dirname + '/cache/searchTiktok.mp4';
      if (handleReply.videoInfo[event.body - 1].play) {
await global.utils.downloadFile(handleReply.videoInfo[event.body - 1].play, path);
      }
                    const pathh = __dirname + '/cache/getMusicTiktok.mp3';
      if (handleReply.videoInfo[event.body - 1].music_info.play) {
await global.utils.downloadFile(handleReply.videoInfo[event.body - 1].music_info.play, pathh);
      }
    api.unsendMessage(handleReply.messageID)
    api.sendMessage({body:`→ Khu vực: ${handleReply.videoInfo[event.body - 1].region}\n→ Tiêu đề: ${handleReply.videoInfo[event.body - 1].title}\n→ Thời gian: ${handleReply.videoInfo[event.body - 1].duration}\n━━━━━━━━━━━━━━━━━━\n→ Tác giả: ${handleReply.videoInfo[event.body - 1].author.nickname}\n━━━━━━━━━━━━━━━━━━\n→ Thả cảm xúc để gửi âm thanh video`,attachment: fs.createReadStream(path)}, event.threadID, (error, info) => {
  global.client.handleReaction.push({
                type: "audio-video",
                name: this.config.name,
                author: event.threadID,
                ID: event.messageID,
                messageID: info.messageID
              });
}, event.messageID, () => unlinkSync(path))
                      }
    }
  } catch(e) {
    console.log(e)
        api.sendMessage(e, event.threadID, event.messageID)
  }
}

module.exports.handleReaction = async ({ api, event, handleReaction, Users, Threads, args }) => {
  try {
      switch(handleReaction.type) {
        case "audio-video": {
          const path = __dirname + '/cache/getMusicTiktok.mp3';
          api.sendMessage({body:`Chuyển đổi sang âm thanh thành công`, attachment: fs.createReadStream(path)}, event.threadID, () => fs.unlinkSync(path), event.messageID)
        }
              }
    } catch (e) {
    console.log(e)
            api.sendMessage("Đã xảy ra lỗi !", event.threadID, event.messageID)
  }
           }