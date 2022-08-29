import { Button, TextField, Box, ThemeProvider } from '@mui/material'
import React, { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState();
    const handleSubmit = async (event) => {
      event.preventDefault();

      const data = {
        first: event.target.first.value,
        last: event.target.last.value
      };

      console.log(JSON.stringify(data));

      const response = await fetch("/api/register", {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "application/json"
        }
      }).then((res) => res.json());

      setMessage(response.message);
    }
    return (
      <div className="block">
          <form onSubmit={handleSubmit}>
              {message ? <p>{message}</p> : ""}
              <label htmlFor="first">First Name</label>
              <input type="text" id="first" name="first" variant="outlined" required />

              <label htmlFor="last">Last Name</label>
              <input type="text" id="last" name="last" variant="outlined" required />

              <div>
                <Button className="btn" type="submit" variant="outlined">Submit</Button>
              </div>
          </form>

      </div>
    )
}
