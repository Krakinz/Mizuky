// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const speed = require(`performance-now`);
const vers = require(`../package.json`);
const date = require(`date-and-time`);
const cleanRF = require("./cleanRF");
const _๐๐๐_ = require(`./_๐๐๐_`);
const ๊ฐแดแดแด = require(`./oShit`);
let Timestamp = speed();
const Ping = speed() - Timestamp;
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Text_But = (ำสวำษจีผส, chat, ๐๐๐๐ำ๐, MainText) => {
  if (๐๐๐๐ำ๐.isReply) {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const buttonMessage = {
    contentText: MainText,
    footerText: `\nยฉ๏ธ ๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐ฐ๏ธแดษชษดษข: _${Ping.toFixed(
      4
    )}s_ ๐แดแดแดแด: _${Clock}_`,
    buttons: [
      {
        buttonId: `${แดแดษช}help`,
        buttonText: { displayText: `${แดแดษช}help` },
        type: 1,
      },
    ],
    headerType: 1,
  };
  ำสวำษจีผส
    .sendMessage(๐๐๐๐ำ๐.chatId, buttonMessage, MessageType.buttonsMessage, {
      quoted: chat,
      contextInfo: { mentionedJid: [๊ฑแดษดแดแดสษชแด] },
    })
    .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Image_But = async (ำสวำษจีผส, chat, ๐๐๐๐ำ๐, MainText, MediaUrl) => {
  if (๐๐๐๐ำ๐.isReply) {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const media = await ำสวำษจีผส.prepareMessage(
    ๐๐๐๐ำ๐.chatId,
    { url: MediaUrl },
    MessageType.image,
    { mimetype: Mimetype.png }
  );
  return await ำสวำษจีผส
    .sendMessage(
      ๐๐๐๐ำ๐.chatId,
      {
        contentText: MainText,
        footerText: `\nยฉ๏ธ ๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐ฐ๏ธแดษชษดษข: _${Ping.toFixed(
          4
        )}s_ ๐แดแดแดแด: _${Clock}_`,
        buttons: [
          {
            buttonId: `${แดแดษช}help`,
            buttonText: { displayText: `${แดแดษช}help` },
            type: 1,
          },
        ],
        headerType: 4,
        imageMessage: media.message.imageMessage,
      },
      MessageType.buttonsMessage,
      {
        quoted: chat,
        contextInfo: { mentionedJid: [๊ฑแดษดแดแดสษชแด] },
      }
    )
    .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Video_But = async (ำสวำษจีผส, chat, ๐๐๐๐ำ๐, MainText, MediaUrl) => {
  if (๐๐๐๐ำ๐.isReply) {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const media = await ำสวำษจีผส.prepareMessage(
    ๐๐๐๐ำ๐.chatId,
    { url: MediaUrl },
    MessageType.video,
    { mimetype: `video/mp4` }
  );
  return await ำสวำษจีผส
    .sendMessage(
      ๐๐๐๐ำ๐.chatId,
      {
        contentText: MainText,
        footerText: `\nยฉ๏ธ ๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐ฐ๏ธแดษชษดษข: _${Ping.toFixed(
          4
        )}s_ ๐แดแดแดแด: _${Clock}_`,
        buttons: [
          {
            buttonId: `${แดแดษช}help`,
            buttonText: { displayText: `${แดแดษช}help` },
            type: 1,
          },
        ],
        headerType: 5,
        videoMessage: media.message.videoMessage,
      },
      MessageType.buttonsMessage,
      {
        quoted: chat,
        contextInfo: { mentionedJid: [๊ฑแดษดแดแดสษชแด] },
      }
    )
    .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_GIF_But = async (ำสวำษจีผส, chat, ๐๐๐๐ำ๐, MainText, MediaUrl) => {
  if (๐๐๐๐ำ๐.isReply) {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const media = await ำสวำษจีผส.prepareMessage(
    ๐๐๐๐ำ๐.chatId,
    { url: MediaUrl },
    MessageType.video,
    { mimetype: `video/gif` }
  );
  return await ำสวำษจีผส
    .sendMessage(
      ๐๐๐๐ำ๐.chatId,
      {
        contentText: MainText,
        footerText: `\nยฉ๏ธ ๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐ฐ๏ธแดษชษดษข: _${Ping.toFixed(
          4
        )}s_ ๐แดแดแดแด: _${Clock}_`,
        buttons: [
          {
            buttonId: `${แดแดษช}help`,
            buttonText: { displayText: `${แดแดษช}help` },
            type: 1,
          },
        ],
        headerType: 5,
        videoMessage: media.message.videoMessage,
      },
      MessageType.buttonsMessage,
      {
        quoted: chat,
        contextInfo: { mentionedJid: [๊ฑแดษดแดแดสษชแด] },
      }
    )
    .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_VideoAudio_But = async (
  ำสวำษจีผส,
  chat,
  ๐๐๐๐ำ๐,
  MainText,
  MediaUrl
) => {
  if (๐๐๐๐ำ๐.isReply) {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const media = ำสวำษจีผส.prepareMessage(
    ๐๐๐๐ำ๐.chatId,
    { url: MediaUrl },
    MessageType.mp4Audio,
    { mimetype: `audio/mp4` }
  );
  const buttonMessages = {
    videoMessage: media.message.videoMessage,
    contentText: MainText,
    footerText: `\nยฉ๏ธ ๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐ฐ๏ธแดษชษดษข: _${Ping.toFixed(
      4
    )}s_ ๐แดแดแดแด: _${Clock}_`,
    buttons: [
      {
        buttonId: `${แดแดษช}help`,
        buttonText: { displayText: `${แดแดษช}help` },
        type: 1,
      },
    ],
    headerType: 5,
  };
  ำสวำษจีผส
    .sendMessage(๐๐๐๐ำ๐.chatId, buttonMessages, MessageType.buttonsMessage, {
      mimetype: Mimetype.mp4Audio,
      quoted: chat,
    })
    .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
const Mizuki_Location_But = async (
  ำสวำษจีผส,
  chat,
  ๐๐๐๐ำ๐,
  MainText,
  MediaUrl
) => {
  if (๐๐๐๐ำ๐.isReply) {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
    var personreceived = Receiver.substring(0, Receiver.length - 15);
  } else {
    var ๊ฑแดษดแดแดสษชแด = ๐๐๐๐ำ๐.sender;
    var ๊ฑแดษดแดแดสeceived = ๊ฑแดษดแดแดสษชแด.substring(0, ๊ฑแดษดแดแดสษชแด.length - 15);
    const defaultnm = ๐๐๐๐ำ๐.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
  }
  const media = ำสวำษจีผส.prepareMessage(
    ๐๐๐๐ำ๐.chatId,
    { url: MediaUrl },
    MessageType.location
  );
  const buttonMessages = {
    locationMessage: media.message.locationMessage,
    contentText: MainText,
    footerText: `\nยฉ๏ธ ๐๐ข๐ณ๐ฎ๐ค๐ข๐๐๐จ๐ญ \n๐ฐ๏ธแดษชษดษข: _${Ping.toFixed(
      4
    )}s_ ๐แดแดแดแด: _${Clock}_`,
    buttons: [
      {
        buttonId: `${แดแดษช}help`,
        buttonText: { displayText: `${แดแดษช}help` },
        type: 1,
      },
    ],
    headerType: 6,
  };
  ำสวำษจีผส
    .sendMessage(๐๐๐๐ำ๐.chatId, buttonMessages, MessageType.buttonsMessage, {
      quoted: chat,
    })
    .catch((โฮฑะฒัััฯั) => ๊ฐแดแดแด.catch(โฮฑะฒัััฯั, ำสวำษจีผส, ๐๐๐๐ำ๐, chat));
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
module.exports = {
  MTB: Mizuki_Text_But,
  MGB: Mizuki_GIF_But,
  MIB: Mizuki_Image_But,
  MVB: Mizuki_Video_But,
  MLB: Mizuki_Location_But,
  MAB: Mizuki_VideoAudio_But,
};
// โฌก โข๐๐ซ๐๐ค๐ข๐ง๐ณ โฌก==========================โฌก    ๐ (c)็ช๐๐๐ำ๐ ๐    โฌก==========================โฌก ๐๐๐โข โฌก
