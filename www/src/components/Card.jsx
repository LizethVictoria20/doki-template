import React, { useState, useEffect, useRef, Fragment } from "react";
import { app } from "../config/base";

const db = app.firestore();

const CardModal = ({
  showModal,
  item,
  onClose,
  copyMessage,
  copyToClipboard,
}) => (
    <>
      {showModal === item.id && (
        <div className="modal">
          <div className="modal-contenido">
            <button onClick={onClose} className="float-right">
              X
          </button>
            <h1 className="nameTemplate pb-4">{item.name}</h1>
            <p>
              If you want to download this template copy and paste the command in
              your terminal.
          </p>
            <p className="command bg-gray-50 mt-11 w-11/12 p-2 text-center h-12 rounded-md ml-8">
              {`npx create-snowpack-app page-example --template @doki-template/
          ${item.packageName}`}
            </p>
            <br />
            <button
              className="buttonCopy w-1/6 h-9 mt-8"
              onClick={(e) =>
                copyToClipboard(
                  e,
                  `npx create-snowpack-app page-example --template @doki-template/
            ${item.packageName}`
                )
              }
            >
              Copy
          </button>
            {copyMessage}
          </div>
        </div>
      )}
    </>
  );

const Card = () => {
  const [templates, setTemplates] = useState([]);
  const [showModalByID, setShowModalById] = useState(null);
  const [copyMessage, setCopyMessage] = useState(null);

  const copyToClipboard = (btnEvent, textToCopy) => {
    btnEvent.preventDefault();
    try {
      navigator.clipboard.writeText(textToCopy);
      setCopyMessage("Copied!");
    } catch (err) {
      setCopyMessage(
        "Ups... something went wrong! Try again in another browser"
      );
    }
  };

  useEffect(() => {
    const fetchTemplates = async () => {
      const templatescol = await db.collection("templates").get();
      setTemplates(
        templatescol.docs.map((document) => {
          return document.data();
        })
      );
    };
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
  }, []);

  return (
    <div className="container-cards grid grid-cols-3 text-center m-32">
      {templates.map((template) => (
        <Fragment key={template.id}>
          <article
            className="card h-3/4 shadow-2xl rounded mx-4 m-20 relative"
            onClick={() => setShowModalById(template.id)}
          >
            <img src={template.img} alt="" className="imgTemplate" />
            <h1 className="mt-8">{template.name}</h1>
            <p className="absolute inset-x-0 mb-4">{template.owner}</p><br />
            <button className="buttonDownload">Download</button>
          </article>
          <CardModal
            showModal={showModalByID}
            item={template}
            copyMessage={copyMessage}
            copyToClipboard={copyToClipboard}
            onClose={() => setShowModalById(null)}
          />
        </Fragment>
      ))}
    </div>
  );
};

export default Card;
