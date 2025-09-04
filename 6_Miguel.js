function mostrarTabuada(){

    let n = parseInt(document.getElementById("num").value);
    let resultado = "";

    for(let i = 1; i <= 10; i++){
        resultado += `${n} x ${i} = ${n * i}<br>`;
    }

    document.getElementById("resultado").innerHTML = resultado;

}