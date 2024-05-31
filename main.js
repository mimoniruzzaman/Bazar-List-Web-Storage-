// Selector !
let itemForm = document.getElementById("item-form");
let inputItem = document.getElementById("input-item");
let itemList = document.getElementById("item-list");
let addList = document.getElementById("add-list");
let clearBtn = document.getElementById("clear-btn");
let listAddRemove = document.getElementById("list-add-remove");
let searchForm = document.getElementById("search-form");

// Add Item !
function add(e) {
  // To Stop Browser Reload!!
  e.preventDefault();
  const addItem = inputItem.value;
  if (addItem === "") {
    alert("Please Add An Item !!");
    // emty item remove;
    return;
  }

  addList.innerHTML += `
  <tr class = "item">
    <th scope="row">1</th>
    <td class ="item-name">${addItem}</td>
    <td>
    <button class="btn btn-danger mx-2
    remove-item">
    <i class="bi bi-trash"></i>
    </button>
    </td>
</tr>
  `;

  inputItem.value = "";

  checkInterface();
}

// Search Form !
function search(e) {
  let items = document.querySelectorAll(".item");
  let searchText = e.target.value.toLowerCase();
  items.forEach((item) => {
    // console.log(item.children[1].innerHTML.toLowerCase());
    let itemName = item.children[1].innerHTML.toLowerCase();
    if (itemName.indexOf(searchText) !== -1) {
      item.style.display = "";
    } else {
      item.style.display = "none";
    }
  });
}

// Remove Item !
function removeItem(e) {
  e.preventDefault();
  // console chack
  //   console.log(e.target.parentElement.classList.contains("remove-item"));

  // Real !
  if (e.target.parentElement.classList.contains("remove-item")) {
    e.target.parentElement.parentElement.parentElement.remove();
  }
  checkInterface();
}

// All Clear List !
function clearList(e) {
  e.preventDefault();
  addList.innerHTML = "";
  // listAddRemove.style.display = "none";
}

// Check
function checkInterface() {
  let items = document.querySelectorAll(".item");
  if (items.length === 0) {
    listAddRemove.style.display = "none";
  } else {
    listAddRemove.style.display = "block";
  }
}

// Listener !
clearBtn.addEventListener("click", clearList);
searchForm.addEventListener("input", search);
addList.addEventListener("click", removeItem);
itemForm.addEventListener("submit", add);
