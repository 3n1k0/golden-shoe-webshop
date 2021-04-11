import Image from "../../images/shoe-2.jpg";
import styled from "styled-components";
import { FaRegHeart } from "react-icons/fa";


export const ProductImage = styled.img.attrs(() => ({ src: Image }))`
  width: 100%;
  height: 700px;
  object-fit: cover;
`;

export const SizeSelector = styled.select`
width: 250px;
height: 40px;
`
export const AddToCartButton = styled.button`
width: 200px;
height: 50px;
padding: 5px;
background-color: green;
margin: 50px;
`
export const StyledLikeButton = styled(FaRegHeart)`
  color: blue;
`;

export const ProductContainer = styled.div`
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding-bottom: 50px;

h1{
  padding: 20px;
}
p{
  padding: 20px;
}
`
