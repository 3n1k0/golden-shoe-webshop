import Image from "../../images/shoe-2.jpg";
import styled from "styled-components";
import { BiHeart } from "react-icons/bi";

export const SizeSelector = styled.select`
  display: block;
  font-size: 16px;
  font-weight: 700;
  color: #444;
  line-height: 1.3;
  padding: 0.6em 1.4em 0.5em 0.8em;
  max-width: 100%;
  box-sizing: border-box;
  margin: 0;
  border: 1px solid #aaa;
  box-shadow: 0 1px 0 1px rgba(0, 0, 0, 0.04);
  border-radius: 0.5em;
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  background-color: #fff;
  background-image: url("data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23007CB2%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E"),
    linear-gradient(to bottom, #ffffff 0%, #e5e5e5 100%);
  background-repeat: no-repeat, repeat;
  background-position: right 0.7em top 50%, 0 0;
  background-size: 0.65em auto, 100%;
  outline: none;

  &:focus {
    border-color: #aaa;
    box-shadow: 0 0 1px 3px rgba(59, 153, 252, 0.7);
    box-shadow: 0 0 0 3px -moz-mac-focusring;
    color: #222;
    outline: none;
  }
`;
export const AddToCartButton = styled.button`
  font-weight: 700;
  width: 250px;
  background-color: #018849;
  text-align: center;
  color: #fff;
  letter-spacing: 2px;
  height: 41px;
  text-transform: uppercase;
  border: 0;
  cursor: pointer;
  padding: 0;
  font-size: 14px;

`;
export const StyledLikeButton = styled(BiHeart)`
  color: black;
  border: 1px solid #e5e5e5;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  padding: 5px;
  margin-left: 20px;

  &:hover{
    transform: scale(1.1);
  }
`;

export const FirstBigContainer = styled.div`
  width: 100%;
  max-width: 960px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 50px;

  @media screen and (min-width: 1025px) {
    margin: 0 auto;
    flex-flow: row;
  }

  h1 {
    padding-top: 20px;
  }

  p {
    padding: 20px;
  }

  img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    cursor: pointer;

    @media screen and (min-width: 1025px) {
      width: 80%;
    }
  }

  span {
    display: grid;
    place-items: center;
    text-align: center;
  }
`;

export const ImageContainer = styled.div`
  display: block;

  &:hover {
  }
`;

export const SecondBigContainer = styled.div`
  display: grid;
  place-items: center;
  margin-bottom: 100px;
  padding: 50px;

  p {
    width: 90%;
    text-align: center;
    @media screen and (min-width: 1025px) {
      width: 55%;
    }
  }
`;


export const ShippingInformation = styled.div`

`

export const ReturnPolicy = styled(ShippingInformation)`

`

export const AddToCartContainer = styled.div`
  display: flex;
  margin-top: 50px;
  align-items: center;
  justify-content: center;
`;