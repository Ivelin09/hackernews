import styles from '../components/createBlog.module.css'
import Image from 'next/image'
import bg from '../public/bg.jpg'
import useWindow from '../hooks/backgroundImage';
import Head from 'next/head'
import { useState } from 'react';

export default function Page() {
    const window = useWindow();
    const [message, setMessage] = useState("");

    const handleSubmit = async (event) => {
      event.preventDefault();

      const [title, description] = [event.target.title.value, event.target.description.value];
      
      const response = await fetch("api/createBlog", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          title: title,
          description: description
        })
      });

      setMessage(response.message);
    }

    console.log(styles);
    return (
        <div>
          <Head>
            <link rel="stylesheet" href="/createBlog.css"></link>
            <link rel="stylesheet" href="/register.css"></link>
          </Head>
            <Image src={bg} height={window.height} width={window.width}></Image>
            <div className="border">
              {message ?? <p>{message}</p>}
            </div>
              <form onSubmit={handleSubmit}>
                <label>Title</label>
                <div>
                  <input type="text" id="username" name="title" variant="outlined" required />
                </div>
                <label>Description</label>
                <div>
                <input type="text" id="username" name="description" variant="outlined" required />
                </div>
                <div>
                  <div>
                      <button type="submit">Send</button>
                  </div>
                </div>
            </form>
        </div>
    )
}