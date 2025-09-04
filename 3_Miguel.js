function maiorNumero(){
    let n1 = parseFloat(document.getElementById("num1").value);
    let n2 = parseFloat(document.getElementById("num2").value);
    let n3 = parseFloat(document.getElementById("num3").value);


    let maior = Math.max(n1,n2,n3);

    alert( "O maior número é" + maior);

}