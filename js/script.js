// 📌 Espera a que el contenido de la página esté completamente cargado antes de ejecutar el código.
document.addEventListener("DOMContentLoaded", function () {

    // 📌 Referencias a elementos del DOM (Document Object Model)
    const contenedorProductos = document.getElementById("contenedor-productos"); // Sección donde se mostrarán los productos
    const botonesCategoria = document.querySelectorAll(".btn-categoria"); // Botones de categorías
    const contenedorCarrito = document.getElementById("contenedor-carrito"); // Contenedor del carrito
    const listaCarrito = document.getElementById("lista-carrito"); // Lista de productos en el carrito
    const contadorCarrito = document.getElementById("contador-carrito"); // Contador de productos en el carrito
    const totalProductos = document.getElementById("total-productos"); // Total de productos en el carrito
    const botonVaciarCarrito = document.getElementById("vaciar-carrito"); // Botón para vaciar el carrito
    const botonCarrito = document.querySelector(".btn-carrito"); // Botón que abre el carrito

    // 📌 Variable que almacena los productos agregados al carrito
    let carrito = [];

    // 📌 Datos de productos simulados por categoría
    const productos = {
        electronicos: ["Laptop", "Smartphone", "Auriculares", "Smartwatch"],
        moda: ["Camiseta", "Pantalón", "Zapatos", "Gorra"],
        hogar: ["Cafetera", "Lámpara", "Almohada", "Espejo"],
        deportes: ["Balón", "Raqueta", "Pesas", "Bicicleta"],
        libros: ["Libro de Ciencia", "Novela", "Manga", "Enciclopedia"]
    };

    // 📌 Función para mostrar productos según la categoría seleccionada
    function mostrarProductos(categoria) {
        const productosSeleccionados = productos[categoria] || [];

        // 📌 Se genera la lista de productos en formato HTML
        contenedorProductos.innerHTML = productosSeleccionados.length
            ? productosSeleccionados.map(producto => `<button class="btn-producto" data-nombre="${producto}">${producto} ➕</button>`).join('')
            : "<p>No hay productos en esta categoría.</p>";

        // 📌 Se añaden eventos a cada botón de producto
        document.querySelectorAll(".btn-producto").forEach(boton => {
            boton.addEventListener("click", function () {
                agregarAlCarrito(this.getAttribute("data-nombre"));
            });
        });
    }

    // 📌 Función para agregar un producto al carrito
    function agregarAlCarrito(nombreProducto) {
        carrito.push(nombreProducto);
        actualizarCarrito();
    }

    // 📌 Función para actualizar la interfaz del carrito
    function actualizarCarrito() {
        // 📌 Se genera la lista de productos en el carrito con botón para eliminarlos
        listaCarrito.innerHTML = carrito.map((item, index) => 
            `<li>${item} <button class="btn-eliminar" data-indice="${index}">❌</button></li>`).join('');

        // 📌 Se actualiza la cantidad de productos en el carrito
        contadorCarrito.textContent = carrito.length;
        totalProductos.textContent = carrito.length;

        // 📌 Se añaden eventos a los botones de eliminación
        document.querySelectorAll(".btn-eliminar").forEach(boton => {
            boton.addEventListener("click", function () {
                eliminarDelCarrito(this.getAttribute("data-indice"));
            });
        });
    }

    // 📌 Función para eliminar un producto del carrito
    function eliminarDelCarrito(indice) {
        carrito.splice(indice, 1); // Se elimina el producto según su índice
        actualizarCarrito(); // Se actualiza la vista del carrito
    }

    // 📌 Función para vaciar todo el carrito
    botonVaciarCarrito.addEventListener("click", function () {
        carrito = []; // Se vacía el array del carrito
        actualizarCarrito(); // Se actualiza la vista
    });

    // 📌 Mostrar u ocultar el carrito al hacer clic en el botón
    botonCarrito.addEventListener("click", function () {
        contenedorCarrito.classList.toggle("mostrar");
    });

    // 📌 Evento para cambiar de categoría y mostrar productos correspondientes
    botonesCategoria.forEach(boton => {
        boton.addEventListener("click", function () {
            mostrarProductos(this.getAttribute("data-categoria"));
        });
    });

});
