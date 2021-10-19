#!/usr/bin/env node

const {
 Command
} = require('commander')

const path = require('path')
const program = new Command()
const fs = require('fs')

program
 .command('parse json <value>')
 .option('-k, --key <value>', 'key of ')
 .action((_, file, keys) => {
  main(file, keys.key)
 })
 .version(0.1)

program.parse(process.argv);

function readFileContent(p) {
 let buffer = fs.readFileSync(p)
 return buffer.toString()
}

async function main(file, key) {
 let str = readFileContent(file)
 let data = JSON.parse(str)
 let value = data[key]
 process.stdout.write(value)
}