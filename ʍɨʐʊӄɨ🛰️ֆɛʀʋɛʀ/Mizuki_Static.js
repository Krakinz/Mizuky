// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const speed = require(`performance-now`);
const vers = require(`../package.json`);
const date = require(`date-and-time`);
const cleanRF = require("./cleanRF");
const _πππ_ = require(`./_πππ_`);
const κ°α΄α΄α΄ = require(`./oShit`);
let Timestamp = speed();
const Ping = speed() - Timestamp;
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_GIF_Static = async (
  ΣΚΗΣΙ¨ΥΌΚ,
  chat,
  ππππΣπ,
  MainText,
  MediaUrl
) => {
  if (ππππΣπ.isReply) {
    var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
    var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
  } else {
    var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
    var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
    const defaultnm = ππππΣπ.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  return await ΣΚΗΣΙ¨ΥΌΚ
    .sendMessage(ππππΣπ.chatId, { url: MediaUrl }, MessageType.video, {
      mimetype: `video/gif`,
      quoted: chat,
      caption: MainText,
      contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
    })
    .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  MGS: Mizuki_GIF_Static,
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
