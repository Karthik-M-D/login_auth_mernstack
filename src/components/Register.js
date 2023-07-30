import React, { useState } from 'react'
import '../App.css'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    const reg = (e) => {
        e.preventDefault();

        fetch("http://localhost:4000/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                username,
                password
            }) 
        })
            .then(res => {
                if (!res.ok) {
                    return res.json().then(data => {
                        throw new Error(data.message);
                    });
                }
                navigate('/')
                return res.json();
            })
            .catch((error) => {
                console.log("error message: ",error.message)
                setError(error.message)
            })
    }

    return (
        <div className='main'>
            <h1>Register</h1>
            {error}
            <form onSubmit={reg}>
                <input type='text' placeholder='username' onChange={(e) => setUsername(e.target.value)} />
                <br />
                <input type='password' placeholder='password' onChange={(e) => setPassword(e.target.value)} />
                <br />
                <button type='submit'>Register</button>
            </form>
        </div>
    )
}

export default Register
