// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Buttons = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Buttons`);
const Mizuki_Static = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../สษจสสำษจ๐ฐ๏ธึษสสษส/cleanRF");
const _๐๐๐_ = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/_๐๐๐_`);
const ๊ฐแดแดแด = require(`../../สษจสสำษจ๐ฐ๏ธึษสสษส/oShit`);
const got = require(`got`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  name: `github`,
  ๐๐ฎ๐ฎ6สึสษ: `Get the github profile by command  *${แดแดษช}github <user>*  
or replying  *${แดแดษช}github*`,
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
      let user_name = ``;
      if (๐๐๐๐ำ๐.isReply) {
        user_name = ๐๐๐๐ำ๐.replyMessage;
      } else {
        if (Needs.length === 0) {
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
        user_name = Needs[0];
      }
      // โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
      let userResponse = await got(`https://api.github.com/users/` + user_name);
      let user = JSON.parse(userResponse.body);
      Object.keys(user).forEach(function (key) {
        if (user[key] === null || user[key] === ``) {
          user[key] = `N/A`;
        }
      });
      let caption =
        `*๐ค Name :* ` +
        user.name +
        `\n*๐ป Link :* ` +
        user.html_url +
        `\n*๐ง Type :* ` +
        user.type +
        `\n*๐ข Company :* ` +
        user.company +
        `\n*๐ญ Blog :* ` +
        user.blog +
        `\n*๐ Location :* ` +
        user.location +
        `\n*๐ Bio :* ` +
        user.bio +
        `\n*โค๏ธ Followers :* ` +
        user.followers +
        `\n*๐๏ธ Following :* ` +
        user.following +
        `\n*๐ Public Repos :* ` +
        user.public_repos +
        `\n*๐ Public Gists :* ` +
        user.public_gists +
        `\n*๐ Profile Created :* ` +
        user.created_at +
        `\n*โ๏ธ Profile Updated :* ` +
        user.updated_at;
      if (user.public_repos > 0) {
        let reposResponse = await got(user.repos_url);
        let reposData = JSON.parse(reposResponse.body);
        repos = reposData[0].name;
        for (let i = 1; i < reposData.length && i < 5; i++) {
          repos += ` | ` + reposData[i].name;
        }
        caption += `\n*๐ Some Repos :* ` + repos;
      }
      await ำสวำษจีผส
        .sendMessage(
          ๐๐๐๐ำ๐.chatId,
          {
            url: user.avatar_url,
          },
          MessageType.image,
          {
            quoted: chat,
            mimetype: Mimetype.png,
            caption: caption,
            thumbnail: null,
          }
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
