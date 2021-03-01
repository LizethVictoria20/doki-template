/**
 * This file is just a silly example to show everything working in the browser.
 * When you're ready to start on your site, clear the file. Happy hacking!
 **/

const container = document.querySelector('#app')

const title = document.createElement('h1')
title.innerText = 'Pomme'
title.className = 'text-center'

const cardContainer = document.createElement('div')
cardContainer.className = 'card-container grid grid-cols-3 '

fetch('/data.json')
  .then(response => response.json())
  .then(data => {
    const objFruits = Object.values(data)
    objFruits.map((fruit) => {
      for (let i = 0; i < fruit.length; i++) {
        console.log(fruit[i])
        const fruitContainer = document.createElement('div')
        fruitContainer.className = 'fruitContainer shadow-2xl m-12 text-center h-40 w-52 relative p-6 rounded-lg bg-white'

        const imgFruit = document.createElement('img')
        imgFruit.src = fruit[i].img

        const nameFruit = document.createElement('p')
        nameFruit.innerText = fruit[i].name
        nameFruit.className = 'absolute inset-x-0 bottom-0 mb-4'

        cardContainer.appendChild(fruitContainer)
        fruitContainer.appendChild(imgFruit)
        fruitContainer.appendChild(nameFruit)
      }

    })

  })

container.appendChild(title)
container.appendChild(cardContainer)
