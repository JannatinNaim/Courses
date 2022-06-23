const form = document.querySelector(".todo_input");
const taskInput = document.querySelector(".todo_input__name");
const taskList = document.querySelector(".tasks_list");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = taskInput.value;
  taskInput.value = "";

  const taskCheck = document.createElement("input");
  taskCheck.type = "checkbox";
  taskCheck.classList.add("task__check");

  taskCheck.addEventListener("click", (e) => {
    if (e.target.checked) {
      e.target.nextElementSibling.classList.add("strike");
    } else {
      e.target.nextElementSibling.classList.remove("strike");
    }
  });

  const taskName = document.createElement("span");
  taskName.classList.add("task__name");
  taskName.textContent = task;

  const taskItem = document.createElement("li");
  taskItem.classList.add("task");
  taskItem.appendChild(taskCheck);
  taskItem.appendChild(taskName);

  taskList.appendChild(taskItem);
});
