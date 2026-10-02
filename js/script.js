// ====== PERSONALIZA AQUÍ: tus datos ======
// Agrega, quita o edita proyectos y tecnologías. La página se arma sola.
const datos = {
  java: {
    tecnologias: ["Maven", "Swing", "JavaFX", "JSP", "ThymeLeaf", "Spring Boot"],
    proyectos: [
      { titulo: "Sistema de inventario", descripcion: "Aplicación para controlar entradas y salidas de productos.", tec: "Java, Spring Boot, MySQL", demo: "#", codigo: "#" },
      { titulo: "API de reservaciones", descripcion: "API REST para gestionar citas con validaciones y pruebas.", tec: "Java, JUnit, Maven", demo: "", codigo: "#" }
    ]
  },
  python: {
    tecnologias: ["Pandas", "Flask", "Django", "Selenium"],
    proyectos: [
      { titulo: "Reporte automático de ventas", descripcion: "Script que lee archivos de Excel y genera un resumen semanal.", tec: "Python, Pandas", demo: "", codigo: "#" },
      { titulo: "Bot de seguimiento de precios", descripcion: "Revisa precios en tiendas en línea y avisa cuando bajan.", tec: "Python, Selenium", demo: "#", codigo: "#" }
    ]
  },
  javascript: {
    tecnologias: ["HTML", "CSS", "React", "Node.js"],
    proyectos: [
      { titulo: "Lista de tareas", descripcion: "Aplicación web que guarda tus tareas en el navegador.", tec: "HTML, CSS, JavaScript", demo: "#", codigo: "#" },
      { titulo: "Panel del clima", descripcion: "Consulta una API y muestra el pronóstico de cualquier ciudad.", tec: "JavaScript, Fetch API", demo: "#", codigo: "#" }
    ]
  }
};

// Crea las etiquetas y tarjetas de cada sección
for (const lang in datos) {
  const { tecnologias, proyectos } = datos[lang];

  const ul = document.querySelector(`.etiquetas[data-lang="${lang}"]`);
  ul.innerHTML = tecnologias.map(t => `<li>${t}</li>`).join("");

  const caja = document.querySelector(`.proyectos[data-lang="${lang}"]`);
  caja.innerHTML = proyectos.length
    ? proyectos.map(p => `
          <article class="proyecto">
            <h3>${p.titulo}</h3>
            <p>${p.descripcion}</p>
            <div class="tec">${p.tec}</div>
            <div class="enlaces">
              ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Ver demo</a>` : ""}
              ${p.codigo ? `<a href="${p.codigo}" target="_blank" rel="noopener">Ver código</a>` : ""}
            </div>
          </article>`).join("")
    : `<p class="vacio">Pronto agregaré proyectos aquí.</p>`;
}

// Modo claro / oscuro
const raiz = document.documentElement;
const boton = document.getElementById("tema");
const sistemaOscuro = window.matchMedia("(prefers-color-scheme: dark)");
try { const g = localStorage.getItem("tema"); if (g) raiz.dataset.theme = g; } catch (e) { }

function esOscuro() {
  return raiz.dataset.theme ? raiz.dataset.theme === "dark" : sistemaOscuro.matches;
}
function pintarBoton() { boton.textContent = esOscuro() ? "Modo claro" : "Modo oscuro"; }

boton.addEventListener("click", () => {
  const nuevo = esOscuro() ? "light" : "dark";
  raiz.dataset.theme = nuevo;
  try { localStorage.setItem("tema", nuevo); } catch (e) { }
  pintarBoton();
});
pintarBoton();

// Marca en el menú la sección que estás viendo
const enlaces = document.querySelectorAll("#menu a");
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      enlaces.forEach(a => a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("section.lenguaje, footer").forEach(s => observador.observe(s));
