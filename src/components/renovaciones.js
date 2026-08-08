import { arrayProjects } from "../assets/text-content";
import { renovacion_gestion, renovacion_individual } from "../assets/prices";

function insertRenovaciones(parentDiv){


// Datos de la tabla
const filasRenovaciones = [
  { modulo: arrayProjects[0]["projectDescription4_array"][1], precio: renovacion_gestion },
  { modulo: arrayProjects[0]["projectDescription4_array"][2], precio: renovacion_individual },
];

// Crear tabla
const tablaRenovaciones = document.createElement("table");
tablaRenovaciones.className = "tabla-renovaciones";

// Encabezado
const theadRen = document.createElement("thead");
const trHeadRen = document.createElement("tr");

const thVacioRen = document.createElement("th");
const thPrecioRen = document.createElement("th");
thPrecioRen.textContent = "us$";

trHeadRen.append(thVacioRen, thPrecioRen);
theadRen.appendChild(trHeadRen);
tablaRenovaciones.appendChild(theadRen);

// Cuerpo
const tbodyRen = document.createElement("tbody");

filasRenovaciones.forEach((f) => {
  const tr = document.createElement("tr");

  const tdModulo = document.createElement("td");
  tdModulo.textContent = f.modulo;

  const tdPrecio = document.createElement("td");
  tdPrecio.textContent = f.precio;

  tr.append(tdModulo, tdPrecio);
  tbodyRen.appendChild(tr);
});

tablaRenovaciones.appendChild(tbodyRen);
parentDiv.appendChild(tablaRenovaciones);

// Nota final
const notaCompra = document.createElement("p");
notaCompra.className = "nota-compra";
notaCompra.textContent = arrayProjects[0]["projectDescription4_array"][3];
parentDiv.appendChild(notaCompra);


}

export { insertRenovaciones };