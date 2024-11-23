#!/usr/bin/env node

import { program } from "commander";
import degit from "degit";
import path from "path";
import ora from "ora";
import chalk from "chalk";
import inquirer from "inquirer";
import { execSync } from "child_process";

program
  .version("1.0.6")
  .description("CLI to create a new Docubook project")
  .argument("[project-directory]", "Directory to create the new Docubook project")
  .action(async (projectDirectory) => {
    // Periksa apakah Node.js terinstal
    try {
      execSync("node -v", { stdio: "ignore" });
    } catch {
      console.error(chalk.red("Error: Node.js is not installed."));
      console.log("Please install Node.js from https://nodejs.org/.");
      process.exit(1);
    }

    // Jika argument directory kosong, tanyakan nama direktori
    if (!projectDirectory) {
      const { directoryName } = await inquirer.prompt([
        {
          type: "input",
          name: "directoryName",
          message: "Enter a name for your project directory:",
          default: "docubook-project",
        },
      ]);
      projectDirectory = directoryName;
    }

    // URL repo untuk degit tanpa pilihan template
    const repo = "github:mywildancloud/docubook";
    const emitter = degit(repo);
    const projectPath = path.resolve(process.cwd(), projectDirectory);

    console.log(
      `Creating a new Docubook project in ${projectPath} from the main branch...`
    );

    // Spinner untuk cloning project
    const spinner = ora(`Cloning ${chalk.magenta("main")}...`).start();

    try {
      await emitter.clone(projectPath);
      spinner.succeed(
        `Docubook project successfully created in ${projectPath}!`
      );

      console.log(chalk.blue("\nNext steps:"));
      console.log(`1. Navigate to your project directory:`);
      console.log(`   cd ${projectDirectory}`);
      console.log(`2. Install dependencies:`);
      console.log(`   npm install`);
      console.log(`3. Start the development server:`);
      console.log(`   npm run dev`);

      // Keluar dari proses CLI setelah sukses
      process.exit(0);
    } catch (err) {
      spinner.fail("Error creating project:");
      console.error(err.message);
      process.exit(1); // Keluar dengan status error
    }
  });

program.parse(process.argv);
