// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Mizuki_Static = require(`./Mizuki_Static`);
const _πππ_ = require(`./_πππ_`);
const κ°α΄α΄α΄ = require(`./oShit`);
const fs = require(`fs`);
require(`python-format-js`);
const cleanRF = require("./cleanRF");
const vers = require(`../package.json`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
const speed = require("performance-now");
let Timestamp = speed();
const Ping = speed() - Timestamp;
const date = require("date-and-time");
const now = new Date();
date.format(now, "ddd, MMM DD YYYY");
const pattern = date.compile("ddd, MMM DD YYYY");
const Clock = date.format(now, pattern);
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
exports.Ι΄α΄α΄α΄α΄ΚΙ’α΄α΄α΄Ι΄α΄ = async (
  ΣΚΗΣΙ¨ΥΌΚ,
  chat,
  ππππΣπ,
  κ±α΄Ι΄α΄α΄ΚΙͺα΄,
  κ±α΄Ι΄α΄α΄Κeceived,
  commandName,
  needs
) => {
  var MediaUrl = `./ΚΙ¨ΚΚΣΙ¨β£οΈΖΦΚΙ/ππππΣπβ’.mp4`;
  try {
    return Mizuki_Static.MGS(
      ΣΚΗΣΙ¨ΥΌΚ,
      chat,
      ππππΣπ,
      `π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived},  

βββββββββββ€ β οΈππππ πππ ππ πππ
β
ββ ππ¨π¦π¦ππ§π: ${α΄α΄Ιͺ}${commandName}
ββ ππ¬ππ π: ${needs === undefined ? `null` : needs}`,
      MediaUrl
    );
  } catch (βΞ±Π²ΡΡΡΟΡ) {
    κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
  }
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
