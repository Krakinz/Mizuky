// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const Mizuki_Buttons = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF");
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const vers = require(`../../package.json`);
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `disappear`,
  description: `Toggle disappearing messages by using command ${ᴋᴇɪ}dissapear* .`,
  𝓜𝓮𝓮6ʍօʀɛ: `${ᴋᴇɪ}disappear`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      const defaultnm = 𝓜𝖎𝖟𝖚ӄ𝖎.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      console.log(
        "🍁爪𝖎𝖟𝖚ӄ𝖎™ ᴠᴇʀɪꜰɪᴇᴅ ꜰɪʟᴇ > " + FinalName.toUpperCase() + "✔️"
      );
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isSenderGroupAdmin) {
        try {
          return Mizuki_Buttons.MIB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `Who Is This Non-Admin •@${ꜱᴇɴᴅᴇʀeceived} Trying to Use Admin-Only Commands.

*❌ 𝚈𝚘𝚞 𝙰𝚛𝚎 𝙽𝚘𝚝 𝙰𝚕𝚕𝚘𝚠𝚎𝚍!*
┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│  
│🌶️𝐆𝐫𝐨𝐮𝐩𝐬: _Admins & Devs!_
│🌽𝐏𝐫𝐢𝐯𝐚𝐭𝐞 _Everyone_
└───────◆➤`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup && !𝓜𝖎𝖟𝖚ӄ𝖎.isBotGroupAdmin) {
        try {
          return Mizuki_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived}, *❌ʜᴏᴡ ᴄᴀɴ ɪ ᴜꜱᴇ ᴀᴅᴍɪɴ ᴄᴏᴍᴍᴀɴᴅꜱ ᴡʜᴇɴ ɪ ᴀᴍ ɴᴏᴛ ᴀᴅᴍɪɴ?*

💡𝐅𝐢𝐱: _Make Me Admin First_`,
            _𝔏𝔞𝔟_.ɴᴏᴛᴍᴇᴀᴅᴍɪɴ
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (!𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        try {
          return Mizuki_Buttons.MTB(
            ӄʀǟӄɨռʐ,
            chat,
            𝓜𝖎𝖟𝖚ӄ𝖎,
            `🐣𝐌𝐨𝐬𝐡𝐢-𝐌𝐨𝐬𝐡𝐢 •@${ꜱᴇɴᴅᴇʀeceived}, 
          
┌────◆➤ 🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧   
│
│❗𝐂𝐨𝐦𝐦𝐚𝐧𝐝: ${ᴋᴇɪ}${defaultnm}, 
│ᴄᴏᴍᴍᴀɴᴅ ᴏɴʟʏ ꜰᴏʀ ɢʀᴏᴜᴘꜱ!
└───────◆➤`
          );
        } catch (ℓαвєяяσя) {
          ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
        }
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var time = 7 * 24 * 60 * 60;
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isPm) {
        ӄʀǟӄɨռʐ
          .sendMessage(
            𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
            `command only applicable in a group chat.`,
            MessageType.text,
            { quoted: chat }
          )
          .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));

        return;
      }
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isGroup) {
        if (chat.message.extendedTextMessage == null) {
          await ӄʀǟӄɨռʐ.toggleDisappearingMessages(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, time);
        } else {
          await ӄʀǟӄɨռʐ.toggleDisappearingMessages(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, 0);
        }
        return;
      }
      if (chat.message.extendedTextMessage.contextInfo.expiration == 0) {
        var time = 7 * 24 * 60 * 60;
      } else {
        var time = 0;
      }
      await ӄʀǟӄɨռʐ
        .toggleDisappearingMessages(𝓜𝖎𝖟𝖚ӄ𝖎.chatId, time)
        .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      return;
      // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
