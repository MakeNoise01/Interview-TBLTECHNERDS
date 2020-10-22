import React, { useState, useEffect } from "react";
import './homeUser.css'
import MaterialTable from 'material-table';
import axios from 'axios'
import {Wave} from '../assets/index'

const HomeUser = () => {
    const [user, setUser] = useState({})
    const [data, setData] = useState([])

    useEffect(() => {
        setUser(JSON.parse(localStorage.getItem('user')))
        axios.get(`http://localhost:3005/contacts/${user.id}`)
        .then(res =>  setData(res.data))
    }, [user.id]);
    console.log(user)
    console.log(data)

   const deleteContact = (id) => {

   }


    const columns = [
        {title: 'First name', field: 'first_name'},
        {title: 'Last name', field: 'last_name'},
        {title: 'Number', field: 'contact_number'},
        {title: 'Email', field: 'email'}
    ]
    return(
        <div className='principalContacts'>
            <div className ='myContacts'>
            <MaterialTable
            style={{width: '80%', marginTop: '3vw', zIndex: '5'}}
            title='My contacts'
            columns={columns}
            data= {data}
            editable={{
                onRowDelete: oldData => deleteContact(oldData.id)
            }}
            />
            </div>
          <img src={Wave} style={{width: '100vw', position: 'relative', top: '-12vw'}}/>
        </div>
    )
}

export default HomeUser;