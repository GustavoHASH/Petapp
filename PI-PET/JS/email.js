/**
 * Função para cadastro com email e senha
 */
 function createLogin() {
    var email = formu.email.value;
    var senha = formu.password.value;
    //Crio usuário com email e senha
    firebase.auth().createUserWithEmailAndPassword(email, senha).then((user) => {
        console.log('usuario criado', user);        
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
    gravar();        
}

/**
 * Função para login
 */
function loginEmail() {
    var email = document.getElementsById('email').value;
    var senha = document.getElementsById('password').value;
    //Faço login e autentico usuário com email e senha
    firebase.auth().signInWithEmailAndPassword(email, senha).then(() =>{
        console.log("");
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
