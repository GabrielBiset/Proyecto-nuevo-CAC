function enviarFormulario() {
    // Desactivar el botón para evitar múltiples envíos
    document.getElementById('enviar').disabled = true;

    // Obtener los datos del formulario
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const descripcion = document.getElementById('descripcion').value;

    // Validar el formulario
    if (!validarFormulario(nombre, apellido, email, telefono)) {
        // Habilitar el botón en caso de validación fallida
        document.getElementById('enviar').disabled = false;
        return; // No enviar el formulario si no pasa la validación
    }

    // Simular envío (puedes agregar lógica adicional aquí)
    console.log('Enviando datos:', { nombre, apellido, email, telefono, descripcion });

    // Mostrar mensaje de éxito
    mostrarMensajeExito("Su mensaje ha sido enviado con éxito.");

    // Habilitar el botón después de un tiempo (opcional)
    setTimeout(() => {
        document.getElementById('enviar').disabled = false;
    }, 2000);
}

// Resto del código, incluyendo validarFormulario y mostrarMensajeExito
