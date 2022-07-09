import React from 'react';
import { Nav, NavLink, NavIcon, Bars } from './NavbarElements';
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const Navbar = () => {
  const { isOpen, setIsOpen, toggle } = useContext(CartContext)

  return (
    <>
      <Nav>
        <NavLink to='/'>Pizzaria</NavLink>
        <NavIcon onClick={toggle}>
          <p>Menu</p>
          <Bars />
        </NavIcon>
      </Nav>
    </>
  );
};

export default Navbar;
