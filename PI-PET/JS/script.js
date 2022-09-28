/*
Use Strict serve pro javascript identificar e mostrar se houver algum erro */
'use strict'

/*
 */
let photo = document.getElementById('fotinho');
let file = document.getElementById('flImage');

photo.addEventListener('click', () => {
    file.click();
});



/*
mostrar imagem antes de enviar no submit
 */
file.addEventListener('change', () => {

    if (file.files.length <= 0) {
        return;
    }

    let reader = new FileReader();

    reader.onload = () => {
        photo.src = reader.result;
    }

    reader.readAsDataURL(file.files[0]);
});


/*
mostrar senha
 */

let formu = document.getElementById('formu');
var input = document.querySelector('#input input');
var img = document.querySelector('#input img');
var visivel = false;
img.addEventListener('mousedown', function () {
  visivel = true;
  input.type = 'text';
});
window.addEventListener('mouseup', function (e) {
  if (visivel) visivel = !visivel;
  input.type = 'password';
});





  



  