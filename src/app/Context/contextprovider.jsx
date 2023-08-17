"use client";
import { createContext, useContext, useReducer, useState } from "react";
import { productReducer } from "./reducer";
import { Products } from "@/data/products";

const ContextProvider = createContext(null);
export const useCustomContext = () => useContext(ContextProvider);

export default function ProductsContext(props) {
  const [state, dispatch] = useReducer(productReducer, {
    product: Products,
    cart: [],
  });

  return (
    <ContextProvider.Provider
      value={{
        state,
        dispatch,
      }}
    >
      {props.children}
    </ContextProvider.Provider>
  );
}
