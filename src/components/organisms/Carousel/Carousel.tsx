import React from 'react';
import styled from 'styled-components';

import { CarouselBtn, CarouselImages } from 'components';
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

  if (!images.length) {
    return <span>Oops... There aren`t any images of the launch.</span>;
  }

  return (
    <Wrapper aria-label="carousel-wrapper">
      <StyledPrevBtn>
        <CarouselBtn direction={DirectionsType.PREV} onClick={onButtonClick} />
      </StyledPrevBtn>
      <StyledNextBtn>
        <CarouselBtn direction={DirectionsType.NEXT} onClick={onButtonClick} />
      </StyledNextBtn>
      <StyledCarouselDots>
        <StyledList>
          {images.map((url, index) => (
            <StyledCarouselDot
              key={`dot-${url}`}
              isActive={currentImageIndex === index}
              onClick={() => onClick(index)}
            >
              o
            </StyledCarouselDot>
          ))}
        </StyledList>
      </StyledCarouselDots>
      <CarouselImages images={images} currentImageIndex={currentImageIndex} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1000px;
  max-height: 100vh;
  overflow: hidden;
  margin: auto;
`;

const StyledNextBtn = styled.div`
  position: absolute;
  right: 24px;
  cursor: pointer;
  z-index: 3;
`;

const StyledPrevBtn = styled.div`
  position: absolute;
  left: 24px;
  cursor: pointer;
  z-index: 3;
`;

const StyledCarouselDots = styled.div`
  position: absolute;
  width: 100%;
  bottom: 20px;
  z-index: 3;
`;

const StyledList = styled.ul`
  display: flex;
  justify-content: center;
  list-style: none;
  padding: 0;
`;

const StyledCarouselDot = styled.li<{ isActive: boolean }>`
  width: 10px;
  height: 10px;
  background-color: #fff;
  color: transparent;
  margin: 0 6px;
  border: 1px solid white;
  border-radius: 50%;
  cursor: pointer;
  user-select: none;
  ${({ isActive }) => (isActive ? 'background-color: transparent;' : null)}
  &:hover {
    background-color: transparent;
  }
`;
