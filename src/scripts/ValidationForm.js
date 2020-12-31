export default class ValidationForm {
  constructor(selector, rules) {
    this.form = document.querySelector(selector);
    this.rules = rules;
    this.validCount = 0;

    this.setup();
  }

  checkInputs() {
    this.rules.map(rule => {
      if (rule.required) {
        this.testInputs(rule.reg, rule.selector.value, rule.selector, rule.errorMessage);
      } else {
        this.successMessage(rule.selector)
      }
      console.log(this.validCount);
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

  testInputs(reg, value, selector, errorMessage) {
    if(reg.test(value)) {
      this.successMessage(selector)
      this.validCount++;
    }else {
      this.errorMessage(selector, errorMessage);
    }
  }

  setup() {
    this.form.addEventListener('submit', e => {
      this.checkInputs();

      if(this.validCount !== this.rules.length) {
        e.preventDefault();
        this.validCount = 0;
      } 
    });
  }
}
