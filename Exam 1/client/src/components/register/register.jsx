import React, {useState} from 'react';
import './register.css'

const Register = () => {
    const [input, setInput] = useState({});

    const handleInput = (e) => {
        setInput({
            ...input,
            [e.target.name]: e.target.value
        })
    }
    
    return(
        <div >
            <div className= 'centerInputs'>
              
                First Name
                <input/>

                Last Name
                <input/>
                

                Contact number
                <input/>
                
                E-mail
                <input/>
                
                Password
                <input/>
            </div>
        </div>
    )
}

export default Register;