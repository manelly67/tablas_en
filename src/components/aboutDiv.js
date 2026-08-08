import { arrayProjects } from "../assets/text-content";

const aboutDiv = (parentDiv) => {
  const section = document.createElement("section");
  section.className = "descripcion-sistema";

  // Intro
  const introDesc = document.createElement("p");
  introDesc.textContent = arrayProjects[0]["arrayAbout"][0];
  section.appendChild(introDesc);

  const contieneTitulo = document.createElement("p");
  contieneTitulo.textContent = arrayProjects[0]["arrayAbout"][1];
  section.appendChild(contieneTitulo);

  // Lista numerada principal
  const listaPrincipal = document.createElement("ol");
  listaPrincipal.className = "lista-principal";

  // 1. Catálogo de productos
  const item1 = document.createElement("li");
  item1.textContent = arrayProjects[0]["arrayAbout"][2][0];
  const subLista1 = document.createElement("ul");
  
  arrayProjects[0]["arrayAbout"][2][1].forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    subLista1.appendChild(li);
  });
  item1.appendChild(subLista1);
  listaPrincipal.appendChild(item1);

  // 2. Gestión de ventas
  const item2 = document.createElement("li");
  item2.textContent = arrayProjects[0]["arrayAbout"][3][0];
  const subLista2 = document.createElement("ul");
  arrayProjects[0]["arrayAbout"][3][1].forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    subLista2.appendChild(li);
  });
  item2.appendChild(subLista2);
  listaPrincipal.appendChild(item2);

  // 3. Costeo de ventas
  const item3 = document.createElement("li");
  item3.textContent = arrayProjects[0]["arrayAbout"][4][0];
  const descItem3 = document.createElement("p");
  descItem3.textContent = arrayProjects[0]["arrayAbout"][4][1];
  item3.appendChild(descItem3);
  const subLista3 = document.createElement("ul");
  arrayProjects[0]["arrayAbout"][4][2].forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    subLista3.appendChild(li);
  });
  item3.appendChild(subLista3);
  listaPrincipal.appendChild(item3);

  // 4. Gestión de gastos
  const item4 = document.createElement("li");
  item4.textContent = arrayProjects[0]["arrayAbout"][5][0];
  const subLista4 = document.createElement("ul");
  arrayProjects[0]["arrayAbout"][5][1].forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    subLista4.appendChild(li);
  });
  item4.appendChild(subLista4);
  listaPrincipal.appendChild(item4);

  // 5. Estado de resultados gerencial
  const item5 = document.createElement("li");
  item5.textContent = `📈  ${arrayProjects[0]["arrayAbout"][6][0]}`;
  const descItem5 = document.createElement("p");
  descItem5.textContent = arrayProjects[0]["arrayAbout"][6][1];
  item5.appendChild(descItem5);
  const subLista5 = document.createElement("ul");
  arrayProjects[0]["arrayAbout"][6][2].forEach((texto) => {
    const li = document.createElement("li");
    li.textContent = texto;
    subLista5.appendChild(li);
  });
  item5.appendChild(subLista5);

  const cierreItem5 = document.createElement("p");
  cierreItem5.textContent = arrayProjects[0]["arrayAbout"][6][3];
  item5.appendChild(cierreItem5);

  listaPrincipal.appendChild(item5);

  section.appendChild(listaPrincipal);

  // Nota final
  const notaFinal = document.createElement("p");
  notaFinal.textContent =
    arrayProjects[0]["arrayAbout"][7][0];
  section.appendChild(notaFinal);

  // Anexar la sección donde corresponda
  parentDiv.appendChild(section);
};

export { aboutDiv };
