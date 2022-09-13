import Cookies from "cookies"

export default async function handler(req, res) {
    console.log("HERE");
    const response = await fetch("http://localhost:7000/register", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
          },
        body: JSON.stringify(req.body)
    }).then((res) => res.json());

    const cookies = new Cookies(req, res);
    cookies.set("authorization", response.token, {
        httpOnly: true,
        sameSite: "lax",
        maxAge: 100000
    });
    res.status(200).json(response)
}
  