function calcularSaude(dano, saude){
    let resultado = saude - dano;

    if(resultado <= 0){
        return 1;
    }else{
        return 0;
    }

}

function principal(){

    let dano = parseInt(document.getElementById("dano").value);
    let saude = parseInt(document.getElementById("saude").value);

    let status = calcularSaude(dano, saude);

    if(status === 1){

        document.getElementById("saída").innerText = "O personagem morreu!";

    }else{
        document.getElementById("saída").innerText = "O personagem sobreviveu com" + (saude - dano) + "de saude";

    }

}