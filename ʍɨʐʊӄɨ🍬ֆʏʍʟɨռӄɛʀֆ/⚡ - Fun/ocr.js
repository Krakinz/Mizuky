// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF");
const ocrSpace = require(`ocr-space-api-wrapper`);
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const vers = require(`../../package.json`);
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `ocr`,
  ๐๐ฎ๐ฎ6สึสษ: `Use this command to obtain text from an image by  *${แดแดษช}space*  command.`,
  async handle(ำสวำษจีผส, chat, ๐๐๐๐ำ๐, Needs, ๊ฑษชแดสแดแด, Clock, Ping) {
    try {
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
      var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
      const defaultnm = ๐๐๐๐ำ๐.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "๐็ช๐๐๐ำ๐โข แด แดสษช๊ฐษชแดแด ๊ฐษชสแด > " + FinalName.toUpperCase() + "โ๏ธ"
      );
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      if (๐๐๐๐ำ๐.isImage) {
        var replyChatObject = {
          message: chat.message,
        };
        var imageId = chat.key.id;
        const fileName = `./สษจสสำษจ๐๏ธศถษสึ/img-` + imageId;
        const filePath = await ำสวำษจีผส.downloadAndSaveMediaMessage(
          replyChatObject,
          fileName
        );
        const text = await ocrSpace(filePath, {
          apiKey: _๐๐๐_.OCR,
        });
        var Msg = text.ParsedResults[0].ParsedText;
        if (Msg === ``) {
          ำสวำษจีผส
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `Couldn't find text in the image`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
        }
        ำสวำษจีผส
          .sendMessage(๐๐๐๐ำ๐.chatId, Msg, MessageType.text, {
            quoted: chat,
          })
          .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
        fs.unlink(filePath),
          (โฮฑะฒัััฯั) => {
            if (โฮฑะฒัััฯั) console.log(โฮฑะฒัััฯั);
            else {
              console.log(`Deleted!`);
            }
          };
      }
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      if (๐๐๐๐ำ๐.isReplyImage) {
        var replyChatObject = {
          message: chat.message.extendedTextMessage.contextInfo.quotedMessage,
        };
        var imageId = chat.message.extendedTextMessage.contextInfo.stanzaId;
        const fileName = `./สษจสสำษจ๐๏ธศถษสึ/img-` + imageId;
        const filePath = await ำสวำษจีผส.downloadAndSaveMediaMessage(
          replyChatObject,
          fileName
        );
        const text = await ocrSpace(filePath, {
          apiKey: _๐๐๐_.OCR,
        });
        var Msg = text.ParsedResults[0].ParsedText;
        if (Msg === ``) {
          ำสวำษจีผส
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `Couldn't find text in the image`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
        }
        ำสวำษจีผส
          .sendMessage(๐๐๐๐ำ๐.chatId, Msg, MessageType.text, {
            quoted: chat,
          })
          .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
        fs.unlink(filePath),
          (โฮฑะฒัััฯั) => {
            if (โฮฑะฒัััฯั) console.log(โฮฑะฒัััฯั);
            else {
              console.log(`Deleted!`);
            }
          };
      }
      setTimeout(async () => {
        await ำสวำษจีผส
          .sendMessage(
            ๐๐๐๐ำ๐.chatId,
            `Please tag a valid message.`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
        return;
      }, 300000);
      await ำสวำษจีผส
        .sendMessage(
          ๐๐๐๐ำ๐.chatId,
          `Please tag a valid message.`,
          MessageType.text,
          { quoted: chat }
        )
        .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
