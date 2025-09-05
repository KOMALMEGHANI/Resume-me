// Function to add a task
function addTask() {
  const taskInput = document.getElementById("taskInput");
  const taskList = document.getElementById("taskList");

  if (taskInput.value === "") {
    alert("⚠️ Please enter a task!");
    return;
  }

  // Create list item
  const li = document.createElement("li");
  li.textContent = taskInput.value;

  // Add buttons for each task
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("task-btns");

  // Complete button
  const completeBtn = document.createElement("button");
  completeBtn.textContent = "✔";
  completeBtn.classList.add("complete-btn");
  completeBtn.onclick = () => {
    li.classList.toggle("completed");
  };

  // Delete button
  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "✖";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    taskList.removeChild(li);
  };

  btnDiv.appendChild(completeBtn);
  btnDiv.appendChild(deleteBtn);
  li.appendChild(btnDiv);

  // Add to list
  taskList.appendChild(li);

  // Clear input
  taskInput.value = "";
}
