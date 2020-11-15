import React from 'react'
import api from './api'


const GuitaristCard = ({name, guitar, band, age}) => {
    
    const onClickHandler = () => {
        const linkExt = name.replace(/\W/g, "-");
        api.delete(`/api/guitarists/${linkExt}`).then(res  => console.log(res))
    }

    return (
        <div style={{paddingBottom: "5px"}}>
            <div>
                Guitarist: {name}, Guitar: {guitar}, Band: {band}, age: {age} &nbsp;
                <button onClick={onClickHandler}>Delete guitarist</button>
            </div>
            
        </div>
    )
}

export default GuitaristCard
