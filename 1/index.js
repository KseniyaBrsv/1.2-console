#!/usr/bin/env node

const yargs = require('yargs/yargs');
const { hideBin } = require('yargs/helpers');

const currentDate = new Date();
const currentYear = currentDate.getFullYear();
const currentMonth = currentDate.getMonth() + 1;

yargs(hideBin(process.argv))
 .command('current', 'Current date',
   (yargs) => {
     yargs
       .option('year', {
         alias: 'c',
         type: 'boolean',
         describe: 'Get the current year',
       })
       .option('month', {
         alias: 'm',
         type: 'boolean',
         describe: 'Get the current month',
       })
       .option('date', {
         alias: 'd',
         describe: 'Get the current date',
         type: 'boolean'
       })
   },
     (argv) => {
       if (argv.year || argv.y) {
         console.log(currentYear);
       } else if(argv.month || argv.m) {
         console.log(currentMonth);
       } else if(argv.date || argv.d) {
         const currentDay = currentDate.getDate();
         const month = String(currentMonth).padStart(2, '0');
         const formattedDate = `${currentDay}.${month}.${currentYear}`;
         console.log(formattedDate);
       } else {
         console.log(currentDate.toISOString());
       }
     })
 .command('add', 'Add days to current date',
   (yargs) => {
     yargs
       .option('days', {
         alias: 'd',
         describe: 'Number of days to add',
         type: 'number'
       })
   }, (argv) => {
     const futureDate = new Date(currentDate);

     if (argv.days) {
       futureDate.setDate(currentDate.getDate() + argv.days);
     }
     console.log(futureDate.toISOString());
    })
 .command('sub', 'days from current date',
   (yargs) => {
     yargs
       .option('month', {
         alias: 'm',
         describe: 'Number of month to subtract',
         type: 'number'
       })
   }, (argv) => {
     const pastDate = new Date(currentDate);

     if (argv.month) {
       pastDate.setMonth(currentDate.getMonth() - argv.month);
     }

     console.log(pastDate.toISOString());
   })
 .parse();




