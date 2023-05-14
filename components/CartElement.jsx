import { API_TOKEN, API_URL } from "@/config/index";
import { AuthContext } from "@/context/AuthContext";
import { CardContext } from "@/context/CardContext";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import Image from "next/image";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";
import { MdDeleteForever } from "react-icons/md";
import useSweetAlert from "../components/lib/sweetalert2";

import {
  default as billingCityNam,
  default as cityNam,
} from "../public/city.json";

import countryNam from "../public/country";
import billingCountryNam from "../public/country.json";

import {
  default as billingStateNam,
  default as stateNam,
} from "../public/state.json";

import { Button, Card, CardBody, Checkbox } from "@material-tailwind/react";

function generateOrderid() {
  const randomNumber = Math.floor(Math.random() * 100000000);
  const paddedNumber = randomNumber.toString().padStart(10, "0");
  return paddedNumber;
}

function CartElement() {
  const [isFetching, setIsFetching] = useState(false);
  const [cardError, setCardError] = useState(null);
  const [states, setStates] = useState("");
  const [cities, setCities] = useState("");
  const [billingStates, setBillingStates] = useState("");
  const [billingCities, setBillingCities] = useState("");
  const [same, setSame] = useState(true);
  const { cart, setCart } = useContext(CardContext);
  const { user } = useContext(AuthContext);

  // showing alert
  const { showAlert } = useSweetAlert();

  const showAlerts = (email, ammount) => {
    showAlert({
      title: `Payment`,
      html: `  <div>
       <div style="display:flex; justify-content: space-between; padding:2 3rem;   ">
       <h5>Pyament type</h5>
       <h5 style="color:#000">Card</h5>
       </div>
       <div style="display:flex; justify-content: space-between; padding:2 3rem;   ">
       <h5>Email</h5>
       <h5 style="color:#000">${email}</h5>
       </div>
       <div style="display:flex; justify-content: space-between; padding:2 3rem; margin:2rem 0;  ">
       <h5 style="font-weight:bold;">Amount Paid</h5>
       <h5 style="color:#000">$${ammount}</h5>
       </div>

    </div>`,
      icon: "success",
      confirmButtonText: "Close",
      confirmButtonColor: "green",
    }).then((result) => {
      console.log(result);
    });
  };

  const initial = {
    orderInfo: {
      orderId: "",
      paymentInfo: null,
      status: "meaking",
      price: null,
    },

    products: null,

    Billing: {
      firstName: "",
      LastName: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      phone: "",
      companyName: "",
    },

    Shipping: {
      firstName: "",
      LastName: "",
      address: "",
      country: "",
      state: "",
      city: "",
      zipCode: "",
      phone: "",
      companyName: "",
    },
  };

  const [order, setOrder] = useState(initial);

  useEffect(() => {
    if (same) {
      setOrder({ ...order, Billing: { ...order.Shipping } });
    } else {
      setOrder({ ...order, Billing: { ...order.Billing } });
    }
  }, [same, order.Shipping]);

  //  // set states
  useEffect(() => {
    const handleStates = () => {
      const countryId = countryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Shipping.country.toLowerCase()
      );
      const allStates = stateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );
      setStates(allStates);
    };
    // const
    handleStates();
  }, [order?.Shipping.country]);

  // // set cities
  useEffect(() => {
    const handleCities = () => {
      const countryId = countryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Shipping.country.toLowerCase()
      );
      const allStates = stateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );
      const stateId = allStates.find(
        (state) => state.state_name === order?.Shipping.state
      );
      const city = cityNam.filter(
        (city) => city.state_id === stateId?.state_id
      );

      setCities(city);
    };
    handleCities();
  }, [order?.Shipping.state]);

  // set states
  useEffect(() => {
    const handleStates = () => {
      const countryId = billingCountryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Billing.country.toLowerCase()
      );

      const allStates = billingStateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );

      setBillingStates(allStates);
    };

    // const
    handleStates();
  }, [order?.Billing.country]);

  // set cities
  useEffect(() => {
    const handleCities = () => {
      const countryId = billingCountryNam.find(
        (country) =>
          country.country_name.toLowerCase() ===
          order?.Billing.country.toLowerCase()
      );
      const allStates = billingStateNam.filter(
        (state) => state.country_id == countryId?.country_id
      );
      const stateId = allStates.find(
        (state) => state.state_name === order?.Billing.state
      );
      const city = billingCityNam.filter(
        (city) => city.state_id === stateId?.state_id
      );

      setBillingCities(city);
    };
    handleCities();
  }, [order?.Billing.state]);

  ///////////////////////////////////
  //  stripe related funtionality
  // to access stripe server
  const stripe = useStripe();
  // to access card element
  const elements = useElements();

  let totalPrice = 0;

  const router = useRouter();

  const formData = typeof window !== "undefined" ? new FormData() : "";

  const handleSubmit = async (e) => {
    e.preventDefault();
    const orderID = generateOrderid();
    const paymentInfo = await createOntimePayment();

    const price = paymentInfo.amount / 100;

    if (paymentInfo) {
      setOrder({
        ...order,
        products: cart,
        orderInfo: {
          ...order.orderInfo,
          orderId: orderID,
          price: price.toString(),
          paymentInfo: paymentInfo.client_secret,
        },
      });

      setCart([]);
      router.push(`/shop`);
      localStorage.removeItem("cart");
    }
  };

  const postOrder = async () => {
    const res = await fetch(`${API_URL}/api/orders`, {
      method: "POST",
      headers: {
        Authorization: API_TOKEN,
      },

      body: formData,
    });
    const data = await res.json();

    if (!res.ok) return;

    showAlerts(user.email, totalPrice);
  };

  useEffect(() => {
    formData.append(`data`, JSON.stringify(order));

    if (order.orderInfo.paymentInfo) {
      order?.products.map((prod, index) =>
        formData.append(
          `files.products[${index}].file`,
          prod.file,
          prod.file.name
        )
      );

      postOrder();
    }
  }, [order.orderInfo.paymentInfo]);

  const delteProductFromCart = (data) => {
    const deletedProducts = cart.filter(
      (product) => product.jobName !== data.jobName
    );

    setCart(deletedProducts);
    localStorage.setItem("cart", JSON.stringify(deletedProducts));
  };

  // onetime payment
  const createOntimePayment = async () => {
    try {
      if (elements.getElement("card") === null) return;

      setIsFetching(true);

      const { error } = await stripe.createPaymentMethod({
        type: "card",
        card: elements.getElement("card"),
      });

      if (error) {
        setCardError(error);
        setIsFetching(false);
        return;
      }
      setIsFetching(true);
      setCardError(null);

      const res = await fetch(`/api/payment`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: totalPrice,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert("Payment unsuccessfull!");
        setIsFetching(false);
        return;
      }

      setIsFetching(true);

      const { paymentIntent, error: confirmError } =
        await stripe.confirmCardPayment(data.clientSecret, {
          payment_method: {
            card: elements.getElement("card"),
          },
        });

      if (confirmError) {
        alert("Payment unsuccessfull!");
        setIsFetching(false);
        return;
      }

      setIsFetching(false);

      if (!paymentIntent) return;

      elements.getElement(CardElement).clear();

      return paymentIntent;

      // send mail
      // const sendmail = await fetch(`/api/emails/donationmail`, {
      //   method: "POST",
      //   headers: {
      //     "Content-Type": "application/json",
      //   },
      //   body: JSON.stringify({
      //     email: donation.Email,
      //     subject: `Your Donation $${donation.Amount / 100} to people!`,
      //     message: `Thank you so much for your generous gift! It's donors like you that make our work possible. Your contribution is enabling us to accomplish Kingdom of Kush as well as helping us make progress toward`,
      //   }),
      // });
      // setDonation(donationInitial);
      // showAlerts(
      //   donation.Email,
      //   donation.Name,
      //   paymentIntent.amount,
      //   paymentIntent.client_secret
      // );
    } catch (err) {
      alert("Payment Faild!" + err.message);
    }
  };

  return (
    <div className="container mx-auto px-4">
      <div className="grid  justify-items-center grid-cols-1 gap-x-2 md:grid-cols-2">
        {/* products */}
        <div className="products mt-5">
          <h3 className="font-bold text-[1.2rem] my-[1rem]  ">
            {cart.length != 0 ? "Products" : "Your Cart is Empty!"}
          </h3>
          {cart !== []
            ? cart.map((data, index) => (
                <Card className="w-96 my-6  relative" key={index}>
                  <MdDeleteForever
                    onClick={() => delteProductFromCart(data)}
                    className=" right-2 top-2 
                  cursor-pointer text-[1.3rem]  absolute text-red-500"
                  />
                  <CardBody className="  flex    space-x-8 items-center  p-4 ">
                    <div className=" hidden">
                      {(totalPrice += parseInt(data?.total))}
                    </div>

                    <div className="product-img ">
                      <Image
                        src={`${data.imgUrl}`}
                        height={150}
                        width={150}
                        alt="product-img"
                        className="rounded-md "
                      />
                    </div>

                    <div className="product-des col-span-3 flex justify-between space-x-10 backdrop:xl:space-x-[20rem] ">
                      <div className="details ">
                        <h2 className="font-bold mb-2">{data.title}</h2>
                        <ul className="">
                          <li>
                            <span className="title font-bold">Job Name: </span>
                            <span className="data"> {data.jobName}</span>
                          </li>
                          <li>
                            <span className="title font-bold">
                              Width & Length:
                            </span>
                            <span className="data"> {data.width_length}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Meterial :</span>
                            <span className="data">{data.material}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Reinforce :</span>
                            <span className="data"> {data.reinforce}</span>
                          </li>
                          <li>
                            <span className="title font-bold">Qty :</span>
                            <span className="data font-bold">
                              {" "}
                              {data.quantity}
                            </span>
                          </li>
                          <li>
                            <span className="title font-bold">Price :</span>
                            <span className="data font-bold">
                              {" "}
                              {data.total}$
                            </span>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </CardBody>
                </Card>
              ))
            : ""}
        </div>

        {cart.length === 0 ? (
          ""
        ) : (
          <div className="shipping mt-4 min-w-full">
            <form onSubmit={handleSubmit}>
              <div className="shiping_info my-6">
                <h5 className="font-bold text-[1.2rem] mb-2">
                  Shipping Information
                </h5>

                <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4 ">
                  <div className="">
                    <label
                      className="block tracking-wide text-base text-gray-700  mb-1"
                      htmlFor="grid-first-name"
                    >
                      First name
                    </label>
                    <input
                      required
                      disabled={isFetching}
                      value={order.Shipping.firstName}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Shipping: {
                            ...order.Shipping,
                            firstName: e.target.value,
                          },
                        })
                      }
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="First Name"
                    />
                  </div>
                  <div className="">
                    <label
                      className="block tracking-wide text-base text-gray-700  mb-1"
                      htmlFor="grid-first-name"
                    >
                      Last name
                    </label>
                    <input
                      required
                      disabled={isFetching}
                      value={order.Shipping.LastName}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Shipping: {
                            ...order.Shipping,
                            LastName: e.target.value,
                          },
                        })
                      }
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Last Name"
                    />
                  </div>
                </div>

                <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                  <div>
                    <label
                      className="block tracking-wide text-base text-gray-700  mb-1"
                      htmlFor="grid-first-name"
                    >
                      Zip Code
                    </label>
                    <input
                      required
                      disabled={isFetching}
                      value={order.Shipping.zipCode}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Shipping: {
                            ...order.Shipping,
                            zipCode: e.target.value,
                          },
                        })
                      }
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="number"
                      placeholder="Zip code"
                    />
                  </div>
                  <div className="w-full ">
                    <label
                      className="block  tracking-wide text-gray-700   "
                      htmlFor="country"
                    >
                      Country
                    </label>
                    <div>
                      <select
                        required
                        disabled={isFetching}
                        id="country"
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Shipping: {
                              ...order.Shipping,
                              country: e.target.value,
                            },
                          })
                        }
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border 
                     rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      >
                        <option selected>Select country</option>
                        {countryNam?.map((country, country_id) => (
                          <option
                            key={country_id}
                            value={country?.country_name}
                          >
                            {country?.country_name}
                          </option>
                        ))}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                    </div>
                  </div>
                </div>

                <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                  <div className="w-full ">
                    <label
                      className="block  tracking-wide text-gray-700   "
                      htmlFor="country"
                    >
                      State
                    </label>
                    <div>
                      <select
                        required
                        disabled={isFetching}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Shipping: {
                              ...order.Shipping,
                              state: e.target.value,
                            },
                          })
                        }
                        id="country"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      >
                        <option selected>Select State</option>
                        {states?.length > 0
                          ? states?.map((state, state_id) => (
                              <option key={state_id} value={state?.state_name}>
                                {state?.state_name}
                              </option>
                            ))
                          : ""}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                    </div>
                  </div>

                  <div className="w-full ">
                    <label
                      className="block  tracking-wide text-gray-700   "
                      htmlFor="country"
                    >
                      City
                    </label>
                    <div>
                      <select
                        required
                        disabled={isFetching}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Shipping: {
                              ...order.Shipping,
                              city: e.target.value,
                            },
                          })
                        }
                        id="country"
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      >
                        <option selected>Select City</option>
                        {cities?.length > 0
                          ? cities?.map((city, city_id) => (
                              <option key={city_id} value={city?.city_name}>
                                {city?.city_name}
                              </option>
                            ))
                          : ""}
                      </select>
                      <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                    </div>
                  </div>
                </div>

                <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                  <div className="">
                    <label
                      className="block tracking-wide text-base text-gray-700  mb-1"
                      htmlFor="grid-first-name"
                    >
                      Company Name
                    </label>
                    <input
                      required
                      disabled={isFetching}
                      value={order.Shipping.companyName}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Shipping: {
                            ...order.Shipping,
                            companyName: e.target.value,
                          },
                        })
                      }
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="text"
                      placeholder="Company Name"
                    />
                  </div>
                  <div className="">
                    <label
                      className="block tracking-wide text-base text-gray-700  mb-1"
                      htmlFor="grid-first-name"
                    >
                      Phone
                    </label>
                    <input
                      required
                      disabled={isFetching}
                      value={order.Shipping.phone}
                      onChange={(e) =>
                        setOrder({
                          ...order,
                          Shipping: {
                            ...order.Shipping,
                            phone: e.target.value,
                          },
                        })
                      }
                      className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                      id="grid-first-name"
                      type="number"
                      placeholder="Phone"
                    />
                  </div>
                </div>
              </div>

              <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                <div className="">
                  <label
                    className="block tracking-wide text-base text-gray-700  mb-1"
                    htmlFor="grid-first-name"
                  >
                    Address
                  </label>
                  <textarea
                    required
                    disabled={isFetching}
                    value={order.Shipping.address}
                    onChange={(e) =>
                      setOrder({
                        ...order,
                        Shipping: {
                          ...order.Shipping,
                          address: e.target.value,
                        },
                      })
                    }
                    className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                    id="grid-first-name"
                    type="text"
                    placeholder="Address"
                  />
                </div>
              </div>

              <div>
                <h5 className="font-bold text-[1.2rem] ">
                  Billing Information
                </h5>

                <div className="-ml-3">
                  <Checkbox
                    label="Same as Shiping Address"
                    defaultChecked
                    onChange={(e) => setSame(e.target.checked)}
                  />
                </div>
              </div>

              {!same ? (
                <div className="billing_info  mb-6 mt-2">
                  <div className=" grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2 mb-4 ">
                    <div className="">
                      <label
                        className="block tracking-wide text-base text-gray-700  mb-1"
                        htmlFor="grid-first-name"
                      >
                        First name
                      </label>
                      <input
                        required
                        disabled={isFetching}
                        value={order.Billing.firstName}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Billing: {
                              ...order.Billing,
                              firstName: e.target.value,
                            },
                          })
                        }
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="">
                      <label
                        className="block tracking-wide text-base text-gray-700  mb-1"
                        htmlFor="grid-first-name"
                      >
                        Last name
                      </label>
                      <input
                        required
                        disabled={isFetching}
                        value={order.Billing.LastName}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Billing: {
                              ...order.Billing,
                              LastName: e.target.value,
                            },
                          })
                        }
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Last Name"
                      />
                    </div>
                  </div>

                  <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                    <div>
                      <label
                        className="block tracking-wide text-base text-gray-700  mb-1"
                        htmlFor="grid-first-name"
                      >
                        Zip Code
                      </label>
                      <input
                        required
                        disabled={isFetching}
                        value={order.Billing.zipCode}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Billing: {
                              ...order.Billing,
                              zipCode: e.target.value,
                            },
                          })
                        }
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="number"
                        placeholder="Zip code"
                      />
                    </div>
                    <div className="w-full ">
                      <label
                        className="block  tracking-wide text-gray-700   "
                        htmlFor="country"
                      >
                        Country
                      </label>
                      <div>
                        <select
                          required
                          disabled={isFetching}
                          id="country"
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              Billing: {
                                ...order.Billing,
                                country: e.target.value,
                              },
                            })
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        >
                          <option selected>Select country</option>
                          {countryNam?.map((country, country_id) => (
                            <option
                              key={country_id}
                              value={country?.country_name}
                            >
                              {country?.country_name}
                            </option>
                          ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                      </div>
                    </div>
                  </div>

                  <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                    <div className="w-full ">
                      <label
                        className="block  tracking-wide text-gray-700   "
                        htmlFor="country"
                      >
                        State
                      </label>
                      <div>
                        <select
                          required
                          disabled={isFetching}
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              Billing: {
                                ...order.Billing,
                                state: e.target.value,
                              },
                            })
                          }
                          id="country"
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        >
                          <option selected>Select State</option>
                          {billingStates?.length > 0
                            ? billingStates?.map((state, state_id) => (
                                <option
                                  key={state_id}
                                  value={state?.state_name}
                                >
                                  {state?.state_name}
                                </option>
                              ))
                            : ""}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                      </div>
                    </div>

                    <div className="w-full ">
                      <label
                        className="block  tracking-wide text-gray-700   "
                        htmlFor="country"
                      >
                        City
                      </label>
                      <div>
                        <select
                          required
                          disabled={isFetching}
                          id="city"
                          onChange={(e) =>
                            setOrder({
                              ...order,
                              Billing: {
                                ...order.Billing,
                                city: e.target.value,
                              },
                            })
                          }
                          className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        >
                          <option selected>Select City</option>
                          {billingCities?.length > 0
                            ? billingCities?.map((city, city_id) => (
                                <option key={city_id} value={city?.city_name}>
                                  {city?.city_name}
                                </option>
                              ))
                            : ""}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
                      </div>
                    </div>
                  </div>

                  <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                    <div className="">
                      <label
                        className="block tracking-wide text-base text-gray-700  mb-1"
                        htmlFor="grid-first-name"
                      >
                        Company Name
                      </label>
                      <input
                        value={order.Billing.companyName}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Billing: {
                              ...order.Billing,
                              companyName: e.target.value,
                            },
                          })
                        }
                        required
                        disabled={isFetching}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Company Name"
                      />
                    </div>
                    <div className="">
                      <label
                        className="block tracking-wide text-base text-gray-700  mb-1"
                        htmlFor="grid-first-name"
                      >
                        Phone
                      </label>
                      <input
                        required
                        disabled={isFetching}
                        value={order.Billing.phone}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Billing: {
                              ...order.Billing,
                              phone: e.target.value,
                            },
                          })
                        }
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Phone"
                      />
                    </div>
                  </div>

                  <div className=" mb-4 grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2  ">
                    <div className="">
                      <label
                        className="block tracking-wide text-base text-gray-700  mb-1"
                        htmlFor="grid-first-name"
                      >
                        Address
                      </label>
                      <textarea
                        value={order.Billing.address}
                        onChange={(e) =>
                          setOrder({
                            ...order,
                            Billing: {
                              ...order.Billing,
                              address: e.target.value,
                            },
                          })
                        }
                        required
                        disabled={isFetching}
                        className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                        id="grid-first-name"
                        type="text"
                        placeholder="Address"
                      />
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="text-lightGray font-bold text-sm mb-2 block"
                >
                  Card info
                </label>
                <CardElement className=" border p-3  w-full  rounded-md" />

                {cardError ? (
                  <p className="  mt-2 text-base text-red-600">
                    {cardError.message}
                  </p>
                ) : (
                  ""
                )}
              </div>

              <div>
                <h1 className="mb-4 font-bold text-[1.2rem]">
                  Total : <span className="font-normal">{totalPrice}$</span>{" "}
                </h1>
              </div>

              <Button
                type="submit"
                disabled={isFetching}
                className="mb-6"
                size="sm"
              >
                {isFetching ? "Loading..." : "Confirm Order"}
              </Button>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartElement;
