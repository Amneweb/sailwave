const colores = ["yellow", "blue", "red", "white", "green", "brown", "violet"];
// todas las filas de resultados
const rows = document.querySelectorAll("tr.summaryrow");
// agrega un id a cada <tr>
rows.forEach((value, key) => (value.id = `puesto-${key + 1}`));
let primeraColumna;
// todas las columnas
const columnas = document.querySelector("colgroup").span;
const cols = document.querySelectorAll("colgroup > col");
// busca la posicion de la primer columna con clase 'race' (porque la cantidad de columnas iniciales pueden variar segun lo que quiera el usuario)
primeraColumna = [...cols].findIndex((col) => col.classList.contains("race"));
// el total de columnas con clase 'race' es el total de columnas con resultados
const totalColumnasResultados = document.querySelectorAll(".race").length;
// fila de encabezados
const encabezados = document.querySelectorAll("tr.titlerow > th");
// para calcular la cantidad de flotas, se fija en cuantas veces se repite el encabezado de la primer columna con resultados
const regata = encabezados[primeraColumna].innerText;
let flotas = 1;
let i = primeraColumna;
while (i < columnas && encabezados[i + 1].innerText === regata) {
  i++;
  console.log("i", i);
  flotas++;
}
const regatasCorridas = totalColumnasResultados / flotas;
// iteracion por filas de resultados en la que se busca el contenido de cada celda. Si el contenido es &nbsp, a la celda se le agrega la clase "esconder". Si la celda contiene un resultado, se agrega el diamante, cuyo color dependera de la ubicacion de la celda en el grupo de columnas de resultados de una regata
// La variable querySel contiene todas las celdas de la fila
// La variable celdas contienen solo las celdas de resultados
let celdas = [];
let querySel = [];
let j = 0;
rows.forEach((row, key) => {
  querySel[key] = document.querySelectorAll(`tr#puesto-${key + 1}>td`);
});

for (let j = 0; j < rows.length; j++) {
  celdas[j] = [...querySel[j]].slice(
    primeraColumna,
    primeraColumna + totalColumnasResultados
  );

  let v = 0;
  for (let i = 0; i < totalColumnasResultados; i++) {
    if (i % flotas === 0) {
      v = 0;
    }
    if (celdas[j][i].innerHTML == "&nbsp;") {
      celdas[j][i].classList.add("esconder");
    } else {
      const newDiv = document.createElement("span");
      newDiv.style.color = colores[v];
      newDiv.innerHTML = "&nbsp; &#9830;";
      celdas[j][i].appendChild(newDiv);
    }
    v++;
  }
}
// fila completa de encabezados
const titlerow = [...document.querySelectorAll(".titlerow > th")];
// encabezados de regatas
const titleRegatas = titlerow.slice(
  primeraColumna,
  primeraColumna + totalColumnasResultados
);
// de las columnas de la tabla, me quedo solo con las que tienen resultados
const encabezadosRegatas = [...cols].slice(
  primeraColumna,
  primeraColumna + totalColumnasResultados
);
// agrega la clase 'esconder' a una cantidad de columnas igual a la cantidad de flotas menos 1 (esto se hace para cada regata)
let v = 0;
encabezadosRegatas.forEach((nodo, key) => {
  if (key % flotas === 0 && key < primeraColumna + totalColumnasResultados) {
    v = 0;
    nodo.classList.add("esconder");
  } else {
    if (v < flotas - 1) nodo.classList.add("esconder");
  }
  v++;
});
// lo mismo que antes pero para las celdas con encabezados
let w = 0;
titleRegatas.forEach((nodo, key) => {
  if (key % flotas === 0 && key < primeraColumna + totalColumnasResultados) {
    w = 0;
    nodo.classList.add("esconder");
  } else {
    if (w < flotas - 1) nodo.classList.add("esconder");
  }
  w++;
});
// se pone display none a todas las celdas y columnas con clase 'esconder'
const escondidos = document.querySelectorAll(".esconder");
escondidos.forEach((elemento) => (elemento.style.display = "none"));
