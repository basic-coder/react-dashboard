import React from 'react'
import './dataTable.css'
import { DataGrid, GridToolbar } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaTrashAlt } from 'react-icons/fa';



const DataTable = ({rows,columns,slug}) => {
    const handleDelete = () =>{

    }
    const actionColumn = [{
        field: 'action', headerName: 'Actions', width: 100,
        renderCell: (params) => {
            return <div className='action'>
                <Link to={`/${slug}/${params.row.id}`} >
                    <FaRegEdit className='edit-icon' />
                </Link>
                <FaTrashAlt className='delete-icon' onClick={() => handleDelete(params.row.id) }/>
          
            </div>
        }
    }]
    return (
        <div className='data-table'>
            <DataGrid
                className='data-grid'
                rows={rows}
                columns={[...columns, ...actionColumn]}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                slots={{ toolbar: GridToolbar }}
                slotProps={{
                    toolbar: {
                        showQuickFilter: true,
                        quickFilterProps: { debounceMs: 500 }
                    }
                }}
                pageSizeOptions={[5]}
                checkboxSelection
                disableRowSelectionOnClick
                disableColumnFilter
                disableDensitySelector
                disableColumnSelector
            />
        </div>
    )
}

export default DataTable