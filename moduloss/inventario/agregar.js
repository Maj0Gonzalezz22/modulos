function agregar_Grano() {
  let opcion = prompt("ingrese el producto que desea ingresar: \n arroz \n frijoles \n lentejas")
  let segundaop = parseInt(prompt("ingrese la cantidad que deseas ingresar"))
          let granos = localStorage.getItem(opcion)
          localStorage.setItem(opcion, segundaop + parseInt(granos))
          let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
          console.log(mensaje);
          return "actualizado"
      }

 function agregar_Aseo() {
        let opcion = prompt("ingrese el producto que desea ingresar: \n jabon \n limpido  \n champu")
        let segundaop = parseInt(prompt("ingrese la cantidad que deseas ingresar"))
                let granos = localStorage.getItem(opcion)
                localStorage.setItem(opcion, segundaop + parseInt(granos))
                let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
                console.log(mensaje);
                return "actualizado"
      }
  function agregar_Carnes() {
        let opcion = prompt("ingrese el producto que desea ingresar: \n pescado \n res \n cerdo")
        let segundaop = parseInt(prompt("ingrese la cantidad que deseas ingresar"))
                let granos = localStorage.getItem(opcion)
                localStorage.setItem(opcion, segundaop + parseInt(granos))
                let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
                console.log(mensaje);
                return "actualizado"
      }
  function agregar_Lacteos() {
        let opcion = prompt("ingrese el producto que desea ingresar: \n yogurt \n leche \n kumis")
        let segundaop = parseInt(prompt("ingrese la cantidad que deseas ingresar"))
                let granos = localStorage.getItem(opcion)
                localStorage.setItem(opcion, segundaop + parseInt(granos))
                let mensaje =` ${opcion} ${localStorage.getItem(opcion)}`
                console.log(mensaje);
                return "actualizado"
      }

export{agregar_Grano,agregar_Aseo,agregar_Carnes,agregar_Lacteos};

