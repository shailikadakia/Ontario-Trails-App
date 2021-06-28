import React from 'react';


const TrailDetails = ({ id, name, association, motorization, difficulty }) => {



    return (
        <>
            {association && <h5>Association: {association}</h5>}
            {motorization && <h5>Motorization: {motorization}</h5>}
            {difficulty && <h5>Difficulty: {difficulty}</h5>}
        </>
    )
}

export default TrailDetails;