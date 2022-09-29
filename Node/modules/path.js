const path = require ('path');

// apenas o nome do arquivo atual
console.log(path.basename(__filename))

// pega o nome do diretorio atual

console.log(path.dirname(__filename))
// extenção do arquivo
console.log(path.extname(__filename));