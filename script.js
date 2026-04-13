const vocabularios = [
  {
    etapa: 1,
    secciones: [
      {

        seccion: 1,
        colorClase: "btn-azul",
        palabras: [
          { ingles: "Welcome", traducciones: ["Bienvenido", "Bienvenida"] },
          { ingles: "Tea", traducciones: ["Té"] },
          { ingles: "Coffee", traducciones: ["Café"] },
          { ingles: "and", traducciones: ["y"] },
          { ingles: "Milk", traducciones: ["Leche"] },
          { ingles: "Sugar", traducciones: ["Azúcar"] },
          { ingles: "Or", traducciones: ["o"] },
          { ingles: "With", traducciones: ["con"] },
          { ingles: "Please", traducciones: ["Por favor"] },
          { ingles: "Thank you", traducciones: ["Gracias"] },
          { ingles: "Goodbye", traducciones: ["Adiós"] },
          { ingles: "Water", traducciones: ["Agua"] },
          { ingles: "Hello", traducciones: ["Hola"] }
        ]
      },

      {
        seccion: 2,
        colorClase: "btn-azul",
        palabras: [
          { ingles: "Japan", traducciones: ["Japón"] },
          { ingles: "Mexico", traducciones: ["México"] },
          { ingles: "From", traducciones: ["De"] },
          { ingles: "China", traducciones: ["China"] },
          { ingles: "I am", traducciones: ["Yo soy", "Yo estoy"] },
          { ingles: "France", traducciones: ["Francia"] },
          { ingles: "Brazil", traducciones: ["Brasil"] },
          { ingles: "Too", traducciones: ["También", "Demasiado"] },
          { ingles: "Paris", traducciones: ["París"] },
          { ingles: "Tokyo", traducciones: ["Tokio"] },
          { ingles: "London", traducciones: ["Londres"] },
        ]
      },

            {
        seccion: 3,
        colorClase: "btn-azul",
        palabras: [
          { ingles: "Hi", traducciones: ["Hola"] },
          { ingles: "my", traducciones: ["mi"] },
          { ingles: "name", traducciones: ["nombre"] },
          { ingles: "this", traducciones: ["este", "esta"] },
          { ingles: "is", traducciones: ["es"] },
          { ingles: "mom", traducciones: ["mamá"] },
          { ingles: "dad", traducciones: ["papá"] },
          { ingles: "sister", traducciones: ["hermana"] },
          { ingles: "brother", traducciones: ["hermano"] },
          { ingles: "dads", traducciones: ["papás"] },
          { ingles: "brothers", traducciones: ["hermanos"] },
          { ingles: "moms", traducciones: ["mamás"] },
        ]
      },

                  {
        seccion: 4,
        colorClase: "btn-azul",
        palabras: [
          { ingles: "ticket", traducciones: ["boleto"] },
          { ingles: "passport", traducciones: ["pasaporte"] },
          { ingles: "your", traducciones: ["su"] },
          { ingles: "bag", traducciones: ["bolsa"] },
          { ingles: "gate", traducciones: ["puerta", "portón", "reja"] },
          { ingles: "phone", traducciones: ["teléfono"] },
          { ingles: "customs", traducciones: ["aduana"] },
          { ingles: "jacket", traducciones: ["chaqueta"] },
          { ingles: "yes", traducciones: ["si"] },
          { ingles: "door", traducciones: ["puerta"] },
        ]
      }
    ],
  }
];

// Objeto Global del Juego
const Juego = {
    seleccionarSeccion: function(etapaId, seccionId) {
        const datos = { etapaId, seccionId };
        localStorage.setItem('seccionActiva', JSON.stringify(datos));
    },

    obtenerPalabrasActuales: function() {
        const config = JSON.parse(localStorage.getItem('seccionActiva'));
        if (!config) return [];
        
        const etapa = vocabularios.find(e => e.etapa === config.etapaId);
        const seccion = etapa.secciones.find(s => s.seccion === config.seccionId);
        return seccion ? seccion.palabras : [];
    }
};

// Función para contar TODAS las palabras
function actualizarContadorGlobal() {
    let total = 0;
    vocabularios.forEach(etapa => {
        etapa.secciones.forEach(sec => {
            total += sec.palabras.length;
        });
    });
    
    // Buscamos por ID que es más seguro
    const scoreElement = document.getElementById('global-score');
    if (scoreElement) {
        scoreElement.textContent = total;
    }
}

// Lógica de Inicialización
document.addEventListener('DOMContentLoaded', () => {
    
    actualizarContadorGlobal();

    const mainContainer = document.querySelector('.main-wrapper');

    // LÓGICA PARA INDEX.HTML
    // Verificamos si estamos en index buscando el contenedor o la marca de nivel
    if (mainContainer && document.querySelector('.top-bar .score')) {
        // Limpiar cards estáticas si las hay
        const cardsPrevias = mainContainer.querySelectorAll('.card');
        cardsPrevias.forEach(c => c.remove());

        vocabularios[0].secciones.forEach(sec => {
            const card = document.createElement('section');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-header">
                    <img src="Icono-card.png" alt="Sección" width="30">
                    <p>Sección ${sec.seccion}</p>
                </div>
                <div class="card-body">
                    ${sec.palabras.map(p => `<span class="card-palabra">${p.ingles.toLowerCase()}</span>`).join('')}
                </div>
                <div class="card-footer">
                    <a href="lista.html" class="btn btn-secondary" onclick="Juego.seleccionarSeccion(${vocabularios[0].etapa}, ${sec.seccion})">Ver lista</a>
                    <a href="practica.html" class="btn btn-primary" onclick="Juego.seleccionarSeccion(${vocabularios[0].etapa}, ${sec.seccion})">Practicar</a>
                </div>
            `;
            mainContainer.appendChild(card);
        });
    }

    // LÓGICA PARA LISTA.HTML
    const contenedorPalabras = document.getElementById('contenedor-palabras');
    if (contenedorPalabras) {
        const palabras = Juego.obtenerPalabrasActuales();
        contenedorPalabras.innerHTML = palabras.map(p => `
            <div class="list-item">
                <span style="font-weight: bold;">${p.ingles.toLowerCase()}</span>
                <span style="color: #ccc;">|</span>
                <span>${p.traducciones.join(' / ')}</span>
            </div>
        `).join('');
    }

    // LÓGICA PARA PRACTICA.HTML
    if (document.querySelector('.practice-box')) {
        const palabras = Juego.obtenerPalabrasActuales();
        if (palabras.length === 0) return;

        let palabraActual = {};
        const h1 = document.querySelector('.word-to-translate');
        const input = document.querySelector('input');
        const btn = document.querySelector('.btn-primary');
        const nota = document.querySelector('.notificacion');

        function nuevaPalabra() {
            const random = Math.floor(Math.random() * palabras.length);
            palabraActual = palabras[random];
            h1.textContent = palabraActual.ingles;
            input.value = '';
            nota.style.display = 'none';
            input.focus();
        }

        btn.addEventListener('click', () => {
            const respuesta = input.value.trim().toLowerCase();
            const esCorrecto = palabraActual.traducciones.some(t => t.toLowerCase() === respuesta);

            if (esCorrecto) {
                nota.style.display = 'block';
                nota.style.background = '#d4edda';
                nota.style.color = '#155724';
                nota.innerHTML = '<strong>¡Excelente!</strong>';
                setTimeout(nuevaPalabra, 1500);
            } else {
                nota.style.display = 'block';
                nota.style.background = '#f8d7da';
                nota.style.color = '#721c24';
                nota.innerHTML = `Incorrecto. Era: <b>${palabraActual.traducciones[0]}</b>`;
            }
        });

        nuevaPalabra();
    }
});