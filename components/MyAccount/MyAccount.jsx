import { useState } from "react";
import { useRouter } from "next/router";
import { signIn, useSession, signOut } from "next-auth/react";

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
  logInError: "",
  LogInSuccess: "",
  loading: false,
  LogInLoading: false,
};

function MyAccount() {

  const route = useRouter();

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
    logInError,
    LogInSuccess,
    loading,
    LogInLoading,
  } = user;

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      let options = {
        redirect: false,
        email: login_email,
        password: loging_password,
      };

      setUser({ ...user, LogInLoading: true });

      const res = await signIn("credentials", options);

      if (res.ok) {
        setUser({
          ...user,
          logInError: "",
          LogInSuccess: "Login Successfull!",
          LogInLoading: false,
          login_email: "",
          loging_password: "",
        });

        route.push("/shop");
        
      } else {
        setUser({
          ...user,
          logInError: res.error,
          LogInSuccess: "",
          LogInLoading: false,
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      setUser({ ...user, loading: true });

      const { ok, message } = await http.httpPost(`/auth/signup`, {
        name,
        email,
        password,
      });

      if (ok) {
        setUser({
          ...user,
          success: message,
          error: "",
          loading: false,
          name: "",
          email: "",
          password: "",
        });
      }
    } catch (err) {
      setUser({
        ...user,
        error: err.message,
        success: "",
        loading: false,
      });
    }
  };

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="myAccount  bg-matBlack p-4 text-white rounded-sm">
      <div className="wrapper grid  grid-cols-1 md:grid-cols-2 md:gap-[5rem] gap-[3rem]">
        <div className="login">
          <div>
            <h1 className=" font-bold text-[1.5rem] text-center md:text-left">
              Login
            </h1>
            <div className="login__form my-5">
              <form onSubmit={handleLogin}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-1 text-[1rem] 
                  after:content-['*']
                  after:pl-1
                 after:text-red after:font-bold 
                  
                  "
                  >
                    Email Address
                  </label>
                  <input
                    disabled={LogInLoading}
                    onChange={(e) => {
                      setUser({ ...user, login_email: e.target.value });
                    }}
                    value={login_email}
                    id="email"
                    type="email"
                    placeholder="type your email "
                    required
                    className=" w-full p-2   text-black"
                  />
                </div>
                <div className="mt-5">
                  <label
                    htmlFor="password"
                    className="block mb-1 text-[1rem] 
                  after:content-['*']
                 after:text-red after:font-bold  after:pl-1
                   
                  "
                  >
                    Password
                  </label>
                  <input
                    value={loging_password}
                    disabled={LogInLoading}
                    id="password"
                    type="password"
                    onChange={(e) => {
                      setUser({ ...user, loging_password: e.target.value });
                    }}
                    placeholder="type your password "
                    required
                    className=" w-full p-2   text-black"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input
                    disabled={LogInLoading}
                    id="rememberMeCheckbox"
                    name="rememberMe"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                  <label
                    htmlFor="rememberMeCheckbox"
                    className="ml-2 block text-sm "
                  >
                    Remember me
                  </label>
                </div>
                <button
                  disabled={LogInLoading}
                  className={`${
                    LogInLoading ? "animate-pulse" : ""
                  } mt-6 bg-primary rounded-sm font-bold px-10 py-2`}
                  type="submit"
                >
                  {LogInLoading ? "loading.." : "Log In"}
                </button>
                <p className="  mt-2  cursor-pointer font-bold text-primary hover:text-white">
                  Lost your Password?
                </p>
                {LogInSuccess ? (
                  <span className="text-base mt-3 text-green-400 font-bold">
                    {LogInSuccess}
                  </span>
                ) : (
                  <span className="text-base   mt-3 text-red font-bold">
                    {logInError}
                  </span>
                )}
              </form>
            </div>
          </div>
        </div>

        {/* register */}
        <div className="register">
          <div>
            <h1 className=" font-bold text-[1.5rem] text-center  md:text-left">
              Register
            </h1>
            <div className="login__form my-5">
              <form onSubmit={handleRegister}>
                <div className="mb-4">
                  <label
                    htmlFor="RegName"
                    className="block mb-1 text-[1rem] 
                  after:content-['*']
                  after:pl-1
                 after:text-red after:font-bold 
                  
                  "
                  >
                    Name
                  </label>
                  <input
                    value={name}
                    disabled={loading}
                    id="RegName"
                    type="text"
                    onChange={(e) => setUser({ ...user, name: e.target.value })}
                    placeholder="type your email "
                    required
                    className=" w-full p-2   text-black"
                  />
                </div>
                <div>
                  <label
                    htmlFor="RegEmail"
                    className="block mb-1 text-[1rem] 
                  after:content-['*']
                  after:pl-1
                 after:text-red after:font-bold 
                  
                  "
                  >
                    Email Address
                  </label>
                  <input
                    value={email}
                    disabled={loading}
                    id="RegEmail"
                    type="email"
                    onChange={(e) =>
                      setUser({ ...user, email: e.target.value })
                    }
                    placeholder="type your email "
                    required
                    className=" w-full p-2   text-black"
                  />
                </div>

                <div className="mt-5">
                  <label
                    htmlFor="RegPassword"
                    className="block mb-1 text-[1rem] 
                  after:content-['*']
                 after:text-red after:font-bold  after:pl-1
                  
                  "
                  >
                    Password
                  </label>
                  <input
                    value={password}
                    disabled={loading}
                    name="RegPassword"
                    id="RegPassword"
                    type="password"
                    placeholder="type your password "
                    required
                    onChange={(e) =>
                      setUser({ ...user, password: e.target.value })
                    }
                    className=" w-full p-2   text-black"
                  />
                </div>

                <p
                  className=" lowercase   mt-2 
                
                
                 text-[1rem]"
                >
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our{" "}
                  <span className="text-primary cursor-pointer">
                    privacy policy.
                  </span>
                </p>
                <button
                  disabled={loading}
                  className={`${
                    loading ? "animate-pulse" : ""
                  } mt-6 bg-primary rounded-sm font-bold px-10 py-2`}
                  type="submit"
                >
                  {loading ? "loading.." : "Register"}
                </button>
              </form>
              {success ? (
                <span className="text-base mt-3 text-green-400 font-bold">
                  {success}
                </span>
              ) : (
                <span className="text-base   mt-3 text-red font-bold">
                  {error}
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;

export async function getServerSideProps(context) {
  const { req, query } = context;

  callbackUrl = query;

  console.log(callbackUrl);

  return {
    props: { providers },
  };
}
