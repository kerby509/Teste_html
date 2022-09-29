const fs = require ('fs');
const path = require('path');

// criar uma pasta
 fs.mkdir(path.join(__dirname, "/test"), (error) =>{

    if (error){
      return  console.log('Erro',error)  
    }

    console.log("Pasta foi criado com sucesso!!!")

 })


// criar um arquivo

fs.writeFile(path.join(__dirname, '/test','test.txt'), 'Hello world!!', (error) =>{
    if (error){
        return console.log("ERRO", error);
    }

    console.log("Conteudo addicionado com sucesso!!!!")
})

// addicionar um arquivo

fs.appendFile(path.join(__dirname, '/test','test.txt'), 'Hello  Node!!', (error) =>{
    if (error){
        return console.log("ERRO", error);
    }

    console.log("Arquivo modificado com sucesso!!!!")
})