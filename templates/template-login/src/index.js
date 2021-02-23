/* Template to login */

const container = document.querySelector('#app')
container.className = 'h-screen  bg-no-repeat relative'

const containerLogin = document.createElement('div')
containerLogin.className = 'containerLogin bg-white w-2/4 absolute top-1/4 left-1/4 grid grid-cols-2 shadow-2xl'

const bgCard = document.createElement('div')
bgCard.className = 'bgCard text-center p-8'
const containerForm = document.createElement('div')
containerForm.className = 'text-center p-8'


// IMG
const img = document.createElement('img')
img.src = '/form.png'
bgCard.appendChild(img)

// FORM
const title = document.createElement('h1')
title.innerText = 'Login your account'
title.className = 'text-3xl text-indigo-500'

const form = document.querySelector("#form")
containerForm.appendChild(form)




// CHILDREN
container.appendChild(containerLogin)
containerLogin.appendChild(bgCard)
containerLogin.appendChild(containerForm)
containerForm.appendChild(title)
containerForm.appendChild(form)