// function pedirFlotante(mensaje) {
//     let numero = parseFloat(prompt(mensaje));
//     return numero;
//   }

function opciones(op) {
    

       if(op=="perro"){
        return 20000       

       }
       

       else if (op=="gato") {
        return 35000  
       }

        
  }


  function emple(numero) {
    if (numero=="1"){
        return "Ana"
    }

    else if (numero=="2"){
        return "Claudio"
  }
} 
export {opciones,emple}