function  gravar() {  //Função para gravar dados no banco de dados
    var id = firebase.database().ref().child("Users");
    var nomedono = document.getElementById('nomedono').value;
    var email = document.getElementById('email').value;
    var raca = document.getElementsByName('raca');
    if(raca[0].checked){      
        var raca = raca[0].value;
    }else{
        var raca = document.getElementById('raca').value;
    }    
    var sexo = document.getElementsByName('sexo');
    if(sexo[0].checked){
        var sexo = sexo[0].value;
    }else{
        var sexo = sexo[1].value;
    }
    var senha = document.getElementById('password').value;
    var nomepet = document.getElementById('nomepet').value;
    var dtnasc = document.getElementById('dtnasc').value;    
    var refer = firebase.database().ref('Users/' + id.push().key); //Cria referência para o nó   
    refer.set({  
      Nome: nomedono,    
      Nomepet:nomepet,
      Email:email,
      Senha:senha,
      Datanascimento:dtnasc,
      Raca:raca,
      Sexo:sexo
    });  

    console.log('done', id, nomedono, nomepet, email, senha, dtnasc, raca, sexo);

    document.getElementById('nomedono').value='';
    document.getElementById('email').value='';
    raca.value='';
    sexo.value='';
    document.getElementById('password').value='';
    document.getElementById('nomepet').value='';
    document.getElementById('dtnasc').value='';
    alert('OK');  
}