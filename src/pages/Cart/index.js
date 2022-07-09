import React, {useContext} from "react";
import { CartContext } from "../../contexts/cart";
import { CartContainer, CartBox, CartBoxItems, CartItems, CartBtn, CartBtnGroup, CartP } from "./CartElements";
import Sidebar from "../../components/Sidebar";

const Cart = () => {
    const { removeItem, clearCart, toggle, isOpen } = useContext(CartContext)
      // const { cart } = useContext(CartContext)
    const cart = JSON.parse(localStorage.getItem('Carrinho'))
    const totalPrice = cart ? cart.reduce((acc, current)=>acc + current.total, 0) : 0
    console.log(cart)

    return(
        <CartContainer>
            <Sidebar isOpen={isOpen} toggle={toggle} />
            <CartBox>
                <CartBoxItems>
                    <h1>Carrinho</h1>
                    {cart !== null || totalPrice > 0 ? 
                    cart.map((e, i)=>(
                        <div key={i}>
                            <CartItems>
                                <h3>{e.name}</h3>
                                <h3>R${e.price}</h3>
                                <h3>{e.qtd}x</h3>
                                <button onClick={()=>removeItem(e.id)}>Remover</button>
                            </CartItems>
                        </div>
                    ))
                    : "" }
                </CartBoxItems>
                { totalPrice > 0 ? 
                <CartP>Total: <span>R${totalPrice.toFixed(2)}</span></CartP>
                : <CartP>Carrinho vazio</CartP>}
                <CartBtnGroup>
                    <CartBtn onClick={clearCart}>Limpar carrinho</CartBtn>
                </CartBtnGroup>
            </CartBox>
        </CartContainer>
    )
}

export default Cart;