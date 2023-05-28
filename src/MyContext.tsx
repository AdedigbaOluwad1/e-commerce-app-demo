import React, { createContext } from "react";

 type MyContextValue = {
    products: any,
    setProducts: React.Dispatch<React.SetStateAction<any>>;
 }

export const MyContext = createContext<MyContextValue | undefined>(undefined)