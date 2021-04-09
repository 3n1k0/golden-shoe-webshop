import styled from "styled-components";

export const FeatureContainer = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  place-items: center;
  color: #fff;
  text-align: center;
  padding: 3rem;

img{
  width: 500px;
  height: 500px;
  object-fit: cover;
}

  h1 {
    font-size: clamp(2rem, 5vw, 4rem);
    position: relative;
    background: pink;
    color: black;
    top: 100px;
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
  margin-top: 50px;

  &:hover {
    background: #cf7500;
    transition: 0.2s ease-out;
    cursor: pointer;
    color: cornsilk;
  }
`;
