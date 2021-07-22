let miImage = document.querySelector('img');
miImage.onclick = function () {
    let miSrc = miImage.getAttribute('src');
    if (miSrc === 'images/1.jpg') {
      miImage.setAttribute('src','images/2.jpg');
    } else {
      miImage.setAttribute('src', 'images/1.jpg');
    }
}
let miBoton = document.querySelector('button');
let miTitulo = document.querySelector( 'h1');
function estableceNombreUsuario() {
  let miNombre = prompt('Introduzca su nombre.');
  if(!miNombre) {
    estableceNombreUsuario();
  } else {
    localStorage.setItem('nombre', miNombre);
    miTitulo.innerHTML = 'Naturaleza es vida, ' + miNombre;
  }
}
miBoton.onclick = function() {
    estableceNombreUsuario();
}