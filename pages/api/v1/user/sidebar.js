


export default async (req, res) => {

  // if (req.method === "GET") {
  //   const sidebar = await fetch(
  //     `https://demo-production-edcf.up.railway.app/api/sibebars?populate=*`
  //   );

  //   const data = await sidebar.json();

  //   if (sidebar.ok) {
  //     res.status(200).json(data);
  //   } else {
  //     res.send(data);
  //   }
  // } else {
  //   res.send("Your request is not valid!");
  // }


  res.send({message:"hello"})
};


