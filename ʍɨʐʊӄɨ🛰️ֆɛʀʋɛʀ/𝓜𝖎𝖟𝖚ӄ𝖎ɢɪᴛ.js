// â¬¡ â¢ðð«ðð¤ð¢ð§ð³ â¬¡==========================â¬¡    ð (c)çªðððÓð ð    â¬¡==========================â¬¡ ðððâ¢ â¬¡
const git = require(`simple-git`)();
const chalk = require(`chalk`);
const exec = require(`child_process`).exec;
const gitPull = async () => {
  await git.fetch();
  var newCommits = await git.log([`KrakinzLab..origin/KrakinzLab`]);
  if (newCommits.total) {
    console.log(chalk.blueBright(`ð¡INFO â¬° New Update pending, updating...`));
    await git.pull(`origin`, `KrakinzLab`, (err, update) => {
      if (update && update.summary.changes) {
        if (update.files.includes(`package.json`)) {
          // â¬¡ â¢ðð«ðð¤ð¢ð§ð³ â¬¡==========================â¬¡    ð (c)çªðððÓð ð    â¬¡==========================â¬¡ ðððâ¢ â¬¡
          exec(`npm install`).stderr.pipe(process.stderr);
        }
        console.log(
          chalk.greenBright(
            `ð¡INFO â¬° ðððð¼-ð¨ð½ð±ð®ðð²ð± â¡ðð¢ð³ð®ð¤ð¢â¢ ðð¶ððµ ð¹ð®ðð²ðð ð°ðµð®ð»ð´ð²ð.`
          )
        );
      } else if (err) {
        console.log(
          chalk.redBright(
            `âERROR â¬° ðð³ ð¶ð ðð®ð ð® ððð â¡ðð¢ð³ð®ð¤ð¢â¢ ðð½ð±ð®ðð² ððµð²ð» ð£ð¹ð²ð®ðð² ð¿ð²ð±ð²ð½ð¹ð¼ð ðð¼ðð¿ ð¯ð¼ð!`
          )
        );
      }
    });
  } else {
    console.log(
      chalk.greenBright(`ð¡INFO â¬° â¡ðð¢ð³ð®ð¤ð¢â¢ ð¶ð ð®ð¹ð¿ð²ð®ð±ð ð¼ð» ð¹ð®ðð²ðð ðð²ð¿ðð¶ð¼ð».`)
    );
  }
};

module.exports = gitPull;
// â¬¡ â¢ðð«ðð¤ð¢ð§ð³ â¬¡==========================â¬¡    ð (c)çªðððÓð ð    â¬¡==========================â¬¡ ðððâ¢ â¬¡
