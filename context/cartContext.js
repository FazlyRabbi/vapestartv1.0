import { API_TOKEN, API_URL } from "@/config/index";
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const session = useSession();

  const [cart, setCart] = useState();

  const fetchCarts = async () => {
    try {
      const response = await fetch(
        `http://localhost:3000/api/cart?user=${session.data.user._id}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const data = await response.json();

      setCart(data.data);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  useEffect(() => {
    if (session) {
      fetchCarts();
    }
  }, [session]);

  return (
    <CartContext.Provider value={{ cart, setCart }}>
      {children}
    </CartContext.Provider>
  );
};
