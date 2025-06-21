const input = document.getElementById('nombreIpt');
const button = document.getElementById('saludobtn');
const contenedor = document.getElementById('contenedorSld');

function saludar() {
  const nombre = input.value;
  contenedor.innerHTML = "Hola, " + nombre;
}
  button.addEventListener('click', saludar);
