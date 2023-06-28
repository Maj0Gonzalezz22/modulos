import { agregar_Grano, agregar_Aseo , agregar_Carnes, agregar_Lacteos } from "./agregar.js";
import {  mostrar  } from "./model.js";
import {  dato  } from "./disponibles.js";
import { eliminar_Aseo , eliminar_Grano , eliminar_Carnes, eliminar_Lacteos} from "./eliminar.js";

dato()
function start() {
  let opcion = prompt("Que deasea hacer \ningrese el numero: \n1- Mostrar cantidad de productos disponibles. \n2- Ingresar nuevas axistencias de producto. \n3- Eliminar existencias de productos");
  switch (opcion) {
    case "1":
    alert(mostrar());
      break;
    case "2":
      let segundaop= prompt("ingrese un producto: \n grano \n aseo \n carnes \n lacteos")
      switch (segundaop) {
        case "grano":
          agregar_Grano()
          break;
          case "aseo":
            agregar_Aseo()
            break;
            case "carnes":
              agregar_Carnes()
              break;
              case "lacteos":
                agregar_Lacteos()
                break;
        default:
          alert("ingrese una opcion valida ");
          break;
      }
     break;

    case "3":
      let terceraop= prompt("ingrese un producto \n grano \n aseo \n carnes \n lacteos")
      switch (terceraop) {
        case "grano":
          eliminar_Grano()
          break;
          case "aseo":
            eliminar_Aseo()
            break;
            case "carnes":
              eliminar_Carnes()
              break;
              case "lacteos":
                eliminar_Lacteos()
                break;
        default:
          alert("ingrese una opcion valida ");
          break;
      }
      break;
      default:
    console.log("opcion no disponible");
      break;
  }
}
 
start();
