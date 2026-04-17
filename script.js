const vocabularios = [
  {
    nivel: 1,
    secciones: [
      {
        seccion: 1,
        palabras: [
          { ingles: "Welcome", traducciones: ["Bienvenido", "Bienvenida"], dificultad: "Intermedio" },
          { ingles: "Tea", traducciones: ["Té"], dificultad: "Básico" },
          { ingles: "Coffee", traducciones: ["Café"], dificultad: "Básico" },
          { ingles: "and", traducciones: ["y"], dificultad: "Básico" },
          { ingles: "Milk", traducciones: ["Leche"], dificultad: "Básico" },
          { ingles: "Sugar", traducciones: ["Azúcar"], dificultad: "Intermedio" },
          { ingles: "Or", traducciones: ["o"], dificultad: "Básico" },
          { ingles: "With", traducciones: ["con"], dificultad: "Básico" },
          { ingles: "Please", traducciones: ["Por favor"], dificultad: "Intermedio" },
          { ingles: "Thank you", traducciones: ["Gracias"], dificultad: "Básico" },
          { ingles: "Goodbye", traducciones: ["Adiós"], dificultad: "Intermedio" },
          { ingles: "Water", traducciones: ["Agua"], dificultad: "Básico" },
          { ingles: "Hello", traducciones: ["Hola"], dificultad: "Básico" }
        ]
      },
      {
        seccion: 2,
        palabras: [
          { ingles: "Japan", traducciones: ["Japón"], dificultad: "Básico" },
          { ingles: "Mexico", traducciones: ["México"], dificultad: "Básico" },
          { ingles: "From", traducciones: ["De"], dificultad: "Intermedio" },
          { ingles: "China", traducciones: ["China"], dificultad: "Básico" },
          { ingles: "I am", traducciones: ["Yo soy", "Yo estoy"], dificultad: "Intermedio" },
          { ingles: "France", traducciones: ["Francia"], dificultad: "Básico" },
          { ingles: "Brazil", traducciones: ["Brasil"], dificultad: "Básico" },
          { ingles: "Too", traducciones: ["También", "Demasiado"], dificultad: "Avanzado" },
          { ingles: "Paris", traducciones: ["París"], dificultad: "Básico" },
          { ingles: "Tokyo", traducciones: ["Tokio"], dificultad: "Básico" },
          { ingles: "London", traducciones: ["Londres"], dificultad: "Básico" }
        ]
      },
      {
        seccion: 3,
        palabras: [
          { ingles: "Hi", traducciones: ["Hola"], dificultad: "Básico" },
          { ingles: "my", traducciones: ["mi"], dificultad: "Básico" },
          { ingles: "name", traducciones: ["nombre"], dificultad: "Básico" },
          { ingles: "this", traducciones: ["este", "esta"], dificultad: "Intermedio" },
          { ingles: "is", traducciones: ["es"], dificultad: "Básico" },
          { ingles: "mom", traducciones: ["mamá"], dificultad: "Básico" },
          { ingles: "dad", traducciones: ["papá"], dificultad: "Básico" },
          { ingles: "sister", traducciones: ["hermana"], dificultad: "Básico" },
          { ingles: "brother", traducciones: ["hermano"], dificultad: "Básico" },
          { ingles: "dads", traducciones: ["papás"], dificultad: "Intermedio" },
          { ingles: "brothers", traducciones: ["hermanos"], dificultad: "Intermedio" },
          { ingles: "moms", traducciones: ["mamás"], dificultad: "Intermedio" }
        ]
      },
      {
        seccion: 4,
        palabras: [
          { ingles: "ticket", traducciones: ["boleto"], dificultad: "Intermedio" },
          { ingles: "passport", traducciones: ["pasaporte"], dificultad: "Intermedio" },
          { ingles: "your", traducciones: ["su"], dificultad: "Intermedio" },
          { ingles: "bag", traducciones: ["bolsa"], dificultad: "Básico" },
          { ingles: "gate", traducciones: ["puerta", "portón", "reja"], dificultad: "Avanzado" },
          { ingles: "phone", traducciones: ["teléfono"], dificultad: "Intermedio" },
          { ingles: "customs", traducciones: ["aduana"], dificultad: "Avanzado" },
          { ingles: "jacket", traducciones: ["chaqueta"], dificultad: "Intermedio" },
          { ingles: "yes", traducciones: ["si"], dificultad: "Básico" },
          { ingles: "door", traducciones: ["puerta"], dificultad: "Básico" }
        ]
      },
      {
        seccion: 5,
        palabras: [
          { ingles: "City", traducciones: ["Ciudad"], dificultad: "Básico" },
          { ingles: "Big", traducciones: ["Grande"], dificultad: "Básico" },
          { ingles: "Nice", traducciones: ["Lindo, Linada"], dificultad: "Básico" },
          { ingles: "Museum", traducciones: ["Museo"], dificultad: "Intermedio" },
          { ingles: "Street", traducciones: ["Calle"], dificultad: "Básico" },
          { ingles: "Famous", traducciones: ["Famoso"], dificultad: "Intermedio" },
          { ingles: "Busy", traducciones: ["Concurrido, Agitado"], dificultad: "Avanzado" },
          { ingles: "House", traducciones: ["Casa"], dificultad: "Básico" },
          { ingles: "Quiet", traducciones: ["Tranquilo, Callado"], dificultad: "Intermedio" },
          { ingles: "Where?", traducciones: ["¿Dónde?"], dificultad: "Básico" },
          { ingles: "Right?", traducciones: ["Verdad"], dificultad: "Intermedio" },
          { ingles: "University", traducciones: ["Universidad"], dificultad: "Intermedio" },
          { ingles: "Park", traducciones: ["Parque"], dificultad: "Básico" },
          { ingles: "Very", traducciones: ["Muy"], dificultad: "Básico" },
          { ingles: "Old", traducciones: ["Viejo"], dificultad: "Básico" },
          { ingles: "Library", traducciones: ["Biblioteca"], dificultad: "Avanzado" }, // Se suele confundir con librería
          { ingles: "Restaurant", traducciones: ["Restaurante"], dificultad: "Intermedio" }
        ]
      }
    ],
  },
  {
    nivel: 2,
    secciones: [
      {
        seccion: 6,
        palabras: [
          { ingles: "Sandwich", traducciones: ["Sandwich"], dificultad: "Básico" },
          { ingles: "I would like", traducciones: ["Quisiera"], dificultad: "Intermedio" },
          { ingles: "Expensive", traducciones: ["Caro"], dificultad: "Intermedio" },
          { ingles: "Pizza", traducciones: ["Pizza"], dificultad: "Básico" },
          { ingles: "Small", traducciones: ["Pequeño"], dificultad: "Básico" },
          { ingles: "Glass", traducciones: ["Vaso"], dificultad: "Básico" },
          { ingles: "Of", traducciones: ["de"], dificultad: "Básico" },
          { ingles: "A", traducciones: ["un, una"], dificultad: "Básico" },
          { ingles: "Excuse me", traducciones: ["Disculpa"], dificultad: "Intermedio" },
          { ingles: "Bowl", traducciones: ["Tazón"], dificultad: "Intermedio" },
          { ingles: "Soup", traducciones: ["Sopa"], dificultad: "Básico" },
          { ingles: "Salad", traducciones: ["Ensalada"], dificultad: "Básico" },
          { ingles: "Hamburger", traducciones: ["Hamburguesa"], dificultad: "Básico" },
          { ingles: "Large", traducciones: ["Grande"], dificultad: "Básico" },
          { ingles: "Check", traducciones: ["Cuenta"], dificultad: "Avanzado" },
          { ingles: "Here", traducciones: ["Aquí"], dificultad: "Básico" },
          { ingles: "Dessert", traducciones: ["Postre"], dificultad: "Intermedio" },
          { ingles: "Delicious", traducciones: ["Deliciosos"], dificultad: "Básico" }
        ]
      }
    ]
  }
];

// --- Utilidades de Persistencia ---
const setCurrentSection = (nivelIdx, seccionIdx) => {
  const data = { nivelIdx, seccionIdx };
  localStorage.setItem('selectedSection', JSON.stringify(data));
};

const getCurrentSection = () => {
  const saved = localStorage.getItem('selectedSection');
  return saved ? JSON.parse(saved) : null;
};

// --- Lógica del Index (Dashboard) ---
const dashboardContainer = document.getElementById('dashboard-content');
if (dashboardContainer) {
  let totalWords = 0;
  dashboardContainer.innerHTML = ''; // Limpiar

  vocabularios.forEach((nivel, nIdx) => {
    let nivelHTML = `
      <section class="mb-5">
        <div class="d-flex align-items-center mb-3">
          <hr class="flex-grow-1">
          <span class="px-3 text-secondary fw-semibold text-uppercase">Nivel ${nivel.nivel}</span>
          <hr class="flex-grow-1">
        </div>
        <div class="row g-4">`;

    nivel.secciones.forEach((sec, sIdx) => {
      totalWords += sec.palabras.length;
      nivelHTML += `
        <div class="col-12 col-md-6 col-lg-4">
          <div class="card h-100 shadow-sm border-0">
            <div class="card-body d-flex flex-column">
              <h5 class="card-title d-flex justify-content-between align-items-center">
                Sección ${sec.seccion}
                <small class="text-body-secondary fs-6">
                  <i class="bi bi-chat-right-text pe-1"></i>${sec.palabras.length}
                </small>
              </h5>
              <div class="badge-container mt-3 mb-4 border rounded p-3 bg-white flex-grow-1">
                ${sec.palabras.map(p => `<span class="badge rounded-pill text-bg-light border text-secondary">${p.ingles}</span>`).join('')}
              </div>
              <div class="d-flex gap-2">
                <a href="lista.html" onclick="setCurrentSection(${nIdx}, ${sIdx})" class="btn btn-outline-secondary w-100">
                    <i class="bi bi-table"></i> Ver
                </a>
                <a href="practicar.html" onclick="setCurrentSection(${nIdx}, ${sIdx})" class="btn btn-primary w-100">
                    <i class="bi bi-rocket-takeoff-fill"></i> Practicar
                </a>
              </div>
            </div>
          </div>
        </div>`;
    });

    nivelHTML += `</div></section>`;
    dashboardContainer.innerHTML += nivelHTML;
  });
  
  const totalCounter = document.getElementById('total-counter');
  if (totalCounter) totalCounter.innerText = totalWords;
}

// --- Lógica de Lista ---
const tableBody = document.getElementById('lista-table-body');
if (tableBody) {
  const data = getCurrentSection();
  if (data) {
    const sectionData = vocabularios[data.nivelIdx].secciones[data.seccionIdx];
    sectionData.palabras.forEach((p, i) => {
      tableBody.innerHTML += `
        <tr>
          <th scope="row">${i + 1}</th>
          <td>${p.traducciones.join(', ')}</td>
          <td><strong>${p.ingles}</strong></td>
        </tr>`;
    });
  }
  
  const btnPracticar = document.getElementById('btn-practicar-desde-lista');
  if (btnPracticar) {
    btnPracticar.onclick = () => window.location.href = 'practicar.html';
  }
}

// --- Lógica de Práctica ---
const practiceEngine = document.getElementById('practice-engine');
if (practiceEngine) {
  const data = getCurrentSection();
  
  if (data) {
    const palabras = [...vocabularios[data.nivelIdx].secciones[data.seccionIdx].palabras].sort(() => Math.random() - 0.5);
    
    let currentIndex = 0;
    const input = document.getElementById('answerInput');
    const termDisplay = document.getElementById('term-display');
    const progressText = document.getElementById('progress-text');
    const progressBar = document.querySelector('.progress-bar');
    const feedbackSuccess = document.getElementById('feedback-success');
    const feedbackError = document.getElementById('feedback-error');
    const correctMsg = document.getElementById('correct-answer-msg');

    const updateCard = () => {
      const current = palabras[currentIndex];
      termDisplay.innerText = current.traducciones[0]; // Muestra español
      input.value = "";
      input.disabled = false;
      input.focus();
      feedbackSuccess.classList.add('d-none');
      feedbackError.classList.add('d-none');
      
      const progress = (currentIndex / palabras.length) * 100;
      progressBar.style.width = `${progress}%`;
      progressText.innerText = `${currentIndex}/${palabras.length}`;
    };

    window.checkAnswer = () => {
      const userAns = input.value.trim().toLowerCase();
      const correctAns = palabras[currentIndex].ingles.toLowerCase();

      if (userAns === correctAns) {
        feedbackSuccess.classList.remove('d-none');
        feedbackError.classList.add('d-none');
        currentIndex++;
        
        if (currentIndex < palabras.length) {
          setTimeout(updateCard, 1000);
        } else {
          progressBar.style.width = `100%`;
          progressText.innerText = `${palabras.length}/${palabras.length}`;
          termDisplay.innerText = "¡Completado! 🎉";
          input.disabled = true;
          input.value = "Sección finalizada";
        }
      } else {
        correctMsg.innerText = palabras[currentIndex].ingles;
        feedbackError.classList.remove('d-none');
        feedbackSuccess.classList.add('d-none');
        input.focus();
      }
    };

    input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') checkAnswer();
    });

    // Iniciar la primera carta
    updateCard();
  }
}