//let title = document.getElementById('title-dom')
let title = document.querySelector('#title-dom')
console.log(title)
//title.textContent = "<h2>hola, soy un h2>"
title.innerHTML = "<h2>hola, soy un h2>"

let containerButtons = document.getElementById('container-button')
console.log(containerButtons)
let button = document.createElement('button')
button.textContent = "Boton 1"
console.log(button)
containerButtons.appendChild(button)

button.classList.add('button')
button.classList.remove('button')


