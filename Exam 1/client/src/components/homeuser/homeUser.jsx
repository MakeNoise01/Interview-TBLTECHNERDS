import React, { useState, useEffect } from "react";
import './homeUser.css'
import MaterialTable from 'material-table';
import axios from 'axios'

const HomeUser = () => {
    const [user, setUser] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        axios.get(`http://localhost:3005/contacts/${user.id}`)
        .then(res => setData(res))
    }, [user.id]);
    console.log(user)
    console.log(data)


    const columns = [
        {title: 'First name', field: 'first_name'},
        {title: 'Last name', field: 'last_name'},
        {title: 'Number', field: 'contact_number'},
        {title: 'Email', field: 'email'}
    ]

    return(
        <div>
            {/* <MaterialTable
            title='My contacts'
            columns={columns}
            data= */}
        </div>
    )
}

export default HomeUser;