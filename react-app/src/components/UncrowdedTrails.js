import React, { Component, useEffect, useState } from 'react';
import TrailListItem from './TrailListItem';

const UncrowdedTrails = () => {
    const [trails, setTrails] = useState(null);

    const fetchTrails = () => {
        fetch('http://localhost:3050/api/v1/uncrowded')
            .then(res => res.json())
            .then(res => setTrails(res));
    }

    useEffect(() => {
        fetchTrails();
    }, []);

    return (
        <>
            <h2>Trails</h2>
            <p>Below is a list of some trails with low amounts of traffic and crowds!</p>
            {trails && 
                trails.map(trail => (<TrailListItem key={trail.properties.OGF_ID}
                                                    id={trail.properties.OGF_ID}
                                                    name={trail.properties.TRAIL_NAME}
                                                    association={trail.properties.TRAIL_ASSOCIATION}
                                                    motorization={trail.properties.ACTIVITY}
                                                    difficulty={trail.properties.OTC_TRAIL_CHALLENGE}/>))
            }
            <p>Information from https://ladystravelblog.com/2020/03/23/lesser-known-ontario-trails-without-crowds/</p>
        </>
    )
}

export default UncrowdedTrails;