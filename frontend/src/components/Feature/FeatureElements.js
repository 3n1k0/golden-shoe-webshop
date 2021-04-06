import styled from "styled-components";
import FeaturePic from "../../images/shoe-3.jpg";

export const FeatureContainer = styled.div`
  background: url(${FeaturePic});
  height: 100vh;
  max-height: 800px;
  width: 500px;
  background-size: cover;
  background-position: 0% 100%;
  display: grid;
  place-items: center;
  color: #fff;
  text-align: center;
  padding: 0 1rem;


  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    position: relative;
    background: white;
    color: black;
    top: -100px;
  }
  p {
    margin-bottom: 2rem;
    font-size: clamp(1rem, 3vw, 2rem);
  }
`;

export const FeatureButton = styled.button`
  font-size: 1.2rem;
  letter-spacing: 1px;
  padding: 1rem 2rem;
  border: none;
  background: #e9ba23;
  color: #fff;
  transition: 0.2s ease-out;
  text-transform: uppercase;

  &:hover {
    background: #cf7500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: cornsilk;
  }
`;
