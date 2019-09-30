import React from 'react';
import { Image } from 'components';
import CompoentContainer from './component-container';

const ImageDemo = () => (
  <CompoentContainer title="Image">
    <CompoentContainer title="Rounded Image (Default)" isVariation>
      <Image src="https://via.placeholder.com/800x300?text=Rectangle+Image" alt="A placeholder image" />
    </CompoentContainer>
    <CompoentContainer title="Cirle Image" isVariation>
      <Image src="https://via.placeholder.com/300?text=Square+Image" alt="A round placeholder image" shape="circle" />
    </CompoentContainer>
    <CompoentContainer title="Square Image" isVariation>
      <Image src="https://via.placeholder.com/800x300?text=Rectangle+Image" alt="A placeholder image" shape="square" />
    </CompoentContainer>
  </CompoentContainer>
);

export default ImageDemo;
