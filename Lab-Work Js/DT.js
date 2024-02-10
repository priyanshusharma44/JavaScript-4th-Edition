// Add Task Button Click Event Handler
document.getElementById("addTaskBtn").addEventListener("click", function () {
  const taskInput = document.getElementById("taskInput");
  const taskText = taskInput.value.trim();
  if (taskText !== "") {
    addTask(taskText);
    taskInput.value = "";
  } else {
    alert("Please enter a valid task!");
  }
});

// Function to Add Task
function addTask(taskText) {
  const taskList = document.getElementById("taskList");
  const newTask = document.createElement("li");
  newTask.textContent = taskText;

  // Click Event Handler to Mark Task as Completed
  newTask.addEventListener("click", function () {
    newTask.classList.toggle("completed");
  });

  // Delete Button Creation and Click Event Handler
  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    newTask.remove();
  });

  newTask.appendChild(deleteButton);
  taskList.appendChild(newTask);
}
