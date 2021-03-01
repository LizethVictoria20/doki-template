import React, { useState, useEffect, useRef } from 'react';
import { Link } from "react-router-dom";
import { app } from '../config/base';
import StorageFirebase from './StorageFirebase'


const db = app.firestore()
import '../../public/index.css';

const Card = () => {
  const [templates, setTemplates] = useState([])
  const [copySuccess, setCopySuccess] = useState('');
  const textInput = useRef(null);

  function copyToClipboard(e) {
    textInput.current.select();
    document.execCommand('copy');
    // This is just personal preference.
    // I prefer to not show the the whole text area selected.
    e.target.focus();
    setCopySuccess('Copied!');
  };

  useEffect(() => {

    const fetchTemplates = async () => {
      const templatescol = await db.collection('templates').get()
      setTemplates(templatescol.docs.map(document => {
        return document.data()
      }))
    }
    fetchTemplates();
    // fetch('https://doki-templates-default-rtdb.firebaseio.com/templates.json')
    //   .then(response => response.json())
    //   .then(data => {
    //     console.log(data)
    //     const templateArray = []
    //     for (const prop in data) {
    //       const item = data[prop]
    //       item.id = prop
    //       templateArray.push(item)
    //     }
    //     setTemplates(templateArray)
    //   })
  }, [])



  return (
    <div className="container-cards grid grid-cols-3 text-center m-32" >
      {
        templates.map((item) =>
          <a href={`#miModal-${item.id}`} key={item.id}>
            <div className="card h-3/4 shadow-2xl bg-indigo-200 rounded mx-4 m-20 relative">
              <img src={item.img} alt="" className="imgTemplate" />
              <h1 className="mt-8">{item.name}</h1>
              <p className="absolute inset-x-0 mb-4">{item.owner}</p>
              <div className="bottom-text">
                <p className="mt-16">{item.description}</p>
                <div class="btn">
                  <button class="buttonDownload bg-indigo-300 w-2/5 h-9 mt-8 rounded-md">Download</button>
                </div>
              </div>

              <div id={`miModal-${item.id}`} className="modal bg-red-400  top-0 right-0 bottom-0 left-0">

                <div className="modal-contenido bg-indigo-200 w-48 p-4 m-4 relative">
                  <a href="#" className="float-right">X</a>
                  <h1 className="nameTemplate pb-4">{item.name}</h1>
                  <p>If you want to download this template copy and paste the command in your terminal.</p>
                  <textarea className="command bg-gray-50 mt-11 w-11/12 p-2 text-center h-12 rounded-md" ref={textInput} type="text">{`npx create-snowpack-app page-example --template @snowpack/${item.packageName}`}</textarea> <br />
                  <button class="buttonCopy bg-indigo-300 w-1/6 h-9 mt-8 rounded-md" onClick={copyToClipboard}>
                    Copy
                  </button>
                  {copySuccess}
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



