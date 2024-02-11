#!/usr/bin/env node

const readline = require('node:readline');
const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const min = 0; // минимальное значение диапазона
const max = 100; // максимальное значение диапазона
const secretNumber = Math.floor(Math.random() * (max - min + 1)) + min; // загаданное число

  console.log(`Загадано число в диапазоне от ${min} до ${max}.`);
    const guessNumber = () => {
      rl.question(`Введите число: \n`, (answer) => {
      if(answer == Number(answer)) {
        if (answer == secretNumber) {
          console.log(`Отгадано число ${answer}`);
          rl.close();
        } else if (answer < secretNumber) {
          console.log('Больше');
          guessNumber();
        } else if (answer > secretNumber) {
          console.log('Меньше');
          guessNumber();
        }
      } else {
        console.log('Вы ввели не число. Попробуйте еще раз.');
        guessNumber();
      }
    })
    }

  guessNumber();
