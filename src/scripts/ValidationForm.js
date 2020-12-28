// create error/success element (javascript)!!! ------------------------------------------------------------>

export default class ValidationForm {
  constructor(selector, rules) {
    this.form = document.querySelector(selector);
    this.inputs = this.form.querySelectorAll('.form__input');
    this.btn = this.form.querySelector('.form__btn');
    // firstName start
    this.requiredFirstName = rules.firstName.required;
    this.minLengthFirstName = rules.firstName.minLength;
    this.maxLengthFirstName = rules.firstName.maxLength;
    // firstName end
    // lastName start
    this.requiredLastName = rules.lastName.required;
    this.minLengthLastName = rules.lastName.minLength;
    this.maxLengthLastName = rules.lastName.maxLength;
    // lastName end
    // email start
    this.requiredEmail = rules.email.required;
    this.checkEmail = rules.email.email;
    // email end
    //password start
    this.checkPassword = rules.password.password;
    this.minLengthPassword = rules.password.minLength;
    this.maxLengthPassword = rules.password.maxLength;
    //password end
    //phone start
    this.requiredPhone = rules.phone.required;
    this.checkPhone = rules.phone.phone;
    //phone end

    this.setup();
  }


  checkInputs() {
    this.inputs.forEach(input => {

      const value = input.value;
      const valueLength = input.value.length;
      const target = input.dataset.validateField;

      if (target === 'firstName') {

        if (input.hasAttribute('required')) {

          if (valueLength >= this.minLengthFirstName && valueLength <= this.maxLengthFirstName) {
            this.successMessage(input);
          } else {
            this.errorMessage(input, `Need more than ${this.minLengthFirstName} letters and less than ${this.maxLengthFirstName} letters`);
          }

          if (valueLength === 0) {
            this.errorMessage(input, 'Required input field!');
          }
        }
      }

      if (target === 'lastName') {

        if (input.hasAttribute('required')) {

          if (valueLength >= this.minLengthLastName && valueLength <= this.maxLengthLastName) {
            this.successMessage(input);
          } else {
            this.errorMessage(input, `Need more than ${this.minLengthLastName} letters and less than ${this.minLengthLastName} letters`);
          }

          if (valueLength === 0) {
            this.errorMessage(input, 'Required input field!');
          }
        }
      }

      if (target === 'email') {

        if (input.hasAttribute('required')) {

          if (this.checkEmail) {
            if (this.testEmail(value)) {
              this.successMessage(input);
            } else {
              this.errorMessage(input, 'Incorrect email');
            }
          }

          if (valueLength === 0) {
            this.errorMessage(input, 'Required input field!');
          }
        }
      }

      if (target === 'password') {

        if (!(valueLength >= this.minLengthPassword && valueLength <= this.maxLengthPassword)) {
          this.errorMessage(input, `Need more than ${this.minLengthPassword} letters and less than ${this.maxLengthPassword} letters`);
        } else if (!this.testPassword(value)) {
          this.errorMessage(input, 'Example: 1234Aa');
        } else {
          this.successMessage(input);
        }

        if (valueLength === 0) {
          this.errorMessage(input, 'Required input field!');
        }
      }

      if (target === 'phone') {
        if (input.hasAttribute('required')) {

          if (valueLength === 10 && this.testPhone(value)) {
            this.successMessage(input);
          } else {
            this.errorMessage(input, 'Example: 0731122333');
          }

          if (valueLength === 0) {
            this.errorMessage(input, 'Required input field!');
          }
        }
      }

    });
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

    window.addEventListener('load', () => {
      this.inputs.forEach(input => {

        const target = input.dataset.validateField;

        if (target === 'firstName') {
          input.setAttribute('minlength', this.minLengthFirstName);
          input.setAttribute('maxlength', this.maxLengthFirstName);
          if (this.requiredFirstName) {
            input.setAttribute('required', '');
          }
        }

        if (target === 'lastName') {
          input.setAttribute('minlength', this.minLengthLastName);
          input.setAttribute('maxlength', this.maxLengthLastName);
          if (this.requiredLastName) {
            input.setAttribute('required', '');
          }
        }

        if (target === 'email') {
          if (this.requiredEmail) {
            input.setAttribute('required', '');
          }
        }

        if (target === 'password') {
          input.setAttribute('minlength', this.minLengthPassword);
          input.setAttribute('maxlength', this.maxLengthPassword);
          input.setAttribute('required', '');
        }

        if (target === 'phone') {
          input.setAttribute('maxlength', '10');
          if (this.requiredPhone) {
            input.setAttribute('required', '');
          }
        }
      });
    });

    this.form.addEventListener('click', e => {
      e.preventDefault();
      this.checkInputs();
    });
  }
}
