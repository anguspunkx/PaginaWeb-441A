document.getElementById("registroForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Evita el envío del formulario hasta que sea válido

    // Captura los valores de los campos
    let nombre = document.getElementById("nombre").value.trim();
    let direccion = document.getElementById("direccion").value.trim();
    let fechaNacimiento = document.getElementById("fechaNacimiento").value;
    let departamento = document.getElementById("departamento").value;
    let documento = document.getElementById("documento").value.trim();
    let correo = document.getElementById("correo").value.trim();
    let password = document.getElementById("password").value.trim();

    // Variables de error
    let errores = 0;

    // Validar Nombre
    if (nombre === "") {
        mostrarError("errorNombre", "El nombre es obligatorio.");
        errores++;
    } else {
        ocultarError("errorNombre");
    }

    // Validar Dirección
    if (direccion === "") {
        mostrarError("errorDireccion", "La dirección es obligatoria.");
        errores++;
    } else {
        ocultarError("errorDireccion");
    }

    // Validar Fecha de Nacimiento
    if (fechaNacimiento === "") {
        mostrarError("errorFecha", "Debe seleccionar una fecha.");
        errores++;
    } else {
        ocultarError("errorFecha");
    }

    // Validar Departamento
    if (departamento === "") {
        mostrarError("errorDepartamento", "Debe seleccionar un departamento.");
        errores++;
    } else {
        ocultarError("errorDepartamento");
    }

    // Validar Documento (solo números)
    if (!/^\d+$/.test(documento)) {
        mostrarError("errorDocumento", "El documento debe contener solo números.");
        errores++;
    } else {
        ocultarError("errorDocumento");
    }

    // Validar Correo Electrónico
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(correo)) {
        mostrarError("errorCorreo", "Ingrese un correo válido.");
        errores++;
    } else {
        ocultarError("errorCorreo");
    }

    // Validar Contraseña (mínimo 6 caracteres)
    if (password.length < 6) {
        mostrarError("errorPassword", "La contraseña debe tener al menos 6 caracteres.");
        errores++;
    } else {
        ocultarError("errorPassword");
    }

    // Si no hay errores, enviar el formulario
    if (errores === 0) {
        let mensaje = `Registro exitoso:\n\n` +
                      `Nombre: ${nombre}\n` +
                      `Dirección: ${direccion}\n` +
                      `Fecha de Nacimiento: ${fechaNacimiento}\n` +
                      `Departamento: ${departamento}\n` +
                      `Documento: ${documento}\n` +
                      `Correo: ${correo}`;

        alert(mensaje); // Mostrar ventana emergente con los datos
        this.submit();  // Enviar formulario
    }
});

// Función para mostrar mensajes de error
function mostrarError(id, mensaje) {
    let elemento = document.getElementById(id);
    elemento.textContent = mensaje;
    elemento.style.color = "red";
}

// Función para ocultar mensajes de error
function ocultarError(id) {
    let elemento = document.getElementById(id);
    elemento.textContent = "";
}
