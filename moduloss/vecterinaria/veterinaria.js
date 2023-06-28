function opc(op) {
    if(op=="consultas"){
     return 30000       

    }

    else if (op=="esterilizacion") {
     return 120000
    }

}

function eml(numero) {
 if (numero=="1"){
     return "Raul"
 }

 else if (numero=="2"){
     return "Laura"
}
} 
export {opc,eml}