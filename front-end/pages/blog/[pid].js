import { useRouter } from 'next/router';
import Head from 'next/head';
import { useEffect, useRef, useState} from 'react';
import {io} from "socket.io-client";

const replies = async (comment, id) => {
  console.log("qw");
  const response = await fetch(`../api/replies/${id}`, {
    method: 'GET'
  }).then((res) => res.json());

  comment.subComment = response.message;
  console.log(response);
}

const ReplyField = ({ parentId }) => {
  const comment = useRef();

  const handleSubmit = async () =>  {
    const response = await fetch("../api/comment", {
      method: "POST", 
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id: parentId,
        description: comment.current.value
      })
    });
  }

  return (
    <div>
        <textarea className="reply" type="text" ref={comment}/> 
        <button onClick={handleSubmit}>Send</button>
    </div>
  )
}

const Comment = ({blog, comment}) => {
  console.log(comment);
  if(!comment) return;
  const [showReplies, setReplies] = useState(false);
  const [showReplyField, setReplyField] = useState(false);
  
  const handleSubmit = async () => {
    await replies(comment, comment._id); 
    setReplies(true);
  } 

  return (
    <div style={{paddingLeft: 10}}className="author">
      <h1>{comment.author}</h1>  
      <p>{comment.description}</p>
      <p onClick={handleSubmit} style={{display: 'inline'}} >View replies</p>
      <p onClick={() => {setReplyField(true)}} style={{display: 'inline', paddingLeft: '1%'}}> Reply </p>
      {showReplyField && <ReplyField parentId={comment._id}/>}
      {showReplies && comment.subComment && 
          comment.subComment.map((curr, subIdx) => {
            return <Comment key={subIdx} blog={blog} comment={curr} idx={subIdx}/>;
          })
        }
    </div>
  )
}

const Post = ({ blog }) => {

  const comment = useRef();

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
      <textarea className="textarea" ref={comment} type="text"/> 
      <button onClick={handleSubmit}>Send</button>
      {blog.comments.map((comment, idx) => {
        return <Comment key={idx} blog={blog} comment={comment} idx={idx}/>
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
