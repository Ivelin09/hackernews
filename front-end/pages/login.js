import { Button } from '@mui/material';
import { useState } from 'react';
import Head from 'next/head';

export default function loginPage() {
    const [message, setMessage] = useState();
    const [isSuccess, setStatus] = useState();
    const handleSubmit = async (event) => {
        event.preventDefault();

        const data = {
            username: event.target.username.value,
            password: event.target.password.value
        };

        const response = await fetch('/api/login', {
            headers: {
                'Content-Type': 'application/json'
            }, 
                method: 'POST',
            body: JSON.stringify(data),
        }).then((res) => res.json());
        console.log(response);
        if(response.code != 200)
            setStatus(false);
        else
            setStatus(true);
        setMessage(response.message);
        console.log(isSuccess);
    }
    return (
        <div className="block">
            <Head>
                <link rel="stylesheet" href="/register.css"></link>
            </Head>
            <form onSubmit={handleSubmit}>
                {message ? <p className={isSuccess ? "success" : "failure"}>{message}</p> : ""}
                <label htmlFor="first">Username</label>
                <input type="text" id="username" name="username" variant="outlined" required />
  
                <label htmlFor="last">Password</label>
                <input type="text" id="password" name="password" variant="outlined" required />
  
                <div>
                  <Button className="btn" type="submit" variant="outlined">Submit</Button>
                </div>
            </form>
  
        </div>
      )
}