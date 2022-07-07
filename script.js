const formEl = document.querySelector(".todo-form");
console.log(formEl);

formEl.addEventListener("submit", function (event) {
  event.preventDefault();

  const inputEl = formEl.querySelector("input");
  const newTask = inputEl.value;
  const newTaskHTML = `<li><input type="checkbox" /> <span>${newTask}</span></li>`;

  const listEl = document.querySelector(".task-list");
  const newLI = document.createElement("li");
  newLI.innerHTML = newTaskHTML;
  listEl.insertAdjacentHTML("beforeend", newTaskHTML);
  inputEl.value = "";
});
