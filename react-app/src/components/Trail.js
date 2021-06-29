import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';

import TrailRowDetails from './TrailRowDetails';

import "./Trails.css";

export const Trail = () => {
    const [data, setData] = useState([]);
    const [extraTrailDetails, setExtraTrailDetails] = useState({});

    const saveDetail = (id, details) => {
        const newEntry = {};
        newEntry[id] = details;
        setExtraTrailDetails({
            ...newEntry,
            ...extraTrailDetails,
        });
    }

    const associationLink = (rowData) => (
        <span>
            {rowData.TRAIL_ASSOCIATION_WEBSITE ? 
                <a className="row-link" href={`https://${rowData.TRAIL_ASSOCIATION_WEBSITE}`}>{rowData.TRAIL_ASSOCIATION}</a> : 
                <>{rowData.TRAIL_ASSOCIATION}</>
            }
        </span> 
    );

    const columns = [
        {title: 'Name', field: 'TRAIL_NAME'},
        {title: 'Association', field: 'TRAIL_ASSOCIATION', render: associationLink},
        {title: 'Activity', field: 'ACTIVITY'},
        {title: 'Length in KM', field: 'LENGTH_KMS'},
        //{title: 'Environmental Concerns', field: 'ENVIRONMENTAL_CONCERNS'},
    ]

    useEffect(() => {
        // Use pre-defined api url if it exists
        // Use localhost otherwise (assume we're in dev)
        const URL_ROOT = process.env.REACT_APP_API_URL_ROOT || 'http://localhost:4000';
        fetch(`${URL_ROOT}/api/v1/trails`) //data source
                 .then(response => response.json())
                 .then(response => {
                     setData(response)})
    }, []);

    return (
        <div>
            <MaterialTable title= "Trails"
            data = {data}
            columns = {columns}
            options = {{
                search: true,
                paging: true,
                filtering: true,
                exportButton: true
            }}
            // We could put TrailDetails in here or replace with a request
            detailPanel={
                rowData => (
                <TrailRowDetails id={rowData.OGF_ID} details={extraTrailDetails[rowData.OGF_ID]} saveDetail={saveDetail}/>
            )}
            //onRowClick={(_event, _rowData, togglePanel) => togglePanel()}
            />
        </div>
    )
    
}

