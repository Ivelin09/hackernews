import Cookies from "cookies";
import { useState, useEffect } from 'react'
import useRequest from "../hooks/useFriendRequest";
import Head from "next/head";
import {io} from "socket.io-client";

export default function homePage({ token }) {
  const [username, setUsername] = useState("");
  const [friendList, setFriend] = useState([]);
  const [requestList, setPending] = useState([]);

  console.log("req", requestList);
  const [message, setMessage] = useState("");

  const { sendFriendRequest, acceptFriendRequest } = useRequest();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await sendFriendRequest({ recipientName: username });
    setMessage(response.message);
    console.log("res", response);

  }

  useEffect(() => {
    const socket = io("http://localhost:8000");
    console.log("asd");
    const connect = async () => {
      const res = await fetch("api/userId", {
        method: 'GET'
      }).then((res) => res.json());
      console.log(res);

      socket.emit('connection', res.message);
    }

    const fetchFriends = async () => {
      const res = await fetch("api/friends", {
        method: 'GET'
      }).then((res) => res.json());

      setFriend(res.message);
    }

    const fetchPending = async () => {
      const res = await fetch("api/pending", {
        method: 'GET'
      }).then((res) => res.json());
      console.log("pending", res);
      setPending(res.message);
    }

    socket.on('receive-request', (data) => {
      console.log("lookout", requestList, data.username);
     setPending(state => [...state, data.username]);
    })

    socket.on('friend-update', (data) => {
      setFriend(state => [...state, data.username]);
    });
  
    console.log("problem");
    
    connect();
    fetchFriends();
    fetchPending();

    
  }, []);

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
            {friendList.map((item, idx) => <p key={idx}>{item}</p>)}
        </div>
        <div className="item-3">
          <h2> pending </h2>
          {requestList.map((username, idx) => <p key={idx} onClick={() => { acceptFriendRequest(username); setFriend(state => [...state, username]) }}>{username}</p>)}
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

