import React from "react";
import { Input, Button } from "@material-tailwind/react";

export default function NewsLetter() {
  const [email, setEmail] = React.useState("");
  const onChange = ({ target }) => setEmail(target.value);

  return (
    <div className="my-10 flex flex-col w-full max-w-[36rem] mx-auto items-start gap-2 px-10">
        <input
          type="email"
          className=" py-2.5 max-w-screen-lg"
          placeholder="Your email address"
        />
        <button className="bg-pink-600 text-black px-4 py-2.5">Subscribe</button>
    </div>
  );
}