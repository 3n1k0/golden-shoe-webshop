import styled from "styled-components";
import {FaRegTrashAlt} from 'react-icons/fa'
import Image from "../../images/shoe-2.jpg";


export const CartContainer = styled.div`
width: 100%;
display: grid;
place-items: center;

h1{
    padding: 50px;
}
`

export const CartItem = styled.div`
  width: 100%;
  padding: 1em;
  display: flex;
  gap: 8px;
  background: white;
  border-radius: 2px;
  justify-content: space-evenly;
  align-items: center;
  background: whitesmoke;

  select {
    padding: 10px 17px;
    height: 50px;
  }

`;


export const DeleteButton = styled.div`
outline: none;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.3s ease-out;

&:hover{}
&:focus{}
&:active{
    color: black;
    transform: scale(1.2);
}
`;

export const Trashcan = styled(FaRegTrashAlt)`
  color: red;
  padding: 3px;
  font-size: 1.3em;
`;

export const ItemImage = styled.img.attrs(() => ({ src: Image }))`
width: 150px;
`

export const OrderTotal = styled.div`
width: 100%;
display: grid;
place-items: center;
background-color: rgba(230, 230, 230, 0.7);
height: 100%;
padding: 50px;

p{
    font-weight: bolder;
}
`
