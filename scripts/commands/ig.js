/** Đổi Credit ? Bọn t đã không mã hóa cho mà edit rồi thì tôn trọng nhau tý đi ¯\_(ツ)_/¯ **/
module.exports.config = {
  name: `${global.config.PREFIX}`,
  version: "1.0.0", 
  permission: 0,
  credits: "nayan",
  description: "", 
  prefix: true,
  category: "user",
  usages: "",
  cooldowns: 5, 
  dependencies: {
	}
};
module.exports.run = async function ({ api, event, Threads, getText }) {
  const fs = global.nodemodule["fs-extra"];
  var { threadID, messageID, senderID } = event;
  //if (senderID == global.data.botID) return;

  var dataThread = (await Threads.getData(threadID));
  var data = dataThread.data;
  //console.log(data)
  //var prefix = data.PREFIX;
return api.sendMessage(`🖤🅱🅾🆃 is ACTIVE now✔️

──🄾🅆🄽🄴🅁───

👻⚡🔥𝐋𝐢𝐦𝐨𝐧 𝐀𝐡𝐚𝐦𝐦𝐞𝐝🌸🔥♻️

🤍--------•🌹•--------🌸
  ☄️ Prefix: undefined
  🔱 Log: ON✅
  ❄️Resend: BAN⛔
  📛 TAG ADMIN: ON✅
  ⚜️ Antirobbery: ON✅
  ⚡ ANTIOUT: ON✅
🌸--------•🦋•--------🌸ᅠ`, threadID, messageID);
}


/*🐼🫵 Don't forget r4m1m this name*/ 
