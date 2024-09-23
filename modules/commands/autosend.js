module.exports.config = {
  name: 'auto',
  version: '1.0.0',
  hasPermssion: 0,
  credits: 'SơnKb',
  description: 'AutoMode',
  commandCategory: 'Utilities',
  usages: '',
  cooldowns: 5
}

const path = __dirname + '/cache/auto.json';
const { writeFileSync, createReadStream, existsSync, unlinkSync } = require('fs-extra');
const moment = (format) => require('moment-timezone').tz('Asia/Ho_Chi_Minh').format(format);
const axios = require('axios');

module.exports.onLoad = () => {
  let format = JSON.stringify({
    status: true, // auto or sleep
    schedule: [
      '06:00:00'
    ], // Ex: HH:mm:ss
    blockID: [], // threadID dont send
    urlAPI: 'https://apinhathoanghaikhkhsau--dawnlover.repl.co/mp40animevideo' // API
  }, null, 2);
  if (!existsSync(path)) writeFileSync(path, format);
  return;
}

async function sendnoti() {
  const set = require(path);
  if (set.status == false) return;
  const time = moment('HH:mm:ss');
  if (!set.schedule.includes(time)) return;
  let msg = {};
  const { api } = global.client;
  const allID = global.data.allThreadID.filter(i => !set.blockID.includes(i));
  let poem = (await axios.get('https://api-vd1.miraiprofile2005.repl.co/tn/tho')).data.data;
  msg.body = `𝐍𝐨𝐭𝐢𝐟𝐢𝐜𝐚𝐭𝐢𝐨𝐧🏆\n➝ Đây Là Tin Nhắn Tự Động 🙁\nBây Giờ là: ${time}\nThính: ${poem}`;
  if (set.urlAPI != '') {
    let url = (await axios({
      method: 'GET',
      url: set.urlAPI,
      responseType: 'text'
    })).data.split('"').filter(i => i.indexOf('https://') == 0)[0];
    let stream = (await axios({
      method: 'GET',
      url,
      responseType: 'stream'
    })).data;
    msg.attachment = stream;
  }
  return allID.forEach((ID) => api.sendMessage(msg, ID));
}

setInterval(sendnoti, 1000);

module.exports.run = async function ({ api, event, args, Threads, permssion }) {
  const { threadID, messageID, senderID } = event;
  const set = require(path);
  const prefix = ((await Threads.getData(threadID)).PREFIX || global.config.PREFIX) + this.config.name;
  function out(text) {
    return api.sendMessage(text,threadID, messageID);
  }
  if (!args[0]) 
    return api.sendMessage({body:'🌸『 𝗔𝗨𝗧𝗢𝗦𝗘𝗡 𝗛𝗘𝗟𝗣 』🌸\n━━━━━━━━━━━━━━━━━━━━\n❤️ !𝗮𝘂𝘁𝗼 𝗮𝗱𝗱 + 𝗵𝗵:𝗺𝗺:𝘀𝘀 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗮𝗱𝗱 𝘁𝗵𝗼̛̀𝗶 𝗴𝗶𝗮𝗻 𝘁𝗯 𝗮𝘂𝘁𝗼𝘀𝗲𝗻𝗱\n💙 !𝗮𝘂𝘁𝗼 𝗼𝗳𝗳 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗮̆́𝘁 𝘁𝗯 𝗮𝘂𝘁𝗼𝘀𝗲𝗻𝗱\n💜 !𝗮𝘂𝘁𝗼 𝗼𝗻 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝗯𝗮̣̂𝘁 𝘁𝗯 𝗮𝘂𝘁𝗼𝘀𝗲𝗻𝗱\n💛 !𝗮𝘂𝘁𝗼 𝗹𝗶𝘀𝘁 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘅𝗲𝗺 𝗱𝗮𝗻𝗵 𝘀𝗮́𝗰𝗵 𝗰𝗮́𝗰 𝘁𝗶𝗺𝗲 \n💚 !𝗮𝘂𝘁𝗼 𝗮𝗽𝗶 𝗻𝗲̂́𝘂 𝗺𝘂𝗼̂́𝗻 𝘁𝗵𝗮𝘆 𝗮𝗽𝗶 𝗮̉𝗻𝗵', attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau--dawnlover.repl.co/mp40animevideo')).data.url,
method: "GET",
responseType: "stream"
})).data
},threadID, messageID);
  switch (args[0]) {
    case 'add':
      if (permssion < 2) return out('Ban khong phai admin');
      let msg = '';
      let input = args.slice(1).join('').split(',');
      let fail = [];
      let ok = [];
      if (input.length == 0) 
        return out('Thieu du lieu thuc thi');
      if (input.length == 1) {
        var [H,M,S] = input[0].split(':');
        if (isNaN(H) || isNaN(M) || isNaN(S))
          return out('Dinh dang sai\nFormat: HH:mm:ss');
        if (H < 0 || H > 24 || M < 0 || M > 60 || S < 0 || S > 60)
          return out('Thoi Gian Sai');
        if (H.length < 2) H = '0' + H;
        if (H  == 24) H = '00';
        if (M.length < 2) M = '0' + M;
        if (S.length < 2) S = '0' + S;
        var newTime = `${H}:${M}:${S}`;
        if (set.schedule.includes(newTime)) 
          return out(`Thoi gian da ton tai`);
        set.schedule.push(newTime);
        writeFileSync(path, JSON.stringify(set, null, 2));
        return out(`Them thanh cong\nThoi gian: ${H}:${M}:${S}`);
      }
      for (let single of input) {
        var [H,M,S] = single.split(':');
        if (isNaN(H) || isNaN(M) || isNaN(S)) fail.push(single);
        else if (H < 0 || H > 24 || M < 0 || M > 60 || S < 0 || S > 60) fail.push(single);
        else {
          if (H.length < 2) H = '0' + H;
          if (H  == 24) H = '00';
          if (M.length < 2) M = '0' + M;
          if (S.length < 2) S = '0' + S;
          var newTime = `${H}:${M}:${S}`;
          if (!set.schedule.includes(newTime)) {
            set
              .schedule
              .push(newTime);
            ok.push(single);
          }
          else fail.push(single);
        }
      }
      out(`Them thanh cong: ${ok.length}\nThai bai: ${fail.length}`);
      break;
    case 'on': 
      if (!args[1]) {
        if (permssion < 2) return out(`Ban khong phai la adminBot\nDung ${prefix} on thread de bat auto send cho nhom`);
        if (set.status) return out('AutoSend da duoc bat tu truoc');
        set.status = true;
        out('Da bat thanh cong autoSend');
      }
      else if (args[1] == 'thread') {
        if (!set.blockID.includes(threadID)) return out('Nhom ban da duoc bat tu truoc');
        set.blockID.splice(set.blockID.indexOf(threadID), 1);
        out('Da bat thanh cong');
      } 
      else return out('Lenh khong ton tai');
      break;
    case 'off': 
      if (!args[1]) {
        if (permssion < 2) return out(`Ban khong phai la adminBot\nDung ${prefix} off thread de tat auto send cho nhom`);
        if (set.status == false) return out('AutoSend da duoc tat tu truoc');
        set.status = false;
        out('Da tat thanh cong autoSend');
      }
      else if (args[1] == 'thread') {
        if (set.blockID.includes(threadID)) return out('Nhom ban da duoc tat tu truoc');
        set.blockID.push(threadID);
        out('Da tat thanh cong');
      } 
      else return out('Lenh khong ton tai');
      break;
    case 'list': 
      if (permssion < 2) 
        return out('Ban khong phai la admin bot');
      if (set.schedule.length == 0) 
        return out('Ban chua them thoi gian nao het');
      let text = '';
      let num = 1;
      text += `Hien dang co ${set.schedule.length} thoi gian:\n\n`;
      for (let i of set.schedule) {
        text += `${num++}. ${i}\n`;
      }
      text += `\nReply stt de xoa`;
      return api.sendMessage(text, threadID, (e, i) => {
        global
          .client
          .handleReply
          .push({
            name: this.config.name,
            type: 'delete',
            author: senderID, 
            messageID: i.messageID
          });
      }, messageID);
      break;
    case 'help':
      return out(
        `Cac lenh hien co:\n1. ${prefix} add [HH:mm:ss]\n2. ${prefix} list\n3. ${prefix} on [thread/bo trong]\n4. ${prefix} off [thread/bo trong]\n5. ${prefix} api [urlAPI]\n6. ${prefix} help`
      );
      break;
    case 'api': 
      if (permssion < 2) return out('Ban khong phai la adminBot');
      if (!args[1]) return out('Vui long them api');
      else if (args[1] == 'clear') {
        set.urlAPI = '';
        out('Clear success');
      }
      else if (args[1].indexOf('https://') == -1) return out('Co chac no la api khong vay?'); 
      else {
        set.urlAPI = args[1];
        out('Them api thanh cong');
      }
      break;
    default: 
      return out(`Dung ${prefix}${this.config.name} help để biet them thong tin`);
      break;
  }
  return writeFileSync(path, JSON.stringify(set, null, 2));
}

module.exports.handleReply = async function({ api, event, handleReply }) {
  const { threadID, messageID, senderID, body } = event;
  const { type, author, messageID: messID } = handleReply;
  const set = require(path);
  switch (type) {
    case 'delete': 
      api.unsendMessage(messID);
      for (let i of body.split(' ')) {
        set
          .schedule
          .splice(
            set.schedule.indexOf(set.schedule[i - 1]), 1);
      }
      api.sendMessage(`Da xoa thanh cong ${body.split(' ').length} thoi gian`, threadID, messageID);
      break;
  }
  return writeFileSync(path, JSON.stringify(set, null, 2));
  }