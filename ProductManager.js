class ProductManager {
    constructor() {
        // Inicializar el arreglo de productos vacío
        this.products = [];
    }

    addProduct(title, description, price, thumbnail, code, stock) {
        // Validar que todos los campos sean obligatorios
        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log("Todos los campos son obligatorios.");
            return;
        }

        // Validar que el código no esté repetido
        if (this.products.some(product => product.code === code)) {
            console.log("El código ya está en uso. Ingrese un código único.");
            return;
        }

        // Crear un nuevo producto con id autoincrementable
        const newProduct = {
            id: this.products.length + 1,
            title: title,
            description: description,
            price: price,
            thumbnail: thumbnail,
            code: code,
            stock: stock
        };

        // Agregar el nuevo producto al arreglo de productos
        this.products.push(newProduct);
        console.log("Producto agregado correctamente.");
    }

    getProducts() {
        // Devolver el arreglo con todos los productos creados hasta el momento
        return this.products;
    }
}

// Ejemplo de uso
const productManager = new ProductManager();

// Agregar productos de ejemplo
productManager.addProduct("Producto1", "Descripción1", 29.99, "imagen1.jpg", "P1", 50);
productManager.addProduct("Producto2", "Descripción2", 39.99, "imagen2.jpg", "P2", 30);

// Obtener y mostrar la lista de productos
const productsList = productManager.getProducts();
console.log("Lista de productos:");
productsList.forEach(product => console.log(product));