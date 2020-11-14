import React from 'react'
import api from './api'


const GuitaristCard = ({name, guitar, band, age}) => {
    
    const onClickHandler = () => {
        const linkExt = name.toLowerCase().replace(/\W/g, "-");
        api.delete(`/api/guitarists/${linkExt}`);
    }

    return (
        <div>
            <div>
                Guitarist: {name}, Guitar: {guitar}, Band:{band}, age:{age} &nbsp
                <button onClick={onClickHandler}>Delete guitarist</button>
            </div>
            
        </div>
    )
}

export default GuitaristCard
