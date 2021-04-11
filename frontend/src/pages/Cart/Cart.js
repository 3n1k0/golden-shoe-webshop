import styled from "styled-components";
import {FaRegTrashAlt} from 'react-icons/fa'
import Image from "../../images/shoe-2.jpg";


export const CartContainer = styled.div`
width: 100%;
`

export const CartItem = styled.div`
  width: 100%;
  padding: 1em;
  margin-bottom: 8px;
  display: flex;
  gap: 8px;
  background: white;
  border-radius: 2px;
  place-items: center;

  select {
    padding: 10px 17px;
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



