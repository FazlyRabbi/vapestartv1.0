import { API_URL } from "@/config/index";
const { parseCookies } = require("nookies");

export default async (req, res) => {

  if (req.method === "POST") {
    const { token } = parseCookies({ req });

    if (!token) {
      res.status(403).json({ message: "Not Authorized" });
      return;
    }

    const strapiRes = await fetch(`https://demo-production-edcf.up.railway.app/api/upload`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    //   body:JSON.stringify({


    //   })
    });

    const resCart = await strapiRes.json();

    if (strapiRes.ok) {
      res.status(200).json({ user });
    } else {
      res.status(401).json({ message: "User Forbidden!" });
    }
  } else {
    res.send(req.method, "this method is not allowd!");
  }
};
