import './style.css'
/* import { setupCounter } from './counter.ts' */
const btnAddItem = document.querySelector<HTMLButtonElement>(".btnAddItem") as HTMLButtonElement;
const btnRemoveItem = document.querySelector(".btnRemoveItem") as HTMLButtonElement;
const inputFilt = document.querySelector("input") as HTMLInputElement;
const ul = document.querySelector("ul") as HTMLElement;

const orderList: string[] = [];

//Add items
function addItem(item:string) {
  orderList.push(item);
}

function updateList() {
  ul.innerHTML = "";
  orderList.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = item;
    ul.appendChild(li);
  });
  
   inputFilt.value= "";
}

//Remove one item
function removeItem(item:string) {
  let index = orderList.indexOf(item);
  if (index > -1) {
    orderList.splice(index, 1);
  }
  updateList();
}

btnAddItem.addEventListener("click", () => {
  if (inputFilt.value.trim() !== "") {
    addItem(inputFilt.value );
    updateList();
    console.log(orderList);
  } else {
    console.log("lägg till objekt");
  }
});

btnRemoveItem.addEventListener("click", () => {
  if (inputFilt.value.trim() !== "") {
    removeItem(inputFilt.value.trim());
  } else {
    console.log("lägg till objekt");
  }
});