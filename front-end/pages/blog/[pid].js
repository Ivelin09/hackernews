import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useRef, useState} from 'react';


const Post = ({ blog }) => {
  const [depth, setDepth] = useState([]);

  const handleReply = (idx) => {
    setDepth((prev) => prev[idx]++);
  }

  const recurse = (comment, level, idx) => {
    console.log(comment, level, idx);
    if(!comment || level == 0)
      return (<div></div>);
  
    return (
      <div key={idx} className="author">
        <h1>{comment.author}</h1>  
        <p>{comment.description}</p>
        <p>Replies</p>
        {recurse(comment.subComment, level-1, idx)}
      </div>
    )
  }
  
  const comment = useRef();

  useEffect(() => {
    const arr = [];
    for(let i = 0; i < blog.comments.length; i++)
      arr.push(2);
    
    arr[1] = 2;
    setDepth(arr);
  }, []);

  const handleSubmit = async () => {
    console.log(blog._id);
    const response = await fetch("../api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: blog._id,
        description: comment.current.value
      })
    })
    console.log(comment.current.value);
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
      <textarea ref={comment} type="text"/> 
      <button onClick={handleSubmit}>Send</button>
      {blog.comments.map((comment, idx) => {
        console.log("depth", depth);
        return recurse(comment, depth[idx], idx);
      })}
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log(id);
  console.log("HEREEE");

  const query = await fetch(`http://localhost:3000/api/comments/${id}`, {
    method: 'GET'
  }).then((response) => { return response.json()});

  console.log(JSON.stringify(query, null, 2));  

  const blog = query.message;

  console.log(JSON.stringify(blog.comments, null, 2));  

  return {
    props: {
      blog
    }
  }
}

export default Post
