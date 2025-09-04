function calcularMedia() {
    let a = parseFloat(document.getElementById("a").value);
    let b = parseFloat(document.getElementById("b").value);
    let c = parseFloat(document.getElementById("c").value);

    let media = (a + b + c) / 3;

    alert("A média é:" +media.toFixed(2));

}