#!/usr/bin/env node

const {execSync} = require('child_process');

const runCommand = command =>{
    try {
        execSync(command, {stdio: 'inherit'});
    } catch (error) {
        console.log(error);
        return false
    }
    return true
}

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/ChinmayMhatre/create-next-tailwind-starter ${repoName}`;
const installDepsCommand = `cd ${repoName} && npm install && npm install -D tailwindcss postcss autoprefixer`;
const tailwind = `cd ${repoName} && npm install -D tailwindcss postcss autoprefixer`;

console.log(`Creating a new Next.js app in ${repoName}...`);

const checkOut = runCommand(gitCheckoutCommand);

if(!checkOut) process.exit(-1);

console.log(`Installing dependencies...`);

const installDeps = runCommand(installDepsCommand);

if(!installDeps) process.exit(-1);

const tailwindDeps = runCommand(tailwind);

if(!tailwindDeps) process.exit(-1);

console.log(`Congratulations! you are ready. Follow the following commands to start`);
console.log(`cd ${repoName}`);
console.log(`npm run dev`);

