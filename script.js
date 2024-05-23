function Validar(){
    var nome = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;


    if (nome == 'admin' && senha== '1234'){
        window.location.href = "inicial.html"; 
    }

    else {
        var errou = document.getElementById('errou');
        errou.textContent= "Por favor insira as credenciais corretas";
    }
}