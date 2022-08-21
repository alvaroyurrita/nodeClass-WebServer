// const fs = require('fs')
// const importedName = require('./utils');
// import * as fs from 'node:fs'; //Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.

// fs.writeFileSync('notes.txt','this adsf node.js!')
// fs.appendFileSync('notes.txt','this is appended!\r')  

// const validator = require('validator')
const chalk = require('chalk');
const notes = require('./notes.js')
const yargs = require('yargs');

// console.log(notes(3,4))
// // console.log(validator.isURL('http:/.googl.com'))
// console.log(chalk.green("Success"))
// console.log(chalk.green.bold("Success"))
// console.log(chalk.green.inverse("Success"))
// console.log(chalk.green.bgRed.bold.inverse("Success blue"))


// console.log(process.argv)
// console.log(yargs.argv)
yargs.version('1.1.0')


// const command = process.argv[2];
// const params = process.argv[3];

// switch (command) {
//   case 'add':
//     console.log("adding note")
//     break;
//   case 'remove':
//     console.log("removing note")

//     break;

//   default:
//     break;
// }

yargs.command({
  command: 'add',
  describe: 'Adds a new note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string',
    },
    body: {
      describe: "Body of the note",
      demandOption: true,
      type: 'string',
    }
  },
  handler: argv => {
    const result = notes.addNote(argv.title, argv.body)
    if (result) {
      console.log(chalk.bgGreen(`Note [${argv.title}] Added!`));
    } else {
      console.log(chalk.bgRed("Error Adding Note"));
    }
  }
})

yargs.command({
  command: 'remove',
  describe: 'Remove an existing note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => {
    const result = notes.removeNote(argv.title)
    if (result) {
      console.log(chalk.bgGreen(`Note [${argv.title}] Removed!`));
    } else {
      console.log(chalk.bgRed("Error Removing Note"));
    }
  }
})

yargs.command({
  command: 'list',
  describe: 'List all notes',
  handler: () => notes.getNotes().forEach(element => {
    console.log(element)
  })
})

yargs.command({
  command: 'read',
  describe: 'Read an existing note',
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: 'string',
    },
  },
  handler: argv => console.log(notes.readNote(argv.title))
})

yargs.parse();