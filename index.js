const { command } = require("commander");
const program = new command();

function main() {
  program
    .name("my-cli")
    .description("A simple CLI application")
    .version("1.0.0");

  program
    .command("greet <name>")
    .description("Greet a user by name")
    .action((name) => {
      console.log(`Hello, ${name}!`);
    });

  program.parse(process.argv);
}

main();
