export default class ValidationForm {
  constructor(selector, rules) {
    this.form = document.querySelector(selector);
    this.firstName = document.querySelector('#firstName');
    this.lastName = document.querySelector('#lastName');
    this.phone = document.querySelector('#phone');
    this.email = document.querySelector('#email');
    this.password = document.querySelector('#password');

    // firstName start
    this.minLengthFirstName = rules.firstName.minLength;
    this.maxLengthFirstName = rules.firstName.maxLength;
    // firstName end
    // lastName start
    this.minLengthLastName = rules.lastName.minLength;
    this.maxLengthLastName = rules.lastName.maxLength;
    // lastName end
    //password start
    this.minLengthPassword = rules.password.minLength;
    this.maxLengthPassword = rules.password.maxLength;
    //password end

    this.setup();
  }

  checkFirstName() {
    const firstNameValue = this.firstName.value.trim();

    if (!this.isRequired(firstNameValue)) {
      this.errorMessage(this.firstName, 'First name cannot be empty!')
    } else if (!this.betweenBorder(firstNameValue.length, this.minLengthFirstName, this.maxLengthFirstName)) {
      this.errorMessage(this.firstName, `First name must be between ${this.minLengthFirstName} and ${this.maxLengthFirstName} characters.`);
    } else {
      this.successMessage(this.firstName);
    }
  }

  checkLastName() {
    const lastNameValue = this.lastName.value.trim();

    if (!this.isRequired(lastNameValue)) {
      this.errorMessage(this.lastName, 'Last name cannot be empty!')
    } else if (!this.betweenBorder(lastNameValue.length, this.minLengthLastName, this.maxLengthLastName)) {
      this.errorMessage(this.lastName, `Last name must be between ${this.minLengthLastName} and ${this.maxLengthLastName} characters.`);
    } else {
      this.successMessage(this.lastName);
    }
  }

  checkPhone() {
    const phoneValue = this.phone.value.trim();
    const numberOfDigits = 14;

    if (!this.isRequired(phoneValue)) {
      this.errorMessage(this.phone, 'Phone cannot be empty!')
    } else if (!this.testPhone(phoneValue) || phoneValue.length > numberOfDigits) {
      this.errorMessage(this.phone, 'Example: +380732225551')
    } else {
      this.successMessage(this.phone);
    }
  }

  checkEmail() {
    const emailValue = this.email.value.trim();

    if (!this.isRequired(emailValue)) {
      this.errorMessage(this.email, 'Email cannot be empty!')
    } else if (!this.testEmail(emailValue)) {
      this.errorMessage(this.email, 'Example: example@.gmail.com')
    } else {
      this.successMessage(this.email);
    }
  }

  checkPassword() {
    const passwordValue = this.password.value.trim();

    if (!this.isRequired(passwordValue)) {
      this.errorMessage(this.password, 'Password cannot be empty!')
    } else if (!this.betweenBorder(passwordValue.length, this.minLengthPassword, this.maxLengthPassword)) {
      this.errorMessage(this.password, `Last name must be between ${this.minLengthPassword} and ${this.maxLengthPassword} characters.`)
    } else if (!this.testPassword(passwordValue)) {
      this.errorMessage(this.password, 'Example: abcd4')
    } else {
      this.successMessage(this.password);
    }
  }

  isRequired(value) {
    return value === '' ? false : true;
  }

  betweenBorder(valueLength, valueMin, valueMax) {
    return valueLength > valueMin && valueLength < valueMax ? true : false;
  }

  errorMessage(input, message) {
    const formControl = input.parentElement;
    const letter = formControl.querySelector('.form__wrapper-message');
    letter.style.color = 'red';
    letter.innerText = message;
  }

  successMessage(input) {
    const formControl = input.parentElement;
    const letter = formControl.querySelector('.form__wrapper-message');
    letter.style.color = 'green';
    letter.innerText = 'Success';
  }

  testEmail(email) {
    const regexp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regexp.test(email);
  }

  testPassword(password) {
    const regexp = /(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z]*([0-9#$-/:-?{-~!"^_`\[\]]))(?=[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]*[a-zA-Z])[#$-/:-?{-~!"^_`\[\]a-zA-Z0-9]/;
    return regexp.test(password);
  }

  testPhone(phone) {
    const regexp = /[0-9]/;
    return regexp.test(phone);
  }

  setup() {
    this.form.addEventListener('input', e => {
      const id = e.target.id
      switch (id) {
        case 'firstName': this.checkFirstName(); break;
        case 'lastName': this.checkLastName(); break;
        case 'phone': this.checkPhone(); break;
        case 'email': this.checkEmail(); break;
        case 'password': this.checkPassword(); break;
      }
    });

    this.form.addEventListener('submit', e => {
      e.preventDefault();

      this.checkFirstName();
      this.checkLastName();
      this.checkPhone();
      this.checkEmail();
      this.checkPassword();
    });
  }
}
