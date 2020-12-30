import ValidationForm from './ValidationForm'
'use strict';

const vf = new ValidationForm('form', {
  firstName: {
    minLength: 3,
    maxLength: 25
  },
  lastName: {
    minLength: 3,
    maxLength: 25
  },
  password: {
    minLength: 4,
    maxLength: 8
  }
});
