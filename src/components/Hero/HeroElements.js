import styled from 'styled-components';
import ImgBg from '../../images/pizza-3.jpg';

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url('https://images.squarespace-cdn.com/content/v1/5c54b9347a1fbd277f85fbe6/1560286574721-QJ2GD9IG39B1JYO04I0Z/shutterstock_225746563.jpg?format=1500w');
  height: 100vh;
  background-position: center;
  background-size: cover;
  
`;

export const HeroContent = styled.div`
  height: calc(100vh - 80px);
  max-height: 100%;
  padding: 0rem calc((100vw - 1300px) / 2);
  
`;

export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 100vh;
  max-height: 100%;
  padding: 0 2rem;
  width: 650px;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;
  font-weight: bold;
  
  @media screen and (max-width: 650px) {
    width: 100%;
  }
`;


export const HeroH1 = styled.h1`
  font-size: clamp(2.5rem, 9vw, 4rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
`;

export const HeroH1Span = styled.h1`
  font-size: clamp(2.5rem, 10vw, 5rem);
  margin-bottom: 1rem;
  letter-spacing: 3px;
  
`;

export const HeroP = styled.p`
  font-size: clamp(1.5rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
  
`;

export const HeroBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;
`;

export const HeroBtn = styled.button`
  font-size: 1.4rem;
  padding: 0.5rem 2rem;
  border: none;
  background: #e31837;
  color: #fff;
  transition: 0.2s ease-out;
  margin: 10px;


  &:hover {
    background: #ffc500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: #000;
  }
`;
