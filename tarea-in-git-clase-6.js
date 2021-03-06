/*
TAREA: Empezar preguntando cuánta gente hay en el grupo familiar.
Crear tantos inputs+labels como gente haya para completar la edad de cada integrante.
Al hacer click en "calcular", mostrar en un elemento pre-existente la mayor edad, la menor edad y el promedio del grupo familiar.

PONER CSS EN ARCHIVO HTML ABAJO.
<link rel='stylesheet' type='text/css' media='screen' href='main-bis.css'>
Recorda que tambien se puede crear todo eso con las teclas [ctrl + spacebar] o tambien escribir <html> (+tab)

Punto bonus: Crear un botón para "empezar de nuevo" que empiece el proceso nuevamente, borrando los inputs ya creados (investigar cómo en MDN).
*/

/// Aprendiendo a crear nodos.
const $miHeader = document.querySelector('header'); ///seleccionamos el header ya creado en HTML
const $nuevoParrafo = document.createElement('p'); ///usamos el crear elemento
const $textoParrafo = document.createTextNode("Hola un gusto don."); ///creamos una const que contiene creacion de text node
$nuevoParrafo.appendChild($textoParrafo); ///metemos el texto creado dentro del paragraph.
$miHeader.appendChild($nuevoParrafo); ///concatenamos el header con el parrafo relleno. - metemos el paragraph dentro del header.

const $botonNombre = document.querySelector("#boton-nombre");
$botonNombre.onclick = function(event){
  
  const $nombreUsuario = document.querySelector('#nombre-usuario').value;

  const $h1 = document.querySelector('h1');
  $h1.textContent = `Bienvenid@ ${$nombreUsuario}!`;
  
  event.preventDefault();
}

const $botonSiguiente = document.querySelector("#boton-siguiente");
$botonSiguiente.onclick = function(event){
  
  const $numeroMiembros = document.querySelector("#numero-miembros-familia");
  const numeroMiembros = Number($numeroMiembros.value);
  
  borrarMiembrosAnteriores();
  crearMiembros(numeroMiembros);

  event.preventDefault();
}


document.querySelector("#boton-calcular").onclick = function(event){
  const numeros = obtenerEdadesMiembros();
  mostrarEdad('mayor', calcularMayorEdad(numeros));
  mostrarEdad('menor', calcularMenorEdad(numeros));
  mostrarEdad('promedio', calcularPromedioEdad(numeros));
  mostrarResultados();

  event.preventDefault();
}

function obtenerEdadesMiembros(){
  const $miembroInput = document.querySelectorAll('.miembro input');
  const vectorEdad = [];
  for (let i = 0; i < $miembroInput.length; i++) {
    vectorEdad.push(Number($miembroInput[i].value));
  }

  return vectorEdad;
}

/// Basicamente el error era utilizar el parametro numeroMiembros como fin de indice i
/// Eso se soluciona con $miembros.lenght
/// O bien con una arrow function con el forEach que lo hace por defecto.
/// Alternativa a la arrow function:
function borrarMiembrosAnteriores() {
  const $miembros = document.querySelectorAll('.miembro');

  for (let i = 0; i < $miembros.length; i++) {
    $miembros[i].remove();

  }
}

/// Arrow Function:
/*
function borrarMiembrosAnteriores(numeroMiembros){
  const $miembros = document.querySelectorAll('.miembro');
  for (let i = 0; i < numeroMiembros; i++) {
    $miembros.forEach(miembro => miembro.remove());
  } 
  
}
*/

document.querySelector("#boton-resetear").onclick = resetear;

function crearMiembros(numeroMiembros){
  if(numeroMiembros>0){
    mostrarBotonCalculo()
  } else{
    resetear();
  }

  for (let i = 0; i < numeroMiembros; i++) {
    crearMiembro(i);
  }

}

/// Si NO ES MAYOR A 0 entonces resetea.
function resetear(){
  borrarMiembrosAnteriores();
  ocultarBotonCalculo();
  ocultarResultados();
}

function crearMiembro(indice){
  const $div = document.createElement('div'); 
  $div.className = "miembro"; /// O INTEGRANTE...

  const $label = document.createElement('label'); ///creamos un label
  $label.textContent = `Edad del integrante #${indice + 1}`; ///ok tenemos el label con texto y num y ahora?

  const $input = document.createElement('input'); 
  $input.type = 'number'; 
  
  $div.appendChild($label);
  $div.appendChild($input);

  const $miembros = document.querySelector('#miembros');
  $miembros.appendChild($div);
  
}

function ocultarBotonCalculo(){
  document.querySelector("#boton-calcular").className = "oculto";
}

/// Cambiamos la class del boton de display a espacio vacio (acordate del display 'none' en el CSS).
function mostrarBotonCalculo(){
  document.querySelector("#boton-calcular").className = '';
}

function ocultarResultados(){
  document.querySelector("#resultados").className = 'oculto';
}

function mostrarResultados(){
  document.querySelector("#resultados").className = '';
}


/*
  <div id="resultados" class="oculto">
            <p>La mayor edad es: <strong id="mayor-edad"></strong> </p>
            <p>La menor edad es: <strong id="menor-edad"></strong> </p>
            <p>El promedio de edad es: <strong id="promedio-edad"></strong> </p>
   </div>
*/

function mostrarEdad(tipoDeValor,valor){
  // tipo + edad;
  // es decir en el queryselector de abajo decis dame el elemento que tenga este id Ej: 
  // EJ: dame el elemento que tenga id="mayor-edad" ---> '#mayor-edad'
  document.querySelector(`#${tipoDeValor}-edad`).textContent = valor;
}



/*
TAREA:
Crear una interfaz que permita agregar ó quitar (botones agregar y quitar) inputs+labels para completar el salario anual de cada integrante de la familia que trabaje.
Al hacer click en "calcular", mostrar en un elemento pre-existente el mayor salario anual, menor salario anual, salario anual promedio y salario mensual promedio.

Punto bonus: si hay inputs vacíos, ignorarlos en el cálculo (no contarlos como 0).
*/
