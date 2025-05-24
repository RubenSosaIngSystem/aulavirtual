// scripts.js

const formularioExamen = document.getElementById('formularioExamen');
const mensajeExamen = document.getElementById('mensajeExamen');
const agregarPreguntaBtn = document.getElementById('agregarPregunta');
const preguntasContainer = document.getElementById('preguntas');

let numPregunta = 1;

// Evento para agregar una nueva pregunta
agregarPreguntaBtn.addEventListener('click', function() {
    const nuevaPregunta = document.createElement('div');
    nuevaPregunta.classList.add('pregunta');
    nuevaPregunta.innerHTML = `
        <label for="pregunta${numPregunta}">Pregunta ${numPregunta}:</label>
        <input type="text" id="pregunta${numPregunta}" required>
        <div class="opciones">
            <label>Opciones:</label>
            <input type="text" id="opcion${numPregunta}1" placeholder="Opción 1" required>
            <input type="text" id="opcion${numPregunta}2" placeholder="Opción 2" required>
            <input type="text" id="opcion${numPregunta}3" placeholder="Opción 3" required>
            <input type="text" id="opcion${numPregunta}4" placeholder="Opción 4" required>
        </div>
    `;
    preguntasContainer.appendChild(nuevaPregunta);
    numPregunta++;
});

// Evento para guardar el examen
formularioExamen.addEventListener('submit', function(event) {
    event.preventDefault();

    const tituloExamen = document.getElementById('tituloExamen').value;
    const preguntas = [];

    // Recorrer cada pregunta agregada
    const preguntasDOM = document.querySelectorAll('.pregunta');
    preguntasDOM.forEach(pregunta => {
        const textoPregunta = pregunta.querySelector('input[type="text"]').value;
        const opciones = pregunta.querySelectorAll('.opciones input[type="text"]');
        const opcionesArray = Array.from(opciones).map(opcion => opcion.value);
        preguntas.push({ pregunta: textoPregunta, opciones: opcionesArray });
    });

    // Simulación de guardado (normalmente enviarías estos datos a tu backend)
    if (tituloExamen && preguntas.length > 0) {
        mensajeExamen.innerHTML = `<p>Examen "${tituloExamen}" guardado correctamente.</p>`;
        formularioExamen.reset();
        preguntasContainer.innerHTML = ''; // Limpiar preguntas después de guardar
        numPregunta = 1; // Reiniciar contador de preguntas
    } else {
        mensajeExamen.innerHTML = '<p>Por favor completa todos los campos.</p>';
    }
});
