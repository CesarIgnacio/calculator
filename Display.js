class Display {
    constructor(displayFormerValue, displayCurrentValue) {
        this.displayFormerValue = displayFormerValue;
        this.displayCurrentValue = displayCurrentValue;
        this.calculator = new Calculator();
        this.curentValue = '';
        this.formerValue = '';
        this.operationType = undefined;
        this.sign = {
            add : '+',
            subtract : '-',
            divide : '%',
            multiply : 'x'
        };
    }

    addNumber(number) {
        /*  If a dot '.' already exists in the current value then
                the function doesn't add a new one. It delivers this
                by having en empty return statemet */
        if(number === '.' && this.curentValue.includes('.')) return;
        this.curentValue = this.curentValue.toString() + number.toString();
        this.printValue();
    }

    erase() {
        this.curentValue = this.curentValue.toString().slice(0,-1);
        this.printValue();
    }

    deleteAll() {
        this.curentValue = '';
        this.formerValue = '';
        this.operationType = undefined;
        this.printValue();
    }

    printValue() {
        this.displayCurrentValue.textContent = this.curentValue;
        this.displayFormerValue.textContent = `${this.formerValue} ${this.sign[this.operationType] || ''}`;
    }

    calculate() {
        const formerValue = parseFloat(this.formerValue);
        const currentValue = parseFloat(this.curentValue);

        // If former or curent values are not a number then it stops
        if(isNaN(formerValue) || isNaN(currentValue)) return;
        // else
        this.curentValue = this.calculator[this.operationType](formerValue, currentValue);
    }

    compute(type) {
        this.operationType !== 'equal' && this.calculate();
        this.operationType = type;
        this.formerValue = this.curentValue || this.formerValue;
        this.curentValue = '';
        this.printValue();
    }
}