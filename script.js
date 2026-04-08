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
        colorClase: "btn-verde",
        palabras: [
          { ingles: "Bread", traducciones: ["Pan"] },
          { ingles: "Cheese", traducciones: ["Queso"] },
          { ingles: "Apple", traducciones: ["Manzana"] },
          { ingles: "Banana", traducciones: ["Banano", "Plátano"] },
          { ingles: "Egg", traducciones: ["Huevo"] },
          { ingles: "Breakfast", traducciones: ["Desayuno"] },
          { ingles: "Lunch", traducciones: ["Almuerzo"] },
          { ingles: "Dinner", traducciones: ["Cena"] },
          { ingles: "Salt", traducciones: ["Sal"] },
          { ingles: "Chicken", traducciones: ["Pollo"] },
          { ingles: "Rice", traducciones: ["Arroz"] },
          { ingles: "Fruit", traducciones: ["Fruta"] }
        ]
      }
    ]
  },
  {
    etapa: 2,
    secciones: [
      {
        seccion: 1,
        colorClase: "btn-morado",
        palabras: [
          { ingles: "House", traducciones: ["Casa"] },
          { ingles: "Window", traducciones: ["Ventana"] },
          { ingles: "Door", traducciones: ["Puerta"] },
          { ingles: "Kitchen", traducciones: ["Cocina"] },
          { ingles: "Bedroom", traducciones: ["Dormitorio", "Habitación"] },
          { ingles: "Bathroom", traducciones: ["Baño"] },
          { ingles: "Table", traducciones: ["Mesa"] },
          { ingles: "Chair", traducciones: ["Silla"] },
          { ingles: "Bed", traducciones: ["Cama"] },
          { ingles: "Floor", traducciones: ["Piso", "Suelo"] },
          { ingles: "Wall", traducciones: ["Pared"] },
          { ingles: "Garden", traducciones: ["Jardín"] }
        ]
      },
      {
        seccion: 2,
        colorClase: "btn-naranja",
        palabras: [
          { ingles: "Family", traducciones: ["Familia"] },
          { ingles: "Mother", traducciones: ["Madre"] },
          { ingles: "Father", traducciones: ["Padre"] },
          { ingles: "Brother", traducciones: ["Hermano"] },
          { ingles: "Sister", traducciones: ["Hermana"] },
          { ingles: "Son", traducciones: ["Hijo"] },
          { ingles: "Daughter", traducciones: ["Hija"] },
          { ingles: "Baby", traducciones: ["Bebé"] },
          { ingles: "Grandmother", traducciones: ["Abuela"] },
          { ingles: "Grandfather", traducciones: ["Abuelo"] },
          { ingles: "Friend", traducciones: ["Amigo", "Amiga"] },
          { ingles: "Neighbor", traducciones: ["Vecino", "Vecina"] }
        ]
      }
    ]
  }
];


function cargarVocabulario() {
  const contenedor = document.getElementById('contenedor-etapas');
  if (!contenedor) return; // Solo ejecuta si estamos en index.html

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

// FUNCIONES DE NAVEGACIÓN
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

// Lógica para PALABRAS.HTML
function mostrarListaPalabras() {
  const listaContenedor = document.getElementById('lista-palabras');
  if (!listaContenedor) return;

  const datos = JSON.parse(localStorage.getItem('seccionActiva'));
  document.getElementById('titulo-seccion').innerText = `SECCIÓN ${datos.seccion}`;

  listaContenedor.innerHTML = datos.palabras.map(p => `
    <div class="card-palabra-lista">
      <span class="txt-ingles">${p.ingles}</span>
      <span class="txt-traduccion">${p.traducciones.join(', ')}</span>
    </div>
  `).join('');
}

// Lógica para PRACTICAR.HTML
let indicePalabra = 0;
let palabrasSesion = [];

function iniciarPractica() {
  const areaPractica = document.getElementById('area-practica');
  if (!areaPractica) return;

  const datos = JSON.parse(localStorage.getItem('seccionActiva'));
  palabrasSesion = datos.palabras;
  mostrarSiguientePregunta();
}

function mostrarSiguientePregunta() {
  if (indicePalabra >= palabrasSesion.length) {
    document.getElementById('area-practica').innerHTML = `
      <h2 style="color: #059669">¡Excelente trabajo!</h2>
      <p>Has terminado todas las palabras.</p>
      <button class="boton btn-azul" onclick="window.location.href='index.html'">VOLVER AL INICIO</button>
    `;
    return;
  }

  const palabraActual = palabrasSesion[indicePalabra];
  document.getElementById('palabra-objetivo').innerText = palabraActual.traducciones[0]; // Mostrar en español
  document.getElementById('input-respuesta').value = '';
  document.getElementById('mensaje-feedback').innerText = '';
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
    }, 1500);
  } else {
    feedback.innerText = `Incorrecto. Intenta de nuevo.`;
    feedback.style.color = "#dc2626";
  }
}

document.addEventListener('DOMContentLoaded', () => {
  cargarVocabulario();
  mostrarListaPalabras();
  iniciarPractica();
});