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
  let htmlFinal = '';

  vocabularios.forEach(etapa => {
    // Separador de ETAPA
    htmlFinal += `
      <div class="separador-contenedor">
        <span class="linea"></span>
        <span class="texto">ETAPA ${etapa.etapa}</span>
        <span class="linea"></span>
      </div>
    `;

    etapa.secciones.forEach(seccion => {
      const palabrasHTML = seccion.palabras.map(p => 
        `<span class="card-palabra">${p.ingles}</span>`
      ).join('');

      // Construcción de la CARD
      htmlFinal += `
        <div class="card">
          <div class="card-titulo">
            <i class="bi bi-mortarboard-fill"></i>
            <span>SECCIÓN ${seccion.seccion}</span>
          </div>

          <div class="card-cuerpo">
            ${palabrasHTML}
          </div>

          <div class="card-pie">
            <button class="btn-secundario">
              Ver traducción
            </button>
            <button class="boton btn-azul">PRACTICAR</button>
          </div>
        </div>
      `;
    });
  });

  contenedor.innerHTML = htmlFinal;
}

document.addEventListener('DOMContentLoaded', cargarVocabulario);