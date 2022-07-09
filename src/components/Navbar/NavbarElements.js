import styled from 'styled-components';
import { NavLink as Link } from 'react-router-dom';
import { FaPizzaSlice } from 'react-icons/fa';

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  background: #be0202;
  height: 60px;
  font-weight: 700;
`;

export const NavLink = styled(Link)`
  color: #fff;
  font-size: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  cursor: pointer;
  margin: 20px;

  @media screen and (max-width: 400px) {
    top: 10px;
    left: 25px;
  }
`;

export const NavIcon = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  top: 0;
  right: 0;
  cursor: pointer;
  color: #fff;
  margin: 20px;


  p {
    font-weight: bold;
    margin: 10px;
  }
`;

export const Bars = styled(FaPizzaSlice)`
  font-size: 2rem;
  
`;
