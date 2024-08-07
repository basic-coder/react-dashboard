import React, { useState } from 'react'
import './users.css';
import DataTable from '../../components/dataTable/DataTable';
import { Link } from 'react-router-dom';
import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import AddPopup from '../../components/addPopup/AddPopup';

const columns = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
      field: 'avatar', headerName: 'Avatar', width: 100,
      renderCell: (params) => {
          return <img className='avatar-img' src={params.row.img || 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png'} alt="" />
      }
  },
  {
      field: 'firstName',
      type: "string",
      headerName: 'First name',
      width: 150,
  },
  {
      field: 'lastName',
      headerName: 'Last name',
      type: "string",
      width: 150,
  },
  {
      field: 'email',
      headerName: 'Email',
      width: 200,
      type: "string",
  },
  {
      field: 'phone',
      headerName: 'Phone',
      type: "number",
      width: 150,
  },
  {
      field: 'createdAt',
      headerName: 'Created At',
      width: 150,
  },
  {
      field: "verified", headerName: "Verified", width: 100, type: 'boolean'
  },
];

const rows = [
  {
      id: 1,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Jane',
      firstName: 'Mary',
      email: 'mary@test.com',
      phone: '897684646',
      verified: true,
      createdAt: '01.02.2023'
  },
  {
      id: 2,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Doe',
      firstName: 'John',
      email: 'john@test.com',
      phone: '123456789',
      verified: false,
      createdAt: '02.03.2023'
  },
  {
      id: 3,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Smith',
      firstName: 'Alice',
      email: 'alice@test.com',
      phone: '987654321',
      verified: true,
      createdAt: '03.04.2023'
  },
  {
      id: 4,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Brown',
      firstName: 'Bob',
      email: 'bob@test.com',
      phone: '456123789',
      verified: false,
      createdAt: '04.05.2023'
  },
  {
      id: 5,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Davis',
      firstName: 'Carol',
      email: 'carol@test.com',
      phone: '789456123',
      verified: true,
      createdAt: '05.06.2023'
  },
  {
      id: 6,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Miller',
      firstName: 'David',
      email: 'david@test.com',
      phone: '321654987',
      verified: false,
      createdAt: '06.07.2023'
  },
  {
      id: 7,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Wilson',
      firstName: 'Eve',
      email: 'eve@test.com',
      phone: '654987321',
      verified: true,
      createdAt: '07.08.2023'
  },
  {
      id: 8,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Taylor',
      firstName: 'Frank',
      email: 'frank@test.com',
      phone: '147258369',
      verified: false,
      createdAt: '08.09.2023'
  },
  {
      id: 9,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Anderson',
      firstName: 'Grace',
      email: 'grace@test.com',
      phone: '963852741',
      verified: true,
      createdAt: '09.10.2023'
  },
  {
      id: 10,
      img: 'https://cdn.pixabay.com/photo/2023/02/18/11/00/icon-7797704_1280.png',
      lastName: 'Moore',
      firstName: 'Hank',
      email: 'hank@test.com',
      phone: '258369147',
      verified: false,
      createdAt: '10.11.2023'
  }
];


const Users = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='users'>
      <div className="info">
        <h1>Users</h1>
        <button>Add User</button>
      </div>
      <DataTable columns ={ columns} slug='/users' rows ={rows}/>
      {open && <AddPopup setOpen={setOpen} slug='/users' />}
    </div>
  )
}

export default Users