// Función para aplicar los cambios según el tamaño de la pantalla
function applyStyles() {
  const screenWidth = window.innerWidth;

  // Obtener NodeList de elementos que necesitas cambiar
  const contentSubcontainerOnes = document.querySelectorAll(
    ".content-subcontainer-one"
  );
  const carousels = document.querySelectorAll(".carousel");
  const children = document.querySelectorAll(".child");
  const marqueeContainer = document.querySelectorAll(".marquee-container");
  const marquees = document.querySelectorAll(".marquee");

  // Aplicar los cambios según el tamaño de la pantalla
  if (screenWidth <= 968) {
    contentSubcontainerOnes.forEach((element) => {
      element.style.setProperty("--transform", "none");
    });
    carousels.forEach((element) => {
      element.style.setProperty("--duration", "21.7425s");
    });
    children.forEach((element) => {
      element.style.setProperty("--transform", "none");
    });
    marqueeContainer.forEach((element) => {
      element.style.setProperty("--transform", "none");
    });
    marquees.forEach((element) => {
      element.style.setProperty("--duration", "21.7425s");
    });
  } else {
    contentSubcontainerOnes.forEach((element) => {
      element.style.setProperty("--transform", "rotate(-90deg)");
    });
    carousels.forEach((element) => {
      element.style.setProperty("--duration", "8.32s");
    });
    children.forEach((element) => {
      element.style.setProperty("--transform", "rotate(90deg)");
    });
    marqueeContainer.forEach((element) => {
      element.style.setProperty("--transform", "rotate(-90deg)");
    });
    marquees.forEach((element) => {
      element.style.setProperty("--duration", "5.2s");
    });
  }
}

// Aplicar los estilos al cargar la página
applyStyles();

// Escuchar el evento de cambio de tamaño de la ventana
window.addEventListener("resize", applyStyles);

const canvas = document.getElementById("miCanvas");
const ctx = canvas.getContext("2d");

// Crea una nueva imagen
const img = new Image();

// Asigna la ruta de la imagen
img.src = "/assets/sec7-canvas.png"; // Reemplaza esto con la ruta correcta de tu imagen

// Espera a que la imagen se cargue antes de dibujarla en el canvas
img.onload = function () {
  // Dibuja la imagen en el canvas
  ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
};
