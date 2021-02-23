import React, { useState, useEffect } from 'react';
import styles from '../assets/styles/components/Card.module.css'


const Card = () => {
  const [template, setTemplates] = React.useState([])

  useEffect(() => {
    fetch('https://doki-templates-default-rtdb.firebaseio.com/templates.json')
      .then(response => response.json())
      .then(data => {
        console.log(data)

        setTemplates(data)
      })
  }, [])

  return (
    <div>
      <h1>Temp</h1>
      <ul>
        {
          Object.keys(template).map((id) =>
            <li key={id}>{template[id].description}</li>
          )
        }
      </ul>
    </div>
  )
}



/* return (
  < div className="container-cards grid grid-cols-3 text-center m-32" >
    <div className="h-60 shadow-2xl bg-indigo-200 rounded mx-4 m-20 p-6 relative">
      <h1>Title</h1>
      <p>Description</p>
      <p className="absolute inset-x-0 bottom-0 mb-4">Author</p>
    </div>


    <div className="h-60 shadow-2xl bg-indigo-200 rounded mx-4 m-20 p-6 relative">col 2</div>
    <div className="h-60 shadow-2xl bg-indigo-200 rounded mx-4 m-20 p-6 relative">col 3</div>
  </div >
); */


export default Card;



