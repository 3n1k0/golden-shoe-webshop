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
        {data.map((product, index) => {
          return (
            <Link to={`/shop/${product._id}`}>
              <ProductCard key={index}>
                <ProductImage src={product.imageUrl} alt={product.alt} />
                <ProductInfo>
                  <ProductPrice>{product.price}</ProductPrice>
                  <ProductTitle>{product.name}</ProductTitle>
                  <ProductBrand>{product.brand}</ProductBrand>
                </ProductInfo>
              </ProductCard>
            </Link>
          );
        })}
    </ProductsContainer>
  );
};

export default Products;
