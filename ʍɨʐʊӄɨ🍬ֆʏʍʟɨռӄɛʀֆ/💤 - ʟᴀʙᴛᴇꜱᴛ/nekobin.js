// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/cleanRF");
const _𝔏𝔞𝔟_ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const vers = require(`../../package.json`);
const MizuNeko = require(`nekobin`);
const fs = require(`fs`);
// // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
module.exports = {
  name: `nekobin`,
  description: `Use this module to paste your text to (NEKOBIN).`,
  𝓜𝓮𝓮6ʍօʀɛ: `*${ᴋᴇɪ}nekobin* <text>
or reply *${ᴋᴇɪ}nekobin* to any text.`,
  async handle(ӄʀǟӄɨռʐ, chat, 𝓜𝖎𝖟𝖚ӄ𝖎, Needs, ꜱɪᴛʀᴀᴘ) {
    try {
      // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      var ꜱᴇɴᴅᴇʀɪᴅ = 𝓜𝖎𝖟𝖚ӄ𝖎.sender;
      var ꜱᴇɴᴅᴇʀeceived = ꜱᴇɴᴅᴇʀɪᴅ.substring(0, ꜱᴇɴᴅᴇʀɪᴅ.length - 15);
      // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      //   if (!𝓜𝖎𝖟𝖚ӄ𝖎.type === `text`) {
      //     var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      //     𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
      //     const nahargs = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/nahargs`);
      //     return nahargs
      //       .nahargs(
      //         ӄʀǟӄɨռʐ,
      //         chat,
      //         𝓜𝖎𝖟𝖚ӄ𝖎,
      //         ꜱᴇɴᴅᴇʀɪᴅ,
      //         ꜱᴇɴᴅᴇʀeceived,
      //         𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
      //         𝓜𝓮𝓮ʍօʀɛ
      //       )
      //       .catch((ℓαвєяяσя) => ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat));
      //   }
      //   // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      //   if (Needs.length === 0) {
      //     var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      //     𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
      //     const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
      //     return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
      //       ӄʀǟӄɨռʐ,
      //       chat,
      //       𝓜𝖎𝖟𝖚ӄ𝖎,
      //       ꜱᴇɴᴅᴇʀɪᴅ,
      //       ꜱᴇɴᴅᴇʀeceived,
      //       𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
      //       𝓜𝓮𝓮ʍօʀɛ
      //     );
      //   }
      //   // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      //   if (!𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
      //     var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(𝓜𝖎𝖟𝖚ӄ𝖎.commandName);
      //     𝓜𝓮𝓮ʍօʀɛ = 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ === undefined ? `Null` : 𝓜Usage.𝓜𝓮𝓮6ʍօʀɛ;
      //     const ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ = require(`../../ʍɨʐʊӄɨ🛰️ֆɛʀʋɛʀ/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
      //     return ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
      //       ӄʀǟӄɨռʐ,
      //       chat,
      //       𝓜𝖎𝖟𝖚ӄ𝖎,
      //       ꜱᴇɴᴅᴇʀɪᴅ,
      //       ꜱᴇɴᴅᴇʀeceived,
      //       𝓜𝖎𝖟𝖚ӄ𝖎.commandName,
      //       𝓜𝓮𝓮ʍօʀɛ
      //     );
      //   }
      // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
      if (𝓜𝖎𝖟𝖚ӄ𝖎.isReply) {
        const filename = ꜱᴇɴᴅᴇʀɪᴅ + "_" + Date.now();
        await fs.writeFileSync(
          `./ʍɨʐʊӄɨ🗑️ȶɛʍք/${filename}`,
          𝓜𝖎𝖟𝖚ӄ𝖎.replyMessage
        );
        var Mdata = await fs.readFileSync(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${filename}`, "utf8");
        const FILE = Mdata.toString();
        const FINAL = FILE.replace("/nekobin", "");
        console.log(FINAL);
        await MizuNeko.nekobin(FINAL).then(async (data) => {
          console.log(data);
          await ӄʀǟӄɨռʐ
            .sendMessage(
              𝓜𝖎𝖟𝖚ӄ𝖎.chatId,
              `*🍁爪𝖎𝖟𝖚ӄ𝖎™ ${vers.vers}*

•@${ꜱᴇɴᴅᴇʀeceived}, Here Is Your pasted link👇🏽‍
${data.url}`,
              MessageType.text,
              {
                quoted: chat,
                contextInfo: {
                  mentionedJid: [ꜱᴇɴᴅᴇʀɪᴅ],
                },
              }
            )
            .then(async () => {
              try {
                cleanRF.cleanRF(`./ʍɨʐʊӄɨ🗑️ȶɛʍք/${filename}`);
              } catch (ℓαвєяяσя) {
                console.log(ℓαвєяяσя);
              }
            });
        });
      }
      // // ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
    } catch (ℓαвєяяσя) {
      ꜰᴜᴄᴋ.catch(ℓαвєяяσя, ӄʀǟӄɨռʐ, 𝓜𝖎𝖟𝖚ӄ𝖎, chat);
      console.log(ℓαвєяяσя);
    }
  },
};
// ⬡ ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳 ⬡==========================⬡    🍁 (c)爪𝖎𝖟𝖚ӄ𝖎 🍁    ⬡==========================⬡ 𝐋𝐚𝐛™ ⬡
