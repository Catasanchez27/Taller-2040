// ========================================

// TALLER GENERACIÓN DE VALOR 2040

// ========================================


// ----------------------------------------

// 1. ELEMENTOS PRINCIPALES

// ----------------------------------------

const startButton = document.getElementById("startButton");

const nameButton = document.getElementById("nameButton");

const participantName = document.getElementById("participantName");


// ----------------------------------------

// 2. DATOS DEL PARTICIPANTE

// ----------------------------------------

let participant = {

    name: "",

    answers: {}

};


// ----------------------------------------

// 3. FUNCIÓN PARA CAMBIAR DE PANTALLA

// ----------------------------------------

function showScreen(screenId) {

    // Ocultar todas las pantallas

    const screens = document.querySelectorAll(".screen");

    screens.forEach(function(screen) {

        screen.classList.remove("active");

    });

    // Mostrar la pantalla seleccionada

    const nextScreen = document.getElementById(screenId);

    if (nextScreen) {

        nextScreen.classList.add("active");

    }

    // Volver al inicio de la página

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// ----------------------------------------

// 4. COMENZAR EL TALLER

// ----------------------------------------

startButton.addEventListener("click", function() {

    showScreen("nombre");

});


// ----------------------------------------

// 5. GUARDAR NOMBRE

// ----------------------------------------

nameButton.addEventListener("click", function() {

    const name = participantName.value.trim();

    if (name === "") {

        alert("Por favor, escribe tu nombre o alias.");

        return;

    }

    participant.name = name;

    showScreen("pregunta1");

});


// ----------------------------------------

// 6. FUNCIÓN PARA MANEJAR OPCIONES

// ----------------------------------------

function setupOptions(screenId, answerKey) {

    const screen = document.getElementById(screenId);

    const options = screen.querySelectorAll(".option");

    options.forEach(function(option) {

        option.addEventListener("click", function() {

            // Quitar selección anterior

            options.forEach(function(item) {

                item.classList.remove("selected");

            });

            // Seleccionar esta opción

            option.classList.add("selected");

            // Guardar respuesta

            participant.answers[answerKey] = option.textContent.trim();

        });

    });

}


// ----------------------------------------

// 7. ACTIVAR OPCIONES DE CADA PREGUNTA

// ----------------------------------------

setupOptions("pregunta2", "prioridad");

setupOptions("pregunta3", "tecnologia");

setupOptions("pregunta4", "activo");

setupOptions("pregunta5", "hito");

setupOptions("pregunta6", "ia");


// ----------------------------------------

// 8. BOTÓN PREGUNTA 2

// ----------------------------------------

document.getElementById("question2Button")

    .addEventListener("click", function() {

        if (!participant.answers.prioridad) {

            alert("Selecciona una opción antes de continuar.");

            return;

        }

        showScreen("pregunta3");

    });


// ----------------------------------------

// 9. BOTÓN PREGUNTA 3

// ----------------------------------------

document.getElementById("question3Button")

    .addEventListener("click", function() {

        if (!participant.answers.tecnologia) {

            alert("Selecciona una opción antes de continuar.");

            return;

        }

        showScreen("pregunta4");

    });


// ----------------------------------------

// 10. BOTÓN PREGUNTA 4

// ----------------------------------------

document.getElementById("question4Button")

    .addEventListener("click", function() {

        if (!participant.answers.activo) {

            alert("Selecciona una opción antes de continuar.");

            return;

        }

        showScreen("pregunta5");

    });


// ----------------------------------------

// 11. BOTÓN PREGUNTA 5

// ----------------------------------------

document.getElementById("question5Button")

    .addEventListener("click", function() {

        if (!participant.answers.hito) {

            alert("Selecciona una opción antes de continuar.");

            return;

        }

        showScreen("pregunta6");

    });


// ----------------------------------------

// 12. BOTÓN PREGUNTA 6

// ----------------------------------------

document.getElementById("question6Button")

    .addEventListener("click", function() {

        if (!participant.answers.ia) {

            alert("Selecciona una opción antes de continuar.");

            return;

        }

        showScreen("pregunta7");

    });


// ----------------------------------------

// 13. PREGUNTA ABIERTA 1

// ----------------------------------------

document.getElementById("question1Button")

    .addEventListener("click", function() {

        const answer = document.getElementById("answer1")

            .value

            .trim();

        if (answer === "") {

            alert("Escribe tu respuesta antes de continuar.");

            return;

        }

        participant.answers.horizonte2040 = answer;

        showScreen("pregunta2");

    });


// ----------------------------------------

// 14. PREGUNTA ABIERTA 2

// ----------------------------------------

document.getElementById("question7Button")

    .addEventListener("click", function() {

        const answer = document.getElementById("answer7")

            .value

            .trim();

        if (answer === "") {

            alert("Escribe tu respuesta antes de continuar.");

            return;

        }

        participant.answers.riesgo = answer;

        showScreen("pregunta8");

    });


// ----------------------------------------

// 15. FINALIZAR TALLER

// ----------------------------------------

document.getElementById("finishButton")

    .addEventListener("click", function() {

        const answer = document.getElementById("answer8")

            .value

            .trim();

        if (answer === "") {

            alert("Escribe tu propuesta antes de finalizar.");

            return;

        }

        participant.answers.roadmap = answer;

        console.log("PARTICIPANTE:");

        console.log(participant);

        showScreen("final");

    });


// ----------------------------------------

// 16. MENSAJE DE PRUEBA

// ----------------------------------------

console.log("Taller Generación de Valor 2040 cargado correctamente.");
 
