document.getElementById("formTask").addEventListener("submit", saveTask);

function saveTask(e) {
  let title = document.getElementById("title").value;
  let description = document.getElementById("description").value;
  console.log(description);

  let task = {
    title,
    description,
  };

  if (localStorage.getItem("tasks") === null) {
    let tasks = [];
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  } else {
    let tasks = JSON.parse(localStorage.getItem("tasks"));
    tasks.push(task);
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }

  getTasks();
  document.getElementById("formTask").reset();
  e.preventDefault();
}

function deleteTask(title) {
  console.log(title);
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  for (let i = 0; i < tasks.length; i++) {
    if (tasks[i].title == title) {
      tasks.splice(i, 1);
    }
  }

  localStorage.setItem("tasks", JSON.stringify(tasks));
  getTasks();
}

function getTasks() {
  let tasks = JSON.parse(localStorage.getItem("tasks"));
  let tasksView = document.getElementById("tasks");
  tasksView.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let title = tasks[i].title;
    let description = tasks[i].description;

    tasksView.innerHTML += `<div class="card">
            <div class="tareaCreada">
                <span class="card-title truncate titulo">${title}</span>
                <p class ="truncate">${description}</p>
                <a href="#" onclick="deleteTask('${title}'); M.toast({html: 'Tarea eliminada', classes: 'rounded'})" class="btn-floating btn waves-effect waves-light red" title="Borrar tarea">
                    <i class="material-icons">delete</i>
                </a>
            </div>
        </div>`;
  }
}

getTasks();

// Auto Init Materialize

document.addEventListener("DOMContentLoaded", function () {
  M.AutoInit();
});
