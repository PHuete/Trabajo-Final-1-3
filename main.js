//ESTIM - Pagina de venta de videojuegos
USUARIOLOGADO = false

const CATEGORIAS = ['Shooter', 'RPG', 'Deportes', 'Terror', 'Indie']

const TITULOS = ['Call of Duty: Modern Warfare 2 Remastered', 'Elden Ring', 'NBA2k23', 'Madison', 'Stardew Valley']

const PRECIOS = [59.95, 69.95, 44.99, 50.00, 18.99]

const VIDEOJUEGOS = []

const CODIGOSPROMO = ['ESTIM_WELLCOME', 'ESTIM_10']

const TIPOUSUARIO = ['PREMIUM', 'BASICO'] // Posteriormente incluire que si el usuario es PREMIUM tiene un % de descuento.

const USUARIOS = []

const CARRITO = []

const IVA = 1.21

const modalContainer = document.getElementById('modal_container');
const openCart = document.getElementById('open');
const closeCart = document.getElementById('close');
const modalCart = document.getElementById('modalCart');

openCart.addEventListener('click', () => {
    modalContainer.classList.add('modal-active')
})

closeCart.addEventListener('click', () => {
    modalContainer.classList.remove('modal-active')
})

modalContainer.addEventListener('click', () => {
    closeCart
})

modalCart.addEventListener('click', (e) => {
    e.stopPropagation
})

generadorAutomaticoJuegos()
console.table(VIDEOJUEGOS)
generadorAutomaticoUsuarios()
console.table(USUARIOS)



function generadorAutomaticoJuegos() {
    VIDEOJUEGOS.push(new Videojuego(1234, "Call of Duty: Modern Warfare 2 Remastered", 59.95, "Shooter", 15, `src/img/MW2.jpg`))
    VIDEOJUEGOS.push(new Videojuego(2345, "Elden Ring", 69.95, "RPG", 7, 'src/img/ELDENRING.jpg'))
    VIDEOJUEGOS.push(new Videojuego(3456, "NBA2k23", 44.99, "Deportes", 19, 'src/img/NBA2K23.jpg'))
    VIDEOJUEGOS.push(new Videojuego(4567, "Madison", 50.00, "Terror", 3, 'src/img/MADISON.jpg'))
    VIDEOJUEGOS.push(new Videojuego(4567, "Stardew Valley", 18.99, "Indie", 12, 'src/img/STARDEWVALLEY.jpg'))
}

function generadorAutomaticoUsuarios() {
    USUARIOS.push(new Usuario("Antonio", "Sanz", "Sanz33", TIPOUSUARIO[0]))
    USUARIOS.push(new Usuario("Margarita", "Rodriguez", "Marga89", TIPOUSUARIO[1]))
}



function login() {
    let usuarioExiste = false

    while (!usuarioExiste) {
        let nombreUsuario = prompt("Bienvenido a ESTIM. Introduce un nombre de usuario ")
        if (nombreUsuario === null) { return }
        USUARIOS.forEach(usuario => {
            if (usuario.nombreUsuario === nombreUsuario) {
                usuarioExiste = true                
            }
            
        });
        if (!usuarioExiste) {
            Swal.fire({
                title: 'Error!',
                text: "No existe ningun usuario con el nombre " + nombreUsuario + ". Vuelve a la pagina de inicio y registrate en 'UNETE AQUI'",
                icon: 'error',
                confirmButtonText: 'Cool'
              })
        }

        else {
            prompt("Introduzca la contrase??a:")
            swal.fire({
                title: 'Bienvenido ' + nombreUsuario + '!', 
                text: 'Has iniciado sesion correctamente',
                icon: 'success',
                confirmButtonText: 'Cool'
            })
            USUARIOLOGADO = true        
        }
    }

}

// Funcion para logearte en la pagina. Si el usuario introducido no esta registrado te da la opcion de registrarlo.

function registroUsuario() {
    let cancelar = false
    while (!cancelar) {
        let nombreUsuario = prompt("Introduce tu nombre de usuario:")
        if (nombreUsuario === null) {
            Swal.fire({
                title: '??Ya te vas?',
                text: "Aun no has terminado tu registro. Vuelve pronto a registrarte!",
                icon: 'info',
                confirmButtonText: 'Adios!'
              })
            break
        }
        while (nombreUsuario === "") {
            nombreUsuario = prompt("Introduce un nombre de usuario valido")
        }
        let contrasenya = prompt("Introduce una contrase??a")
        if (contrasenya === null) {
            Swal.fire({
                title: '??Ya te vas?',
                text: "Aun no has terminado tu registro. Vuelve pronto a registrarte!",
                icon: 'info',
                confirmButtonText: 'Adios!'
              })
              break
        }
        while (contrasenya === "" || contrasenya === null) {
            contrasenya = prompt("Introduce una contrase??a valida")
        }
        let nombre = prompt("Introduce tu nombre:")
        if (nombre === null) {
            Swal.fire({
                title: '??Ya te vas?',
                text: "Aun no has terminado tu registro. Vuelve pronto a registrarte!",
                icon: 'info',
                confirmButtonText: 'Adios!'
              })
            break
        }
        while (nombre === "") {
            nombre = prompt("Introduce un nombre valido")
        }
        let apellido = prompt("Introduce tu apellido:")
        if (apellido === null) {
            Swal.fire({
                title: '??Ya te vas?',
                text: "Aun no has terminado tu registro. Vuelve pronto a registrarte!",
                icon: 'info',
                confirmButtonText: 'Adios!'
              })
            break
        }
        while (apellido === "") {
            apellido = prompt("Introduce un apellido valido")
        }
        let tipo = prompt("??Que tipo de plan deseas adquirir? (BASICO o PREMIUM)")
        if (tipo === null) {
            Swal.fire({
                title: '??Ya te vas?',
                text: "Aun no has terminado tu registro. Vuelve pronto a registrarte!",
                icon: 'info',
                confirmButtonText: 'Adios!'
              })
            break
        }
        while (tipo === "") {
            tipo = prompt("Introduce un plan valido (BASICO o PREMIUM")
        }
        Swal.fire({
            title: '??Enhorabuena!',
            text: "Usuario '" + nombreUsuario + "' ha sido creado con ??xito",
            icon: 'success',
            confirmButtonText: 'Continuar'
          })
        USUARIOS.push(new Usuario(nombre, apellido, nombreUsuario, tipo))
        cancelar = true
    }

}

const mostrarVideojuegos = (VIDEOJUEGOS) => {
    const productsContainer = document.getElementById('product-container');
    VIDEOJUEGOS.forEach(videojuego => {
        const card = document.createElement('card');
        card.innerHTML += `<div class="card" style="width:16rem;">
                                 <img src="${videojuego.img}" class="card-img-top" alt="...">
                                 <div class="card-body">
                                    <h5 class="card-title">${videojuego.nombre}</h5>
                                     <p class="card-text">Precio:??? ${videojuego.precio}</p>
                                     <p id="cantidad${videojuego.id}" class="card-text">Stock: ${videojuego.stock}</p>
                                    <button class="btn-primary" id="button${videojuego.id}">Comprar</button>
                            </div>
                         </div>`

        productsContainer.appendChild(card);

        let button = document.getElementById(`button${videojuego.id}`)

        button.addEventListener('click', () => {
            if (!USUARIOLOGADO) {  
                Swal.fire({
                    title: 'Error!',
                    text: "Debes iniciar sesion para poder comprar",
                    icon: 'error',
                    confirmButtonText: 'Volver'
                    })    
                    return

            } else {
                if (videojuego.stock > 0) {
                    addToCart(videojuego.id)
                    videojuego.stock--
                    document.getElementById(`cantidad${videojuego.id}`).innerHTML = `Stock: ${videojuego.stock}`

                    Swal.fire({
                        title: '??Enhorabuena!',
                        text: "Has a??adido al carrito " + videojuego.nombre + " con exito",   
                        icon: 'success',                                    
                        confirmButtonText: 'Continuar'
                        })
                }
                else {
                    swal.fire({
                        title: 'Lo sentimos!',
                        text: "No quedan unidades de " + videojuego.nombre + " en stock",
                        icon: 'error',
                        confirmButtonText: 'Volver'
                        })
               }
            }
            
        })
    })
}
mostrarVideojuegos(VIDEOJUEGOS)

const addToCart = (videojuegoId) => {
    const cartContainer = document.getElementById('cart-container')
    const mostrarEnCarrito = () => {
        let videojuego = VIDEOJUEGOS.find(videojuego => videojuego.id == videojuegoId)
        CARRITO.push(videojuego);
        localStorage.setItem("products", JSON.stringify(CARRITO))
        let div = document.createElement('div');
        div.classList.add('productInCart');
        div.innerHTML = `<p>${videojuego.nombre}</p>
                         <p>Precio: ${videojuego.precio}</p>
                         <p id="quantity${videojuego.id}">Quantity: ${videojuego.stock}</p>
                         <button class="btn btn-danger btn-sm" id="delete${videojuego.id}" >X</button>
                         `;
        cartContainer.appendChild(div);
        let butttonDelete = document.getElementById(`delete${videojuego.id}`);
        butttonDelete.addEventListener('click', eliminarVideojuego);


    }

    mostrarEnCarrito();
}


function eliminarVideojuego(e) {
    let btnClicked = e.target;
    btnClicked.parentElement.remove();
    VIDEOJUEGOS.videojuego.stock++;
}


let iniciarSesionBtn = document.getElementById("iniciarSesionBtn")
iniciarSesionBtn.onclick = () => login()

let registroUsuarioBtn = document.getElementById("registroUsuarioBtn")
registroUsuarioBtn.onclick = () => registroUsuario()

let CarritoCompraBtn = document.getElementById("comprarCarrito")
CarritoCompraBtn.onclick = () => comprar()

function comprar() {
    let total = 0
    for (let i = 0; i < CARRITO.length; i++) {
        total += CARRITO[i].precio
    }
    swal.fire({
        title: '??Enhorabuena!',
        // text: "Has comprado " + CARRITO.map((videojuego) =>{return {videojuego.nombre}) + " por un total de " + total + "???",
        icon: 'success',
        confirmButtonText: 'Continuar'
        })
}