function somar(){

    let A = parseFloat(document.getElementById("A").value);
    let B = parseFloat(document.getElementById("B").value);

    let soma = A + B;

    document.getElementById("resultado").innerText = `A soma de ${A} ${B} é ${soma}`;

}