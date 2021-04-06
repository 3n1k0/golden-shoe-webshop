import React from "react";
import { GlobalStyle } from "../globalStyles";
import Hero from "../components/Hero";
import Products from "../components/Products";
import { productData } from "../components/Products/data";
import Features from "../components/Feature";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <GlobalStyle />
      <Hero />
      <Products data={productData} />
      <Features />
      <Footer />
    </>
  );
}

export default Home;
