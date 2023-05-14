import React from "react";

function signin() {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          id="email"
          className=" py-1 px-4 border border-black"
        />

        <label htmlFor="email" className="block">
          Password
        </label>

        <input
          type="email"
          id="email"
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
