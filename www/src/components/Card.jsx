import React, { useState, useEffect } from 'react';
import '../../public/index.css';

const Card = () => {
  const [template, setTemplates] = React.useState([])

  useEffect(() => {
    fetch('https://doki-templates-default-rtdb.firebaseio.com/templates.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        const templateArray = []
        for (const prop in data) {
          const item = data[prop]
          item.id = prop
          templateArray.push(item)
        }
        setTemplates(templateArray)
      })
  }, [])

  return (
    <div className="container-cards grid grid-cols-3 text-center m-32" >
      {
        template.map((item) =>
          <a href={`#miModal-${item.id}`} key={item.id}>
            <div className="h-60 shadow-2xl bg-indigo-200 rounded mx-4 m-20 p-6 relative">
              <h1>{item.name}</h1>
              <p>{item.description}</p>
              <img src="" alt="" />
              <p className="absolute inset-x-0 bottom-0 mb-4">{item.owner}</p>
              <div id={`miModal-${item.id}`} className="modal bg-red-400  top-0 right-0 bottom-0 left-0">

                <div className="modal-contenido bg-indigo-300 w-48 p-4 m-4 relative">
                  <a href="#">X</a>
                  <h1>{item.name}</h1>
                  <p>Download</p>
                  <p className="bg-gray-200">npx create-snowpack-app page-example --template @snowpack/template-login</p>
                </div>
              </div>
            </div>
          </a>
        )
      }
    </div>

  )
}

export default Card;



