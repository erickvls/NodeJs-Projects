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
            console.log(data);
        })
    })
});