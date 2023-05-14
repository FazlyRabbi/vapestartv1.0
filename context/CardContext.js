import { API_TOKEN, API_URL } from "@/config/index";
import { createContext, useEffect, useState } from "react";


export const CardContext = createContext();

export const CardProvider = ({ children }) => {
  const init = [];

  const [cart, setCart] = useState(init);
  const [currentProduct, setCurrentProduct] = useState({});

  useEffect(() => {
    const savedCart = localStorage.getItem("cart");
    if (savedCart) {
      setCart(JSON.parse(savedCart));
    }
  }, []);

  return (
    <CardContext.Provider
      value={{ cart, setCart, setCurrentProduct, currentProduct }}
    >
      {children}
    </CardContext.Provider>
  );
};
