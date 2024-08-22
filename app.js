
//funcion para encriptar
function myFuntion(){
   //llevar el valor del usuario a la consola cuando se hace click en el boton de encriptar
    let texto = document.getElementById('textoUsuario').value;
    console.log(texto);
    //Esta linea es para quitar la imagen de la derecha cuando se hace click en el boton de encriptar
    document.getElementById('myDiv').style.display = 'none';
    //sentencia//
    const resultadoPalabra = texto.replace(/[aeiou]/g, (letra) => {
        switch (letra) {
            case 'a':
                return 'ai';
            case 'e':
                return 'enter';
            case 'i':
                return 'imes';
            case 'o':
                return 'ober';
            case 'u':
                return 'ufat';
        }
    });
    console.log(resultadoPalabra);
    //conecto el valor de resultadoPalabra en HTML y aparezca en <p>.
    document.getElementById('demo').innerHTML = resultadoPalabra;
    //llama al boton de copiar
    document.getElementById('copy').style.display = 'block';
    
}

//funcion para desencriptar 
function myFuntion2(){
    //llevar el valor del usuario a la consola cuando se hace click en el boton de desencriptar
    let texto1 = document.getElementById('textoUsuario').value;
    console.log(texto1);
     //Esta linea es para quitar la imagen de la derecha cuando se hace click en el boton de encriptar
    document.getElementById('myDiv').style.display = 'none';
    //
    const resultadoPalabra1 = texto1.replace(/ai|enter|imes|ober|ufat/g, (letra1) => {
        switch (letra1) {
            case 'ai':
                return 'a';
            case 'enter':
                return 'e';
            case 'imes':
                return 'i';
            case 'ober':
                return 'o';
            case 'ufat':
                return 'u';
        }
    });
    console.log(resultadoPalabra1);
    document.getElementById('demo').innerHTML = resultadoPalabra1;
    document.getElementById('copy').style.display = 'block';
}
//funcion para copiar 
function miCopia(){
    var botonCopia = document.getElementById('demo');
    navigator.clipboard.writeText(botonCopia.textContent);
}


        


    
