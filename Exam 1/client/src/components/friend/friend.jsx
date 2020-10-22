import Axios from 'axios'
import React, {useState} from 'react'

const Friend = (first) => {
    const addContact = () => {
      var aux = JSON.parse(localStorage.getItem('user'))
      Axios.post(`http://localhost:3005/add/${aux.id}`, {email: first.email})
      .then(res => localStorage.setItem('contact', JSON.stringify(res.data)))
    }
    return(
        <div>
          <div style={{height: '2vw', borderBottom: '1px solid red', margin: '1vw', display: 'flex', justifyContent: 'space-between'}}>
              <span>{first.first}  {first.last}</span>
              <button onClick={() => addContact()}>Add contact</button>
          </div>
        </div>
    )
}

export default Friend