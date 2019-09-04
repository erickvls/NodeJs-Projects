const formulario = document.querySelector('form');

formulario.addEventListener('submit', (event) => {
    event.preventDefault();
    const inputValue = document.querySelector('input').value

    if(!inputValue){
        alert('Input should be filled')
        return
    }
    fetch(`http://localhost:3000/cotacoes?ativo=${inputValue}`).then((response) => {
        response.json().then((data) => {
            document.querySelector('h4').innerHTML = 'Searching...'
            console.log(data)
            console.log(data.description)
            document.querySelector('h4').innerHTML = data.description
            document.querySelector('p#price').innerHTML = `Price: ${data.price}`
            document.querySelector('p#symbol').innerHTML= `Symbol: ${data.symbol}`
        })
    })
});