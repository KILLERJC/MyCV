/*
*
*  Conexion a Random User para cargar los datos en la pagina.
*  Este se ejecuta apenas carga todo el DOM
*
*/

document.addEventListener('DOMContentLoaded', todoCargado , false);

function todoCargado(){
    getJSON('https://randomuser.me/api/',function(err,data){
        if(err !== null) {
            /* Algo salio mal, dejamos los valores por defecto*/
            console.log("No pudimos conectarnos!!");
        } else {
            let datos;
            datos = data.results[0];
            document.getElementById('imagenpersona').setAttribute('src',datos.picture.large);
            document.getElementById('nombrepersona').innerHTML = datos.name.title + " " + datos.name.first + " " + datos.name.last;
            document.getElementById('resumenpersona').innerHTML = "Tengo " + datos.dob.age + " años y vivo en " + datos.location.city + ", " + datos.location.state + ", " + datos.location.country + ". " + document.getElementById('resumenpersona').innerHTML;
        }
    });

    document.getElementById('formcontacto').addEventListener('submit', function(event) {
      event.preventDefault();
      alert("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
    });
}

let getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onload = function() {
      let status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
};

