module.exports.config = {
  name: "goiadmin",
    version: "1.0.0",
    permission: 0,
    credits: "Limon",
    description: "mention",
    prefix: true,
    category: "user",
    usages: "tag",
    cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
  if (event.senderID !== "100000436645880") {
    var aid = ["100000436645880"];
    for (const id of aid) {
    if ( Object.keys(event.mentions) == id) {
      var msg = ["Mantion_দিস না _লিমন বস এর মন মন ভালো নেই আস্কে-!💔🥀", "", "",""," ","","লিমন বস এখন  বিজি জা বলার আমাকে বলতে পারেন_!!😼🥰","এতো মিনশন নাহ দিয়া সিংগেল লিমন রে একটা গফ দে 😒😏","","মেনশন দিসনা পারলে লিমনরে একটা গফ দে","Mantion_দিস না বাঁলপাঁক্না লিমন প্রচুর বিজি 🥵🤐",""];
      return api.sendMessage({body: msg[Math.floor(Math.random()*msg.length)]}, event.threadID, event.messageID);
    }
    }}
};
module.exports.run = async function({}) {
}
