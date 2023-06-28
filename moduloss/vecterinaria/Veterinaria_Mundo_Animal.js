/*
Programa veterinaria
Author: majito
Fecha: 23/05/2023
*/
// Problema a resolver usando funciones y módulos:
// En la Veterinaria Mundo Animal se prestan servicios de peluquería, baño, y veterinaria.
// Los empleados disponibles para prestar el servicio de 
// peluquería son: Ana y Claudio. Los empleados disponibles para prestar el servicio de baño son Milena, Rosa
//  y María. Los empleados disponibles para prestar el servicio de veterinaria
//    son: Raúl y Laura. Las tarifas para los diferentes servicios ofrecidos
// por la veterinaria son:

// Cree una aplicación para la veterinaria  Mundo Animal que permita a los usuarios seleccionar el servicio que desean y saber su precio, 
//también seleccionar el empleado que atenderá la solicitud del servicio, por
//   último, la aplicación debe permitir al usuario agendar el día y la hora en la que desea el servicio. Por
//    último, una vez terminado el proceso por el usuario , la aplicación debe mostrarle a este un resumen de 
//    la transacción realizada, por ejemplo: Señor(a) Juan Mata, su cita para el servicio de Baño ha quedado 
//    agendada para el próximo 28 de septiembre de 2022 con un valor de $40.000.


import{opc,eml} from "./veterinaria.js"
import{opci,emle} from "./baño.js"
import {opciones,emple} from "./peluqueria.js"
import {pediString,pedirString,pedString,peString,pedirrString} from "./entradra-servicio.js"

   

function menu(){
let nombre = pedirrString("Ingrese su nombre");   
     

    let servicio = pedirString("Que servicio desea: Ingrese el numero:   peluqueria - baño -  veterinaria");

   

    switch (servicio) {
      case "peluqueria":
         let n1 = pediString("el precio gato:35000 y perro:20000 eliga una opcion perro -  gato")
         let precio = opciones(n1);
         let empleado = pedString("Seleccione el empleado con quien desea el servicio eliga una opcion: Ingrese el numero: 1 Ana - 2 Claudio.")
         let empleaooo = emple(empleado);
         let fecha = peString("agendar el día y la hora en la que desea el servicio")
           console.log("su servicio de peluqueia queda para el " +fecha+ " y su precio es de "+ precio+" con el empleado "+empleaooo);
         break;

      case "baño":
        let n2 = pediString("el precio gato:25000 y perro:35000 eliga una opcion perro -  gato")
        let preci = opci(n2);
        let emplead = pedString("Seleccione el empleado con quien desea el servicio eliga una opcion: Ingrese el numero: 1 Milena - 2 Rosa - 3 María ")
        let empleadoo = emle(emplead);
        let fech = peString("agendar el día y la hora en la que desea el servicio")
          console.log("su servicio de baño queda para el " +fech+ " y su precio es de "+ preci+" con el empleado "+empleadoo);
        break;

      case "veterinaria":
      let n3 = pediString("el precio consultas:30000 y esterilizacion:120000 eliga una opcion consultas - esterilizacion")
      let prec = opc(n3);
      let emplea = pedString("Seleccione el empleado con quien desea el servicio eliga una opcion: Ingrese el numero: 1 Raúl- 2 Laura ")
      let empl = eml(emplea);
      let fechaa = peString("agendar el día y la hora en la que desea el servicio")
        console.log("su servicio de baño queda para el " +fechaa+ " y su precio es de "+ prec+" con el empleado "+empl);
      break;
      default:
              console.log("ingrese uno valido");
        break;
    }
console.log(nombre+" con mucho gutooo");
    }
  
  menu()
