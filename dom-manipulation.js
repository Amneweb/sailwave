const colores = ["yellow", "blue", "red", "white", "green", "brown", "violet"];
const rows = document.querySelectorAll("tr.summaryrow");
console.log("cantidad de filas: ", rows.length);
rows.forEach((value, key) => (value.id = `puesto-${key + 1}`));
let primeraColumna;
const columnas = document.querySelector("colgroup").span;
console.log("columnas: ", columnas);
const cols = document.querySelectorAll("colgroup > col");
console.log(cols);
primeraColumna = [...cols].findIndex((col) => col.classList.contains("race"));
console.log("primera Columna ", primeraColumna);

const totalColumnasResultados = document.querySelectorAll(".race").length;

const encabezados = document.querySelectorAll("tr.titlerow > th");

const regata = encabezados[primeraColumna].innerText;
console.log(regata);
let flotas = 1;
let i = primeraColumna;
while (i < columnas && encabezados[i + 1].innerText === regata) {
  i++;
  console.log("i", i);
  flotas++;
}
const regatasCorridas = totalColumnasResultados / flotas;
console.log("total columnas de resultados ", totalColumnasResultados);
console.log("regatas corridas ", regatasCorridas);
console.log("flotas", flotas);
let celdas = [];
let querySel = [];
let j = 0;
rows.forEach((row, key) => {
  querySel[key] = document.querySelectorAll(`tr#puesto-${key + 1}>td`);
});

console.log("query sel luego del forEach", querySel);
for (let j = 0; j < rows.length; j++) {
  celdas[j] = [...querySel[j]].slice(
    primeraColumna,
    primeraColumna + totalColumnasResultados
  );
  console.log("celdas en fila ", j, celdas[j]);
  let v = 0;
  for (let i = 0; i < totalColumnasResultados; i++) {
    if (i % flotas === 0) {
      v = 0;
    }
    if (celdas[j][i].innerHTML == "&nbsp;") {
      console.log("celda en posicion ", i, "en fila ", j, " ", celdas[j][i]);
      celdas[j][i].style.display = "none";
      querySel[j];
      /* celdas[j][i].classList.add("esconder"); */
    } else {
      celdas[j][i].style.backgroundColor = colores[v];
    }
    v++;
  }
}
const encabezadosRegatas = [...cols].slice(
  primeraColumna,
  primeraColumna + totalColumnasResultados
);
console.log(encabezadosRegatas);
/* let v = 0;
encabezadosRegatas.forEach((nodo, key) => {
  if (key % flotas === 0 && key < primeraColumna + totalColumnasResultados) {
    v = 0;
    nodo.classList.add("esconder");
  } else {
    if (v < flotas - 1) nodo.classList.add("esconder");
  }
  v++;
}); 
const escondidos = document.querySelectorAll(".esconder");
escondidos.forEach((elemento) => (elemento.style.display = "none"));*/
