import styled from "styled-components";

export const ProductsContainer = styled.div`
  width: 100%;
  height:100%;
  min-height: 100vh;
  background: #fff;
  color: black;
`;

export const ProductWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 auto;
  padding: 100px;
`;

export const ProductCard = styled.div`
  margin: 0 2rem;
  line-height: 2;
  width: 300px;
`;

export const ProductImage = styled.img`
  height: 300px;
  min-width: 300px;
  max-width: 100%;
  box-shadow: 8px 8px rgba(0,0,0,0.2);
`;

export const ProductTitle = styled.h2`
  font-weight: 400;
  font-size: 1.2rem;
`;
export const ProductInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

export const ProductPrice = styled.p`
  font-size: 1.2rem;
`;

export const ProductBrand = styled.p`
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 1px;
  font-family: "Kiwi Maru";
  color: #e9ba23;
`;

// export const ProductBtn = styled.button`
//   font-size: 1rem;
//   padding: 1rem 1rem;
//   border: none;
//   background: #e31837;
//   color: #fff;
//   transition: 0.2s ease-out;

//   &:hover {
//     background: #ffc500;
//     transition: 0.2s ease-out;
//     cursor: pointer;
//   }
// `;
