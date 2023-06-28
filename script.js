const container = document.querySelector(".fondoPresentacion");
const canvas = document.getElementById("matrix");

function matrix() {
  const ctx = canvas.getContext("2d");
  let width = container.clientWidth;
  let height = container.clientHeight;
  canvas.width = width;
  canvas.height = height;
  const columns = Math.floor(width / 20) + 1;
  const yPosition = Array(columns).fill(0);

  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const alphabetLength = alphabet.length;

  const fillStyle = "rgba(17, 24, 32, 0.1)";
  const font = "20px monospace";

  const animationSpeed = 2; // Valor para ajustar la velocidad de la animación (menor valor = más lenta)
  const updateInterval = 80; // Intervalo de actualización en milisegundos

  function drawMatrix() {
    ctx.fillStyle = fillStyle;
    ctx.fillRect(0, 0, width, height);
    ctx.font = font;

    for (let ind = 0; ind < columns; ind++) {
      const y = yPosition[ind];
      const randomIndex = Math.floor(Math.random() * alphabetLength);
      const text = alphabet[randomIndex];
      const x = ind * 20;
      ctx.fillStyle = "#5ABFA3";
      ctx.fillText(text, x, y);

      if (y > 80 + Math.random() * 10000) {
        yPosition[ind] = 0;
      } else {
        yPosition[ind] += 20; // Ajustar la velocidad de la animación aquí
      }
    }
  }

  setInterval(() => {
    drawMatrix();
  }, updateInterval);
}

matrix();

/// RESPONSIVE ///

let menuVisible = false;

function mostrarOcultarMenu() {
  if (menuVisible) {
    document.getElementById("nav").classList = "";
    menuVisible = false;
  } else {
    document.getElementById("nav").classList = "responsive";
    menuVisible = true;
  }
}

function seleccionar() {
  // Ocultar el menú una vez que se selecciona una opción
  document.getElementById("nav").classList = "";
  menuVisible = false;
}