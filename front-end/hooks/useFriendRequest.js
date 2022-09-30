const useFriendRequest = (body) => {
    const sendFriendRequest = async () => { 
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
            console.log("DELFINNNNNNNNNNNNNNNN", err.message);
            
            return JSON.parse(err.message);
        }
    }

    return { sendFriendRequest }
}

export default useFriendRequest;