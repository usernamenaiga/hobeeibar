module.exports.config = {
	name: "bot-say",
	version: "1.1.1",
	Permssion: 0,
	credits: "John Lester",
	description: "Bot Saying",
	prefix: 'awto',
        category: "ai",
	usages: "[text/message/chat]",
	cooldowns: 5
};

module.exports.run = async ({ api, event,args }) => {
var say = args.join(" ")
	if (!say) api.sendMessage("Please enter a message", event.threadID, event.messageID)
	else api.sendMessage(`${say}`, event.threadID, event.messageID);
}
