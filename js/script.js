// Pestañas: enseña el CV elegido y oculta el otro
const pestanas = document.querySelectorAll(".pestana");
const cvs = document.querySelectorAll(".cv");

function mostrarCV(pestana) {
  cvs.forEach(cv => cv.classList.add("oculto"));
  document.querySelector(pestana.getAttribute("href")).classList.remove("oculto");

  pestanas.forEach(p => p.classList.remove("activa"));
  pestana.classList.add("activa");
}

pestanas.forEach(pestana => {
  pestana.addEventListener("click", event => {
    event.preventDefault();   // que el enlace no salte a la sección
    mostrarCV(pestana);
  });
});

mostrarCV(pestanas[0]);


// Año actual en el pie
document.getElementById("anio").textContent = new Date().getFullYear();
