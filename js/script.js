// ====== PERSONALIZA AQUÍ: tus datos ======
// Agrega, quita o edita proyectos y tecnologías. La página se arma sola.
const datos = {
  java: {
    tecnologias: ["Maven", "Swing", "JavaFX", "JSP", "ThymeLeaf", "Spring Boot", "Spring Web", "JPA/Hibernate"],
    proyectos: [
      { titulo: "Tienda de libros", descripcion: "App gráfica básica con Swing para llevar el inventario de una librería.", tec: "Java, Swing, Maven, Spring Boot, SQLite", demo: "#", codigo: "https://github.com/El-Jiro/tienda-de-libros.git" },
      { titulo: "Sistema de tareas", descripcion: "App gráfica algo más compleja con JavaFX que permite crear, administrar y visualizar una lista de tareas.", tec: "Java, JavaFx, Maven, Spring Boot, SQLite", demo: "#", codigo: "https://github.com/El-Jiro/sistema-de-tareas.git" },
      { titulo: "Sistema de empleados", descripcion: "Aplicación web para llevar un registro de los empleados de una empresa con Spring Boot y JSP.", tec: "Java, JSP, Spring Boot, MySQL", demo: "#", codigo: "https://github.com/El-Jiro/Sistema-de-empleados.git" },
      { titulo: "Agenda", descripcion: "Aplicación web de agenda de contactos utilizando spring boot, thymeleaf y bootstrap", tec: "Java, ThymeLeaf, Spring Boot, MySQL", demo: "#", codigo: "https://github.com/El-Jiro/agenda-spring-y-thymeleaf.git" },
      { titulo: "Sistema de cuentas bancarias", descripcion: "Un sistema de administración de cuentas bancarias en la web con spring boot y primefaces", tec: "Java, Primefaces, Spring Boot, MySQL", demo: "#", codigo: "https://github.com/El-Jiro/sistema-de-cuentas-bancarias.git" },
      { titulo: "Sistema de inventarios Backend", descripcion: "Una API REST para un sistema de inventarios en la web con Java Spring Boot", tec: "Java, Spring Boot, MySQL", demo: "#", codigo: "https://github.com/El-Jiro/sistema-de-inventarios-backend.git" },
      { titulo: "Sistema de RRHH Backend", descripcion: "Una API REST para un sistema de administración de recursos humanos en la web con Spring Web y JPA/Hibernate", tec: "Java, Spring Web, JPA/Hibernate, MySQL", demo: "#", codigo: "https://github.com/El-Jiro/sistema-de-recursos-humanos.git" },
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
const POR_PAGINA = 3; // proyectos que se ven por página

function tarjeta(p) {
  return `
    <article class="proyecto">
      <h3>${p.titulo}</h3>
      <p>${p.descripcion}</p>
      <div class="tec">${p.tec}</div>
      <div class="enlaces">
        ${p.demo ? `<a href="${p.demo}" target="_blank" rel="noopener">Ver demo</a>` : ""}
        ${p.codigo ? `<a href="${p.codigo}" target="_blank" rel="noopener">Ver código</a>` : ""}
      </div>
    </article>`;
}

function mostrarPagina(lang, pagina) {
  const { proyectos } = datos[lang];
  const caja = document.querySelector(`.proyectos[data-lang="${lang}"]`);
  const pie = document.querySelector(`.paginacion[data-lang="${lang}"]`);
  const total = Math.max(1, Math.ceil(proyectos.length / POR_PAGINA));
  const inicio = (pagina - 1) * POR_PAGINA;

  caja.innerHTML = proyectos.length
    ? proyectos.slice(inicio, inicio + POR_PAGINA).map(tarjeta).join("")
    : `<p class="vacio">Pronto agregaré proyectos aquí.</p>`;

  // Si solo hay una página, no se muestran botones
  if (total === 1) { pie.innerHTML = ""; return; }

  let botones = `<button data-pagina="${pagina - 1}" ${pagina === 1 ? "disabled" : ""}>←</button>`;
  for (let i = 1; i <= total; i++) {
    botones += `<button data-pagina="${i}" ${i === pagina ? 'class="actual" aria-current="page"' : ""}>${i}</button>`;
  }
  botones += `<button data-pagina="${pagina + 1}" ${pagina === total ? "disabled" : ""}>→</button>`;
  pie.innerHTML = botones;
}

for (const lang in datos) {
  // Etiquetas de tecnologías
  document.querySelector(`.etiquetas[data-lang="${lang}"]`).innerHTML =
    datos[lang].tecnologias.map(t => `<li>${t}</li>`).join("");

  // Crea el contenedor de botones debajo de la lista de proyectos
  const caja = document.querySelector(`.proyectos[data-lang="${lang}"]`);
  const pie = document.createElement("div");
  pie.className = "paginacion";
  pie.dataset.lang = lang;
  const envoltura = document.createElement("div");
  caja.replaceWith(envoltura);
  envoltura.append(caja, pie);

  // Un solo listener por sección
  pie.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (b && !b.disabled) mostrarPagina(lang, Number(b.dataset.pagina));
  });

  mostrarPagina(lang, 1);
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
