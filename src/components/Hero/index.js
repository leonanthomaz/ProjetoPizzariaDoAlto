import React, { useState } from 'react';
import Sidebar from '../Sidebar';
import {
  HeroContainer,
  HeroContent,
  HeroItems,
  HeroH1,
  HeroH1Span,
  HeroP,
  HeroBtn,
  HeroBtnGroup
} from './HeroElements';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart';

const Hero = () => {
  const { isOpen, setIsOpen, toggle } = useContext(CartContext)

  return (
    <HeroContainer>
      <Sidebar isOpen={isOpen} toggle={toggle} />
      <HeroContent>
        <HeroItems>
          <HeroH1>Pizza do Alto</HeroH1>
          <HeroP>Pronto em 30 minutos!</HeroP>
          <HeroBtnGroup>
            <HeroBtn>Cadápio</HeroBtn>
            <HeroBtn>Ofertas</HeroBtn>
          </HeroBtnGroup>
        </HeroItems>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
