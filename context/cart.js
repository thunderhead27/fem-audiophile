import { createContext, useContext, useState, useEffect } from "react";

const Context = createContext();

export function CartProvider({ children }) {
    const initialState = [];
    const [cart, setCart] = useState(initialState);

    useEffect(() => {
        const cartData = JSON.parse(localStorage.getItem("cart"));
        if (cartData) {
            setCart(cartData);
        }
    }, []);

    useEffect(() => {
        if (cart !== initialState) {
            localStorage.setItem("cart", JSON.stringify(cart));
        }
    }, [cart]);

    return (
        <Context.Provider value={[cart, setCart]}>{children}</Context.Provider>
    );
}

export function useCartContext() {
    return useContext(Context);
}