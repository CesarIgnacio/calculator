const displayFormerValue = document.getElementById('former-value');
const displayCurrentValue = document.getElementById('current-value');
const buttonNumbers = document.querySelectorAll('.number');
const buttonOperators = document.querySelectorAll('.operator');
const delButton = document.getElementById('del');

const display = new Display(displayFormerValue, displayCurrentValue);

buttonNumbers.forEach(button => {
    button.addEventListener('click', () => {
        display.addNumber(button.innerHTML);
    });
});

buttonOperators.forEach(button => {
    button.addEventListener('click', () => {
        display.compute(button.value);
    });
});

delButton.addEventListener('click', () => display.erase());