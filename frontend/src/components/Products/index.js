import React from "react";
import {
  ProductsContainer,
  ProductWrapper,
  ProductTitle,
  ProductCard,
  ProductImage,
  ProductInfo,
  ProductBrand,
  ProductPrice,
} from "./ProductsElements";
import { Link } from "react-router-dom";

const Products = ({ data }) => {
  return (
    <ProductsContainer>
      <ProductWrapper>
        {data.map((product, index) => {
          return (
            <Link to={`/shop/${product.id}`}>
              <ProductCard key={index}>
                <ProductImage src={product.img} alt={product.alt} />
                <ProductInfo>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductBrand>{product.brand}</ProductBrand>
                </ProductInfo>
              </ProductCard>
            </Link>
          );
        })}
      </ProductWrapper>
    </ProductsContainer>
  );
};

export default Products;
