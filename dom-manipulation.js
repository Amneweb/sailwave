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
console.log("total columnas de resultados ", totalColumnasResultados);
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
let querySel = [];
console.log(flotas);
let celdas;
rows.forEach((row, key) => {
  querySel[key] = document.querySelectorAll(`tr#puesto-${key}>td`);
  console.log("celdas query");
  console.log(querySel[key]);
  console.log([...querySel[key]]);
  celdas[key] = [...querySel[key]].slice(
    primeraColumna,
    primeraColumna + totalColumnasResultados
  );
  console.log("celdas ");
  console.log(document.querySelectorAll(`tr#puesto-${key}>td`));
  /* for (let j = 0; j < flotas; j++) {
    if (celdas[j].innerHTML == "&nbsp;") {
      celdas[j].style.display = "none";
    } else {
      celdas[j].style.backgroundColor = "red";
    }
  } */
});
