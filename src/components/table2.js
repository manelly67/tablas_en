import {
  gestion_vendedor,
  vendedor_gastos,
  vendedor_gestion,
  vendedor_ventas,
} from "../assets/prices";
import { arrayProjects } from "../assets/text-content";

function insertTable2(parentDiv) {
  // Datos de la tabla
  const filas = [
    { modulo: arrayProjects[0]["projectDescription4_array"][4][0], precio: vendedor_ventas, obsequio: 2 },
    { modulo: arrayProjects[0]["projectDescription4_array"][4][1], precio: vendedor_gastos, obsequio: 2 },
    {
      modulo: arrayProjects[0]["projectDescription4_array"][4][3],
      precio: vendedor_gestion,
      obsequio: 2,
    },
  ];

  const total = filas.reduce((acc, f) => acc + f.precio, 0);
  const totalObs = filas.reduce((acc, f) => acc + f.obsequio, 0);

  // Crear tabla
  const tabla = document.createElement("table");
  tabla.className = "tabla-precios";

  // Encabezado
  const thead = document.createElement("thead");
  const trHead = document.createElement("tr");

  const thVacio = document.createElement("th");
  const thPrecio = document.createElement("th");
  thPrecio.textContent = "us$";
  const thObsequio = document.createElement("th");
  thObsequio.textContent = arrayProjects[0]["projectDescription4_array"][4][5];

  trHead.append(thVacio, thPrecio, thObsequio);
  thead.appendChild(trHead);
  tabla.appendChild(thead);

  // Cuerpo
  const tbody = document.createElement("tbody");

  filas.forEach((f) => {
    const tr = document.createElement("tr");

    const tdModulo = document.createElement("td");
    tdModulo.textContent = f.modulo;

    const tdPrecio = document.createElement("td");
    tdPrecio.textContent = f.precio;

    const tdObsequio = document.createElement("td");
    tdObsequio.textContent = f.obsequio;

    tr.append(tdModulo, tdPrecio, tdObsequio);
    tbody.appendChild(tr);
  });

  // Fila de total (sin la columna de obsequio)
  const trTotal = document.createElement("tr");
  trTotal.className = "fila-total";
  const tdTotalVacio = document.createElement("td");
  const tdTotalPrecio = document.createElement("td");
  tdTotalPrecio.textContent = total;
  const tdTotalObsequio = document.createElement("td");

  trTotal.append(tdTotalVacio, tdTotalPrecio, tdTotalObsequio);
  tbody.appendChild(trTotal);

  // Fila "Hoja de Gestión Completa"
  const trCompleta = document.createElement("tr");
  trCompleta.className = "fila-completa";
  const tdCompletaModulo = document.createElement("td");
  tdCompletaModulo.textContent = arrayProjects[0]["projectDescription4_array"][4][4];
  const tdCompletaPrecio = document.createElement("td");
  tdCompletaPrecio.textContent = gestion_vendedor;
  const tdCompletaObsequio = document.createElement("td");
  tdCompletaObsequio.textContent = totalObs;

  trCompleta.append(tdCompletaModulo, tdCompletaPrecio, tdCompletaObsequio);
  tbody.appendChild(trCompleta);

  tabla.appendChild(tbody);

  // Append final al div
  parentDiv.appendChild(tabla);
}

export { insertTable2 };
