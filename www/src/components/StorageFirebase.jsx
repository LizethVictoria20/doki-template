import React, { useEffect, useState } from 'react'
import { app } from '../config/base';

const db = app.firestore()

export const StorageFirebase = () => {
    const [ fileUrl, setFileUrl ] = useState(null)

    const onFileChange = async (e) => {
        const file = e.target.files[0];
        const storageRef = app.storage().ref();
        const fileRef = storageRef.child(file.name)
        await fileRef.put(file);
        setFileUrl(await fileRef.getDownloadURL());
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const description = e.target.description.value;
        const owner = e.target.owner.value;
        const id = e.target.id.value;
        if (!name || !description || !owner || !id) {
            return
        }
        db.collection("templates").doc(id).set({
            name,
            img: fileUrl,
            description,
            owner,
            id
        }).then(()=> {
            console.log("añadido")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <>
            <h1>New Template</h1>
            <form onSubmit={onSubmit}>
                <input type="file" onChange={onFileChange}/>
                <input type="text" name="name" placeholder="Name"/>
                <input type="text" name="description" placeholder="Description"/>
                <input type="text" name="owner" placeholder="owner"/>
                <input type="text" name="id" placeholder="id"/>
                <button>Submit</button>
            </form>
        </>
    )
}
