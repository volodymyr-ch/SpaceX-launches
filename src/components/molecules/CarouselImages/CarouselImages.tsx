import React from 'react';
import { CarouselImage } from 'components';
import styled from 'styled-components';

export type CarouselImagesProps = {
  images: string[];
  currentImageIndex: number;
};

export const CarouselImages: React.FC<CarouselImagesProps> = ({
  images,
  currentImageIndex,
}) => (
  <div aria-label="carousel-images">
    {images.map((imageUrl, index) => {
      const isActive = index === currentImageIndex;

      return (
        <StyledImageWrapper
          key={imageUrl}
          aria-label={`${imageUrl}-url`}
          isActive={isActive}
        >
          {isActive ? <CarouselImage imageUrl={imageUrl} /> : null}
        </StyledImageWrapper>
      );
    })}
  </div>
);

const activeImageWrapperStyles = `
  opacity: 1;
  transition-duration: 1.8s;
  transform: scale(1.03);
  min-height: 200px;
`;

const defaultImageWrapperStyles = `
  opacity: 0;
  transition-duration: 1s ease;
`;

const StyledImageWrapper = styled.div<{ isActive: boolean }>`
  ${({ isActive }) => {
    if (isActive) {
      return activeImageWrapperStyles;
    }

    return defaultImageWrapperStyles;
  }}
`;
