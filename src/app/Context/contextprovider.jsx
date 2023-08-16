'use client';
import { createContext, useContext, useState } from "react";

const ContextProvider = createContext(null);
export const useCustomContext = () => useContext(ContextProvider);

export default function ProductsContext(props) {

    const [cart, setCart] = useState("");
    const [fav, setfav] = useState("");

    return (
        <ContextProvider.Provider value={{
            cart,
            fav,
            setCart,
            setfav
        }}>
            {props.children}
        </ContextProvider.Provider>
    )
}