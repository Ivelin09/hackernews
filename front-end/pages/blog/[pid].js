import { useRouter } from 'next/router';
import Head from 'next/head';
import { useRef } from 'react';

const recurse = async (comment, idx) => {
  if(!comment.subComment)
    return;

    const response = await fetch("../api/comment", {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({  })
    })

  return (
    <div>
      <p>{comment.description}</p>
      <p>Sub comment</p>
      {recurse(comment.subComment)}
    </div>
  )
}

const Post = ({ blog }) => {
  const comment = useRef();

  const handleSubmit = async () => {
    const response = await fetch("../api/comment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        blogId: blog._id,
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
      
    </div>
  )
}

export async function getServerSideProps(context) {
  const id = context.query.id;
  console.log(id);
  console.log("HEREEE");

  const response = await fetch("http://localhost:3000/api/blog", {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({blogId: id})
  }).then((res) => res.json());

  const comments = await fetch(`http://localhost:3000/api/comments/${id}`, {
    method: 'GET',
    headers: {
      "Content-Type": "application/json"
    }
  }).then((res) => res.json());

  console.log(comments);

  const blog = response.message;
  console.log(blog);

  return {
    props: {
      blog
    }
  }
}

export default Post
