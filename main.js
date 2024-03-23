const todoInput = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");

// Function to create a new todo item
function createTodoItem(text, completed = false) {
  const todoItem = document.createElement("div");
  todoItem.classList.add("flex", "items-center", "justify-between", "bg-white", "shadow-md", "rounded-md", "px-4", "py-2");

  const todoCheckbox = document.createElement("input");
  todoCheckbox.type = "checkbox";
  todoCheckbox.checked = completed;
  todoCheckbox.classList.add("mr-2");

  const todoText = document.createElement("span");
  todoText.textContent = text;
  todoText.classList.add("flex-1", "mr-2");
  if (completed) {
    todoText.classList.add("line-through", "text-gray-400");
  }

  const deleteButton = document.createElement("button");
  deleteButton.innerHTML = '<i class="fas fa-trash text-red-500"></i>';
  deleteButton.classList.add("focus:outline-none");
  deleteButton.addEventListener("click", () => deleteTodo(todoItem));

  todoItem.appendChild(todoCheckbox);
  todoItem.appendChild(todoText);
  todoItem.appendChild(deleteButton);

  return todoItem;
}

// Function to add a new todo
function addTodo() {
  const todoText = todoInput.value.trim();
  if (todoText) {
    const newTodo = createTodoItem(todoText);
    todoList.appendChild(newTodo);
    todoInput.value = "";
  }
}

// Function to delete a todo
function deleteTodo(todoItem) {
  todoList.removeChild(todoItem);
}

// Add event listener for the input field
todoInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    addTodo();
  }
});
