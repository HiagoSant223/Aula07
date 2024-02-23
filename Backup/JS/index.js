function inicio() {
    let num1, num2, soma;

    num1 = parseFloat(prompt("Entre com o num1: "));

    num2 = parseFloat(prompt("Entre com o num2: "));

    soma = num1 + num2;
    console.log("Soma: " + soma)
    alert(soma);
}

inicio();