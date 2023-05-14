import { CardContext } from "@/context/CardContext";
import styles from "@/styles/Home.module.css";
import { useRouter } from "next/router";
import { useContext, useEffect, useState } from "react";

function generateProductName() {
  const randomNumber = Math.floor(Math.random() * 100000000);
  const paddedNumber = randomNumber.toString().padStart(8, "0");
  return paddedNumber;
}

export default function Calculator({ product }) {
  const { setCurrentProduct } = useContext(CardContext);

  // geting all input required data
  const [error, setError] = useState(null);
  const [widthError, setWidthError] = useState(null);
  const [heightError, setHeightError] = useState(null);

  const inital = {
    width_length: "1' x 1'",
    quantity: "1",
    material: "",
    reinforce: "1/binded",
    color: "1/black & white",
    lamination: "0/none",
    production_time: "5/2-3 Business Days ",
    customWidth: "1",
    customHeight: "1",
    total: "0",
  };

  const [calData, setCalData] = useState(inital);

  // make the main calculations
  const price = 10; //10 doller

  const calculation = () => {
    // convert string to number
    // this is for width and length
    const value = calData.width_length.split(" x ");
    const custom = calData.width_length;

    const height = parseInt(value[0]);
    const width = parseInt(value[1]);
    const area = width * height;

    // Reinforce
    const reinforceInput = calData.reinforce.split("/");
    const rainforce = parseInt(reinforceInput[0]);

    // color
    const colorInput = calData.color.split("/");
    const color = parseInt(colorInput[0]);

    // Lamination Time
    const laminationInput = calData.lamination.split("/");
    const lamination = parseInt(laminationInput[0]);

    // Production
    const productionInput = calData.production_time.split("/");
    const production = parseInt(productionInput[0]);

    const quantity = calData.quantity;

    // custom area
    const areaFromCustom = calData.customHeight * calData.customWidth;

    if (areaFromCustom > 0 && custom === "custom") {
      const totalPrice =
        (areaFromCustom * price + rainforce + production + color + lamination) *
        quantity;

      return totalPrice;
    } else {
      const totalPrice =
        (area * price + rainforce + production + color + lamination) * quantity;

      return totalPrice;
    }
  };

  useEffect(() => {
    const totalPrice = calculation();
    setCalData({ ...calData, total: totalPrice.toString() });
  }, [
    calData.width_length,
    calData.quantity,
    calData.material,
    calData.reinforce,
    calData.color,
    calData.lamination,
    calData.production_time,
    calData.customWidth,
    calData.customHeight,
  ]);

  // set quantity

  const handleQuantity = (e) => {
    if (e.target.value > 0) {
      setCalData({
        ...calData,
        quantity: e.target.value,
      });
      setError(null);
    } else {
      setError("plz enter valid quantity");
    }
  };

  const handleWidth = (e) => {
    if (e.target.value > 49 || e.target.value <= 0) {
      setWidthError("Max value is 48 and Min value is 1");
    } else {
      setCalData({
        ...calData,
        customWidth: e.target.value,
      });
      setWidthError(null);
    }
  };

  const handleHeight = (e) => {
    if (e.target.value <= 0) {
      setHeightError("Min value is 1");
    } else {
      setCalData({
        ...calData,
        customHeight: e.target.value,
      });
      setHeightError(null);
    }
  };

  const route = useRouter();

  const jobName = generateProductName();

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentProduct({
      ...calData,
      material: product?.attributes?.Title,
      jobName: jobName,
      file: null,
      imgUrl: product?.attributes?.Thubmnails.data[0].attributes.url,
      title: product?.attributes?.Title,
    });

    route.push(`${route.asPath}/upload`);
  };

  return (
    <form className="w-full shadow-md " onSubmit={handleSubmit}>
      <h4
        className={` font-bold  p-2  pl-5 rounded-tl-md 
            
            rounded-tr-md shadow-sm
            bg-[#111827]   text-white  ${styles.borderGradient} `}
      >
        Price Calculator
      </h4>

      <div className="flex flex-wrap -mx-3 mb-6 px-8  pb-4   ">
        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Width & Length
          </label>
          <div className="relative">
            <select
              required
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({
                  ...calData,
                  width_length: e.target.value,
                })
              }
            >
              <option>1' x 1'</option>
              <option>2' x 3'</option>
              <option>3' x 4'</option>
              <option value={"custom"}>Custom Size</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        {calData.width_length === "custom" ? (
          <div className="flex  space-x-10">
            <div className="w-full mt-4   ">
              <label
                className="block tracking-wide text-gray-700  mb-1"
                htmlFor="grid-first-name"
              >
                Width <span className="text-red-600 font-bold">(Fet)</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                value={calData.customWidth}
                onChange={handleWidth}
              />
              {widthError && (
                <p className="text-red-600 text-sm">{widthError}</p>
              )}
            </div>
            <div className="w-full mt-4   ">
              <label
                className="block tracking-wide text-gray-700  mb-1"
                htmlFor="grid-first-name"
              >
                Height <span className="text-red-600 font-bold">(Fet)</span>
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="number"
                value={calData.customHeight}
                placeholder="0"
                onChange={handleHeight}
              />
              {heightError && (
                <p className="text-red-600 text-sm">{heightError}</p>
              )}
            </div>
          </div>
        ) : (
          ""
        )}

        <div className="w-full mt-4   ">
          <label
            className="block tracking-wide text-gray-700  mb-1"
            htmlFor="grid-first-name"
          >
            Quantity
          </label>
          <input
            required
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="number"
            value={calData.quantity}
            onChange={handleQuantity}
          />
          {error && <p className="text-red-600 text-sm">{error}</p>}
        </div>

        <div className="w-full mt-4   ">
          <label
            className="block tracking-wide text-gray-700  mb-1"
            htmlFor="grid-first-name"
          >
            Material
          </label>
          <input
            readOnly
            required
            value={product?.attributes?.Title}
            className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-2 px-4 mb-1 leading-tight focus:outline-none focus:bg-white"
            id="grid-first-name"
            type="text"
            placeholder="bond paper"
          />
        </div>

        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Reinforce
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({ ...calData, reinforce: e.target.value })
              }
            >
              <option value={`1/binded`}>Binded</option>
              <option value={`2/loose`}>Loose</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Color
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({ ...calData, color: e.target.value })
              }
            >
              <option value={`1/black & white`}>Black & White</option>
              <option value={`2/color`}>Color</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Lamination
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({ ...calData, lamination: e.target.value })
              }
            >
              <option value={`0/none`}>None</option>
              <option value={`1/matte`}>Matte</option>
              <option value={`2/gloss`}>Gloss</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="w-full mt-4 ">
          <label
            className="block  tracking-wide text-gray-700  mb-1  "
            htmlFor="grid-state"
          >
            Production Time
          </label>
          <div className="relative">
            <select
              className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-2 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-state"
              onChange={(e) =>
                setCalData({ ...calData, production_time: e.target.value })
              }
            >
              <option value={`5/2-3 Business Days `}>2-3 Business Days</option>
              <option value={`10/next day`}>Next Day</option>
              <option value={`15/same day`}>Same Day</option>
            </select>
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700"></div>
          </div>
        </div>

        <div className="w-full mt-4   ">
          <input
            required
            className="appearance-none text-right block w-full bg-white  text-primary   rounded py-2 px-4 my-5 leading-tight font-bold text-[18px] focus:outline-none focus:bg-white "
            id="grid-first-name"
            disabled
            type="text"
            placeholder="1"
            value={`Total : $${calData.total}`}
          />
        </div>

        <button
          type="submit"
          className="appearance-none
           hover:text-white
          text-center block w-full bg-[#111827]  text-white  border-red-500 rounded py-2  my-3 leading-tight font-bold text-[18px]  uppercase cursor-pointer focus:outline-none  "
        >
          add to cart
        </button>
      </div>
    </form>
  );
}
