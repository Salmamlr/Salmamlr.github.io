document.addEventListener("DOMContentLoaded", function () {
    // Selecciona todas las palabras y las zonas de la oración
    const palabras = document.querySelectorAll(".draggable");
    const dropzones = document.querySelectorAll(".dropzone");

    palabras.forEach(palabra => {
        palabra.addEventListener("click", () => {
            const palabraSeleccionada = palabra.textContent;
            let zonaDisponible = null;

            // Recorre todas las zonas de las oraciones
            dropzones.forEach(dropzone => {
                if (dropzone.textContent === "______" && dropzone.getAttribute("data-word") === palabraSeleccionada) {
                    zonaDisponible = dropzone;
                    dropzone.textContent = palabraSeleccionada;
                    dropzone.classList.add("correct");
                    const feedback = dropzone.parentElement.querySelector(".feedback");
                    feedback.textContent = "✔️ Correcto";
                    feedback.style.color = "green";
                    palabra.style.display = "none"; // Oculta la palabra seleccionada
                }
            });

            if (!zonaDisponible) {
                // Si no se encontró la zona correcta, muestra mensaje de error
                const feedback = palabra.parentElement.querySelector(".feedback");
                feedback.textContent = "Intentalo de nuevo!";
                feedback.style.color = "red";
            }
        });
    });
});
