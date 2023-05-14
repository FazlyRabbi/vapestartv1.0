import { useState } from "react";

function MyAccount() {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = (event) => {
    setIsChecked(event.target.checked);
  };

  return (
    <section className="myAccount  bg-matBlack p-4 text-white rounded-sm">
      <div className="wrapper grid  grid-cols-1 md:grid-cols-2 md:gap-[5rem] gap-[3rem]">
        <div className="login">
          <div>
            <h1 className=" font-bold text-[1.5rem] text-center md:text-left">Login</h1>
            <div className="login__form my-5">
              <form>
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
                    id="password"
                    type="password"
                    placeholder="type your password "
                    required
                    className=" w-full p-2   text-black"
                  />
                </div>

                <div className="flex items-center mt-4">
                  <input
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
                  className=" mt-6 bg-primary rounded-sm font-bold px-10 py-2"
                  type="submit"
                >
                  Log In
                </button>
                <p className="  mt-2  cursor-pointer font-bold text-primary hover:text-white">
                  Lost your Password?
                </p>
              </form>
            </div>
          </div>
        </div>

        {/* register */}
        <div className="register">
          <div>
            <h1 className=" font-bold text-[1.5rem] text-center  md:text-left">Register</h1>
            <div className="login__form my-5">
              <form>
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
                    id="password"
                    type="password"
                    placeholder="type your password "
                    required
                    className=" w-full p-2   text-black"
                  />
                </div>

                <p className=" lowercase   mt-2 
                
                
                 text-[1rem]">
                  Your personal data will be used to support your experience
                  throughout this website, to manage access to your account, and
                  for other purposes described in our  <span className="text-primary cursor-pointer">privacy policy.</span>
                </p>
                <button
                  className=" mt-6 bg-primary rounded-sm font-bold px-10 py-2"
                  type="submit"
                >
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MyAccount;
