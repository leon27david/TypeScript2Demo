class cal {
    constructor() {
        this.inputNumber1 = document.getElementById('num1');
        this.inputNumber2 = document.getElementById('num2');
        this.buttonSuma = document.getElementById('sum');
        this.resul = document.getElementById('result');
        this.wireEvents();
    }
    wireEvents() {
        this.buttonSuma.addEventListener('click', event => {
            let num1 = Number(this.inputNumber1.value);
            let num2 = Number(this.inputNumber2.value);
            this.resul.innerHTML = this.suma(num1, num2).toString();
        });
    }
    suma(num1, num2) {
        return num1 + num2;
    }
}
window.onload = function () {
    new cal();
};
