/* Copyright (C) 2020 KrakinzLab

Licensed under the  GPL-3.0 License;
you may not use this file except in compliance with the License.

KrakinzBot - Krakinzkon
*/

const chalk = require('chalk');
const { WAConnection, MessageType } = require('@adiwajshing/baileys');
const fs = require('fs');
async function whatsAsena() {
  const conn = new WAConnection();
  conn.logger.level = 'warn';
  conn.version = [2, 2212, 7]

  conn.on('connecting', async () => {
    console.log(`${chalk.green.bold('Krakiz')}${chalk.green.bold('-Kon')}
${chalk.white.italic('KrakinzBots code recipient')}
${chalk.blue.bold('🖥  Connecting to KrakinzLab... Please wait.')}`);
  });

  conn.on('open', async () => {
    console.log(
      chalk.green.bold('KrakinzBot QR Code: '),
      'Mizuky:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      )
    );
    await conn.sendMessage(
      conn.user.jid,
      'Mizuky:::' +
      Buffer.from(JSON.stringify(conn.base64EncodedAuthInfo())).toString(
        'base64'
      ),
      MessageType.text
    );
    if (conn.user.jid.startsWith('91')) {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ KrakinzBot Successfully Scanned✅️*\n*▪️Thanks For Choosing KrakinzLab 🥴*',
        MessageType.text
      );
    } else {
      await conn.sendMessage(
        conn.user.jid,
        '*~_____________~* *'+ conn.user.name + ' ~_____________~*\n\n*▪️ KrakinzBot Successfully Scanned✅️*\n*▪️Thanks For Choosing KrakinzLab 🥴*',
        MessageType.text
      );
    }
    console.log(
      chalk.green.bold(
        "EĞER MESAJI KOPYALAMIYORSANIZ LÜTFEN WHATSAPP'I KONTROL EDİN. KENDİ NUMARANIZA QR KODU GÖNDERİLDİ!\n"
      ),
      chalk.green.bold(
        'IF YOU CANNOT COPY THE MESSAGE, PLEASE CHECK WHATSAPP. QR CODE SENT TO YOUR OWN NUMBER!'
      )
    );
    process.exit(0);
  });

  await conn.connect();
}

whatsAsena();
