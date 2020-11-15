import React, { useState } from 'react'
import api from './api'
import { Modal, Form, ModalBody, ModalHeader, Button } from 'reactstrap'

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

        <Form  className="pt-3" onSubmit={onSubmitHandler} style={{width: "40%", margin: "auto", textAlign: "left"}}>
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
