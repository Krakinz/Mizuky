// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_Buttons = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { porno } = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/scraper`);
const cleanRF = require("../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/cleanRF");
const κ°α΄α΄α΄ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/oShit`);
const _πππ_ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/_πππ_`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
const Downloader = require(`nodejs-file-downloader`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
const fs = require("fs");
const vers = require(`../../package.json`);
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  name: `tikporn`,
  async handle(ΣΚΗΣΙ¨ΥΌΚ, chat, ππππΣπ, Needs, κ±Ιͺα΄Κα΄α΄, Clock, Ping) {
    try {
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      var κ±α΄Ι΄α΄α΄ΚΙͺα΄ = ππππΣπ.sender;
      var κ±α΄Ι΄α΄α΄Κeceived = κ±α΄Ι΄α΄α΄ΚΙͺα΄.substring(0, κ±α΄Ι΄α΄α΄ΚΙͺα΄.length - 15);
      const defaultnm = ππππΣπ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "πηͺπππΣπβ’ α΄ α΄ΚΙͺκ°Ιͺα΄α΄ κ°ΙͺΚα΄ > " + FinalName.toUpperCase() + "βοΈ"
      );
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      if (ππππΣπ.isGroup && !ππππΣπ.isSenderGroupAdmin && !ππππΣπ.isSenderDev) {
        try {
          return Mizuki_Buttons.MIB(
            ΣΚΗΣΙ¨ΥΌΚ,
            chat,
            ππππΣπ,
            `Who Is This Non-Admin β’@${κ±α΄Ι΄α΄α΄Κeceived} Trying to Use Admin-Only Commands.

*β πππ π°ππ π½ππ π°ππππ ππ!*
βββββββ€ ππππ«π¦π’π¬π¬π’π¨π§   
β  
βπΆοΈππ«π¨π?π©π¬: _Admins & Devs!_
βπ½ππ«π’π―ππ­π _Everyone_
ββββββββββ€`,
            _πππ_.Ι΄α΄α΄α΄α΄α΄ΙͺΙ΄
          );
        } catch (βΞ±Π²ΡΡΡΟΡ) {
          κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
        }
      }
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      try {
        var Raw = await porno();
        RawData = `https://tikporntok.com/` + Raw.video;
        if (!RawData.endsWith(`.mp4`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else {
          TikPork = RawData;
        }
        console.log("ββββββ€ " + TikPork);
        const downloader = await new Downloader({
          url: TikPork,
          directory: `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ`,
          fileName: `${FinalName}_${κ±α΄Ι΄α΄α΄Κeceived}.mp4`,
          cloneFiles: false,
        });
        await downloader.download();
        let content = fs.readFileSync(
          `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${κ±α΄Ι΄α΄α΄Κeceived}.mp4`
        );
        const media = await ΣΚΗΣΙ¨ΥΌΚ.prepareMessage(
          ππππΣπ.chatId,
          content,
          MessageType.video,
          {
            mimetype: Mimetype.mp4,
          }
        );
        await ΣΚΗΣΙ¨ΥΌΚ
          .sendMessage(
            ππππΣπ.chatId,
            {
              contentText: `π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived},

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπππ’π­π₯π: ${Raw.title}
βπππ’ππ°π¬: ${Raw.views}
βπΈπππ π¬: ${Raw.tags}
βππ½βππ’π€ππ¬: ${Raw.like}
βππ½βππ’π¬π₯π’π€ππ¬: ${Raw.dislike}
ββ­πππ―π¨π?π«π’π­π: ${Raw.favorite}
βπ€ππ©π₯π¨ππππ: ${Raw.upload}
βποΈπππ¬ππ«π’π©π­π’π¨π§: ${TRaw.desc}
βπ₯ππ¨π°π§π₯π¨ππ: https://tikporntok.com/${TikPork.video}
βπ₯ππ¨π?π«ππ: https://tikporntok.com/${TikPork.source}
ββββββββββββββ€`,
              footerText: `\nΒ©οΈ ππ’π³π?π€π’πππ¨π­ \nπ°οΈα΄ΙͺΙ΄Ι’: _${Ping.toFixed(
                4
              )}s_ πα΄α΄α΄α΄: _${Clock}_`,
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
            cleanRF.cleanRF(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${κ±α΄Ι΄α΄α΄Κeceived}.mp4`)
          )
          .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      } catch {
        var Raw = await porno();
        RawData = `https://tikporntok.com/` + Raw.video;
        if (RawData.endsWith(`.gif`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else if (RawData.endsWith(`.png`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else if (RawData.endsWith(`.jpg`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else if (RawData.endsWith(`.jpeg`)) {
          var Raw = await porno();
          RawData = `https://tikporntok.com/` + Raw.video;
          TikPork = RawData;
        } else {
          TikPork = RawData;
        }
        // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
        console.log("ββββββ€ " + TikPork);
        const downloader = await new Downloader({
          url: TikPork,
          directory: `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ`,
          fileName: `${FinalName}_${κ±α΄Ι΄α΄α΄Κeceived}.mp4`,
          cloneFiles: false,
        });
        await downloader.download();
        let content = fs.readFileSync(
          `./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${κ±α΄Ι΄α΄α΄Κeceived}.mp4`
        );
        const media = await ΣΚΗΣΙ¨ΥΌΚ.prepareMessage(
          ππππΣπ.chatId,
          content,
          MessageType.video,
          {
            mimetype: Mimetype.mp4,
          }
        );
        await ΣΚΗΣΙ¨ΥΌΚ
          .sendMessage(
            ππππΣπ.chatId,
            {
              contentText: `π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived},

ββββββπ₯­ππ¨π©π’π: _*${FinalName}*_
β
βπππ’π­π₯π: ${Raw.title}
βπππ’ππ°π¬: ${Raw.views}
βπΈπππ π¬: ${Raw.tags}
βππ½βππ’π€ππ¬: ${Raw.like}
βππ½βππ’π¬π₯π’π€ππ¬: ${Raw.dislike}
ββ­πππ―π¨π?π«π’π­π: ${Raw.favorite}
βπ€ππ©π₯π¨ππππ: ${Raw.upload}
βποΈπππ¬ππ«π’π©π­π’π¨π§: ${TRaw.desc}
βπ₯ππ¨π°π§π₯π¨ππ: https://tikporntok.com/${TikPork.video}
βπ₯ππ¨π?π«ππ: https://tikporntok.com/${TikPork.source}
ββββββββββββββ€`,
              footerText: `\nΒ©οΈ ππ’π³π?π€π’πππ¨π­ \nπ°οΈα΄ΙͺΙ΄Ι’: _${Ping.toFixed(
                4
              )}s_ πα΄α΄α΄α΄: _${Clock}_`,
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
            cleanRF.cleanRF(`./ΚΙ¨ΚΚΣΙ¨ποΈΘΆΙΚΦ/${FinalName}_${κ±α΄Ι΄α΄α΄Κeceived}.mp4`)
          )
          .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
      }
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
      console.log(βΞ±Π²ΡΡΡΟΡ);
    }
  },
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
