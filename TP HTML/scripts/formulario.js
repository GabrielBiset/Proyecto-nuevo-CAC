function enviarFormulario() {
    
    document.getElementById('enviar').disabled = true;

    
    const nombre = document.getElementById('nombre').value;
    const apellido = document.getElementById('apellido').value;
    const email = document.getElementById('email').value;
    const telefono = document.getElementById('telefono').value;
    const descripcion = document.getElementById('descripcion').value;

  
    if (!validarFormulario(nombre, apellido, email, telefono)) {
        
        document.getElementById('enviar').disabled = false;
        return; 
    }

    
    console.log('Enviando datos:', { nombre, apellido, email, telefono, descripcion });

    
    mostrarMensajeExito("Su mensaje ha sido enviado con éxito.");

    
    setTimeout(() => {
        document.getElementById('enviar').disabled = false;
    }, 2000);
}


