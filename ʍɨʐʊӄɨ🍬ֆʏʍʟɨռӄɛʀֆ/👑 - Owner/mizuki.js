// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
const Mizuki_Buttons = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Buttons`);
const Mizuki_Static = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/Mizuki_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const cleanRF = require("../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/cleanRF");
const κ°α΄α΄α΄ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/oShit`);
const speed = require("performance-now");
const { performance } = require("perf_hooks");
const vers = require(`../../package.json`);
const _πππ_ = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/_πππ_`);
var α΄α΄Ιͺα΄x = new RegExp(_πππ_.FOXTROT, `g`);
var α΄α΄Ιͺ = /\/\^\[(.*)+\]\/\g/g.exec(α΄α΄Ιͺα΄x)[1];
const os = require("os");
const { formatp, runtime } = require(`../../ΚΙ¨ΚΚΣΙ¨π°οΈΦΙΚΚΙΚ/mizu`);
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
module.exports = {
  name: `mizuki`,
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
      const used = process.memoryUsage();
      const cpus = os.cpus().map((cpu) => {
        cpu.total = Object.keys(cpu.times).reduce(
          (last, type) => last + cpu.times[type],
          0
        );
        return cpu;
      });
      const cpu = cpus.reduce(
        (last, cpu, _, { length }) => {
          last.total += cpu.total;
          last.speed += cpu.speed / length;
          last.times.user += cpu.times.user;
          last.times.nice += cpu.times.nice;
          last.times.sys += cpu.times.sys;
          last.times.idle += cpu.times.idle;
          last.times.irq += cpu.times.irq;
          return last;
        },
        {
          speed: 0,
          total: 0,
          times: {
            user: 0,
            nice: 0,
            sys: 0,
            idle: 0,
            irq: 0,
          },
        }
      );
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      let timestamp = speed();
      let latensi = speed() - timestamp;
      neww = performance.now();
      oldd = performance.now();
      respon = `
βββββββ€ ππ²π¦π₯π’π§π€ ππ§ππ¨π¬
β    
βγ·οΈπ‘α΄Κα΄κ°Ιͺx: ${α΄α΄Ιͺ}
βγ·οΈβοΈα΄Ι΄Ι’ΙͺΙ΄α΄: ${vers.vers}
βγ·οΈπ»α΄Κα΄α΄κ°α΄Κα΄: ${os.platform()}
βγ·οΈπ°οΈΚα΄α΄α΄Ι΄α΄Κ: ${latensi.toFixed(4)}(s)
βγ·οΈβα΄α΄α΄Ιͺα΄α΄: ${runtime(process.uptime())}
βγ·οΈπ?Κα΄α΄: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}
β
ββββββββββββββ€

βββββββ€ ππ¨ππππ πππ¦-ππ¬ππ π:
β${Object.keys(used)
        .map(
          (key, _, arr) =>
            `${key.padEnd(
              Math.max(...arr.map((v) => v.length)),
              " "
            )}: ${formatp(used[key])}`
        )
        .join("\nβ")}

βββββββ€ ${
        cpus[0]
          ? `ππ¨π­ππ₯ πππ ππ¬ππ π
β${cpus[0].model.trim()} (${cpu.speed} α΄Κα΄’)${Object.keys(cpu.times)
              .map(
                (type) =>
                  `- *${(type + "*").padEnd(6)}: ${(
                    (100 * cpu.times[type]) /
                    cpu.total
                  ).toFixed(2)}%`
              )
              .join("\n")}


βββββββ€ πππ ππ¨π«π(π¬) ππ¬ππ π (_${cpus.length}_ ππ¨π«π πππ)
β${cpus
              .map(
                (cpu, i) =>
                  `${i + 1}. ${cpu.model.trim()} (${
                    cpu.speed
                  } α΄Κα΄’)${Object.keys(cpu.times)
                    .map(
                      (type) =>
                        `- *${(type + "*").padEnd(6)}: ${(
                          (100 * cpu.times[type]) /
                          cpu.total
                        ).toFixed(2)}%`
                    )
                    .join("\n")}`
              )
              .join("\n\n")}`
          : ""
      }`.trim();
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
      await ΣΚΗΣΙ¨ΥΌΚ
        .sendMessage(
          ππππΣπ.chatId,
          {
            url: _πππ_.MEE,
          },
          MessageType.image,
          {
            mimetype: Mimetype.png,
            contextInfo: {
              mentionedJid: [κ±α΄Ι΄α΄α΄ΚΙͺα΄],
            },
            caption: `\nΒ©οΈ ππ’π³π?π€π’πππ¨π­\nπΈπππ«π¬π’π¨π§: \nππππ­π: _${Clock}_

π£ππ¨π¬π‘π’-ππ¨π¬π‘π’ β’@${κ±α΄Ι΄α΄α΄Κeceived}, 
${respon}`,
          }
        )
        .catch((βΞ±Π²ΡΡΡΟΡ) => κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat));
      // β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
    } catch (βΞ±Π²ΡΡΡΟΡ) {
      κ°α΄α΄α΄.catch(βΞ±Π²ΡΡΡΟΡ, ΣΚΗΣΙ¨ΥΌΚ, ππππΣπ, chat);
      console.log(βΞ±Π²ΡΡΡΟΡ);
    }
  },
};
// β¬‘ β’ππ«ππ€π’π§π³ β¬‘==========================β¬‘    π (c)ηͺπππΣπ π    β¬‘==========================β¬‘ πππβ’ β¬‘
