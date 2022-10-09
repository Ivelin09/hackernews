import { useEffect } from 'react'

const useRequest = () => {
    const sendFriendRequest = async (body) => { 
        console.log("given body", body);
        try {
            console.log(process.env.BACK_END);
            const response = await fetch("api/friendRequest", {
                method: 'POST',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            }).then((res) => res.json());
            
            console.log("response", response);
            if(response.status != 200) {
                console.log("I just got here");
                throw new Error(JSON.stringify(response));
            }
            
            return response
        } catch(err)  {
            console.log("DELFINNNNNNNNNNNNNNNN", err);
            
            return err;
        }
    }

    const acceptFriendRequest = async (username) => {
        console.log("send");
        const response = await fetch("api/acceptFriendRequest", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ requester: username })
        });

        return response;
    }

    return { sendFriendRequest, acceptFriendRequest }
}

export default useRequest;