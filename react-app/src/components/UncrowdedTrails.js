import React, { Component, useEffect, useState } from 'react';
import TrailListItem from './TrailListItem';
import './UncrowdedTrails.css';

import TrailCards from './TrailCards';
const UncrowdedTrails = () => {
    const [trails, setTrails] = useState(null);
    const fetchTrails = () => {
        // For backwards compat, still allow the standalone uncrowded api to be used
        const URL_ROOT = process.env.REACT_APP_API_URL_ROOT || 'http://localhost:4000';
            fetch(`${URL_ROOT}/api/v1/uncrowded`)
                .then(res => res.json())
                .then(res => setTrails(res))
                .catch(() => {
                    fetch('http://localhost:3050/api/v1/uncrowded')
                        .then(res => res.json())
                        .then(res => setTrails(res))       
            });
    }

    useEffect(() => {
        fetchTrails();
    }, []);

    return (
        <div className='list'>
            <h2 className='heading'>Uncrowded Trails</h2>
            <p className='description'>Below is a list of some trails with low amounts of traffic and crowds!</p>
           <div className='listname'>
            {trails && 
                trails.map(trail => (
       
                    <TrailCards 
                        key={trail.properties.OGF_ID}
                        id={trail.properties.OGF_ID}
                        name={trail.properties.TRAIL_NAME}
                        association={trail.properties.TRAIL_ASSOCIATION}
                        motorization={trail.properties.ACTIVITY}
                        difficulty={trail.properties.OTC_TRAIL_CHALLENGE}
                    />
                    
                ))
            }
            </div>
            <p className='source'>Information from https://ladystravelblog.com/2020/03/23/lesser-known-ontario-trails-without-crowds/</p>
        </div>
    )
}

export default UncrowdedTrails;

/* <TrailListItem key={trail.properties.OGF_ID}
                                                    id={trail.properties.OGF_ID}
                                                    name={trail.properties.TRAIL_NAME}
                                                    association={trail.properties.TRAIL_ASSOCIATION}
                                                    motorization={trail.properties.ACTIVITY}
                                                    difficulty={trail.properties.OTC_TRAIL_CHALLENGE}/>  */