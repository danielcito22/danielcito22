const botonsum = document.getElementById("sum");
const botonrest = document.getElementById("rest");
const botonmult = document.getElementById("mult");
const botondiv = document.getElementById("div");

const resultado = document.getElementById("resultado")

//al pulsar el boton activar la funcion suma

botonsum.addEventListener("click", function() {
    const input1 = parseFloat(document.getElementById("num1").value);
    const input2 = parseFloat(document.getElementById("num2").value);
    const output = input1 + input2;
    resultado.innerText = output;
});

botonrest.addEventListener("click", function() {
    const input1 = parseFloat(document.getElementById("num1").value);
    const input2 = parseFloat(document.getElementById("num2").value);
    const output = input1 - input2;
    resultado.innerText = output;
});

botonmult.addEventListener("click", function() {
    const input1 = parseFloat(document.getElementById("num1").value);
    const input2 = parseFloat(document.getElementById("num2").value);
    const output = input1 * input2;
    resultado.innerText = output;
});

botondiv.addEventListener("click", function() {
    const input1 = parseFloat(document.getElementById("num1").value);
    const input2 = parseFloat(document.getElementById("num2").value);
    const output = input1 / input2;
    resultado.innerText = output;
});

document.addEventListener("keydown", function(event) {
    if (event.key === "+") {
        botonsum.click();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "-") {
        botonrest.click();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "*") {
        botonmult.click();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "/") {
        botondiv.click();
    }
});
