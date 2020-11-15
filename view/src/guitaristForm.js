import React, { useState } from 'react'
import api from './api'
import { Form, Button } from 'reactstrap'

const GuitaristForm = ({ guitarists, setGuitarists }) => {
    const [name, setName] = useState("");
    const [newName, setNewName] = useState("");
    const [guitar, setGuitar] = useState("");
    const [band, setBand] = useState("");
    const [age, setAge] = useState("");
    const [type, setType] = useState("add");
    const [error, setError] = useState("");

    const clearInput = () => {
        setName("");
        setNewName("");
        setGuitar("");
        setBand("");
        setAge("");
    }

    const onClickHandler = () => {
        setError("");
        if (type === "add") {
            setType("edit");
        } else {
            setType("add")
        }
    }
    const onSubmitHandler = async e => {
        e.preventDefault();
        if (type === "add") {
            await api.post('/api/guitarists', { name: name, guitar: guitar, band: band, age: age })
                .then(res => {
                    api.get("/api/guitarists").then(res => {
                        setGuitarists(res.data.data)
                    })
                })
                .catch(err => console.warn(err))
        } else {
            if (guitarists.filter(x => x.name === name).length === 0) {
                setError("Guitarists does not exist, hence cannot be edited.");
            } else {
                const linkExt = name.replace(/\W/g, "%20");
                await api.put(`/api/guitarists/${linkExt}`, { name: newName, guitar: guitar, band: band, age: age })
                    .then(res => {
                        api.get("/api/guitarists").then(res => {
                            setGuitarists(res.data.data)
                            setError("")
                        })
                    })
                    .catch(err => console.warn(err));
            }
        }

        clearInput();
    }

    return (

        <Form className="pt-3" onSubmit={onSubmitHandler} style={{ width: "40%", margin: "auto", textAlign: "left" }}>
            {type === "add"
                ? (
                    <div className="form-group">
                        <label>Name of guitarist to add</label>
                        <input className="form-control" autoFocus required value={name} onChange={e => setName(e.target.value)} />
                    </div>
                )
                : (
                    <>
                        <div className="form-group">
                            <label>Name of guitarist to edit</label>
                            <input className="form-control" autoFocus required value={name} onChange={e => setName(e.target.value)} />
                            <p style={{color: "red"}}>{error}</p>
                        </div>
                        <div className="form-group">
                            <label>Name of new guitarist</label>
                            <input className="form-control" required value={newName} onChange={e => setNewName(e.target.value)} />
                        </div>
                    </>
                )}

            <div className="form-group">
                <label>What is his signature guitar?</label>
                <input className="form-control" required value={guitar} onChange={e => setGuitar(e.target.value)} />
            </div>
            <div className="form-group">
                <label>What is his band?</label>
                <input className="form-control" required value={band} onChange={e => setBand(e.target.value)} />
            </div>
            <div className="form-group">
                <label>What is his age?</label>
                <input className="form-control" required value={age} onChange={e => setAge(e.target.value)} />
            </div>
            <div className="form-group d-flex justify-content-between" >
                {type === "add"
                    ? (
                        <Button type="submit">
                            Add Guitarist
                        </Button>
                    )
                    : (
                        <Button type="submit">
                            Edit Guitarist
                        </Button>
                    )}
                <Button onClick={onClickHandler}>Toggle between add or edit</Button>
            </div>
        </Form>
    )
}

export default GuitaristForm
