import React, { useState, useEffect } from 'react';

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
          <div className="h-60 shadow-2xl bg-indigo-200 rounded mx-4 m-20 p-6 relative" key={item.id}>
            <h1>{item.name}</h1>
            <p>{item.description}</p>
            <p className="absolute inset-x-0 bottom-0 mb-4">{item.owner}</p>
          </div>
        )
      }
    </div>
  )
}

export default Card;



