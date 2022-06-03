
const btn1 = document.querySelector(".btn1")
const btnIngredientes1 = document.querySelector(".btnIngr1")

// Escuchamos el evento del boton lo quiero! para agregar al carrito 
btn1.addEventListener(`click`, () =>{
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
          confirmButton: 'btn btn-success',
          cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
      })
      
      swalWithBootstrapButtons.fire({
        title: 'Excelente! Agregada al carrito',
        text: "Queres agregar/modificar tu hamburguesa o combo?",
        icon: 'success',
        showCancelButton: true,
        confirmButtonText: 'Si, quiero!',
        cancelButtonText: 'No, gracias!',
        reverseButtons: true
      }).then((result) => {
        if (result.isConfirmed) {
          swalWithBootstrapButtons.fire(
            'Perfecto!',
            'Selecciona tus preferencias',
            'success'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelled',
            'Your imaginary file is safe :)',
            'error'
          )
        }
      })
})

// Escuchamos el evento del boton ingredientes
btnIngredientes1.addEventListener(`click`, () =>{
  Swal.fire(
    'Ingredientes FIRE',
    'Contiene: 2 medallores de carne vacuna, queso de cabra, cebolla caramelizada, lechuga y salsa picante de la casa',
    'info'
)
})

class Hamburguesa {
  constructor(nombre, precio, id, ingredientes, img, cantidad){
      this.nombre = nombre;
      this.precio = precio;
      this.id = id;
      this.ingredientes = ingredientes;
      this.img = img;
      this.cantidad = cantidad;
  }
}


const air = new Hamburguesa (`Air`, 15, 1,`Contiene: Pan, 2 medallones de carne vacuna 150g, queso cheddar, cebolla, panceta y salsa de la casa`, `./img/hamburguesaAir.png`)
const fire = new Hamburguesa (`Fire`, 20, 2, `Contiene: Pan, 2 medallones de carne vacuna 150g, queso de cabra, cebolla caramelizada, lechuga y salsa picante de la casa`, `./img/hamburguesaFire.png`)
const ground = new Hamburguesa (`Ground`, 25, 3, `Contiene: Pan, 1 medallon de carne vacuna 200g, queso, cebolla caramelizada, lechuga y salsa barbacoa`, `./img/hamburguesaGround.png`)
const sea = new Hamburguesa (`Sea`, 18, 4, `Contiene: Pan, 2 medallones de carne vacuna 100g, queso cheddar, pepino, lechuga y salsa de la casa`, `./img/hamburguesaSea.png`)

const hamburguesas = [sea, air, fire, ground]

const divCarrito = document.querySelector(`.contenidoCarrito `)

