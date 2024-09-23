module.exports.config = {
	name: "language",
	version: "1.0.0",
	hasPermssion: 2,
	credits: "nhoang",
	description: "Đổi ngôn ngữ Bot",
	commandCategory: "admin bot",
	usages: "[vi] [en]",
	cooldowns: 5
};

module.exports.run = async ({ api, event, args }) => {
    const { threadID, messageID } = event;

    switch (args[0]) {
        case "vietnames":
        case "vi":
            {
                return api.sendMessage(`Ngôn ngữ đã được chuyển sang tiếng Việt`, threadID, () => global.config.language = "vi"); 
            }
            break;
        
        case "english":
        case "en":
            {
                return api.sendMessage(`Language has been converted to English`, threadID, () => global.config.language = "en"); 
            }
            break;

        case "trung quốc":
        case "china":
            {
                return api.sendMessage(`语言已更改为中文`, threadID, () => global.config.language = "china"); 
            }
            break;

        case "hàn quốc":
        case "korea":
            {
                return api.sendMessage(`언어가 한국어로 변경되었습니다`, threadID, () => global.config.language = "korea"); 
            }
            break;


    
        default:
            {
                return api.sendMessage({body:"Vui lòng chọn : language [vi / en / china / korea]",attachment: (await global.nodemodule["axios"]({
url: (await global.nodemodule["axios"]('https://apinhathoanghaikhkhsau.nhhoangepdaiqaa.repl.co/language')).data.url,
method: "GET",
responseType: "stream"
})).data
},threadID, messageID);
            }   
            break; 
            
    }	
}