let perfilUsuario ={
    informacionpersonal:{
        nombre: "Ana Marquqez",
        Edad: 25,
        email: "anamarquez@gamil.com", 
    },
     
    preferencias: {
        idioma: "español",
        notificaciones: true,
        tema: "oscuro"

},
   estadisticas:{
    fechaRegistro:"09-01-2022",
    ultimoAcceso:"30-08-2022",
    numeroSesiones: 15
   }
};
// Mostrar cada sesion de informacion por separado
console.log("Información Personal:", perfilUsuario.informacionPersonal);
console.log("Preferencias:", perfilUsuario.preferencias);
console.log("Estadísticas:", perfilUsuario.estadisticas);

// 3. Cambiar el idioma de "español" a "inglés"
perfilUsuario.preferencias.idioma = "inglés";

// 4. Actualizar la fecha de último acceso a la fecha actual
let hoy = new Date().toISOString().split("T")[0]; 
perfilUsuario.estadisticas.ultimoAcceso = hoy;

// 5. Eliminar una preferencia innecesaria (ej: notificaciones)
delete perfilUsuario.preferencias.notificaciones;

// 6. Extraer el email y el idioma en variables separadas
let { email } = perfilUsuario.informacionPersonal;
let { idioma } = perfilUsuario.preferencias;

console.log("Email del usuario:", email);
console.log("Idioma de la aplicación:", idioma);

// 7. Mostrar el perfil completo actualizado
console.log("Perfil de Usuario Actualizado:", perfilUsuario);



