import React, { createContext } from "react";

export interface products {
    title: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: object,
    category: string
}
 type MyContextValue = {
    products: products[],
    setProducts: React.Dispatch<React.SetStateAction<any>>;
 }

export const MyContext = createContext({} as MyContextValue)