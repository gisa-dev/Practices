(function() {
  // Variables
  var lista = document.getElementById("lista"),
    tareaInput = document.getElementById("tareaInput"),
    btnNuevaTarea = document.getElementById("btn-agregar");

  // Funciones

  var agregarTarea = function() {
    var tarea = tareaInput.value,
      nuevaTarea = document.createElement("li"),
      enlace = document.createElement("a"),
      contenido = document.createTextNode(tarea);

    if (tarea === "") {
      tareaInput.setAttribute("placeholder", "Agregar una tarea valida");
      tareaInput.className = "error";
      return false;
    }

    enlace.appendChild(contenido); // Agregamos el contenido al enlace
    enlace.setAttribute("href", "#"); // Le establecemos un atributo href
    nuevaTarea.appendChild(enlace); // Agregamos el enlace (a) a la nueva tarea (li)
    lista.appendChild(nuevaTarea); // Agregamos la nueva tarea a la lista

    tareaInput.value = "";

    for (var i = 0; i <= lista.children.length - 1; i++) {
      lista.children[i].addEventListener("click", function() {
        this.parentNode.removeChild(this);
      });
    }
  };

  var comprobarInput = function() {
    tareaInput.className = "";
    tareaInput.setAttribute("placeholder", "Agrega tu tarea");
  };

  var eliminarTarea = function() {
    this.parentNode.removeChild(this);
  };

  // Eventos

  btnNuevaTarea.addEventListener("click", agregarTarea); // Agregar Tarea
  tareaInput.addEventListener("click", comprobarInput); // Comprobar Input
  for (var i = 0; i <= lista.children.length - 1; i++) {
    lista.children[i].addEventListener("click", eliminarTarea); // Borrar Elementos de la lista
  }
}());
