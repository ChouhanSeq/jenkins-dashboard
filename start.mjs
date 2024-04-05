import chalk from "chalk";

try {
  await $`yarn stop`;
  console.log(chalk.red.bold("\n🛑 Old Service Stopped"));
} catch (_e) {
  console.log(chalk.green.bold("\n✅ Nothing to Stop"));
}

console.log("\n");

await $`yarn build && yarn serve`;

console.log(chalk.green.bold("\n✅ Jenkins Service Started. You can close this window now."));
console.log(
  chalk.yellow.bold("\n🔗 Head to"),
  chalk.blue.bold("http://localhost:3001\n")
);

