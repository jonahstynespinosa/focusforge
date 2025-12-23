let items = [];

const taskInput = document.querySelector(".taskInput");
const taskBtn = document.querySelector(".taskBtn");
const taskList = document.querySelector(".task");

function createTask(text, isCompleted = false) {
  const li = document.createElement("li");
  li.classList.add("taskItem");
  if (isCompleted) li.classList.add("completed");

  const label = document.createElement("span");
  label.textContent = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "❌";
  deleteBtn.classList.add("deleteBtn");

  // Toggle complete when clicking the text
  label.addEventListener("click", () => {
    li.classList.toggle("completed");
  });

  // Delete task
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.appendChild(label);
  li.appendChild(deleteBtn);
  taskList.appendChild(li);
}

function handleAdd() {
  const text = taskInput.value.trim();
  if (text === "") return;

  createTask(text);
  items.push(text);

  taskInput.value = "";
  taskInput.focus();
}

// Button click
taskBtn.addEventListener("click", handleAdd);

// Enter key in input
taskInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") handleAdd();
});
