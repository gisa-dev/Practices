var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
       // Typical action to be performed when the document is ready:
       var respuesta = JSON.parse(xhttp.responseText);
       var personas = respuesta.personas;

       var salida = "";

       for(var i = 0; i < personas.length; i++){
           salida += `<li> ${personas[i].nombre} su nickname es ${personas[i].nickname}</li>`;
       }

       document.getElementById('personas').innerHTML = salida;
    }
};
xhttp.open("GET", "personas.json", true);
xhttp.send();