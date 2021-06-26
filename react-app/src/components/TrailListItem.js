import React, { useState } from 'react';
import TrailDetails from './TrailDetails';

function TrailListItem({ id, name , association, motorization, difficulty}) {

    const [expand, setExpand] = useState(false);

    function handleExpand() {
        if (expand === true) {
            setExpand(false);
        } else {
        setExpand(true);
        }
    }

    return (
        <div>
            <a href='#' onClick={handleExpand}>{name} (ID: {id})</a>
            {
                expand && (
                    <TrailDetails
                        id={id}
                        name={name}
                        association={association}
                        motorization={motorization}
                        difficulty={difficulty}
                    />
                )
            }
        </div>
    )
}

export default TrailListItem;