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

const btn = document.getElementById("car"); 

// Seleciona os botões de tamanho pelo ID
var pequeno = document.getElementById("p");
var medio = document.getElementById("m");
var grande = document.getElementById("g");

// Variável para armazenar o tamanho selecionado
var selectedSize = "";

btn.addEventListener('click', ()=>{  
        btn.textContent = "ADICIONADO" 
        btn.style.backgroundColor = "#e6b845"; 
}); 


pequeno.addEventListener('click', ()=>{  
    pequeno.style.backgroundColor = "#e6b845"; 
    medio.style.backgroundColor = "#d8d8d8"; 
    grande.style.backgroundColor = "#d8d8d8"; 
}); 

medio.addEventListener('click', ()=>{  
    medio.style.backgroundColor = "#e6b845"; 
    pequeno.style.backgroundColor = "#d8d8d8"; 
    grande.style.backgroundColor = "#d8d8d8"; 
}); 

grande.addEventListener('click', ()=>{  
    grande.style.backgroundColor = "#e6b845"; 
    pequeno.style.backgroundColor = "#d8d8d8"; 
    medio.style.backgroundColor = "#d8d8d8"; 
}); 



