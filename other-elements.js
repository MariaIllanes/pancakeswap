const arrowButton = document.querySelector(".other-element-button");
const buttonContainer = document.querySelector(".other-element-container");
const scrollThreshold = 0.25;

// Función para llevar al usuario al inicio de la página
arrowButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Desplazamiento suave para llevar al usuario al inicio de la página.
  });

  arrowButton.style.transform = "scale(0.95)";

  // Restaurar el tamaño del botón después de 500 ms
  setTimeout(function () {
    arrowButton.style.transform = "scale(1)";
  }, 300);
});

// Función para controlar la visibilidad de la sección en función del desplazamiento
function toggleSectionVisibility() {
  const scrollPosition = window.scrollY;
  const pageHeight = document.body.clientHeight;
  if (scrollPosition >= pageHeight * scrollThreshold) {
    buttonContainer.style.display = "block"; // Muestra la sección si el usuario ha desplazado un 20% de la página
  } else {
    buttonContainer.style.display = "none"; // Oculta la sección si el usuario está por debajo del 20% de desplazamiento
  }
}

// Agregar un evento scroll a la ventana
window.addEventListener("scroll", toggleSectionVisibility);

// Asegúrate de verificar la visibilidad de la sección al cargar la página
toggleSectionVisibility();
