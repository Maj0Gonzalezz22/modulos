function eliminar_Grano() {
    let opcion = prompt("ingrese el producto que desea eliminar: \n arroz \n frijoles \n lentejas ")
    let segundaop = parseInt(prompt("ingrese la cantidad que deseas eliminar"))
            let granos = localStorage.getItem(opcion)
            localStorage.setItem(opcion,parseInt(granos) - segundaop)
            let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
            console.log(mensaje);
            return "actualizado"
        }
  
function eliminar_Aseo() {
          let opcion = prompt("ingrese el producto que desea eliminar: \n jabon \n limpido  \n champu")
          let segundaop = parseInt(prompt("ingrese la cantidad que deseas eliminar"))
                  let granos = localStorage.getItem(opcion)
                  localStorage.setItem(opcion, parseInt(granos) - segundaop)
                  let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
                  console.log(mensaje);
                  return "actualizado"
        }
function eliminar_Carnes() {
          let opcion = prompt("ingrese el producto que desea eliminar: \n pescado \n res \n cerdo")
          let segundaop = parseInt(prompt("ingrese la cantidad que deseas eliminar"))
                  let granos = localStorage.getItem(opcion)
                  localStorage.setItem(opcion, parseInt(granos) - segundaop)
                  let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
                  console.log(mensaje);
                  return "actualizado"
        }
function eliminar_Lacteos() {
          let opcion = prompt("ingrese el producto que desea eliminar: \n yogurt \n leche \n kumis")
          let segundaop = parseInt(prompt("ingrese la cantidad que deseas eliminar"))
                  let granos = localStorage.getItem(opcion)
                  localStorage.setItem(opcion, parseInt(granos) - segundaop)
                  let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
                  console.log(mensaje);
                  return "actualizado"
        }

export{eliminar_Grano,eliminar_Aseo,eliminar_Carnes,eliminar_Lacteos};