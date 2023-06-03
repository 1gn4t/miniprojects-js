// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert");
const form = document.querySelector(".grocery-form");
const grocery = document.getElementById("grocery");
const submitBtn = document.querySelector(".submit-btn");
const container = document.querySelector(".grocery-container");
const list = document.querySelector(".grocery-list");
const clearBtn = document.querySelector(".clear-btn");

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// submit form
form.addEventListener("submit", addItem);
// clear items
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener("DOMContentLoaded", setupItems);
// ****** FUNCTIONS **********
// add item
function addItem(evt) {
  evt.preventDefault();
  const value = grocery.value;
  const id = new Date().getTime().toString();

  if (value && !editFlag) {
    // append item
    list.appendChild(createItem(value, id));
    // show container
    container.classList.add("show-container");
    // display alert
    displayAlert("item added to the list", "success");
    // add to local storage
    addToLocalStorage(id, value);
    // set back to default
    setBackToDefault();
  } else if (value && editFlag) {
    editElement.textContent = value;
    displayAlert("value changed", "success");
    // edit local storage
    editLocalStorage(editID, value);
    // set back to default
    setBackToDefault();
  } else {
    displayAlert("please enter value", "danger");
  }
}
// create item
function createItem(value, id) {
  // clone template
  const clone = tmpl.content.cloneNode(true);
  // add value
  clone.querySelector(".title").textContent = value;
  // add id
  clone.querySelector(".grocery-item").setAttribute("data-id", id);
  // event on buttons
  const deleteBtn = clone.querySelector(".delete-btn");
  const editBtn = clone.querySelector(".edit-btn");
  deleteBtn.addEventListener("click", deleteItem);
  editBtn.addEventListener("click", editItem);

  return clone;
}
// display alert
function displayAlert(text, action) {
  alert.textContent = text;
  alert.classList.add(`alert-${action}`);
  // remove alert
  setTimeout(function () {
    alert.textContent = "";
    alert.classList.remove(`alert-${action}`);
  }, 1000);
}
// delete item
function deleteItem(evt) {
  const elem = evt.currentTarget.closest(".grocery-item");
  const id = elem.dataset.id;
  list.removeChild(elem);
  if (list.children.length === 0) container.classList.remove("show-container");
  displayAlert("item removed", "danger");
  setBackToDefault();
  // remove from local storage
  removeFromLocalStorage(id);
}
// edit item
function editItem(evt) {
  const elem = evt.currentTarget.closest(".grocery-item");
  // set edit item
  editElement = elem.firstElementChild;
  // set form value
  grocery.value = editElement.textContent;
  editFlag = true;
  editID = elem.dataset.id;
  console.log(editID);
  submitBtn.textContent = "edit";
}
// clear items
function clearItems() {
  const items = document.querySelectorAll(".grocery-item");
  if (items.length > 0) items.forEach((item) => list.removeChild(item));
  container.classList.remove("show-container");
  displayAlert("empty list", "danger");
  setBackToDefault();
  // localStorage.removeItem("list");
}
// set back to default
function setBackToDefault() {
  grocery.value = "";
  editFlag = false;
  editID = "";
  submitBtn.textContent = "submit";
}

// ****** LOCAL STORAGE **********
// add item
function addToLocalStorage(id, value) {
  const grocery = { id, value };
  let items = localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
  items.push(grocery);
  localStorage.setItem("list", JSON.stringify(items));
}
// delete item
function removeFromLocalStorage(id) {
  let items = getLocalStorage();
  items = items.filter((item) => item.id !== id);
  localStorage.setItem("list", JSON.stringify(items));
}
// edit item
function editLocalStorage(id, value) {
  let items = getLocalStorage();
  items = items.map((item) => {
    if (item.id === id) {
      item.value = value;
    }
    return item;
  });
  localStorage.setItem("list", JSON.stringify(items));
}
function getLocalStorage() {
  return localStorage.getItem("list")
    ? JSON.parse(localStorage.getItem("list"))
    : [];
}
// ****** SETUP ITEMS **********
function setupItems() {
  let items = getLocalStorage();
  if (items.length > 0) {
    items.forEach((item) => {
      container.classList.add("show-container");
      createItem(item.value, item.id);
      list.appendChild(createItem(item.value, item.id));
    });
  }
}
