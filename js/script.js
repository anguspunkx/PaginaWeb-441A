// Seleccionamos elementos del DOM para interactuar con ellos
const categoryButtons = document.querySelectorAll('.category-btn'); // Botones de las categorías
const productsContainer = document.getElementById('products-container'); // Contenedor de productos

// Datos simulados de productos por categoría
const products = {
    electronics: [
        { name: 'Smartphone', price: 599, image: 'https://via.placeholder.com/150' },
        { name: 'Laptop', price: 999, image: 'https://via.placeholder.com/150' },
        { name: 'Headphones', price: 199, image: 'https://via.placeholder.com/150' }
    ],
    fashion: [
        { name: 'T-shirt', price: 29, image: 'https://via.placeholder.com/150' },
        { name: 'Jeans', price: 49, image: 'https://via.placeholder.com/150' },
        { name: 'Sneakers', price: 89, image: 'https://via.placeholder.com/150' }
    ],
    home: [
        { name: 'Sofa', price: 399, image: 'https://via.placeholder.com/150' },
        { name: 'Lamp', price: 59, image: 'https://via.placeholder.com/150' },
        { name: 'Rug', price: 99, image: 'https://via.placeholder.com/150' }
    ],
    sports: [
        { name: 'Basketball', price: 29, image: 'https://via.placeholder.com/150' },
        { name: 'Tennis Racket', price: 89, image: 'https://via.placeholder.com/150' },
        { name: 'Soccer Ball', price: 39, image: 'https://via.placeholder.com/150' }
    ],
    books: [
        { name: 'Novel', price: 19, image: 'https://via.placeholder.com/150' },
        { name: 'Science Book', price: 49, image: 'https://via.placeholder.com/150' },
        { name: 'History Book', price: 39, image: 'https://via.placeholder.com/150' }
    ]
};

// Función para mostrar productos de una categoría seleccionada
function displayProducts(category) {
    // Limpiamos el contenedor de productos antes de mostrar los nuevos
    productsContainer.innerHTML = '';

    // Si no hay productos en la categoría seleccionada, mostramos un mensaje
    if (!products[category] || products[category].length === 0) {
        productsContainer.innerHTML = '<p>No products available in this category.</p>';
        return;
    }

    // Iteramos sobre los productos de la categoría seleccionada y los agregamos al DOM
    products[category].forEach(product => {
        // Creamos un contenedor para cada producto
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');

        // Agregamos la imagen del producto
        const productImage = document.createElement('img');
        productImage.src = product.image;
        productImage.alt = product.name;
        productCard.appendChild(productImage);

        // Agregamos el nombre del producto
        const productName = document.createElement('h3');
        productName.textContent = product.name;
        productCard.appendChild(productName);

        // Agregamos el precio del producto
        const productPrice = document.createElement('p');
        productPrice.textContent = `$${product.price}`;
        productCard.appendChild(productPrice);

        // Agregamos el producto al contenedor de productos
        productsContainer.appendChild(productCard);
    });
}

// Agregamos un evento a cada botón de categoría para que cargue los productos correspondientes
categoryButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-category'); // Obtenemos la categoría del botón
        displayProducts(category); // Mostramos los productos de la categoría seleccionada
    });
});
