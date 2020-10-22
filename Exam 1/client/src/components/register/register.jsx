import React, {useState} from 'react';
import './register.css';
import axios from 'axios';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [input, setInput] = useState({});
    const [flag, setFlag] = useState(false);

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    const register = () => {
        const {first_name, last_name, contact_number, email, password} = input
        axios.post('http://localhost:3005/', {first_name, last_name, contact_number, email, password})
        .then(res => res.data == 'User already exists' ? alert('Email already exists') : setFlag(true))
    }
    console.log(input)
    return(
        <div >
            <div className= 'centerInputs'>
              
                First Name
                <input className='input' value={input.first_name} name ='first_name' onChange={(e) => handleInput(e)}/>

                Last Name
                <input className='input' value={input.last_name} name='last_name' onChange={(e) => handleInput(e)}/>
                

                Contact number
                <input className='input' value={input.contact_number} name='contact_number' onChange={(e) => handleInput(e)}/>
                
                E-mail
                <input className='input' value={input.email} name='email' onChange={(e) => handleInput(e)}/>
                
                Password
                <input className='input' type ='password' value={input.password} name='password' onChange={(e) => handleInput(e)}/>
            <button 
            onClick={() => register()}
            style={{width: '8vw', height: '4vw', backgroundColor: 'red', marginTop: '1vw', outline: 'none', border: 'none', borderRadius: '1vw'}}
            >Register!</button>
            </div>
         {flag ? <Redirect to='/'/> : null}
        </div>
    )
}

export default Register;