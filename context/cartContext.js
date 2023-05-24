import { API_TOKEN, API_URL } from "@/config/index";
import { createContext, useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useQuery } from "react-query";
import http from "utils/api";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const { data: sessionData, status } = useSession(); // Destructure `data` and `status` from `useSession` hook result


  const { data, isLoading, isError, refetch } = useQuery("myCarts", fetchCarts);

 

  return (
    <CartContext.Provider value={{ data, isLoading, isError, refetch }}>
      {children}
    </CartContext.Provider>
  );
};

async function fetchCarts() {
  const response = await http.Get(`/cart/64620016c9e619ab7aa4f4a8`);

  return response;
}
