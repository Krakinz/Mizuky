// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Downloader = require(`nodejs-file-downloader`);
const κ°α΄α΄α΄ = require(`./oShit`);
const _πππ_ = require(`./_πππ_`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
const ffmpeg = require(`fluent-ffmpeg`);
const fs = require(`fs`);
const cleanRF = require("./cleanRF");
const vers = require(`../package.json`);
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
exports.mainMizukigif = async (ΣΚΗΣΙ¨ΥΌΚ, chat, ππππΣπ, ππππΣπText) => {
  try {
    // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    if (ππππΣπ.isReply) {
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var personreceived = Receiver.substring(0, Receiver.length - 15);
      var ππππΣπID = chat.message.extendedTextMessage.contextInfo.stanzaId;
    } else {
      var ππππΣπID = chat.key.id;
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
    }
    // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    const downloader = await new Downloader({
      url: `https://i.postimg.cc/zvmqDTF7/ezgif-com-gif-maker.gif`,
      directory: `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ`,
      fileName: `ππππΣπ_${κ±α΄Ι΄α΄α΄ΚΙͺα΄}_${ππππΣπID}.gif`,
      cloneFiles: false,
    });
    try {
      await downloader.download();
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      βΞΉΡΞ·Ρ.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
    }
    // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    await ffmpeg(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/ππππΣπ_${κ±α΄Ι΄α΄α΄ΚΙͺα΄}_${ππππΣπID}.gif`)
      .outputOptions([
        "-pix_fmt yuv420p",
        "-c:v libx264",
        "-movflags +faststart",
        "-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'",
      ])
      .save(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/ππππΣπ_${κ±α΄Ι΄α΄α΄ΚΙͺα΄}_${ππππΣπID}.mp4`)
      .on("end", async () => {
        const media = await ΣΚΗΣΙ¨ΥΌΚ
          .prepareMessage(
            ππππΣπ.chatId,
            fs.readFileSync(
              `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/ππππΣπ_${κ±α΄Ι΄α΄α΄ΚΙͺα΄}_${ππππΣπID}.mp4`
            ),
            MessageType.video,
            {
              mimetype: Mimetype.gif,
            }
          )
          .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
        await ΣΚΗΣΙ¨ΥΌΚ
          .sendMessage(
            ππππΣπ.chatId,
            {
              contentText: `π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived},
              
              
====<β‘>${ππππΣπText}`,
              footerText: `*πηͺπππΣπ Ι?ΦΘΆ* _${
                vers.vers
              }_\nπ°οΈα΄ΙͺΙ΄Ι’: _${Ping.toFixed(4)}s_nπα΄α΄α΄α΄: _${Clock}_`,
              buttons: [
                {
                  buttonId: `${α΄α΄Ιͺ}list`,
                  buttonText: { displayText: `${α΄α΄Ιͺ}list` },
                  type: 1,
                },
              ],
              headerType: 5,
              videoMessage: media.message.videoMessage,
            },
            MessageType.buttonsMessage,
            {
              quoted: chat,
              contextInfo: { mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄] },
            }
          )
          .then(
            cleanRF.cleanRF(
              `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/ππππΣπ_${κ±α΄Ι΄α΄α΄ΚΙͺα΄}_${ππππΣπID}.mp4`,
              `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/ππππΣπ_${κ±α΄Ι΄α΄α΄ΚΙͺα΄}_${ππππΣπID}.gif`
            )
          )
          .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
      })
      .on(`βΞ±Π²ΡΡΡΟΡ`, async (βΞ±Π²ΡΡΡΟΡ) => {
        console.log(βΞ±Π²ΡΡΡΟΡ);
      });
  } catch (βΞ±Π²ΡΡΡΟΡ) {
    await κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
    console.log(
      "β¬‘==========================β¬‘    π " +
        βΞ±Π²ΡΡΡΟΡ +
        "π    β¬‘==========================β¬‘"
    );
  }
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
