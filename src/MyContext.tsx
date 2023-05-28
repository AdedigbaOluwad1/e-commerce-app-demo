import React, { createContext } from "react";

export interface Product {
    title: string,
    description: string,
    id: number,
    image: string,
    price: number,
    rating: object,
    category: string
}
 type MyContextValue = {
    products: Product[],
    setProducts: (products: Product[]) => void;
 }

export const MyContext = createContext({} as MyContextValue)