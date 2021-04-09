import styled from "styled-components";
import ImgBg from "../../images/shoe-5.jpeg";

export const HeroContainer = styled.div`
  background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
  height: 100vh;
  width: 100%;
  background-position: 20% 30%;
  background-size: cover;

`;

export const HeroContent = styled.div`
  height: calc(100vh -80vh);
  max-height: 100%;
  width: 100%;

`;
export const HeroItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  height: 80vh;
  max-height: 100%;
  padding: 0 2rem;
  color: #fff;
  text-transform: uppercase;
  line-height: 1;

`;

export const HeroH1 = styled.h1`
  font-size: clamp(2rem, 10vw, 4rem);
  margin-bottom: 1rem;
  box-shadow: 3px 5px #e9ba23;
  letter-spacing: 3px;
  font-family: "Playfair Display", serif;
`;

export const HeroP = styled.p`
  font-size: clamp(2rem, 2.5vw, 3rem);
  margin-bottom: 2rem;
`;

export const HeroBtn = styled.button`
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
