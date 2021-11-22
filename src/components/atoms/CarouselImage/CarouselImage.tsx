import React from 'react';
import styled from 'styled-components';

export type CarouselImageProps = {
  imageUrl: string;
};

export const CarouselImage: React.FC<CarouselImageProps> = ({ imageUrl }) => (
  <StyledImage
    src={imageUrl}
    alt="carousel-image"
    aria-label={`carousel-image-${imageUrl}`}
  />
);

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
