import { useEffect, useRef, useState} from 'react';

const useComments = () => {
  const replies = async (comment, id) => {
    const response = await fetch(`../api/replies/${id}`, {
      method: 'GET'
    }).then((res) => res.json());
  
    comment.subComment = response.message;
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

    const handleSubmit = async () => {
      const response = await fetch("../api/comment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          id: blog._id,
          description: q.current.value
        })
      })
    }

    const Comment = ({blog, comment}) => {
        if(!comment) return;
        const [showReplies, setReplies] = useState(false);
        const [showReplyField, setReplyField] = useState(false);
        
        const handleSubmit = async () => {
          await replies(comment, comment._id); 
          setReplies(true);
        } 
      
        return (
          <div style={{paddingLeft: 10}} className="author">
            <div></div>
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

    return { handleSubmit, Comment };
}

export default useComments;