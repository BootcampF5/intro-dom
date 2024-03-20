//let title = document.getElementById('title-dom')
let title = document.querySelector('#title-dom')
//console.log(title)
//title.textContent = "<h2>hola, soy un <h2>"
title.innerHTML = "<h2>hola, soy un h2 <h2>"

let containerButtons = document.getElementById('container-button')
//console.log(containerButtons)
let button = document.createElement('button')
button.textContent = "Boton 1"
//console.log(button)
containerButtons.appendChild(button)

button.classList.add('button')
button.classList.remove('button')

//Eventos
//1.capturamos elemento al cual queremos aplicar un evento
let patata = document.getElementById('button-click')

//2.comprobamos que se ha llamado bien el elemnto html que queremos modificar
console.log(patata)

//3. aplicamos el evento al elemento que hemos capturado
patata.addEventListener('click', function() {
    console.log('soy un evento click')
    printTextInConsole()
})

const printTextInConsole = () => {
    console.log('soy un texto en consola')
}





