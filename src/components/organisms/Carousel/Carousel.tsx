import React from 'react';
import styled from 'styled-components';

import { CarouselBtn } from 'components';
import { DirectionsType } from 'components/atoms/CarouselBtn';

export type CarouselProps = {
  currentImageIndex: number;
  images: string[];
  onClick(index: number): void;
};

export const Carousel: React.FC<CarouselProps> = ({
  currentImageIndex = 0,
  images,
  onClick,
}) => {
  const directionsClickEvent: {
    [key in DirectionsType]: () => void;
  } = {
    [DirectionsType.NEXT]: () => {
      const newIndex = currentImageIndex === images.length - 1 ? 0 : currentImageIndex + 1;

      return onClick(newIndex);
    },
    [DirectionsType.PREV]: () => {
      const newIndex = currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1;

      return onClick(newIndex);
    },
  };

  const onButtonClick = (direction: DirectionsType) => {
    directionsClickEvent[direction]();
  };

  return (
    <Wrapper aria-label="carousel">
      <StyledPrevBtn>
        <CarouselBtn direction={DirectionsType.PREV} onClick={onButtonClick} />
      </StyledPrevBtn>
      <StyledNextBtn>
        <CarouselBtn direction={DirectionsType.NEXT} onClick={onButtonClick} />
      </StyledNextBtn>
      {images.length
        && images.map(
          (image, index) =>
            index === currentImageIndex && (
              <StyledImage key={image} src={image} alt="test-url" />
            ),
        )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  max-height: 100vh;
  overflow: hidden;
`;

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StyledNextBtn = styled.div`
  position: absolute;
  right: 24px;
  cursor: pointer;
`;

const StyledPrevBtn = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
`;
