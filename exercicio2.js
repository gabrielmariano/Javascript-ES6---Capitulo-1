const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const idade = usuarios.map(usuario => usuario.idade);
   
   console.log(idade);

   //--------------------------------------------------------

   const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const filter = usuarios.filter(function(idade) {
       return idade >= 18 && empresa === 'Rocketseat';
   })
   
   console.log(filter);

   //--------------------------------------------------------
   const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];


   const find = arr.find(function(empresa) {
       return empresa === Google;
   })

   console.log(find);

   //---------------------------------------------------------
   
   
   const arr = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
   ];

   const newArr = arr.map(function(idade) {
       return idade * 2;
   })

   const filter = usuarios.filter(function(idade) {
       return idade <= 50;
    })

   console.log(filter);

