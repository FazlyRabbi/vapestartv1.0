import React, { useState } from "react";
import { signIn, useSession, signOut } from "next-auth/react";

const init = {
  login_email: "",
  loging_password: "",
  name: "",
  email: "",
  password: "",
  conf_password: "",
  success: "",
  error: "",
};

function signin() {
  const [user, setUser] = useState(init);

  const session = useSession();
  const {
    login_email,
    loging_password,
    name,
    email,
    password,
    conf_password,
    success,
    error,
  } = user;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      let options = {
        redirect: false,
        email,
        password,
      };

      const res = await signIn("credentials", options);
      if (res.ok) {
        console.log(res);
        console.log(session);
      } else {
        console.log(res.error);
      }

      // setUser({ ...user, success: true });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className=" p-5">
      <h1 className=" mb-2 font-bold">Signin</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block">
          Email
        </label>

        <input
          type="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className=" py-1 px-4 border border-black"
        />

        <label htmlFor="email" className="block">
          Password
        </label>

        <input
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          type="password"
          className=" py-1 px-4 border border-black"
        />

        <button className=" block mt-4   bg-black  rounded-sm px-4 py-1 text-white">
          Submit
        </button>
      </form>
    </div>
  );
}

export default signin;
