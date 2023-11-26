// ---------------- SEC14-REAC-NAV-BOTTOM -------------------//

// Para que salga el menú del segundo icono

var optionTwo = document.querySelector(".option-two");
var menuTwo = document.querySelector(".menu-two");

var timeoutId;

optionTwo.addEventListener("mouseover", function () {
  clearTimeout(timeoutId); // Limpiar cualquier tiempo de espera pendiente
  showMenu();
});

optionTwo.addEventListener("mouseout", function () {
  timeoutId = setTimeout(hideMenu, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuTwo.addEventListener("mouseover", keepMenuVisible);

menuTwo.addEventListener("mouseout", function () {
  timeoutId = setTimeout(hideMenu, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenu() {
  menuTwo.style.visibility = "visible";
  menuTwo.style.pointerEvents = "auto";
}

function keepMenuVisible() {
  clearTimeout(timeoutId); // Limpiar cualquier tiempo de espera pendiente
  menuTwo.style.visibility = "visible";
  menuTwo.style.pointerEvents = "auto";
}

function hideMenu() {
  menuTwo.style.visibility = "hidden";
  menuTwo.style.pointerEvents = "none";
}

// Para que salga el menú del tercer icono

var optionThree = document.querySelector(".option-three");
var menuThree = document.querySelector(".menu-three");

var timeoutIdThree;

optionThree.addEventListener("mouseover", function () {
  clearTimeout(timeoutIdThree); // Limpiar cualquier tiempo de espera pendiente
  showMenuThree();
});

optionThree.addEventListener("mouseout", function () {
  timeoutIdThree = setTimeout(hideMenuThree, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuThree.addEventListener("mouseover", keepMenuVisibleThree);

menuThree.addEventListener("mouseout", function () {
  timeoutIdThree = setTimeout(hideMenuThree, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenuThree() {
  menuThree.style.visibility = "visible";
  menuThree.style.pointerEvents = "auto";
}

function keepMenuVisibleThree() {
  clearTimeout(timeoutIdThree); // Limpiar cualquier tiempo de espera pendiente
  menuThree.style.visibility = "visible";
  menuThree.style.pointerEvents = "auto";
}

function hideMenuThree() {
  menuThree.style.visibility = "hidden";
  menuThree.style.pointerEvents = "none";
}

// Para que salga el menú del cuarto icono

var optionFour = document.querySelector(".option-four");
var menuFour = document.querySelector(".menu-four");

var timeoutIdFour;

optionFour.addEventListener("mouseover", function () {
  clearTimeout(timeoutIdFour); // Limpiar cualquier tiempo de espera pendiente
  showMenuFour();
});

optionFour.addEventListener("mouseout", function () {
  timeoutIdFour = setTimeout(hideMenuFour, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuFour.addEventListener("mouseover", keepMenuVisibleFour);

menuFour.addEventListener("mouseout", function () {
  timeoutIdFour = setTimeout(hideMenuFour, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenuFour() {
  menuFour.style.visibility = "visible";
  menuFour.style.pointerEvents = "auto";
}

function keepMenuVisibleFour() {
  clearTimeout(timeoutIdFour); // Limpiar cualquier tiempo de espera pendiente
  menuFour.style.visibility = "visible";
  menuFour.style.pointerEvents = "auto";
}

function hideMenuFour() {
  menuFour.style.visibility = "hidden";
  menuFour.style.pointerEvents = "none";
}

// Para que salga el menú del quinto icono

var optionFive = document.querySelector(".option-five");
var menuFive = document.querySelector(".menu-five");

var timeoutIdFive;

optionFive.addEventListener("mouseover", function () {
  clearTimeout(timeoutIdFive); // Limpiar cualquier tiempo de espera pendiente
  showMenuFive();
});

optionFive.addEventListener("mouseout", function () {
  timeoutIdFive = setTimeout(hideMenuFive, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

menuFive.addEventListener("mouseover", keepMenuVisibleFive);

menuFive.addEventListener("mouseout", function () {
  timeoutIdFive = setTimeout(hideMenuFive, 300); // Establecer un tiempo de espera antes de ocultar el menú
});

function showMenuFive() {
  menuFive.style.visibility = "visible";
  menuFive.style.pointerEvents = "auto";
}

function keepMenuVisibleFive() {
  clearTimeout(timeoutIdFive); // Limpiar cualquier tiempo de espera pendiente
  menuFive.style.visibility = "visible";
  menuFive.style.pointerEvents = "auto";
}

function hideMenuFive() {
  menuFive.style.visibility = "hidden";
  menuFive.style.pointerEvents = "none";
}
