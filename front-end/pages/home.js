import Cookies from "cookies";
import { useState, useEffect } from 'react'



export default function homePage({ token }) {
  const [username, setUsername] = useState("");
  const [username1, setUsername1] = useState("");
  const [friendList, addFriend] = useState([]);
  const [requestList, addRequest] = useState([]);

  const handleSubmit = async event => {

  };

  const onChange = (event) => {
    setUsername(event.target.value);
  }
  useEffect(() => {

  }, []);

  return (
    <div className="" color="color: black">
      <button onClick={() => setUsername("Ivelin")}>asd</button>
      <button onClick={() => setUsername1("Pesho")}>dsa</button>

      <div className="container">
        <div className="item-1">
          <h1> friend request </h1>
          <input type="text" name="password" onChange={onChange}/>
          <div>
            <input  onClick={handleSubmit} type="submit" value="submit"/>
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

