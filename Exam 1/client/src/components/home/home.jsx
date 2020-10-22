import React, { useState } from "react";
import './home.css'
import axios from 'axios'
import { Link, Redirect } from 'react-router-dom';


const Home = () => {
    const [input, setInput] = useState({})
    const [flag, setFlag] = useState(false)

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }

    const login = () => {
        var { email, password } = input
        axios
            .post('http://localhost:3005/auth/login', { email, password })
            .then(res => {
                localStorage.setItem('user', JSON.stringify(res.data))
                setFlag(true)
            })
            .catch(err => console.log(err))
    }

    return (
        <div className='centered' >
            <div className='inputs'>
                <p>E-mail</p>
                <input className='input' value={input.email} name='email' onChange={(e) => handleInput(e)} />

                <p>Password</p>
                <input className='input' type='password' value={input.pass} name='password' onChange={(e) => handleInput(e)} />
                <button
                    onClick={() => login()}
                    style={{ marginTop: '1vw', width: '10vw', height: '3vw', backgroundColor: '#3045DB', outline: 'none', border: '#2EC2D1 1px solid' }}>
                    LOGIN
                </button>
                <div className='registerButton'>
                    <span>Don't have an account?</span><br />
                    <Link to='/register'>Register now!</Link>
                </div>
            </div>
            {flag ? <Redirect to='/home'/> : null}
        </div>
    )
}

export default Home;
