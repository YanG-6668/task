import ValidationForm from './ValidationForm'
'use strict';

const vf = new ValidationForm('form', {
  firstName: {
    required: false,
    minLength: 3,
    maxLength: 25
  },
  lastName: {
    required: true,
    minLength: 3,
    maxLength: 25
  },
  email: {
    required: true,
    email: true
  },
  password: {
    password: true,
    minLength: 4,
    maxLength: 8
  },
  phone: {
    required: true,
    phone: true
  }
});
