const fs = require("fs");
const { Command } = require("commander");
const program = new Command();

function main() {
  program
    .name("count")
    .description("A simple CLI tool to count words in a file")
    .version("1.0.0");

  program
    .command("count_words <file>")
    .description("Count the number of words in a file")
    .action((file) => {
      fs.readFile(file, "utf8", (err, data) => {
        if (err) {
          console.error(`Error reading file: ${err.message}`);
          return;
        }
        const words = data.split(/\s+/).filter((word) => word.length > 0);
        console.log(`The file contains ${words.length} words.`);
      });
    });

  program.parse(process.argv);
}

main();
