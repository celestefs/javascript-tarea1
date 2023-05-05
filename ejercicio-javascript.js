// Ejercicio 1:

function piramide(numero) {
    let resultado = '';
    for (let i = 1; i <= numero; i++) {
      for (let j = 1; j <= i; j++) {
        resultado += j;
      }
      resultado += '\n';
    }
    console.log(resultado);
  }


//Ejercicio 2:

function elementosComunes(array1, array2) {
    let resultado = [];
    for (let i = 0; i < array1.length; i++) {
      if (array2.includes(array1[i])) {
        resultado.push(array1[i]);
      }
    }
    return resultado;
  }


// Ejercicio 3:

class Carrito {

    constructor() {
      this.montoTotal = 0;
      this.productos = [];
    }
  
    agregarProducto(nombre, precio, unidades) {
      const producto = new Producto(nombre, precio, unidades);
      const index = this.productos.findIndex(function(p) {
        return p.nombre === producto.nombre;
      })
      if (index !== -1) {
        console.log(`Ya existe ${producto.nombre} con ${this.productos[index].unidades} unidades`);
        return;
      }
      this.productos.push(producto);
      this.montoTotal += producto.precio * producto.unidades;
    }
}
  
class Producto {

    constructor(nombre, precio, unidades) {
      this.nombre = nombre;
      this.precio = precio;
      this.unidades = unidades;
    }
}

// Probando los ejercicios:
// Ejercicio 1:

piramide(9);

// Ejercicio 2: 

let array1 = ['rojo', 'azul', 'amarillo'];
let array2 = ['blanco', 'negro', 'rojo'];
let resultado = elementosComunes(array1, array2);
console.log(resultado);

// Ejercicio 3:

let carrito = new Carrito();
carrito.agregarProducto("Leche", 150, 1);
carrito.agregarProducto("Azucar", 300, 5);
carrito.agregarProducto("Leche", 150, 3);
console.log(carrito);