const itemForm = document.getElementById("item-form");
const itemInput = document.getElementById("item-input");
const itemList = document.getElementById("item-list");
const cliearBtn = document.getElementById("clear-btn");

function addItem(e) {
  e.preventDefault();
  const newItem = itemInput.value;
  if (newItem === "") {
    alert("Please Add An Item !");
    return;
  }
  itemList.innerHTML += `
    <th scope="row">1</th>
    <td>${newItem}</td>
    <td><button class="btn btn-danger item-remove"><i class="bi bi-trash3"></i></button></td>
  </tr>
  `;
  itemInput.value = "";
  checkInterFace();
}

function removeItem(e) {
  if (e.target.parentElement.classList.contains("item-remove")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
}

function clearList() {
  itemList.innerHTML = "";
}

function checkInterFace() {
  const items = document.querySelectorAll(".item");

  if (items === 0) {
    console.log("Item Not Found !");
  } else {
    console.log(items);
  }
}
checkInterFace();

// Event Listener !
itemForm.addEventListener("submit", addItem);
itemList.addEventListener("click", removeItem);
cliearBtn.addEventListener("click", clearList);
