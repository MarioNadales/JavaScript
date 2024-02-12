const completo = document.querySelector('.completo');
const categoria = document.querySelectorAll('.categoria');
const numImagenes = document.querySelectorAll('.img').length;
let posicionActual = 0;

// Función para centrar el carrusel al cargar la página
function centrarCarrusel() {
  const anchoImagen = 100 / numImagenes;
  const centro = (100 - (anchoImagen * 2)) / 2; 
  const operacion = (posicionActual * -100) + centro;
  completo.style.transform = `translateX(${operacion}%)`;
}

window.onload = function() {
  centrarCarrusel();
};

categoria.forEach((cadaCategoria, i) => {
  categoria[i].addEventListener('click', () => {
    posicionActual = i;
    centrarCarrusel();
    categoria.forEach((cadaCategoria, i) => {
      categoria[i].classList.remove('activo');
    });
    categoria[i].classList.add('activo');
  });
});
