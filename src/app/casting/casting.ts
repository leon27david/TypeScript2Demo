class cal{
    private inputNumber1:HTMLInputElement;
    private inputNumber2:HTMLInputElement;
    private buttonSuma:HTMLButtonElement;
    private resul:HTMLSpanElement;

    constructor(){
        this.inputNumber1= <HTMLInputElement>document.getElementById('num1');
        this.inputNumber2= <HTMLInputElement>document.getElementById('num2');
        this.buttonSuma= <HTMLButtonElement>document.getElementById('sum');
        this.resul= <HTMLSpanElement>document.getElementById('result');

    this.wireEvents();

    }

    wireEvents(){
        this.buttonSuma.addEventListener('click', event =>{

        let num1 = Number(this.inputNumber1.value);
        let num2 = Number(this.inputNumber2.value);

        this.resul.innerHTML =this.suma(num1, num2).toString();

    });
}

        suma(num1: number, num2: number): number{
                return num1 + num2;
        
        }
    }
    window.onload = function(){
        new cal();
}