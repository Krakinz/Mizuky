// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF");
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `add`,
  description: `Add new people to a group by entering their mobile number as per the format mentioned below.`,
  ๐๐ฎ๐ฎ6สึสษ: `Example -
${แดแดษช}add <country-code>0000000000
${แดแดษช}add 2540000000000`,
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
      try {
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        if (๐๐๐๐ำ๐.isGroup && !๐๐๐๐ำ๐.isSenderGroupAdmin) {
          try {
            return Mizuki_Buttons.MIB(
              ำสวำษจีผส,
              chat,
              ๐๐๐๐ำ๐,
              `Who Is This Non-Admin โข@${๊ฑแดษดแดแดสeceived} Trying to Use Admin-Only Commands.

*โ ๐๐๐ ๐ฐ๐๐ ๐ฝ๐๐ ๐ฐ๐๐๐๐ ๐๐!*
โโโโโโโค ๐๐๐๐ซ๐ฆ๐ข๐ฌ๐ฌ๐ข๐จ๐ง   
โ  
โ๐ถ๏ธ๐๐ซ๐จ๐ฎ๐ฉ๐ฌ: _Admins & Devs!_
โ๐ฝ๐๐ซ๐ข๐ฏ๐๐ญ๐ _Everyone_
โโโโโโโโโโค`,
              _๐๐๐_.ษดแดแดแดแดแดษชษด
            );
          } catch (โฮฑะฒัััฯั) {
            ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
          }
        }
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        if (๐๐๐๐ำ๐.isGroup && !๐๐๐๐ำ๐.isBotGroupAdmin) {
          try {
            return Mizuki_Buttons.MTB(
              ำสวำษจีผส,
              chat,
              ๐๐๐๐ำ๐,
              `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived}, *โสแดแดก แดแดษด ษช แด๊ฑแด แดแดแดษชษด แดแดแดแดแดษดแด๊ฑ แดกสแดษด ษช แดแด ษดแดแด แดแดแดษชษด?*

๐ก๐๐ข๐ฑ: _Make Me Admin First_`,
              _๐๐๐_.ษดแดแดแดแดแดแดแดษชษด
            );
          } catch (โฮฑะฒัััฯั) {
            ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
          }
        }
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        if (!๐๐๐๐ำ๐.isGroup) {
          try {
            return Mizuki_Buttons.MTB(
              ำสวำษจีผส,
              chat,
              ๐๐๐๐ำ๐,
              `๐ฃ๐๐จ๐ฌ๐ก๐ข-๐๐จ๐ฌ๐ก๐ข โข@${๊ฑแดษดแดแดสeceived}, 
          
โโโโโโโค ๐๐๐๐ซ๐ฆ๐ข๐ฌ๐ฌ๐ข๐จ๐ง   
โ
โโ๐๐จ๐ฆ๐ฆ๐๐ง๐: ${แดแดษช}${defaultnm}, 
โแดแดแดแดแดษดแด แดษดสส ๊ฐแดส ษขสแดแดแด๊ฑ!
โโโโโโโโโโค`
            );
          } catch (โฮฑะฒัััฯั) {
            ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
          }
        }
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        if (!Needs[0]) {
          ำสวำษจีผส
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `Enter the number you want to add.
For instance,  
*${แดแดษช}add <NUMBER>* .`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));

          return;
        }
        let NUM;
        if (isNaN(Needs[0]) || Needs[0][0] === `+` || Needs[0].length < 10) {
          var ๐Usage = ๊ฑษชแดสแดแด.get(๐๐๐๐ำ๐.commandName);
          ๐๐ฎ๐ฎสึสษ = ๐Usage.๐๐ฎ๐ฎ6สึสษ === undefined ? `Null` : ๐Usage.๐๐ฎ๐ฎ6สึสษ;
          const ษดแดแดแดแดสษขแดแดแดษดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/ษดแดแดแดแดสษขแดแดแดษดแด`);
          return ษดแดแดแดแดสษขแดแดแดษดแด.ษดแดแดแดแดสษขแดแดแดษดแด(
            ำสวำษจีผส,
            chat,
            ๐๐๐๐ำ๐,
            ๊ฑแดษดแดแดสษชแด,
            ๊ฑแดษดแดแดสeceived,
            ๐๐๐๐ำ๐.commandName,
            ๐๐ฎ๐ฎสึสษ
          );
        }
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        if (Needs[0].length == 10 && !isNaN(Needs[0])) {
          NUM = `254` + Needs[0];
        } else {
          NUM = Needs[0];
        }
        const exists = await ำสวำษจีผส.isOnWhatsApp(NUM + `@s.whatsapp.net`);
        if (!exists) {
          ำสวำษจีผส
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.

Example -
${แดแดษช}add <country-code>0000000000
${แดแดษช}add 2540000000000`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));

          return;
        }
        NUM = `${Needs[0].replace(/ /g, ``)}@s.whatsapp.net`;
        const request = ำสวำษจีผส.groupAdd(๐๐๐๐ำ๐.chatId, [NUM]);
        const response = await request;

        if (response[NUM + `@c.us`] == 408) {
          ำสวำษจีผส
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `The number entered cannot be added back before 24 hours.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));

          return;
          // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
        } else if (response[NUM + `@c.us`] == 409) {
          ำสวำษจีผส
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `The number entered is already a member of this group.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));

          return;
        }
        await ำสวำษจีผส
          .sendMessage(
            ๐๐๐๐ำ๐.chatId,
            ` ` + NUM + ` added successfully!` + ``,
            MessageType.text,
            { quoted: chat }
          )
          .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
        // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      } catch (โฮฑะฒัััฯั) {
        if (โฮฑะฒัััฯั.status == 400) {
          ำสวำษจีผส
            .sendMessage(
              ๐๐๐๐ำ๐.chatId,
              `The number you're trying to add isn't available on WhatsApp.
Please verify the number again.`,
              MessageType.text,
              { quoted: chat }
            )
            .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
        }
        await ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      }
      return;
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
    } catch (โฮฑะฒัััฯั) {
      ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat);
      console.log(โฮฑะฒัััฯั);
    }
  },
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
