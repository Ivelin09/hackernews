import Cookies from "cookies";
import { useState, useEffect } from 'react'
import useRequest from "../hooks/useFriendRequest";
import Head from "next/head";

export default function homePage({ token }) {
  const [username, setUsername] = useState("");
  const [friendList, setFriend] = useState([]);
  const [requestList, setRequest] = useState([]);

  const [message, setMessage] = useState("");

  const { sendRequest } = useRequest({ recipientName: username });
  
  const handleSubmit = async (event) => {
    const response = await sendRequest();
    setMessage(response.message);
    console.log("res", response);
  }
  const onChange = (event) => {
    setUsername(event.target.value);
  }

  return (
    <div className="" color="color: black">
          <Head>
            <link rel="stylesheet" href="/friends.css"></link>
          </Head>

      <div className="container">
        <div className="item-1">
          {message ? <p>{message}</p> : ""}
          <h1> friend request </h1>
          <input type="text" name="password" onChange={onChange}/>
          <div>
            <button onClick={handleSubmit}>SEND</button>
          </div> 
        </div>
        <div className="item-2">
          <h2>friends</h2>
            {friendList.map(item => <p key={item}>{item}</p>)}
        </div>
        <div className="item-3">
          <h2> pending </h2>
          {requestList.map(item => <p key={item} onClick={() => acceptFriendRequest(item)}>{item}</p>)}
        </div>
      </div>
      
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const token = new Cookies(req, res).get("authorization") ?? "none";

  return {
    props: { token },
  };
}

