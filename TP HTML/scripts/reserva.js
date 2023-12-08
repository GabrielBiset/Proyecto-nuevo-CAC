document.addEventListener("DOMContentLoaded", function() {
    const reservaForm = document.getElementById("reserva-form");
    const confirmacion = document.getElementById("reserva-confirmacion");

    reservaForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const comensales = document.getElementById("comensales").value;
        const fecha = document.getElementById("fecha").value;
        const preferencia = document.querySelector('input[name="preferencia"]:checked').value;
        const nombreReserva = document.getElementById("nombre-reserva").value;

        document.getElementById("confirmacion-comensales").textContent = comensales;
        document.getElementById("confirmacion-fecha").textContent = fecha;
        document.getElementById("confirmacion-preferencia").textContent = preferencia;
        document.getElementById("confirmacion-nombre").textContent = nombreReserva;

        confirmacion.style.display = "block";
    });
});
