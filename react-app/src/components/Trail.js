import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';



export const Trail = () => {
    const [data, setData] = useState([])

    const columns = [
        {title: 'Name', field: 'TRAIL_NAME'},
        {title: 'Association', field: 'TRAIL_ASSOCIATION'},
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
                     console.log(response)
                     setData(response)})
    }, [])
    
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
                <>
                    {rowData.DESCRIPTION}
                </>
            )}
            //onRowClick={(_event, _rowData, togglePanel) => togglePanel()}
            />
        </div>
    )
    
}