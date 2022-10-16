import { useRouter } from 'next/router';
import Head from 'next/head';
import { useRef } from 'react';


const Post = ({ blog, comments }) => {
  const recurse = async (comment) => {
    if(!comment.subComment)
      return <div></div>;
  
      console.log("here is a comment", comment.description);
  
    return (
      <div>
        <p>{comment.description}</p>
        <p>Sub comment</p>
        {recurse(comment.subComment)}
      </div>
    )
  }
  
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
      {comments.map((comment, idx) => {
        console.log("cmt", recurse(comment));
        return recurse(comment);
      })}
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

  const commentData = await fetch(`http://localhost:3000/api/comments/${id}`, {
    method: 'GET'
  }).then((response) => { console.log(response); return response.json()});

  const comments = commentData.message;
  const blog = response.message;

  console.log(comments);

  return {
    props: {
      blog,
      comments
    }
  }
}

export default Post
