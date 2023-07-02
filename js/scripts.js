// Business Logic for ToDoList ------------

function ToDoList() {
  this.tasks = {};
  this.currentId = 0;
}

ToDoList.prototype.addTask = function(task) {
  task.id = this.assignId();
  this.tasks[task.id] = task;
};

ToDoList.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

// Tests for above ^^^

// let toDoList = new ToDoList();
// let task = new Task("Wash car", "Sunday", "Done")
// let task2 = new Task("Go shopping", "Monday", "Not done")
// toDoList.addTask(task);
// toDoList.addTask(task2);

// console.log(toDoList);

ToDoList.prototype.findTask = function(id) {
  if (this.tasks[id] !== undefined) {
    return this.tasks[id];
  }
  return false;
};

ToDoList.prototype.deleteTask = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
}
// Business Logic for Tasks --------------

function Task(description, dueDate, status) {
  this.description = description;
  this.dueDate = dueDate;
}

Task.prototype.toDoItem = function() {
  return this.description + " " + "before" + " " + this.dueDate;
}

// User Interface Logic ---------
let toDoList = new ToDoList();

function listTasks(toDoListToDisplay) {
  let tasksDiv = document.querySelector("div#tasks");
  tasksDiv.innerText = null;
  const ul = document.createElement("ul");
  Object.keys(toDoListToDisplay.tasks).forEach(function(key) {
    const task = toDoListToDisplay.findTask(key);
    const li = document.createElement("li");
    li.append(task.toDoItem());
    li.setAttribute("id", task.id);
    ul.append(li);
  });
  tasksDiv.append(ul);
}

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedTaskDescription = document.querySelector("input#new-task-description").value;
  const inputtedDueDate = document.querySelector("input#new-due-date").value;
  let newTask = new Task(inputtedTaskDescription, inputtedDueDate);
  toDoList.addTask(newTask);
  listTasks(toDoList);
}

window.addEventListener("load", function (){
  document.querySelector("form#new-task").addEventListener("submit", handleFormSubmission);
});


// class Api {
//   constructor(url) {
//     this.url = url
//   }

//   testData = {name: "test", hello: "world"}

//   getData() {
//     return this.testData;
//   }

//   updateData(data) {
//     data = this.testData
//   }

//   deleteData() {
//     this.testData = {}
//   }
// }

// const api = new Api("/test")

// console.log(api.getData())