import styled from "styled-components";

export const ProductsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 300px));
  padding: 20px 20px;
  grid-gap: 1rem;
  align-items: center;
  justify-content: center;
`;


export const ProductCard = styled.div`
    text-decoration: none;
    background: transparent;
    box-shadow: 0 6px 10px rgba(0, 0, 0, 0.08), 0 0 6px rgba(0, 0, 0, 0.05);
    transition: 0.3s transform cubic-bezier(0.155, 1.105, 0.295, 1.12),
      0.3s box-shadow,
      0.3s -webkit-transform cubic-bezier(0.155, 1.105, 0.295, 1.12);
    cursor: pointer;
    display: grid;
    place-items: center;
    padding: 20px;
    margin: 10px;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12), 0 4px 8px rgba(0, 0, 0, 0.06);
      text-decoration: none;

    }
`;

export const ProductImage = styled.img`
width: 100%;
height: 100%;
min-height: 280px;
max-height: 280px;
object-fit: cover;
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
