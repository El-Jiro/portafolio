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
    tecnologias: ["Pandas", "Flask", "Folium", "CV2", "Bokeh", "Justpy", "Highcharts", "Flask", "Tkinter", "SQLite", "Kivy"],
    proyectos: [
      { titulo: "Mapa interactivo", descripcion: "Un mapamundi interactivo en la web creado con la librería folium, el cual muestra la ubicación de los volcanes más importantes en los Estados Unidos de América, además de la cantidad de población de cada país mediante un código de color.", tec: "Python, Folium, HTML, CSS, JavaScript", demo: "", codigo: "https://github.com/El-Jiro/mapa-interactivo-python.git" },
      { titulo: "Detector de movimiento", descripcion: "Una app de escritorio que detecta los objetos en movimiento mediante la webcam del PC y los enmarca con cuadrados verdes. Tras finalizar la grabación, mostrará una pequeña gráfica con las marcas de tiempo en las que los objetos entraron y salieron de pantalla.", tec: "Python, CV2, Pandas, Bokeh", demo: "#", codigo: "https://github.com/El-Jiro/detector-de-movimiento-python.git" },
      { titulo: "Highcharts web app", descripcion: "Una aplicación web con el framework justpy que muestra gráficos dinámicos e interactivos creados a partir de la información de un archivo csv.", tec: "Python, Justpy, Highcharts", demo: "#", codigo: "https://github.com/El-Jiro/highcharts-web-app.git" },
      { titulo: "Website with flask", descripcion: "Un sitio web estático muy sencillo creado con el framework de flask", tec: "Python, Flask, HTML, CSS", demo: "#", codigo: "https://github.com/El-Jiro/website-with-flask.git" },
      { titulo: "Book Inventory GUI App", descripcion: "Una app gráfica de escritorio que funciona como un inventario de libros para una biblioteca.", tec: "Python, Tkinter, SQLite", demo: "#", codigo: "https://github.com/El-Jiro/book-inventory-gui-app.git" },
      { titulo: "Feel-Good Mobile App", descripcion: "Una app móvil simple hecha con Kivy que muestra algunas citas de distintos autores famosos de acuerdo con tu estado de ánimo.", tec: "Python, Kivy, JSON", demo: "#", codigo: "https://github.com/El-Jiro/feel-good-mobile-app.git" }

    ]
  },
  javascript: {
    tecnologias: ["HTML", "CSS", "JS Vanilla", "React", "Angular", "Flex", "FLex Panel", "Fetch API"],
    proyectos: [
      { titulo: "Drum Kit", descripcion: "Un simulador de batería el cual tocará un sonido de tambor o platillo distinto dependiendo de la tecla presionada.", tec: "HTML, CSS, JavaScript", demo: "#", codigo: "https://github.com/El-Jiro/JavaScript30/tree/main/01%20-%20JavaScript%20Drum%20Kit" },
      { titulo: "Clock Widget", descripcion: "Un widget de reloj analógico para la web perfectamente funcional con HTML, CSS y JS Vanilla.", tec: "HTML, CSS, JavaScript", demo: "#", codigo: "https://github.com/El-Jiro/JavaScript30/blob/main/02%20-%20JS%20and%20CSS%20clock/index.html" },
      { titulo: "CSS Variables", descripcion: "Una pequeña demostración práctica de las variables CSS <b><i>spacing</i></b>, <b><i>blur</i></b> y <b><i>base</i></b> y su funcionamiento.", tec: "HTML, CSS, JavaScript, Spacing, Blur, Base", demo: "#", codigo: "https://github.com/El-Jiro/JavaScript30/tree/main/03%20-%20Update%20CSS%20variables%20with%20JS" },
      { titulo: "Flex Panel Gallery", descripcion: "Demostración de la tecnología CSS <b><i>Flex Panel</i></b> con una galería de imágenes que se expanden o se contraen al hacer clic en ellas.", tec: "HTML, CSS, JavaScript, Flex, Flex Panel", demo: "#", codigo: "https://github.com/El-Jiro/JavaScript30/tree/main/03%20-%20Update%20CSS%20variables%20with%20JS" },
      { titulo: "Population by city", descripcion: "Página web que permite buscar una determinada ciudad estadounidense a través de una API y devuelve tanto su número de habitantes como el estado en que se ubica.", tec: "HTML, CSS, JavaScript, Fetch API", demo: "#", codigo: "https://github.com/El-Jiro/JavaScript30/blob/main/06%20-%20Type%20Ahead/index.html" },
      { titulo: "Fun with HTML5 Canvas", descripcion: "Aplicación web para dibujar garabatos mediante la tecnología Canvas de HTML", tec: "HTML, CSS, JavaScript, Canvas", demo: "#", codigo: "https://github.com/El-Jiro/JavaScript30/blob/main/08%20-%20Fun%20with%20HTML5%20Canvas/index.html" },
    ]
  }
};

const OPCIONES = [2, 3, 4, 5, 0]; // 0 = "Todos"
const POR_DEFECTO = parseInt(localStorage.getItem("porPagina")) || 3
const porPagina = {};     // cuántos proyectos muestra cada sección
const paginaActual = {};  // en qué página va cada sección

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

// Tamaño de página real (si eligió "Todos", es el total de proyectos)
function tamano(lang) {
  localStorage.setItem("porPagina", toString(porPagina))
  const n = porPagina[lang];
  return n === 0 ? Math.max(1, datos[lang].proyectos.length) : n;
}
function totalPaginas(lang) {
  return Math.max(1, Math.ceil(datos[lang].proyectos.length / tamano(lang)));
}

// Mide cada página y fija la altura de la caja a la más alta
function ajustarAltura(lang) {
  const { proyectos } = datos[lang];
  const n = tamano(lang);
  const caja = document.querySelector(`.proyectos[data-lang="${lang}"]`);
  let max = 0;

  caja.style.minHeight = "";
  for (let p = 1; p <= totalPaginas(lang); p++) {
    caja.innerHTML = proyectos.slice((p - 1) * n, p * n).map(tarjeta).join("");
    max = Math.max(max, caja.offsetHeight);
  }
  caja.style.minHeight = max + "px";
}

function mostrarPagina(lang, pagina) {
  const { proyectos } = datos[lang];
  const caja = document.querySelector(`.proyectos[data-lang="${lang}"]`);
  const pie = document.querySelector(`.paginacion[data-lang="${lang}"]`);
  const n = tamano(lang);
  const total = totalPaginas(lang);
  const inicio = (pagina - 1) * n;

  paginaActual[lang] = pagina;

  caja.innerHTML = proyectos.length
    ? proyectos.slice(inicio, inicio + n).map(tarjeta).join("")
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
  porPagina[lang] = POR_DEFECTO;

  // Etiquetas de tecnologías
  document.querySelector(`.etiquetas[data-lang="${lang}"]`).innerHTML =
    datos[lang].tecnologias.map(t => `<li>${t}</li>`).join("");

  // Estructura: [caja de proyectos] + [fila inferior: botones | selector]
  const caja = document.querySelector(`.proyectos[data-lang="${lang}"]`);
  const envoltura = document.createElement("div");
  const inferior = document.createElement("div");
  inferior.className = "inferior";

  const pie = document.createElement("div");
  pie.className = "paginacion";
  pie.dataset.lang = lang;

  const etiqueta = document.createElement("label");
  etiqueta.className = "selector";
  etiqueta.innerHTML = `Mostrar
    <select>
      ${OPCIONES.map(o =>
    `<option value="${o}" ${o === POR_DEFECTO ? "selected" : ""}>${o === 0 ? "Todos" : o}</option>`
  ).join("")}
    </select> por página`;
  const select = etiqueta.querySelector("select");

  caja.replaceWith(envoltura);
  inferior.append(pie, etiqueta);
  envoltura.append(caja, inferior);

  // Botones de página
  pie.addEventListener("click", e => {
    const b = e.target.closest("button");
    if (b && !b.disabled) mostrarPagina(lang, Number(b.dataset.pagina));
  });

  // Cambio de cantidad por página
  select.addEventListener("change", () => {
    const antes = select.getBoundingClientRect().top;

    porPagina[lang] = Number(select.value);
    ajustarAltura(lang);
    mostrarPagina(lang, 1);

    // Mantiene el selector en el mismo lugar de la pantalla
    const despues = select.getBoundingClientRect().top;
    window.scrollBy({ top: despues - antes, behavior: "instant" });
  });

  ajustarAltura(lang);
  mostrarPagina(lang, 1);
}

// ===== Modo claro / oscuro =====
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

// ===== Marca en el menú la sección que estás viendo =====
const enlaces = document.querySelectorAll("#menu a");
const observador = new IntersectionObserver(entradas => {
  entradas.forEach(e => {
    if (e.isIntersecting) {
      enlaces.forEach(a => a.classList.toggle("activo", a.getAttribute("href") === "#" + e.target.id));
    }
  });
}, { rootMargin: "-40% 0px -55% 0px" });
document.querySelectorAll("section.lenguaje, footer").forEach(s => observador.observe(s));

// ===== Recalcular alturas al cambiar el tamaño de la ventana =====
function recalcular() {
  for (const lang in datos) {
    ajustarAltura(lang);
    mostrarPagina(lang, paginaActual[lang] || 1);
  }
}
let temporizador;
window.addEventListener("resize", () => {
  clearTimeout(temporizador);
  temporizador = setTimeout(recalcular, 150);
});
window.addEventListener("load", recalcular);