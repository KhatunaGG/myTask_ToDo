const input = document.querySelector("#input");
const taskList = document.querySelector(".task__list");
const add = document.querySelector(".add");

function addTask() {
  if (input.value === "") {
    return;
  } else {
    let li = document.createElement("li");
    taskList.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = input.value;
    li.appendChild(span);
    let button__delete = document.createElement("button");
    button__delete.classList.add("delete");
    button__delete.innerText = "Delete";
    li.appendChild(button__delete);
    let button__edit = document.createElement("button");
    button__edit.classList.add("edit");
    button__edit.innerText = "Edit";
    li.appendChild(button__edit);
  }

  input.value = "";
  input.style.border = "none";
  saveDate();
}

taskList.addEventListener("click", (e) => {
  if (e.target.innerText === "Delete") {
    e.target.parentElement.remove();
    saveDate();
  } else if (e.target.innerText === "Edit") {
    console.log(e.target.closest("li"));
    let eventClosest = e.target.closest("li");
    let span = eventClosest.querySelector("span").innerText;

    input.value = span;
    input.style.border = "2px solid green";
    eventClosest.remove();
    saveDate();
  }
});

function saveDate() {
  localStorage.setItem("taskdata", taskList.innerHTML);
}

function showData() {
  taskList.innerHTML = localStorage.getItem("taskdata");
}
showData();
