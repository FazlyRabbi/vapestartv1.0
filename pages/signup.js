import React, { useState } from "react";
import http from "utils/api";

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

function signup() {
  const [user, setUser] = useState(init);

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
      const { data } = await http.httpPost(`/auth/signup`, {
        name,
        email,
        password,
      });

      setUser({ ...user, success: data.message });
    } catch (err) {
      setUser({ ...user, message: err.message });
    }
  };

  return (
    <div className=" p-5">
      <h1 className=" mb-2 font-bold">SignUp</h1>

      <form onSubmit={handleSubmit}>
        <label htmlFor="email" className="block">
          UserName
        </label>

        <input
          type="text"
          id="email"
          onChange={(e) => setUser({ ...user, name: e.target.value })}
          className=" py-1 px-4 border border-black"
        />
        <label htmlFor="email" className="block">
          Email
        </label>

        <input
          type="email"
          id="email"
          onChange={(e) => setUser({ ...user, email: e.target.value })}
          className=" py-1 px-4 border border-black"
        />

        <label htmlFor="email" className="block">
          Password
        </label>

        <input
          type="password"
          id="email"
          onChange={(e) => setUser({ ...user, password: e.target.value })}
          className=" py-1 px-4 border border-black"
        />

        <button className=" block mt-4   bg-black  rounded-sm px-4 py-1 text-white">
          Submit
        </button>

        {user.message ? (
          <span className=" text-red mt-4 block font-bold">{user.message}</span>
        ) : (
          ""
        )}
      </form>
    </div>
  );
}

export default signup;
