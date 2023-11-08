const arrowButton = document.querySelector(".other-element-button");

// Agrega un evento de clic al botón
arrowButton.addEventListener("click", function () {
  // Desplaza la página hacia la parte superior
  window.scrollTo({
    top: 0,
    behavior: "smooth", // Para un desplazamiento suave, si es compatible con el navegador
  });

  arrowButton.style.transform = "scale(0.9)";

  // Restaurar el tamaño del botón después de 500 ms
  setTimeout(function () {
    arrowButton.style.transform = "scale(1)";
  }, 500);
});
