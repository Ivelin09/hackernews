import Cookies from "cookies";

export default async function authHandler(endpoint, req, res) {
    console.log(process.env.BACK_END);
    const response = await fetch(process.env.BACK_END + endpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(req.body)
    }).then((res) => res.json());

    console.log("token", response.message);
    
    const cookies = new Cookies(req, res);
    cookies.set("authorization", response.token, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 100000000000
    });
    res.status(200).json(response);

    return response;
}