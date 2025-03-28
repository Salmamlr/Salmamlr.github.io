document.addEventListener("DOMContentLoaded", function () {
    const palabras = ["GATO", "LUNA", "SOL", "CASA", "FLOR", "PERRO", "NUBE", "RÍO", "ARBOL", "RATÓN"];
    let index = 0;
    let palabraCorrecta = palabras[index];
    let letraSeleccionada = null; // Variable para almacenar la letra seleccionada

    const palabraContainer = document.getElementById("palabra-container");
    const siguienteBtn = document.getElementById("siguiente");
    const mensaje = document.getElementById("mensaje");

    function mostrarPalabra() {
        palabraContainer.innerHTML = "";
        mensaje.textContent = "";
        siguienteBtn.style.display = "none";
        letraSeleccionada = null; // Reseteamos la letra seleccionada

        palabraCorrecta = palabras[index];
        let letrasDesordenadas = palabraCorrecta.split("").sort(() => Math.random() - 0.5);

        letrasDesordenadas.forEach((letra, i) => {
            let span = document.createElement("span");
            span.textContent = letra;
            span.classList.add("letra");
            span.setAttribute("data-posicion", i); // Atributo personalizado para identificar la posición

            span.addEventListener("click", () => {
                if (letraSeleccionada === null) {
                    // Si no hay ninguna letra seleccionada, seleccionamos la letra
                    letraSeleccionada = span;
                    span.style.backgroundColor = "#ff6600"; // Cambiamos color para indicar que está seleccionada
                } else {
                    // Si ya hay una letra seleccionada, la movemos al lugar del clic
                    moverLetra(span);
                }
            });

            palabraContainer.appendChild(span);
        });
    }

    function moverLetra(lugarDestino) {
        if (letraSeleccionada !== lugarDestino) {
            // Guardamos la letra que estaba en el lugar destino
            let letraEnDestino = lugarDestino.textContent;

            // Movemos la letra seleccionada al nuevo lugar
            lugarDestino.textContent = letraSeleccionada.textContent;

            // Restablecemos el lugar de origen con la letra que estaba originalmente en ese espacio
            letraSeleccionada.textContent = letraEnDestino;

            letraSeleccionada.style.backgroundColor = ""; // Restablecer el color de la letra seleccionada
            letraSeleccionada = null; // Reseteamos la letra seleccionada

            verificarPalabra();
        }
    }

    function verificarPalabra() {
        let palabraUsuario = Array.from(palabraContainer.children).map((span) => span.textContent).join("");

        if (palabraUsuario === palabraCorrecta) {
            mensaje.textContent = "¡Correcto!";
            mensaje.style.color = "green";
            siguienteBtn.style.display = "block";
        }
    }

    siguienteBtn.addEventListener("click", function () {
        index = (index + 1) % palabras.length; // Pasa a la siguiente palabra
        mostrarPalabra();
    });

    mostrarPalabra(); // Inicia con la primera palabra
});




