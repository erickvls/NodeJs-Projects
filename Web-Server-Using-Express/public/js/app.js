fetch('http://localhost:3000/cotacoes?ativo=PETR4.SAasdasd').then( (response) => {
    response.json().then((data)=>{
        console.log(data.error);
    })
} )