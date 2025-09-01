// Crear el objeto libro
let libro = {
    informacion: {
        titulo: "Cien Años de Soledad",
        autor: "Gabriel García Márquez",
        genero: "Novela"
    },
    disponibilidad: {
        copias: 20,
        prestados: 5,
        ubicacion: "Estante A3"
    },
    registro: {
        fechaPublicacion: "1967-05-30",
        fechaIngreso: "2022-09-10",
        ultimaRevision: "2023-06-01"
    }
};

// Mostrar la información del autor
console.log("Autor del libro:", libro.informacion.autor);

// Calcular ejemplares disponibles
let disponibles = libro.disponibilidad.copias - 
ibro.disponibilidad.prestados;
console.log("Ejemplares disponibles:", disponibles);

// Actualizar la ultimaRevision con la fecha actual
let hoy = new Date().toISOString().split("T")[0];
libro.registro.ultimaRevision = hoy;

// Cambiar el género del libro
libro.informacion.genero = "Realismo Mágico";

// Extraer título y ubicación en variables separadas
let { titulo } = libro.informacion;
let { ubicacion } = libro.disponibilidad;

console.log("Título:", titulo);
console.log("Ubicación:", ubicacion);

// Mostrar el objeto actualizado
console.log("Libro actualizado:", libro);