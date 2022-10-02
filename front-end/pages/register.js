import { Button } from '@mui/material'
import React, { useState } from 'react';
import Head from 'next/head';

export default function Home() {
  const [message, setMessage] = useState();
    const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {
        username: event.target.username.value,
        password: event.target.password.value
      };

      const response = await fetch("/api/register", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: 'include'
      }).then((res) => res.json());

      setMessage(response.message);
    }
    return (
      <div className="block">
          <Head>
            <link rel="stylesheet" href="/register.css"></link>
          </Head>
          <form onSubmit={handleSubmit}>
              {message ? <p className="message">{message}</p> : ""}
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
