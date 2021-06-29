import React, { useEffect, useState } from 'react';

import * as styles from './TrailRowDetails.module.css';


const TrailRowDetails = ({ id, details, saveDetail }) => {
    const [data, setData] = useState(details);

    useEffect(() => {
        if (!details) {
            const fetchFunc = async () => {
                // Pick production api if given, otherwise assume localhost server should be used
                const URL_ROOT = process.env.REACT_APP_API_URL_ROOT || 'http://localhost:4000';
                fetch(`${URL_ROOT}/api/v1/trails`) //data source
                try {
                    const res = await fetch(`${URL_ROOT}/api/v1/trails/${id}`);
                    const data = await res.json();
                    setData(data);
                    saveDetail(id, data);
                } catch (e) {
                    console.error(e);
                }
            }
            fetchFunc();
        } else {
            setData(details);
        }
    }, [id, details, saveDetail]);

    return (
        <div className={styles.row}>
            {data ? 
                data.DESCRIPTION ? 
                    <span>{data.DESCRIPTION}</span>: 
                    <span>No Description Available.</span> : 
            <span>Loading Details...</span>}
        </div>
    )
}

export default TrailRowDetails;