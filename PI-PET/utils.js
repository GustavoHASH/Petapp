function createLogin() {
    let email = document.getElementsById("email").value;
    let senha = document.getElementsById("password").value;
    //Crio usuário com email e senha
    firebase.auth().createUserWithEmailAndPassword(email, senha).then((user) => {
        console.log('usuario', user);
        alert('Usuário cadastrado com sucesso!');
    }).catch(err => {
        console.log('error', error);
    })
}

function  gravar() {  //Função para gravar dados no banco de dados
    let formu = document.getElementById('formu');
    let nomedono = document.getElementById('nomedono').value;
    let email = document.getElementById('formu').value;
    let senha = document.getElementById('formu').value;
    let nomepet = document.getElementById('formu').value;
    let dtnasc = document.getElementById('formu').value;        
    var refer = firebase.database().ref('Users/' + nomedono);
    refer.set({
      Nomepet: nomepet,
      Email: email,
      Senha: senha,
      Datanascimento: dtnasc
    });  
    console.log('done', nomedono, nomepet, email, senha, dtnasc);
    var nomedono = document.getElementById('formu')='';
    var email = document.getElementById('formu')='';
    var senha = document.getElementById('formu')='';
    var nomepet = document.getElementById('formu')='';
    var dtnasc = document.getElementById('formu')='';
    alert('OK');  
}



//app
/**
 * Função para cadastro com email e senha
 */
 function createLogin() {
    let email = formu.email.value;
    let senha = formu.password.value;
    //Crio usuário com email e senha
    firebase.auth().createUserWithEmailAndPassword(email, senha).then((user) => {
        console.log('usuario', user);        
    }).catch(err => {
        console.log('error', error);
    })
}

/*
*Previne de ter redirecionamentos
*para outras páginas, ao submeter o formulário ele cria o usuário
*/
formu.onsubmit = function (e) {
    e.preventDefault();
    createLogin();           
}

/**
 * Função para login
 */
function loginEmail() {
    let email = document.getElementsById('email').value;
    let senha = document.getElementsById('password').value;
    //Faço login e autentico usuário com email e senha
    firebase.auth().signInWithEmailAndPassword(email, senha).then(() =>{
        console.log('Usuário criado com sucesso');
    }).catch(err => {
        console.log('error', error);
    })
}

//Faço logout do meu usuário
function logout() {
    firebase.auth().signOut().then(() => {
        alert("usuário deslogou");
    })  
  }


  var nomedono = formu.nomedono.value='';
    var email = formu.email.value='';
    var senha = formu.password.value='';
    var nomepet = formu.nomepet.value='';
    var dtnasc = formu.dtnasc.value='';
    alert('OK');