const titulo = document.querySelector("h1");

const generarColor = () => {
  let color = Math.floor(Math.random() * 255) + 1;
  // 0<color<=255
  console.log(color);

  return color;
};

setInterval(() => {
  titulo.style.color = `rgb(${generarColor()},${generarColor()},${generarColor()})`;
}, 1000);
