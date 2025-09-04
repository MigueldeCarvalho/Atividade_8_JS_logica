function verificarIdade(){

    let idade = parseInt(document.getElementById("idade").value);

    if (idade >= 18){
          alert("Você é maior de idade!");
    }else{
        alert("Você é menor de idade!");

    }

}