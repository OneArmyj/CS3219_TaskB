import React from 'react'
import api from './api'
import {Card, Button} from 'reactstrap'


const GuitaristCard = ({name, guitar, band, age}) => {
    
    const onClickHandler = () => {
        const linkExt = name.replace(/\W/g, "-");
        api.delete(`/api/guitarists/${linkExt}`).then(res  => console.log(res))
    }

    return (
        <Card className="py-3">
            <div>
                Guitarist: {name}, Guitar: {guitar}, Band: {band}, age: {age} &nbsp;
                <Button className="btn-sm" color="danger" onClick={onClickHandler}>Delete guitarist</Button>
            </div>
            
        </Card>
    )
}

export default GuitaristCard
