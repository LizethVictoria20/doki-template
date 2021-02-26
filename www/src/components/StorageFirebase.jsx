import React, { useEffect, useState } from 'react'
import '../../public/index.css'
import { app } from '../config/base';

const db = app.firestore()

const StorageFirebase = () => {
    const [fileUrl, setFileUrl] = useState(null)

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
        }).then(() => {
            console.log("añadido")
        }).catch((err) => {
            console.log(err)
        })
    }

    return (
        <div className="m-32">
            <h1 className="text-form text-center text-indigo-100 pb-8">New Template</h1>
            <form onSubmit={onSubmit} className="form h-64 grid gap-1 w-2/5 shadow-2xl p-8 h-96 text-center">
                <input type="text" name="name" placeholder="Name" />
                <input type="text" name="description" placeholder="Description" />
                <input type="text" name="owner" placeholder="owner" />
                <input type="text" name="id" placeholder="id" />
                <input type="file" className="rounded" onChange={onFileChange} />
                <button className="button-form bg-indigo-100 w-24 rounded">Submit</button>
            </form>
        </div>
    )
}

export default StorageFirebase;