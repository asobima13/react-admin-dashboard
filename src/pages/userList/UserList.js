import "./UserList.css"
import { DataGrid } from '@material-ui/data-grid';
import { DeleteOutline } from '@material-ui/icons'
import { userRows } from '../../Data'
import { Link } from 'react-router-dom'
import { useState } from 'react'

export default function UserList() {

    const [data, setData] = useState(userRows)

    const handleDelete = (id) => {
        setData(data.filter(item => item.id !== id))
    }
    
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        { field: 'user', headerName: 'User', width: 120, renderCell: (params) => {
            return (
                <div className="userListUser">
                <img className="userListImg" src={params.row.avatar} alt="" />
                {params.row.username}
                </div>
            )
        } },
        { field: 'email', headerName: 'Email', width: 120 },
        { field: 'status', headerName: 'Status', width: 120 },
        { field: 'transaction', headerName: 'Transaction', width: 160 },
        { field: 'action', headerName: 'Action', width: 150, renderCell: (params) => {
            return (
                <>
                    <Link to={"/user/"+params.row.id}>
                        <button className="userListEdit">Edit</button>
                    </Link>
                    <DeleteOutline className="userListDelete" onClick={()=> handleDelete(params.row.id)}/>
                </>
            )
        } }
    ];

    return (
        <div className="userList">
            <DataGrid rows={data} disableSelectionOnClick columns={columns} pageSize={5} checkboxSelection />
        </div>
    )
}
