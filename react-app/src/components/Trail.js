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
    // This *should* work, but may break
    useEffect(() => {
        fetch('http://localhost:4000/api/v1/trails') //data source
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