import React, { useEffect, useState } from 'react';
import MaterialTable from 'material-table';

export const Trail = () => {
    const [data, setData] = useState([])
    const columns = [
        {title: 'ID', field: 'OGF_ID'},
        {title: 'Name', field: 'TRAIL_NAME'},
        {title: 'Email', field: 'email'}
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
            />
        </div>
    )
    
}