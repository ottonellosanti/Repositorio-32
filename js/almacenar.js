const item = document.getElementById("item");
const agregar = document.getElementById("agregar");

const contenedor = document.getElementById("contenedor");
const limpiar = document.getElementById("limpiar");


const itemList = JSON.parse(localStorage.getItem("itemList")) || [];


function mostrarElementos() {
  contenedor.innerHTML = ""; 
  itemList.forEach((item) => {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    contenedor.appendChild(listItem);
  });
}


agregar.addEventListener("click", () => {
  const nuevoItem = item.value.trim();
  if (nuevoItem !== "") {
    itemList.push(nuevoItem);
    localStorage.setItem("itemList", JSON.stringify(itemList));
    item.value = ""; 
    mostrarElementos(); 
  }
});


limpiar.addEventListener("click", () => {
  itemList.length = 0; 
  localStorage.removeItem("itemList");
  mostrarElementos(); 
});


window.addEventListener("load", () => {
  mostrarElementos();
});







