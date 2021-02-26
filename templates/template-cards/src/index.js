/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const container = document.querySelector('#app')

const title = document.createElement('h1')
title.innerText = 'Pomme'
title.className = 'text-center'

const cardContainer = document.createElement('div')
cardContainer.className = 'card-container grid grid-cols-3'

fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    for (let i = 0; i < data.fruits.length; i++) {
      console.log(data[i])
    }
  })

container.appendChild(title)
container.appendChild(cardContainer)