// Crear el objeto producto
let producto = {
    detalles: {
        nombre: "Laptop HP",
        precio: 850,
        categoria: "Computadoras"
    },
    inventario: {
        stock: 120,
        proveedor: "TechWorld",
        ubicacion: "Bodega 5"
    },
    historial: {
        fechaIngreso: "2023-07-15",
        ultimaVenta: "2023-08-25",
        ventasTotales: 350
    }
};

// Mostrar únicamente los detalles
console.log("Detalles del producto:", producto.detalles);

//Aumentar el stock en 50 unidades
producto.inventario.stock += 50;

// Cambiar la categoría a "Electrónica"
producto.detalles.categoria = "Electrónica";

// Extraer el nombre y precio en variables separadas
let { nombre, precio} =producto.detalles;
console.log("nombre del producto:", nombre);
console.log("precio del produccto:",precio);

// mostrar el obejetrivo 
console.log("producto actualizado:", producto);