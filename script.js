// =====================================================
// TALLER GENERACIÓN DE VALOR 2040
// Conexión con Supabase + navegación del taller
// =====================================================
// ---------- CONEXIÓN SUPABASE ----------
// PEGA AQUÍ la URL de tu proyecto Supabase
const SUPABASE_URL = "https://uoeczgxxsyalpaelsutl.supabase.co";
// PEGA AQUÍ tu PUBLISHABLE KEY de Supabase
const SUPABASE_KEY = "sb_publishable_EhmtvzjXYff8LhiLcfrgzg_Ej0z50Kv";
const supabaseClient = window.supabase.createClient(
   SUPABASE_URL,
   SUPABASE_KEY
);

// =====================================================
// 1. ELEMENTOS PRINCIPALES
// =====================================================
const startButton = document.getElementById("startButton");
const nameButton = document.getElementById("nameButton");
const participantName = document.getElementById("participantName");
let participant = {
   name: "",
   answers: {}
};

// =====================================================
// 2. NAVEGACIÓN ENTRE PANTALLAS
// =====================================================
function showScreen(screenId) {
   const screens = document.querySelectorAll(".screen");
   screens.forEach(function(screen) {
       screen.classList.remove("active");
   });
   const nextScreen = document.getElementById(screenId);
   if (nextScreen) {
       nextScreen.classList.add("active");
   }
   window.scrollTo({
       top: 0,
       behavior: "smooth"
   });
}

// =====================================================
// 3. INICIO
// =====================================================
startButton.addEventListener("click", function() {
   showScreen("nombre");
});

// =====================================================
// 4. NOMBRE DEL PARTICIPANTE
// =====================================================
nameButton.addEventListener("click", function() {
   const name = participantName.value.trim();
   if (name === "") {
       alert("Por favor, escribe tu nombre o alias.");
       return;
   }
   participant.name = name;
   showScreen("pregunta1");
});

// =====================================================
// 5. OPCIONES
// =====================================================
function setupOptions(screenId, answerKey) {
   const screen = document.getElementById(screenId);
   if (!screen) return;
   const options = screen.querySelectorAll(".option");
   options.forEach(function(option) {
       option.addEventListener("click", function() {
           options.forEach(function(item) {
               item.classList.remove("selected");
           });
           option.classList.add("selected");
           participant.answers[answerKey] =
               option.textContent.trim();
       });
   });
}

setupOptions("pregunta2", "prioridad");
setupOptions("pregunta3", "tecnologia");
setupOptions("pregunta4", "activo");
setupOptions("pregunta5", "hito");
setupOptions("pregunta6", "ia");

// =====================================================
// 6. GUARDAR RESPUESTA EN SUPABASE
// =====================================================
async function saveAnswer(question, answer) {
   try {
       const { data, error } = await supabaseClient
           .from("Taller2040-responses")
           .insert([
               {
                   participant_name: participant.name,
                   question: question,
                   answer: answer
               }
           ]);
       if (error) {
           console.error("Error guardando respuesta:", error);
           alert(
               "ERROR SUPABASE: " + error.message
           );
           return false;
       }
       console.log("Respuesta guardada correctamente:", data);
       return true;
   } catch (error) {
       console.error("Error de conexión:", error);
       alert(
           "ERROR DE CONEXIÓN: " + error.message
       );
       return false;
   }
}
// =====================================================
// 7. PREGUNTA 1 — HORIZONTE 2040
// =====================================================
document
   .getElementById("question1Button")
   .addEventListener("click", async function() {
       const answer =
           document.getElementById("answer1").value.trim();
       if (answer === "") {
           alert("Escribe tu respuesta antes de continuar.");
           return;
       }
       participant.answers.horizonte2040 = answer;
       const saved = await saveAnswer(
           "¿Qué piensas del horizonte 2040?",
           answer
       );
       if (saved) {
           showScreen("pregunta2");
       }
   });

// =====================================================
// 8. PREGUNTA 2 — PRIORIDAD ESTRATÉGICA
// =====================================================
document
   .getElementById("question2Button")
   .addEventListener("click", async function() {
       if (!participant.answers.prioridad) {
           alert("Selecciona una opción antes de continuar.");
           return;
       }
       const saved = await saveAnswer(
           "Prioridad estratégica",
           participant.answers.prioridad
       );
       if (saved) {
           showScreen("pregunta3");
       }
   });

// =====================================================
// 9. PREGUNTA 3 — TECNOLOGÍA
// =====================================================
document
   .getElementById("question3Button")
   .addEventListener("click", async function() {
       if (!participant.answers.tecnologia) {
           alert("Selecciona una opción antes de continuar.");
           return;
       }
       const saved = await saveAnswer(
           "Tecnología con mayor impacto",
           participant.answers.tecnologia
       );
       if (saved) {
           showScreen("pregunta4");
       }
   });

// =====================================================
// 10. PREGUNTA 4 — ACTIVO
// =====================================================
document
   .getElementById("question4Button")
   .addEventListener("click", async function() {
       if (!participant.answers.activo) {
           alert("Selecciona una opción antes de continuar.");
           return;
       }
       const saved = await saveAnswer(
           "Activo con mayor desafío u oportunidad",
           participant.answers.activo
       );
       if (saved) {
           showScreen("pregunta5");
       }
   });

// =====================================================
// 11. PREGUNTA 5 — HITO
// =====================================================
document
   .getElementById("question5Button")
   .addEventListener("click", async function() {
       if (!participant.answers.hito) {
           alert("Selecciona una opción antes de continuar.");
           return;
       }
       const saved = await saveAnswer(
           "Hito que debería priorizarse",
           participant.answers.hito
       );
       if (saved) {
           showScreen("pregunta6");
       }
   });

// =====================================================
// 12. PREGUNTA 6 — INTELIGENCIA ARTIFICIAL
// =====================================================
document
   .getElementById("question6Button")
   .addEventListener("click", async function() {
       if (!participant.answers.ia) {
           alert("Selecciona una opción antes de continuar.");
           return;
       }
       const saved = await saveAnswer(
           "Aplicación de IA que debería escalar",
           participant.answers.ia
       );
       if (saved) {
           showScreen("pregunta7");
       }
   });

// =====================================================
// 13. PREGUNTA 7 — RIESGO
// =====================================================
document
   .getElementById("question7Button")
   .addEventListener("click", async function() {
       const answer =
           document.getElementById("answer7").value.trim();
       if (answer === "") {
           alert("Escribe tu respuesta antes de continuar.");
           return;
       }
       participant.answers.riesgo = answer;
       const saved = await saveAnswer(
           "¿Cuál es el mayor riesgo para ejecutar la estrategia?",
           answer
       );
       if (saved) {
           showScreen("pregunta8");
       }
   });

// =====================================================
// 14. PREGUNTA 8 — ROADMAP
// =====================================================
document
   .getElementById("finishButton")
   .addEventListener("click", async function() {
       const answer =
           document.getElementById("answer8").value.trim();
       if (answer === "") {
           alert("Escribe tu propuesta antes de finalizar.");
           return;
       }
       participant.answers.roadmap = answer;
       const saved = await saveAnswer(
           "¿Qué cambiarías del roadmap 2026–2028?",
           answer
       );
       if (saved) {
           console.log("PARTICIPANTE:");
           console.log(participant);
           showScreen("final");
       }
   });

// =====================================================
// 15. TIEMPO REAL
// =====================================================
const realtimeChannel = supabaseClient
   .channel("taller2040-respuestas")
   .on(
       "postgres_changes",
       {
           event: "INSERT",
           schema: "public",
           table: "Taller2040-responses"
       },
       function(payload) {
           console.log(
               "Nueva respuesta recibida en tiempo real:",
               payload.new
           );
       }
   )
   .subscribe();

// =====================================================
// 16. CONFIRMACIÓN
// =====================================================
console.log(
   "Taller Generación de Valor 2040 conectado con Supabase."
);
