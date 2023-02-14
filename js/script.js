const stock = [
    {id: 1, nombre: "Fernet Branca 750 ML", precio: 1300, identificador: "pr1", imagen: "./img/fernet.jpg"},
    {id: 2, nombre: "Gin Bombay Saphire 1 L", precio: 3500, identificador: "pr2", imagen: "./img/bombay.jpg"},
    {id: 3, nombre: "Gancia 1 L", precio: 800, identificador: "pr3", imagen: "./img/gancia.jpg"},
    {id: 4, nombre: "Absolut Vodka 1 L", precio: 2600, identificador: "pr4", imagen: "./img/absolut.jpg"},
    {id: 5, nombre: "Imperial IPA 473 ML", precio: 400, identificador: "pr5", imagen: "./img/ipa.jpg"},
    {id: 6, nombre: "Jagermeister 1 L", precio: 1900, identificador: "pr6", imagen: "./img/jagermeister.jpg"},
    {id: 7, nombre: "Coca-Cola 2.25 L", precio: 350, identificador: "pr7", imagen: "./img/coca-cola.jpg"},
    {id: 8, nombre: "Coca-Cola Sin Azúcar 2.25 L", precio: 350, identificador: "pr8", imagen: "./img/coca-sin-azucar.jpg"},
    {id: 9, nombre: "Sprite Lima-Limón 2. 25 L", precio: 350, identificador: "pr9", imagen: "./img/sprite.jpg"},
    {id: 10, nombre: "Cepita Naranja1 L", precio: 250, identificador: "pr10", imagen: "./img/cepita.jpg"},
    {id: 11, nombre: "Speed Energizante 374 ML", precio: 200, identificador: "pr11", imagen: "./img/speed.jpg"},
    {id: 12, nombre: "RedBull Energizante 374 ML", precio: 200, identificador: "pr12", imagen: "./img/redbull.jpg"}
]

let grilla = document.getElementById('grilla')
let carrito = [];
let contenedorCarrito = document.getElementById('contenedorCarrito');
let btnVaciarCarrito = document.getElementById('vaciarCarrito')
let precioTotal = document.getElementById('precioTotal')


btnVaciarCarrito.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})

finalizarCompra.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})

stock.forEach((producto) => {
    const div = document.createElement('div')
    div.innerHTML = `
    <img src="${producto.imagen}" alt="">
    <h5 class="estiloDiv">${producto.nombre}</h5>
    <p class="estiloDiv">$ ${producto.precio},00</p>
    <button id="${producto.id}" type="button" class="estiloDiv">Agregar al carrito</button>
    `
    grilla.append(div);

    const btnProductos = document.getElementById(`${producto.id}`)

    btnProductos.addEventListener('click', () => {
        agregarCarrito(producto.id);
    })
    btnProductos.addEventListener('click', () => {
        Toastify({
            text: "Producto agregado al carrito!",
            duration: 2500,
            backgroundColor: "black",
            position: "left"
        }).showToast();
    })
})


function agregarCarrito(idProducto) {
    const item = stock.find((prod) => prod.id === idProducto)
    carrito.push(item)
    actualizarCarrito();
}

function actualizarCarrito() {
    contenedorCarrito.innerHTML = "";
    carrito.forEach((producto) => {
        let div = document.createElement('div');
        div.className = '';
        div.innerHTML = `
        <p class="nombre">${producto.nombre}</p>
        <p class="precio">$${producto.precio}</p>
        `
        contenedorCarrito.append(div);
    })
    precioTotal.innerText = carrito.reduce((ac, prod) => ac + prod.precio, 0)
} 

let extras = document.getElementById('extras');
fetch('./js/data.json')
.then((response) => response.json())
.then((data) => {
    data.forEach((producto) => {
        let div = document.createElement('div');
        div.innerHTML = `
        <img src="${producto.imagen}" alt="">
        <h5>${producto.nombre}</h5>
        <p>$ ${producto.precio},00<p> 
        `
        extras.appendChild(div);
    })
})