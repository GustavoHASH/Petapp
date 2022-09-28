function loginGoogle(){

    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(provider).then(resposta =>{
        console.log('usuario', resposta.credential.accessToken);
    }).catch(erro =>{
        console.log('erro', erro);
    })
}