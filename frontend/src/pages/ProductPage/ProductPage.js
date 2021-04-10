import Image from "../../images/shoe-2.jpg";
import styled from "styled-components";


export const ProductImage = styled.img.attrs(() => ({ src: Image }))`
  width: 100%;
  height: 700px;
  object-fit: cover;
`;
