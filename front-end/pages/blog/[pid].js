import Head from 'next/head';
import { useRef, useEffect, useState } from 'react';
import io from "socket.io-client";
import useComments  from '../../hooks/useComments';
import { useRouter } from 'next/router';

const socket = io("http://localhost:8000");

const Post = ({ blog, id }) => {
  const { Comment, handleSubmit } = useComments();
  const [typing, setTyper] = useState("");
  useEffect(() => {
    console.log(typing);

    const connect = async () => {
      console.log('connection')
      socket.emit('connection', id);
    }

    socket.on('typing', (data) => {
      let arr = typing.split(", ");
      console.log('data', arr, data, typing);
      if(arr.find(el => el == data))
        return;
      if(typing != "")
        setTyper((prev) => prev += `, ${data}`);
      else
        setTyper((prev) => { console.log('prev', prev); return prev += data + ' '});
      
    });

    socket.on('stopTyping', (data) => {
      console.log('data', data, typing.split(", "));
      let arr = typing.split(", ").filter((el) => el != data);
      console.log(arr.length == 0 ? "" : arr);

      setTyper(() => arr.length == 0 ? "" : arr);
    });

    connect();

    return () => {
      socket.off('typing');
      socket.off('stopTyping');
    };
  }, []);

  const type = async (event) => {
    const res = await fetch("../api/userId", {
      method: 'GET'
    }).then((res) => res.json());

    socket.emit('typing', {
      room: id,
      user: res.message
    })
  }

  return (
    <div>
      <Head>
        <link href="/viewBlog.css" rel="stylesheet"/>
      </Head>
      <h1>{blog.title}</h1>
      <div className="container">
        <div className="description">
          <p>{blog.description}</p>
        </div>
      </div>
      <p>Comments</p>
      <textarea className="textarea"  onChange={type} type="text"/> 
      <button onClick={handleSubmit}>Send</button>
      {typing && (typing.split(", ").length == 1 ? <p style={{margin: '0%'}}>{typing} is typing</p> : <p>{typing} are typing</p>)}
      {blog.comments.map((comment, idx) => {
        return <Comment key={idx} blog={blog} comment={comment} idx={idx}/>
      })} 
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log(id);

  const query = await fetch(`http://localhost:3000/api/comments/${id}`, {
    method: 'GET'
  }).then((response) => { return response.json()});

  console.log(JSON.stringify(query, null, 2));  

  const blog = query.message;

  console.log(JSON.stringify(blog.comments, null, 2));  

  return {
    props: {
      blog,
      id
    }
  }
}

export default Post
