
let form = document.querySelector('form');
form.addEventListener('submit', e => {
    e.preventDefault();
    let output = document.querySelector('output');
    let firstNum = document.querySelector('#first-num').value;
    let secondNum = document.querySelector('#second-num').value;
    let operator = document.querySelector('#operator').value;
    try {
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    } catch (error) {
        console.error('Inout formatted wrong: ' + error);
    } finally {
        console.log('input is stripped by only keeping integer part.');
        firstNum = firstNum.replace(/\D/g,'');
        secondNum = secondNum.replace(/\D/g,'');
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
    }
});

let errorBtns = Array.from(document.querySelectorAll('#error-btns > button'));

// Start your code here
// You may move this JS to another file if you wish
class WrongInputFormatError extends Error {
    constructor(message) {
      super(message);
      this.name = "WrongInputFormatError"; 
    }
  }
  
function test(a, b) {
    if (!Number.isInteger(a) || Number.isInteger(b)) {
        throw new WrongInputFormatError("wrong input format!");
    }
    console.log('sum = '+ (a+b));
}
