import React, { createContext, useState } from "react";
import { productData } from "../components/Products/data";

export const CartContext = createContext()

export const CartProvider = ({ children }) => {

    const [ cart, setCart ] = useState([])

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => {
      setIsOpen(!isOpen);
    };

    const addCart = (id, name, price) => {
    const cartLocalStorage = JSON.parse(localStorage.getItem('Carrinho'))
    const copyProductsCart = cartLocalStorage ? [...cartLocalStorage] : cart
    const item = copyProductsCart.find((product) => product.id === id);
    if (!item) {
      copyProductsCart.push({ 
        id: id, 
        name: name, 
        price: price, 
        qtd: 1, 
        total: price
      });
    } else {
      item.qtd = item.qtd + 1;
      item.total = item.price * item.qtd
    }
    localStorage.setItem('Carrinho', JSON.stringify(copyProductsCart))
    setCart(copyProductsCart);
    }

    const removeItem = (ItemId) => {
      const cartLocalStorage = JSON.parse(localStorage.getItem('Carrinho'))
      const copyProductsCart = cartLocalStorage ? [...cartLocalStorage] : cart
      const filteredCart = copyProductsCart.filter(cartItem => cartItem.id !== ItemId)
      localStorage.setItem('Carrinho', JSON.stringify(filteredCart))
      setCart(filteredCart)
    }
  
    const clearCart = () => {
      setCart([])
      // localStorage.setItem('Carrinho', cart)
      localStorage.removeItem('Carrinho')

    }

    return(
        <CartContext.Provider value={{ addCart, removeItem, clearCart, isOpen, setIsOpen, toggle }}>
            {children}
        </CartContext.Provider>
    )
}