function addTask(event) {
  // Verificar si la tecla presionada es "Enter" (código 13) o si se hizo clic en el botón "Add"
  if (event.keyCode === 13 || event.target.id === "addButton") {
    var input = document.getElementById("taskInput");
    var task = input.value;
    input.value = "";

    if (task === "") {
      alert("¡Por favor ingresa una tarea!");
      return;
    }

    var taskList = document.getElementById("taskList");
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(task));

    // Agregar el evento de doble clic para marcar la tarea como completada
    li.addEventListener("dblclick", function() {
      this.classList.toggle("completed");
    });

    taskList.appendChild(li);
  }
}
