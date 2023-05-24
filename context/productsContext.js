import { createContext, useContext } from "react";
import { useQuery } from "react-query";
import http from "utils/api";
// Create and export the context
export const ProductsContext = createContext();

// Custom hook to consume the context
export const useProducts = () => useContext(ProductsContext);

// Custom hook to handle the products query
export const useProductsQuery = () => {
  return useQuery("myProducts", fetchProducts);
};

// ProductsProvider component
export const ProductsProvider = ({ children }) => {
  
  const productsQuery = useProductsQuery();

  return (
    <ProductsContext.Provider value={{ productsQuery }}>
      {children}
    </ProductsContext.Provider>
  );
};

async function fetchProducts() {

  const response = await http.Get(`/product`);

  return response.data;
}
