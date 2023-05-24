import React from "react";
import ShopLayout from "@/components/ShopPage/Layout/Layout";
import Header from "@/components/HomePage/Header";
import { Checkbox } from "@material-tailwind/react";


function checkout() {
  return (
    <div>
      <Header />
      <ShopLayout>
        <div className="checkout bg-[#1F1F1F]  h-full w-full">
          <div className="wrapper grid sm:grid-cols-1 gap-x-6 md:grid-cols-2 p-5">
            {/* details */}
            <div className="grid grid-cols-1">
              {/* Billing Details */}
              <div>
                <h1 className="text-primary font-bold text-[1.5rem]">
                  Billing details
                </h1>
                <form>
                  <div className=" grid  grid-cols-2 gap-10">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="first name"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="last name"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Street address *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="house number and street name"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <input
                        type="text"
                        id="companyName"
                        placeholder="Apartment, suite, unit, etc."
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Town / City *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Phone *
                      </label>
                      <input
                        type="number"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Email address *
                      </label>
                      <input
                        type="email"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                </form>
              </div>
              {/* Shiping Details */}
              <div className="mt-5">
                <Checkbox
                  defaultChecked
                  className="   text-red text-[1rem]"
                  label="Ship to a different address?"
                />

                <form>
                  <div className=" grid  grid-cols-2 gap-10">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="firstName"
                      >
                        First Name
                      </label>
                      <input
                        type="text"
                        id="firstName"
                        placeholder="first name"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="lastName"
                      >
                        Last Name
                      </label>
                      <input
                        type="text"
                        id="lastName"
                        placeholder="last name"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Company Name
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Street address *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="house number and street name"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <input
                        type="text"
                        id="companyName"
                        placeholder="Apartment, suite, unit, etc."
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Town / City *
                      </label>
                      <input
                        type="text"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Phone *
                      </label>
                      <input
                        type="number"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>

                  <div className=" grid  grid-cols-1">
                    <div className="mt-4">
                      <label
                        className="block mb-2  text-softGray"
                        htmlFor="companyName"
                      >
                        Email address *
                      </label>
                      <input
                        type="email"
                        id="companyName"
                        placeholder="company"
                        required
                        className="p-2 w-full px-4 rounded-sm"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            {/* amount details */}
            <div>
              <h1 className="   text-primary text-[1.5rem] font-bold">Your Order</h1>
            </div>
          </div>
        </div>
      </ShopLayout>
    </div>
  );
}

export default checkout;
