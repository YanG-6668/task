import ValidationForm from './ValidationForm'
'use strict';

const vf = new ValidationForm('form', [
  {
    selector: document.querySelector('#firstName'),
    required: true,
    reg: /\w{3,20}/,
    // minLength: 3,
    // maxLength: 15,
    errorMessage: `You have to write something (minimum characters: 3 and maximum characters: 20)`,
  },
  {
    selector: document.querySelector('#lastName'),
    required: true,
    reg: /\w{3,20}/,
    // minLength: 3,
    // maxLength: 15,
    errorMessage: `You have to write something (minimum characters: 3 and maximum characters: 20)`,
  },
  {
    selector: document.querySelector('#phone'),
    required: true,
    reg: /[0-9]{9,13}/,
    // 'minLength': 3,
    errorMessage: `You have to write phone and only numbers.`
  },
  {
    selector: document.querySelector('#email'),
    required: true,
    reg: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    // 'minLength': 3,
    // 'maxLength': 15
    errorMessage: `You must write the correct email address. Example: joey.tribbiani@gmail.com`
  },
  {
    selector: document.querySelector('#password'),
    required: true,
    reg: /(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\[\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]{4,8}/,
    // minLength: 4,
    // maxLength: 8,
    errorMessage: `You have to write password (this password must have letters, numbers, minimum characters: 4 and maximum characters: 8)`
  }
]);
