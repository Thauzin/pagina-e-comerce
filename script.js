function Validar(){
    var nome = document.getElementById('user').value;
    var senha = document.getElementById('senha').value;


    if (nome == 'admin' && senha== '1234'){
        window.location.href = "inicial.html"; 
    }

    else {
        var errou = document.getElementById('errou');
        errou.textContent= "Por favor insira as credenciais corretas!";
        errou.style.color = "#970505";

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

var peq = document.getElementById("pp");
var med = document.getElementById("mm");
var gra = document.getElementById("gg");
const btn2 = document.getElementById("card"); 

// Variável para armazenar o tamanho selecionado
var selectedSize = "";

btn2.addEventListener('click', ()=>{  
        btn2.textContent = "ADICIONADO" 
        btn2.style.backgroundColor = "#e6b845"; 
}); 


peq.addEventListener('click', ()=>{  
    peq.style.backgroundColor = "#e6b845"; 
    med.style.backgroundColor = "#d8d8d8"; 
    gra.style.backgroundColor = "#d8d8d8"; 
}); 

med.addEventListener('click', ()=>{  
    med.style.backgroundColor = "#e6b845"; 
    peq.style.backgroundColor = "#d8d8d8"; 
    gra.style.backgroundColor = "#d8d8d8"; 
}); 

gra.addEventListener('click', ()=>{  
    gra.style.backgroundColor = "#e6b845"; 
    peq.style.backgroundColor = "#d8d8d8"; 
    med.style.backgroundColor = "#d8d8d8"; 
}); 


var pequ = document.getElementById("ppp");
var medi = document.getElementById("mmm");
var gran = document.getElementById("ggg");
const btn3 = document.getElementById("cardi"); 

// Variável para armazenar o tamanho selecionado
var selectedSize = "";

btn3.addEventListener('click', ()=>{  
        btn3.textContent = "ADICIONADO" 
        btn3.style.backgroundColor = "#e6b845"; 
}); 


pequ.addEventListener('click', ()=>{  
    pequ.style.backgroundColor = "#e6b845"; 
    medi.style.backgroundColor = "#d8d8d8"; 
    gran.style.backgroundColor = "#d8d8d8"; 
}); 

medi.addEventListener('click', ()=>{  
    medi.style.backgroundColor = "#e6b845"; 
    pequ.style.backgroundColor = "#d8d8d8"; 
    gran.style.backgroundColor = "#d8d8d8"; 
}); 

gran.addEventListener('click', ()=>{  
    gran.style.backgroundColor = "#e6b845"; 
    pequ.style.backgroundColor = "#d8d8d8"; 
    medi.style.backgroundColor = "#d8d8d8"; 
}); 



function Validar2(){
    var cadastro = document.getElementById('cadastro').value;
    var cadastro1 = document.getElementById('cadastro1').value;
    var cadastro2 = document.getElementById('cadastro2').value;
    var cadastro3 = document.getElementById('cadastro3').value; 

    if (cadastro === "" || cadastro1 === "" || cadastro2 === "" || cadastro3 === "" ){ 
        var errado = document.getElementById('errado');
        errado.textContent= "Por favor complete todas as informações!";
        errado.style.color = "#970505";
        
    }

    else {
        if(cadastro2 != cadastro3) {
            var errado = document.getElementById('errado');
            errado.textContent= "As senhas não são iguais!";
            errado.style.color = "#970505"; 
        }
        else {
            window.location.href = "inicial.html"; 
        }
        

    }
}


