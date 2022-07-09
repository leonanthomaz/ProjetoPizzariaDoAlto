import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

import { CartContext } from '../../contexts/cart';
import { useContext } from 'react';

const Sidebar = ({ isOpen, toggle }) => {

  // const { cart } = useContext(CartContext)
  const cart = JSON.parse(localStorage.getItem('Carrinho'))
  const totalPrice = cart ? cart.reduce((acc, current)=>acc + current.total, 0) : 0
  console.log(totalPrice)

  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>Pizzas</SidebarLink>
        <SidebarLink to='/'>Bebidas</SidebarLink>
        <SidebarLink to='/cart'>Carrinho</SidebarLink>
        <SidebarLink to='/'>Total: R${totalPrice.toFixed(2)}</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/cart'>Ir para o carrinho</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
