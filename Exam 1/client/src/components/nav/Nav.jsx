import React, { useState } from 'react'
import './Nav.css'
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

const Nav = () => {
    return (
        <div className='navBar'>
            
                <span style={{ color: 'white', fontSize: '3vw' }}>System contact list</span>
                <ExitToAppIcon color='secondary' />
            
        </div>
    )
}

export default Nav;