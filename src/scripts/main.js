import ValidationForm from './ValidationForm'
'use strict';

const textReg = /\w{3,20}/;
const phoneReg = /[0-9]{9,13}/;
const passwordReg = /(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\[\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{4,8}/;
const emailReg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const vf = new ValidationForm('form', [
  {
    selector: document.querySelector('#firstName'),
    required: true,
    reg: textReg,
    errorMessage: `You have to write something (minimum characters: 3 and maximum characters: 20)`,
  },
  {
    selector: document.querySelector('#lastName'),
    required: true,
    reg: textReg,
    errorMessage: `You have to write something (minimum characters: 3 and maximum characters: 20)`,
  },
  {
    selector: document.querySelector('#phone'),
    required: true,
    reg: phoneReg,
    errorMessage: `You have to write phone and only numbers.`
  },
  {
    selector: document.querySelector('#email'),
    required: true,
    reg: emailReg,
    errorMessage: `You must write the correct email address. Example: joey.tribbiani@gmail.com`
  },
  {
    selector: document.querySelector('#password'),
    required: true,
    reg: passwordReg,
    errorMessage: `You have to write password (this password must have letters, numbers, minimum characters: 4 and maximum characters: 8)`
  }
]);
