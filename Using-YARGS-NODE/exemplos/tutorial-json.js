const pessoa = {
    nome : 'Erick',
    sobrenome : 'Vinicius',
    idade : 24
}

console.log(pessoa);

const pessoaJson = JSON.stringify(pessoa);
console.log(pessoaJson);


const pessoaFromJsonToObject = JSON.parse(pessoaJson);

console.log(pessoaFromJsonToObject.nome);