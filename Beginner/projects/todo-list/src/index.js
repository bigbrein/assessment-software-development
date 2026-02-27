// I hate js bro 😭
let i = 0;
let todoList = [];


let addTodoField = document.getElementById("new-todo-field")
let list_container = document.getElementById("todo-list-container");

class TodoItem {
  constructor(desc, id) {
    this.desc = String(desc);
    this.id = Number(id);
    this.isDone = false;
  }
}

function updateVisual() {
  list_container.innerHTML = ""

  todoList.forEach(e => {
      list_container.innerHTML += `
      <li class="todo-list-item">
        <div class="todo-item-name-and-done">
          <label for="todo-check" class="todo-check-visual"></label>
          <p>${e.desc}</p>
        </div>

        <input
          type="checkbox"
          name="Done"
          id="todo-check"
          class="todo-list-item-checkbox"
          hidden
        />

        <button class="delete-todo-button" id="${e.id}" onclick="delete_button(id)">
          <i class="fa-solid fa-trash"></i>
        </button>
      </li>
      `
    });
}

function delete_button(id) {
  todoList = todoList.filter(e => e.id != id)
  updateVisual()
}

addTodoField.addEventListener("keydown", (e) => {
    if(e.key == "Enter" && addTodoField.value.trim() != "") {
      i++;
      const newTodo = new TodoItem(addTodoField.value, i)
      addTodoField.value = ""
      addTodo(newTodo);
    }
})

function addTodo(todoItem) {
    todoItem.id = todoList.length + 1;

    todoList.push(todoItem)

    updateVisual();
}