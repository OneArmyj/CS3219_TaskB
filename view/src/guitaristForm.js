import React, { useState } from 'react'
import api from './api'

const GuitaristForm = () => {
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [guitar, setGuitar] = useState("");
    const [band, setBand] = useState("");
    const [age, setAge] = useState("");
    const [type, setType] = useState("add");

    const clearInput = () => {
        setName("");
        setGuitar("");
        setBand("");
        setAge("");
    }

    const onClickHandler = () => {
        if (type === "add") {
            setType("edit");
        } else {
            setType("add")
        }
    }
    const onSubmitHandler = e => {
        e.preventDefault();
        if (type === "add") {
            api.post('/api/guitarists', { name: name, guitar: guitar, band: band, age: age })
                .then(res => console.log(res))
                .catch(err => console.warn(err))
        } else {
            const linkExt = name.replace(/\W/g, "%20");
            api.put(`/api/guitarists/${linkExt}`, { name: name, guitar: guitar, band: band, age: age })
                .then(res => console.log(res))
                .catch(err => console.warn(err))
        }

        clearInput();
    }

    return (
        <div>
            <form onSubmit={onSubmitHandler}>
                {type === "add"
                    ? (
                        <div>
                            <label>Name of guitarist to add</label>
                            <input required value={name} onChange={e => setName(e.target.value)} />
                        </div>
                    )
                    : (
                        <>
                            <div>
                                <label>Name of guitarist to edit</label>
                                <input required value={name} onChange={e => setName(e.target.value)} />
                            </div>
                            <div>
                                <label>Name of new guitarist</label>
                                <input required value={newName} onChange={e => setNewName(e.target.value)} />
                            </div>
                        </>
                    )}

                <div>
                    <label>What is his signature guitar?</label>
                    <input required value={guitar} onChange={e => setGuitar(e.target.value)} />
                </div>
                <div>
                    <label>What is his band?</label>
                    <input required value={band} onChange={e => setBand(e.target.value)} />
                </div>
                <div>
                    <label>What is his age?</label>
                    <input required value={age} onChange={e => setAge(e.target.value)} />
                </div>
                <div>
                    {type === "add"
                        ? (
                            <button type="submit">
                                Add Guitarist
                            </button>
                        )
                        : (
                            <button type="submit">
                                Edit Guitarist
                            </button>
                        )}
                    <button onClick={onClickHandler}>Toggle between add or edit</button>
                </div>
            </form>
        </div>
    )
}

export default GuitaristForm
