
const fs = require('fs');

//objeto criado
const pessoa = {
    nome : 'Maria',
    sobrenome : 'Sousa',
    idade : 24
}

const pessoaJson = JSON.stringify(pessoa);

//gravar em um arquivo
fs.writeFileSync('pessoa.json',pessoaJson);


//recuperar o conteudo do arquivo JSON
const pessoaContent = fs.readFileSync('pessoa.json');

//converter em objeto e trocar o nome
const pessoaConvertidoObjeto = JSON.parse(pessoaContent);
pessoaConvertidoObjeto.nome = "Mauro Neves";

//converter para json
const pessoaJsonNova = JSON.stringify(pessoaConvertidoObjeto);

fs.writeFileSync('pessoa.json',pessoaJsonNova);

const novaPessoa = fs.readFileSync('pessoa.json');

console.log(novaPessoa.toString());