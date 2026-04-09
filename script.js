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
      }
    ],
   
  }
];


function cargarVocabulario() {
  const contenedor = document.getElementById('contenedor-etapas');
  if (!contenedor) return; 

  let htmlFinal = '';
  vocabularios.forEach(etapa => {
    htmlFinal += `
      <div class="separador-contenedor">
        <span class="linea"></span>
        <span class="texto">ETAPA ${etapa.etapa}</span>
        <span class="linea"></span>
      </div>`;

    etapa.secciones.forEach(seccion => {
      const palabrasHTML = seccion.palabras.map(p => `<span class="card-palabra">${p.ingles}</span>`).join('');

      htmlFinal += `
        <div class="card">
          <div class="card-titulo">
            <i class="bi bi-mortarboard-fill"></i>
            <span>SECCIÓN ${seccion.seccion}</span>
          </div>
          <div class="card-cuerpo">${palabrasHTML}</div>
          <div class="card-pie">
            <button class="btn-secundario" onclick="irAPalabras(${etapa.etapa}, ${seccion.seccion})">Ver traducción</button>
            <button class="boton btn-azul" onclick="irAPracticar(${etapa.etapa}, ${seccion.seccion})">PRACTICAR</button>
          </div>
        </div>`;
    });
  });
  contenedor.innerHTML = htmlFinal;
}

function irAPalabras(etapa, seccion) {
  const datos = vocabularios.find(e => e.etapa === etapa).secciones.find(s => s.seccion === seccion);
  localStorage.setItem('seccionActiva', JSON.stringify(datos));
  window.location.href = 'palabras.html';
}

function irAPracticar(etapa, seccion) {
  const datos = vocabularios.find(e => e.etapa === etapa).secciones.find(s => s.seccion === seccion);
  localStorage.setItem('seccionActiva', JSON.stringify(datos));
  window.location.href = 'practicar.html';
}

/**
 * LÓGICA PARA PALABRAS.HTML
 */
function mostrarListaPalabras() {
  const listaContenedor = document.getElementById('lista-palabras');
  if (!listaContenedor) return;

  const datos = JSON.parse(localStorage.getItem('seccionActiva'));
  // Nota: El elemento 'titulo-seccion' fue eliminado del HTML según tu ajuste
  const titulo = document.getElementById('titulo-seccion');
  if (titulo) titulo.innerText = `SECCIÓN ${datos.seccion}`;

  listaContenedor.innerHTML = datos.palabras.map(p => `
    <div class="card-palabra-lista">
      <span class="txt-ingles">${p.ingles}</span>
      <span class="txt-traduccion">${p.traducciones.join(', ')}</span>
    </div>
  `).join('');
}

/**
 * LÓGICA PARA PRACTICAR.HTML (Con Aleatoriedad)
 */
let indicePalabra = 0;
let palabrasSesion = [];

// Función para mezclar el orden (Algoritmo Fisher-Yates)
function mezclarArreglo(array) {
  const nuevoArray = [...array];
  for (let i = nuevoArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [nuevoArray[i], nuevoArray[j]] = [nuevoArray[j], nuevoArray[i]];
  }
  return nuevoArray;
}

function iniciarPractica() {
  const areaPractica = document.getElementById('area-practica');
  if (!areaPractica) return;

  const datos = JSON.parse(localStorage.getItem('seccionActiva'));
  // Mezclamos las palabras al iniciar para que el orden sea aleatorio
  palabrasSesion = mezclarArreglo(datos.palabras);
  
  // Agregar soporte para la tecla "Enter"
  const inputRespuesta = document.getElementById('input-respuesta');
  inputRespuesta.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') validarRespuesta();
  });

  mostrarSiguientePregunta();
}

function mostrarSiguientePregunta() {
  if (indicePalabra >= palabrasSesion.length) {
    document.getElementById('area-practica').innerHTML = `
      <h2 style="color: #059669">¡Excelente trabajo!</h2>
      <p>Has terminado todas las palabras de esta sección.</p>
      <button class="boton btn-azul" onclick="window.location.href='index.html'">VOLVER AL INICIO</button>
    `;
    return;
  }

  const palabraActual = palabrasSesion[indicePalabra];
  // Elegimos una traducción al azar si hay varias (ej: "Banano" o "Plátano")
  const espanolRandom = palabraActual.traducciones[Math.floor(Math.random() * palabraActual.traducciones.length)];
  
  document.getElementById('palabra-objetivo').innerText = espanolRandom;
  document.getElementById('input-respuesta').value = '';
  document.getElementById('mensaje-feedback').innerText = '';
  document.getElementById('input-respuesta').focus();
}

function validarRespuesta() {
  const input = document.getElementById('input-respuesta').value.trim().toLowerCase();
  const correcta = palabrasSesion[indicePalabra].ingles.toLowerCase();
  const feedback = document.getElementById('mensaje-feedback');

  if (input === correcta) {
    feedback.innerText = "¡Correcto! 🎉";
    feedback.style.color = "#059669";
    setTimeout(() => {
      indicePalabra++;
      mostrarSiguientePregunta();
    }, 1200);
  } else {
    // Emoji de error añadido
    feedback.innerText = "Incorrecto. Intenta de nuevo ❌";
    feedback.style.color = "#dc2626";
  }
}

/**
 * INICIALIZACIÓN
 */
document.addEventListener('DOMContentLoaded', () => {
  cargarVocabulario();
  mostrarListaPalabras();
  iniciarPractica();
});