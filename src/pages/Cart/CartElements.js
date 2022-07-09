import styled from 'styled-components';

export const CartContainer = styled.div`
    background: linear-gradient(to  right , rgba(0, 0, 0, 0.849) 70%, rgba(0, 0, 0, 0.411)),
    url('https://images.squarespace-cdn.com/content/v1/5c54b9347a1fbd277f85fbe6/1560286574721-QJ2GD9IG39B1JYO04I0Z/shutterstock_225746563.jpg?format=1500w');
    height: 100vh;
    background-position: center;
    background-size: cover;
    color: white;
`;

export const CartBox = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 20px;
    max-width: 650px;
    margin: auto;
    height: calc(70vh - 30px);
    padding: 5px;

`;

export const CartBoxItems = styled.div`
text-align: start;

h1{
    padding-bottom: 20px;
    text-align: center;
}

@media(max-width: 760px){
        font-size: 14px;
    }
`;

export const CartItems = styled.div`
    display: grid;
    grid-template-columns: 300px 100px 100px 80px;
    border-bottom: 1px solid #fff;
    margin: 5px;

    button{
        padding: 5px;
        border: none;
        background: #e31837;
        color: #fff;
        transition: 0.2s ease-out;

        &:hover {
            background: #ffc500;
            transition: 0.2s ease-out;
            cursor: pointer;
            color: #000;
        }
    }

    @media(max-width: 760px){
        grid-template-columns: 170px 50px 50px 70px ;
    }
`;

export const CartP = styled.p`
    border-bottom: 1px solid #fff;
    font-size: 20px;
    margin: 5px;
    font-weight: 900;
    padding: 5px;
    text-align: center;

    span{
        
    }
`;

export const CartBtnGroup = styled.div`
  display: flex;
  justify-content: center;
  background: transparent;
  border: none;
`;

export const CartBtn = styled.button`
  font-size: 1rem;
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