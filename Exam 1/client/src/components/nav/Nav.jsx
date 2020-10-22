import React, { useState } from 'react'
import './Nav.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import axios from 'axios'
import { Modal } from '@material-ui/core';
import Friend from '../friend/friend'



const Nav = () => {
    const [modal, setModal] = useState(false);
    const [data, setData] = React.useState({})
    const [input1, setInput] = React.useState('')

    const logout = () => {
        axios.post('http://localhost:3005/logout')
            .then(res => console.log(res))
    }

    const setFalse = () => {
        setModal(false)
    }

    const handleSearch = (text) => {
        setInput(text)
        var aux = JSON.parse(localStorage.getItem('user'))
        axios.get(`http://localhost:3005/search?user=${text}`)
        .then(res => setData(res.data.filter(us => us.id != aux.id)))
    }
    
    return (
        <div className='navBar'>

            <span style={{ color: 'white', fontSize: '3vw' }}>System contact list</span>
            <button
                onClick={() => setModal(!modal)}
                style={{ marginLeft: '52vw', backgroundColor: 'red', outline:'none', border: 'none', height: '3vw', width: '12vw' }}>Add contacts!</button>
            <ExitToAppIcon color='secondary' onClick={() => logout()} />


             <Modal
                open={modal}
                onClose={setFalse}
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
            >
                <div className='modal2'>
                    <div>
                    <input value={input1} onChange={(e) => handleSearch(e.target.value)}/>
                    <div>
                        {data.length >= 1 ? data.map(us => <Friend first={us.first_name} last={us.last_name} email={us.email}/>) : null}
                    </div>
                    </div>
                </div>
            </Modal> 
        </div>
    )
}

export default Nav;