import React from "react";
import { FeatureContainer, FeatureButton } from "./FeatureElements";
import featureImage from './featured4.jpeg'
const Features = () => {
  return (
    <FeatureContainer>
      <h1>#OOTD #</h1>
      <img src={featureImage}/>
      <FeatureButton>Shop the look</FeatureButton>
    </FeatureContainer>
  );
};

export default Features;
